import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import { prisma } from "@/server/prisma";

//* Objectif : configurer les options pour NextAuth
export const authOptions: NextAuthOptions = {

	//============================ key = adapter ============================
	//adapter permet dire au NextAuth: comment lire et enregistrer les utilisateurs, comptes et sessions dans la base de donnees.
	adapter: PrismaAdapter(prisma),

	//============================ key = providers ============================
	//providers: liste des methodes de connexion 
	providers: [
		//----- Email + Password -----
		//credentials = identifier avec email et mot de passe
		CredentialsProvider({
			name: "credentials", //façon de se connecter
			credentials: {		//champ necessaire du form
				//! a verifier bonbon (label)
				email: { label: "Email", type: "email" }, //label = texte affiche pour le champ
				password: { label: "Password", type: "password" },
			},
			//verifier puis retourner les info d'user si c'est correcte
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) //.? ==> si cette valeur est null ou undefined
					return null;

				//cherche dans la base de donnes un user avec cet email
				const user = await prisma.user.findUnique({ where: { email: credentials.email }, });
				if (!user || !user.password)
					return null;

				//verrifier le mode passe
				const isValid = await bcrypt.compare(credentials.password, user.password);
				if (!isValid)
					return null;

				return {
					id: user.id,
					email: user.email,
					name: user.name,
					image: user.image,//profil de user
				};
			},
		}),

		//----- Google OAuth -----
		//condition ? value1 : value2
		//console.log(...(1 > 2 ? ['hello'] : ['world'])); ==> world
		//... => permet de prendre le premier element de tableau
		//process est l'objet du programme Node.js.
		//GoogleProvider => pour la configiuration de connexion avec google
		...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET//lire env, 
			? [
				GoogleProvider({
					clientId: process.env.GOOGLE_CLIENT_ID,
					clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				}),
			]
			: []),//=> vide

		//----- GitHub OAuth -----
		...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET
			? [
				GitHubProvider({
					clientId: process.env.GITHUB_CLIENT_ID,
					clientSecret: process.env.GITHUB_CLIENT_SECRET,
				}),
			]
			: []),

		//----- 42 School OAuth -----
		// Google(...) et GitHub(...) sont probablement des providers deja integres par la lib d’authentification
		// 42 est configure manuellement comme un provider OAuth personnalise
		...(process.env.FORTYTWO_CLIENT_ID && process.env.FORTYTWO_CLIENT_SECRET
			? [
				{
					//identifiant interne
					id: "42-school",
					//nom affiché à l’utilisateur
					name: "42",
					//type de connexion
					type: "oauth" as const,
					clientId: process.env.FORTYTWO_CLIENT_ID,
					clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
					authorization: {
						//la page de connexion et d’autorisation de 42
						url: "https://api.intra.42.fr/oauth/authorize",
						//les permissions demandées
						params: { scope: "public" },
					},
					//l’URL pour obtenir le jeton d’accès
					token: "https://api.intra.42.fr/oauth/token",
					//l’URL pour récupérer les informations utilisateur
					userinfo: "https://api.intra.42.fr/v2/me",
					//transformer les données 42
					profile(profile: { id: number; login: string; email: string; image: { link: string } }) {
						return {
							id: String(profile.id),
							name: profile.login,
							email: profile.email,
							image: profile.image?.link,
						};
					},
				},
			]
			: []),
	],

	//============================ key = session ============================
	//session = comment le systeme memorise qu’un utilisateur est deja connecte
	//methods choisie: jwt
	session: {
		strategy: "jwt",
	},

	//============================ key = callbacks ============================
	callbacks: {
		//pour ajouter token dans le jwt
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		//pour ajouter id dans session.user
		async session({ session, token }) {
			if (session.user) {
				//! a verifier type de id
				//{ id?: string } = un objet(session.user) qui peut avoir id, et si elle existe, elle doit etre string
				(session.user as { id?: string }).id = token.id as string;
			}
			return session;
		},
	},

	//============================ key = pages ============================
	// personnalise les pages utilisees par NextAuth
	pages: {
		//! a verifier avec bonbon
		signIn: "/login",	//page de connexion
		error: "/error",	//page d’erreur
	},

	//============================ key = secret ============================
	//On donne a NextAuth une cle secrete pour securiser l’authentification（comme un mot de passe pour un utilisateur de nextauth）
	//c’est une chaine longue et aleatoire utilisee comme cle secrete
	secret: process.env.NEXTAUTH_SECRET,
};
