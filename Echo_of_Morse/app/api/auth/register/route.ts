// NextRequest = la requête http apres next
// NextResponse = la réponse http apres next
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/server/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {

	//1. obtenir les donnes
    const { name, email, password } = await req.json();

	//2. verifie si email ou password est manquant
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }
	if (!name) {
      return NextResponse.json({ error: "Name required" }, { status: 400 });
    }

	//3. le mot de passe contient moins de 8 caractères
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
    }

	//4. cherche dans la table user s’il existe déjà un utilisateur avec le même email, sinon existing = null
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }

	//! a verifier avec liyuan
	//5. on crée un nouvel utilisateur dans la base de données et proteger aevc hased
	const hashed = await bcrypt.hash(password, 12);
	const user = await prisma.user.create({data: { name: name, email: email, password: hashed,},});

    return NextResponse.json({ id: user.id, email: user.email, name: user.name }, { status: 201 });
  } 
  catch (e) 
  {
	// affiche l’erreur dans la console du serveur
    console.error(e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
