# Mutation Impact Analyzer

## Qu'est-ce que c'est ?

L'**Mutation Impact Analyzer** est une application web qui aide les utilisateurs à comprendre comment une modification (mutation) d'une protéine peut affecter sa structure et sa fonction.

Au lieu de lire des articles scientifiques complexes, les utilisateurs peuvent obtenir rapidement des **explications claires, visuelles et basées sur l'IA**.

## En bref :

> Un assistant intelligent qui montre et explique comment de minuscules modifications des protéines peuvent affecter la vie au niveau moléculaire.

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Comment ça marche ?

L'application utilise :

* Les données de structure des protéines de la base de données AlphaFold
* Des modèles d'IA (dont de grands modèles de langage)
* Des règles scientifiques simples sur le comportement des protéines

Elle combine tous ces éléments pour **analyser et expliquer automatiquement les mutations**.

##  Que peuvent faire les utilisateurs ?

### 1. Analyser une mutation

* Saisir une protéine (ex. : nom d'un gène)
* Saisir une mutation (ex. : une petite modification de la protéine)

L'application explique l'effet potentiel de cette modification.

### 2. Visualiser la protéine en 3D

* Modèle 3D interactif utilisant des outils comme Mol*
* Visualiser précisément **l'emplacement de la mutation**
* Comparer protéine normale et protéine mutée

### 3. Obtenir une explication simple

L'IA traduit des concepts biologiques complexes en :

* résumés clairs
* évaluation de l'impact ("probablement nocif")

Les utilisateurs peuvent choisir différents niveaux :
* débutant
* étudiant
* expert

### 4. Organiser son travail en projets

* Enregistrer les analyses
* Regrouper les mutations en projets ("étude sur le cancer")
* Consulter l'historique des résultats

### 5. Explorer les données

* Voir modèles de mutations
* Comparer plusieurs mutations
* Identifier les plus importantes

##  À qui s'adresse cet outil ?

* Étudiants en biologie
* Chercheurs étudiant les mutations
* Toute personne curieuse de comprendre le fonctionnement des protéines

## Pourquoi est-il utile ?

Les protéines sont essentielles à la vie, et de petites modifications peuvent avoir des conséquences importantes (comme le déclenchement de maladies).

Cet outil aide les utilisateurs à :

* **visualiser** ces modifications
* **comprendre** leur impact
* **prendre des décisions plus rapides et éclairées**

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Comment atteindre 14 points ou plus ?

### Web : 7 pts

Full-stack framework : 2 pts
Public API : 2 pts
Advanced search : 1 pts
File upload and management system : 1 pts
ORM for the database : 1 pts

### Accessibility and Internationalization : 3 - 5 pts

Multi-language support : 1 pts
RTL support : 1 pts
Cross-browser support : 1 pts
Full accessibility (WCAG 2.1 AA) : 2 pts ⚠️ maybe HARD

### User Management : 9 pts

Standard user management and authentication : 2 pts
OAuth (Google / GitHub) : 1 pts
Organization system --> Project workspace system : 2 pts
Advanced permissions system : 2pts
2FA (Two-Factor Authentication) : 1 pts
User analytics dashboard : 1 pts

### Artificial Intelligence : 4 pts

LLM Interface pour explication des mutations : 2 pts
RAG System pour fournir un contexte au LLM : 2 pts

### Cybersecurity : 0 - 2 pts

Implement WAF/ModSecurity (hardened) + HashiCorp Vault for secrets : 2 pts ⚠️ maybe OVERKILL

### Gaming and user experience : 3 pts

Advanced 3D graphics --> 3D visualization of proteins with Mol* (https://molstar.org/) : 2 pts
A gamification system to reward users for their actions : 1 pts

### Devops : 0 pts ❌

No ideas

### Data and Analytics : 4 pts

Advanced analytics dashboard (number of mutations analyzed,  most studied proteins, mutations per projec) : 2 pts
Data export & import : 1 pts
GDPR compliance : 1 pts

### Blockchain : 0 pts ❌

no ideas

### Modules of choice : 0 pts

????????

# 30 pts !!!!

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Comment mener le projet ?

### Suggestion de répartition des tâches (4 membres)

Membre 1 — Frontend / UX : Interface utilisateur React ou Svelte, formulaires, recherche, téléchargement de fichiers, accessibilité, prise en charge des langues, gamification de l'interface utilisateur

Membre 2 — Backend / API : API Django/Flask/Node, authentification, permissions, gestion de projets/espaces de travail, RGPD, gestion des fichiers

Membre 3 — IA / Traitement des données : Interface LLM, intégration RAG, synthèse intelligente, logique de score de mutation

Membre 4 — Visualisation et analyse : Visualiseur de protéines 3D Mol*, mise en évidence des mutations, tableaux de bord analytiques, graphiques, fonctionnalités d'exportation, support DevOps de base (contrôles d'intégrité, sauvegardes)


### Suggestion de répartition des tâches (5 membres)

Membre 1 — Frontend / UX : Interface utilisateur pour toutes les fonctionnalités, gamification, accessibilité, prise en charge des langues

Membre 2 — Backend / API : API principale, authentification, permissions, gestion de projets/espaces de travail, gestion de fichiers, RGPD

Membre 3 — IA / Traitement des données : Interface LLM, système RAG, notation, synthèse

Membre 4 — Visualisation 3D : Intégration Mol*, mise en évidence des mutations, boutons interactifs

Membre 5 — Analyse / Sécurité : Tableaux de bord, graphiques, export/import, contrôles d'intégrité, sauvegardes, validation des entrées, Docker/CI/CD (optionnel)

### Suggestion workflow

#### Définir les API en premier
Gestion des utilisateurs, projets, données de mutation
Soumission et récupération de requêtes IA
Téléchargement/téléversement de fichiers
Analyse/exportation

#### Développer le frontend en parallèle
Utiliser des API de test si le backend n'est pas prêt
Intégrer Mol* rapidement avec des données statiques
Implémenter des badges de gamification et des indicateurs de progression

#### Intégrer l'IA
Commencer par une API LLM/GPT locale
Ajouter la récupération RAG pour le contexte
Fournir un point de terminaison au frontend

#### Analyse et tableaux de bord
Récupérer les données du backend
Afficher les graphiques et les statistiques
Activer l'exportation au format CSV/PDF

#### Sécurité et DevOps
Validation des entrées, limitation du débit
Points de terminaison de santé, sauvegardes


### Suggestion calendrier suggéré

Semaine 1 Planification de l'architecture, répartition des tâches, définition des contrats API

Semaines 2-3 Échafaudage du backend + base de données, gestion des utilisateurs, projets

Semaines 2-3 Échafaudage du frontend, pages de base, espace réservé Mol*

Semaine 4 Téléchargement de fichiers, recherche, prise en charge multilingue

Semaines 4-5 Intégration de l'IA, requêtes LLM, système RAG

Semaines 5-6 Tableaux de bord analytiques, export/import, gamification

Semaines 6-7 Intégration de la visualisation 3D, mise en évidence des mutations, boutons d'activation/désactivation

Semaines 7-8 Sécurité, validation des entrées, DevOps mineur, configuration Docker

Semaines 8-9 Tests, correction de bugs, optimisation des performances

Semaine 10 Finalisation, README, justifications des modules, préparation de la démo