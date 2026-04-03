# HerStory Arena — Proposition de projet (stratégie 21+ points)

*Projet de proposition fondé sur le sujet ft_transcendence v20.0.*

## 1. Présentation générale du projet

**HerStory Arena** est une application web multi-utilisateur dont le noyau thématique repose sur l’histoire des femmes, la mémoire collective, l’interaction communautaire et le jeu en ligne.  
La plateforme s’organise autour de quatre couches cohérentes entre elles.

1. **Couche d’archive HerStory**  
   Un système d’archives chronologiques de type « ce jour-là », destiné à mettre en valeur des réalisations féminines, des événements historiques et des moments marquants.

2. **Couche communautaire**  
   Les utilisateurs inscrits peuvent publier des entrées portant sur leurs propres accomplissements, sur ceux de personnes de leur entourage, ou encore sur des figures féminines publiques qui méritent d’être rendues visibles, dans le respect des règles de la plateforme et du dispositif de modération.

3. **Couche d’interaction sociale**  
   Les utilisateurs peuvent créer un profil personnel, ajouter des amis, échanger des messages, recevoir des notifications et interagir à partir des contenus historiques et des publications de la communauté.

4. **Couche ludique**  
   Un jeu de cartes à collectionner, en ligne et en temps réel, centré sur des figures féminines, des accomplissements et des domaines d’action liés à l’histoire des femmes.  
   Les utilisateurs peuvent collectionner des cartes, construire des decks, défier leurs amis, participer à des compétitions et suivre leur progression grâce à un système de statistiques et à des mécanismes de gamification.  
   À ce stade, la conception de ce jeu n’est pas encore entièrement arrêtée.

## 2. Vision du produit

Ce produit articule **visibilité historique, reconnaissance communautaire et jeu stratégique**.

La couche d’archive donne au projet son identité éditoriale.  
La couche communautaire introduit la participation réelle des utilisateurs ainsi que la production de contenus générés par la communauté.  
Le système de jeu apporte une dimension compétitive, une forte rejouabilité, ainsi qu’un point d’entrée vers plusieurs modules majeurs à 2 points du sujet.  
Le tournoi, les systèmes de progression et les notifications peuvent ensuite prolonger ce jeu et l’élargir en un véritable écosystème.

## 3. MVP et progression par phases

### Première phase — Fondations obligatoires
- frontend + backend + base de données
- inscription et connexion sécurisées
- déploiement avec Docker
- HTTPS
- Privacy Policy
- Terms of Service
- interface responsive compatible avec la dernière version stable de Chrome
- absence d’erreurs dans la console du navigateur

### Deuxième phase — Cœur du produit
- profil utilisateur
- upload d’avatar
- système d’amis
- chat de base
- système d’archives « ce jour-là »
- publications communautaires centrées sur les accomplissements
- commentaires ou messages
- notifications
- un jeu de cartes à deux joueurs, en temps réel, complet et fonctionnel
- stockage des données de match
- historique des parties
- page de classement

### Troisième phase — Extension au-delà de 21 points
- système de tournoi
- personnalisation du jeu
- système de gamification
- multilinguisme
- OAuth
- recherche avancée
- système de gestion des fichiers
- compatibilité avec des navigateurs supplémentaires ou spectator mode

## 4. Proposition d’architecture technique

### 4.1 Architecture de haut niveau

```text
[Navigateur / Frontend]
        |
        | HTTPS + WebSocket
        v
[Reverse Proxy / TLS]
        |
        v
[Application Backend]
   |         |          |           |
   |         |          |           |
   v         v          v           v
[Auth]  [Content/API] [Chat/Notif] [Game Gateway]
   |         |          |           |
   +---------+----------+-----------+
                     |
                     v
              [PostgreSQL DB]
                     |
                     v
             [Couche de stockage des fichiers]
```

### 4.2 Stack technique recommandée

#### Frontend
- **Next.js** ou **React**
- Tailwind CSS
- validation des formulaires
- client WebSocket
- structuration des textes pensée dès le départ pour l’i18n

#### Backend
Proposition recommandée :
- **NestJS**
- API REST + passerelle WebSocket
- architecture modulaire
- validation via DTO et guards d’autorisation

#### Base de données
- **PostgreSQL**
- **Prisma** ou **TypeORM**

#### Stockage
- stockage local des avatars et médias dans une première version
- validation stricte et contrôle des permissions

#### Déploiement
- Docker Compose
- reverse proxy + HTTPS
- lancement via une commande unique

## 5. Découpage des domaines métier dans le code

Le backend peut être structuré autour des domaines fonctionnels suivants :

- `auth`
- `users`
- `friendships`
- `messages`
- `presence`
- `notifications`
- `archive`
- `community-posts`
- `comments`
- `cards`
- `decks`
- `matches`
- `tournaments`
- `gamification`
- `search`
- `uploads`
- `admin-moderation`

Une telle organisation permet de faire correspondre clairement l’implémentation concrète avec les modules revendiqués dans le sujet.

## 6. Proposition de modèle de données

### 6.1 Entités principales

#### users
- id
- email
- password_hash
- display_name
- avatar_url
- bio
- role
- preferred_language
- created_at
- updated_at

#### friendships
- id
- requester_id
- addressee_id
- status
- created_at

#### messages
- id
- sender_id
- receiver_id
- content
- created_at
- read_at

#### historical_entries
- id
- title
- date_month
- date_day
- summary
- content
- category
- source_reference
- image_url
- created_by
- created_at

#### community_posts
- id
- author_id
- title
- content
- visibility
- created_at
- updated_at

#### comments
- id
- post_id
- author_id
- content
- created_at

#### notifications
- id
- user_id
- type
- payload_json
- is_read
- created_at

#### cards
- id
- name
- type
- rarity
- cost
- attack_value
- defense_value
- effect_definition
- historical_entry_id

#### user_cards
- id
- user_id
- card_id
- quantity

#### decks
- id
- user_id
- name
- created_at

#### deck_cards
- id
- deck_id
- card_id
- quantity

#### matches
- id
- player_one_id
- player_two_id
- winner_id
- started_at
- ended_at
- status

#### match_events
- id
- match_id
- turn_number
- event_type
- payload_json
- created_at

#### tournaments
- id
- name
- status
- created_by
- created_at

#### tournament_participants
- id
- tournament_id
- user_id
- registered_at

#### tournament_matches
- id
- tournament_id
- round_number
- match_id
- created_at

#### achievements
- id
- user_id
- type
- label
- description
- created_at

#### user_xp
- id
- user_id
- xp
- level
- updated_at

## 7. Stratégie de temps réel et de concurrence

### 7.1 Usage concurrent à l’échelle de la plateforme
Plusieurs utilisateurs peuvent simultanément :
- parcourir les archives
- publier des posts
- commenter
- ajouter des amis
- envoyer des messages
- recevoir des notifications
- créer ou rejoindre des matchs

### 7.2 Capacités temps réel pour le jeu et la présence
- maintien de la présence en ligne grâce à des sessions WebSocket
- synchronisation en temps réel des matchs
- envoi en direct des invitations à jouer
- prise en charge de la reconnexion
- synchronisation de l’état des compétitions si le module tournament est implémenté

### 7.3 Stratégie d’intégrité des données
- l’état du jeu est contrôlé de manière autoritative par le serveur
- traitement des tours
- toutes les actions critiques sont validées côté backend
- cohérence relationnelle assurée par les contraintes de base de données
- les actions de match sont enregistrées comme événements validés

Les comportements concurrents doivent être gérés correctement, sans corruption de données ni race condition.

## 8. Base de sécurité et cadre légal

Même sans revendiquer un module spécialisé de cybersécurité, la plateforme doit reposer sur une base de sécurité solide.

### Authentification
- mots de passe hachés avec sel
- session sécurisée ou token sécurisé
- routes protégées
- vérification des permissions côté backend

### Validation des entrées
- validation côté frontend
- validation côté backend
- validation stricte des fichiers uploadés
- restrictions sur les types MIME, les formats et la taille

### Gouvernance des contenus
- règles de modération
- mécanismes de signalement et de suppression
- clarification des responsabilités de la plateforme dans les pages légales

### Pages légales
L’application doit fournir :
- Privacy Policy
- Terms of Service

Ces pages doivent être visibles, pertinentes et ne pas se limiter à des contenus de remplissage.

## 9. Matrice des modules recommandés

### Modules de base à réaliser en priorité

#### 1. Web — Major  
**Utiliser un framework pour le frontend et le backend**  
**Valeur : 2**

Implémentation :
- frontend en Next.js ou React
- backend en NestJS

#### 2. Web — Major  
**Fonctionnalités temps réel basées sur WebSockets ou sur une technologie équivalente**  
**Valeur : 2**

Implémentation :
- synchronisation du jeu
- statut en ligne
- défis en temps réel
- actualisation des notifications

#### 3. Web — Major  
**Permettre l’interaction entre utilisateurs**  
**Valeur : 2**

Exigences minimales du sujet :
- basic chat
- profile system
- friends system

Implémentation :
- messagerie privée
- profil public
- ajout et suppression d’amis
- affichage du statut en ligne

#### 4. User Management — Major  
**Gestion standard des utilisateurs et authentification**  
**Valeur : 2**

Implémentation :
- profil modifiable
- upload d’avatar
- système d’amis
- page de profil
- intégration du statut en ligne

#### 5. Gaming and user experience — Major  
**Implémenter un jeu web complet où les utilisateurs peuvent jouer les uns contre les autres**  
**Valeur : 2**

Implémentation :
- un jeu de cartes à deux joueurs
- conditions de victoire et de défaite clairement définies
- parties en temps réel
- résultats persistants

#### 6. Gaming and user experience — Major  
**Remote players**  
**Valeur : 2**

Implémentation :
- deux machines différentes
- une même partie en temps réel
- gestion des déconnexions
- prise en charge de la reconnexion

#### 7. Web — Minor  
**Utiliser un ORM pour la base de données**  
**Valeur : 1**

Implémentation :
- Prisma ou TypeORM
- schéma piloté par migrations
- couche d’accès typée

#### 8. User Management — Minor  
**Statistiques de jeu et historique des matchs**  
**Valeur : 1**

Dépendance :
- il faut au préalable disposer d’au moins un jeu

Implémentation :
- statistiques de victoires et défaites
- liste des matchs
- classement
- résumé de progression

### Sous-total de base = 14 points

### Modules d’extension pour atteindre 21 points

#### 9. Web — Minor  
**Système complet de notifications couvrant les actions de création, de mise à jour et de suppression**  
**Valeur : 1**

Implémentation :
- validation d’une demande d’ami
- nouveau commentaire
- invitation à une partie
- mise à jour d’un tournoi
- notification d’interaction sur un post

#### 10. Gaming and user experience — Minor  
**Système de tournoi**  
**Valeur : 1**

Dépendance :
- nécessite l’existence d’un jeu

Implémentation :
- inscription
- génération du bracket
- ordre des affrontements
- suivi de progression

#### 11. Gaming and user experience — Minor  
**Options de personnalisation du jeu**  
**Valeur : 1**

Implémentation :
- deck archetype
- dos de cartes ou plateaux thématiques
- variantes de règles optionnelles
- présence permanente d’options par défaut

#### 12. Gaming and user experience — Minor  
**Système de gamification**  
**Valeur : 1**

Implémentation :  
au moins trois éléments parmi :
- achievements
- badges
- leaderboard
- XP / level system
- rewards

#### 13. Accessibility and Internationalization — Minor  
**Support d’au moins trois langues**  
**Valeur : 1**

Implémentation :
- anglais
- français
- chinois
- tous les textes du frontend placés dans des ressources traduisibles
- sélecteur de langue

#### 14. User Management — Minor  
**Authentification distante via OAuth 2.0**  
**Valeur : 1**

Implémentation :
- OAuth 42 ou Google OAuth

#### 15. Web — Minor  
**Recherche avancée avec filtres, tri et pagination**  
**Valeur : 1**

Implémentation :
- recherche dans les entrées historiques
- recherche dans les posts communautaires
- filtres par catégorie
- tri par date
- pagination des résultats

### Sous-total d’extension = 7 points

1 + 1 + 1 + 1 + 1 + 1 + 1 = **7**

### Total = 21 points

Base 14 + extension 7 = **21 points**

## 10. Ordre d’implémentation recommandé

### Première étape — Fondations obligatoires
- initialisation du dépôt
- Docker
- schéma de base de données
- authentification
- squelette frontend
- HTTPS
- pages légales

### Deuxième étape — Base à 14 points
- profile
- friends
- chat
- realtime presence
- jeu de cartes complet
- remote play
- ORM
- historique et statistiques

À ce stade, vous disposez déjà d’une trajectoire de validation solide.

### Troisième étape — Progression vers 21 points
- notifications
- tournament
- customization
- gamification
- multilingual
- OAuth
- advanced search

### Quatrième étape — Modules supplémentaires éventuels
Par exemple :
- spectator mode
- système de fichiers plus complet
- compatibilité avec davantage de navigateurs
- analytics plus complexes
- second jeu

## 11. Modules de remplacement à prévoir

### Option de remplacement A — Web Minor  
**Système d’upload et de gestion des fichiers**  
**Valeur : 1**

Implémentation possible :
- upload de médias pour les posts communautaires ou les entrées historiques
- prévisualisation
- suppression
- contrôle des permissions

### Option de remplacement B — Accessibility and Internationalization Minor  
**Support de navigateurs supplémentaires**  
**Valeur : 1**

Implémentation possible :
- Chrome + Firefox + Safari ou Edge
- documentation de test
- corrections ciblées

### Option de remplacement C — Gaming and user experience Minor  
**Spectator mode**  
**Valeur : 1**

Implémentation possible :
- observation de matchs en temps réel
- flux d’état en lecture seule

### Option de remplacement D — Web Minor  
**PWA**  
**Valeur : 1**

Implémentation possible :
- possibilité d’installation
- shell mis en cache
- fallback hors ligne pour les pages d’archives statiques

Cette réserve stratégique est importante, car elle permet de remplacer un module fragile sans devoir repenser toute l’architecture du projet.

## 12. Proposition de répartition de l’équipe pour un projet à 21 points

### Exemple pour une équipe de 4 personnes

#### Membre 1 — Product Owner + Developer
- périmètre du produit
- structure du contenu historique
- pages légales
- fonctionnalités de recherche
- structuration des textes multilingues

#### Membre 2 — Project Manager + Developer
- gestion des issues
- coordination et communication
- amis, chat, notifications
- workflow de modération

#### Membre 3 — Technical Lead + Developer
- architecture backend
- authentification
- ORM / base de données
- rôles et permissions
- review d’intégration et de déploiement

#### Membre 4 — Developer
- interface frontend
- responsive layout
- interface du jeu
- interface des tournois et de la gamification

### En cas d’équipe à 5 personnes
Une personne supplémentaire peut prendre en charge :
- le moteur du jeu
- la synchronisation WebSocket
- la logique des matchs
- le mécanisme de reconnexion

## 13. Tableau récapitulatif des points

| # | Module | Type | Valeur |
|---|---|---:|---:|
| 1 | Frameworks frontend + backend | Major | 2 |
| 2 | Fonctionnalités temps réel | Major | 2 |
| 3 | Interaction utilisateur : chat + profile + friends | Major | 2 |
| 4 | Gestion standard des utilisateurs et authentification | Major | 2 |
| 5 | Jeu web complet | Major | 2 |
| 6 | Remote players | Major | 2 |
| 7 | ORM | Minor | 1 |
| 8 | Statistiques et historique des matchs | Minor | 1 |
| 9 | Système de notifications | Minor | 1 |
| 10 | Système de tournoi | Minor | 1 |
| 11 | Personnalisation du jeu | Minor | 1 |
| 12 | Système de gamification | Minor | 1 |
| 13 | Support multilingue | Minor | 1 |
| 14 | OAuth 2.0 | Minor | 1 |
| 15 | Recherche avancée | Minor | 1 |

**Total = 21 points**

## 21. Tableau des modules de réserve

| Module de réserve | Type | Valeur |
|---|---:|---:|
| Système d’upload et de gestion des fichiers | Minor | 1 |
| Support de navigateurs supplémentaires | Minor | 1 |
| Spectator mode | Minor | 1 |
| PWA | Minor | 1 |

Ces modules de réserve peuvent être mobilisés comme solutions de remplacement si l’un des modules à 1 point se révèle instable.
