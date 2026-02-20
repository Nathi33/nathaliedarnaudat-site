# Site vitrine – Nathalie Darnaudat  
Télésecrétaire et assistante administrative indépendante - secteur médico-social

## 🧾 Présentation du projet

Ce projet est le **site vitrine officiel** de l’activité de Nathalie Darnaudat, spécialisée en télésecrétariat et assistance administrative pour les professionnels de santé et paramédicaux.

Il a été conçu pour :
- présenter clairement les services de télésecrétariat et de gestion administrative,
- rassurer les visiteurs sur le professionnalisme et la confidentialité,
- faciliter la prise de contact,
- assurer une visibilité optimale sur les moteurs de recherche.

Le site est destiné à une **utilisation professionnelle et à une mise en production réelle**.

---

## 🎯 Objectifs du site

- Présenter les services et domaines d’intervention (accueil téléphonique, prise de messages, filtrage des urgences, organisation administrative, gestion des plannings)
- Valoriser l’expérience et le professionnalisme
- Simplifier la prise de contact pour les professionnels de santé
- Offrir une navigation fluide et intuitive
- Assurer un bon référencement naturel

---

## 🛠️ Technologies utilisées

- **Framework** : Next.js (App Router)
- **Langage** : JavaScript / React
- **UI** : Bootstrap 5
- **Animations** : AOS (Animate On Scroll)
- **Styles** : CSS global personnalisé
- **Icônes** : Bootstrap Icons
- **SEO** :
  - Metadata native Next.js
  - Open Graph
  - Données structurées (JSON-LD – Organization)
- **Images** :
  - Next/Image
  - Format WebP
  - Optimisation des performances

---

## 🗂️ Structure du projet

Le projet est structuré selon les bonnes pratiques de **Next.js (App Router)** afin de garantir lisibilité, maintenabilité et évolutivité.

```txt
├── app/
│   ├── layout.js            # Layout principal (HTML, Navbar, Footer)
│   ├── page.js              # Page Accueil
│   ├── services/
│   │   └── page.js          # Page Services
│   ├── about/
│   │   └── page.js          # Page À propos
│   ├── tarifs/
│   │   └── page.js          # Page Tarifs
│   ├── contact/
│   │   └── page.js          # Page Contact
│   ├── AOSProvider.js       # Initialisation des animations AOS
│
├── components/
│   ├── Navbar.js            # Barre de navigation
│   ├── Footer.js            # Pied de page
│   ├── ContactForm.js       # Formulaire de contact
│   └── BootstrapJSLoader.js # Chargement du JS Bootstrap côté client
│
├── public/
│   └── images/
│       ├── Logo.webp        # Logo principal
│       └── og-image.webp    # Image Open Graph
│
├── styles/
│   └── globals.css          # Styles globaux personnalisés
│
├── .env.local               # Variables d’environnement (EmailJS, etc.)
├── package.json
└── README.md
```


## ✨ Fonctionnalités principales

- Site multi-pages (Accueil, Services, À propos, Tarifs, Contact)
- Navigation responsive (desktop, tablette, mobile)
- Menu mobile avec burger
- Animations discrètes au scroll
- Contenu structuré et lisible
- Liens internes clairs vers services et tarifs

---

## 🔍 SEO & Accessibilité

- Titres et descriptions personnalisés par page
- URLs lisibles et cohérentes
- Images optimisées avec attributs `alt`
- Icônes décoratives masquées pour les lecteurs d’écran (`aria-hidden="true"`)
- Hiérarchie de titres respectée

---

## ⚡ Performance & bonnes pratiques

- Optimisation automatique du code par Next.js
- Chargement prioritaire de l’image principale
- Import du JavaScript Bootstrap côté client uniquement
- Code structuré et maintenable

---

## 🚀 Installation et lancement en local

Pour tester ou développer le site sur votre machine locale :

```bash
# Cloner le dépôt Git (si applicable)
git clone https://github.com/Nathi33/nathaliedarnaudat-site.git
cd nathaliedarnaudat-site

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera accessible à l'adresse :
http://localhost:3000

# Pour créer une version de production optimisée
npm run build
npm start
```
---

## 📌 Statut du projet

- Site finalisé et en ligne : [https://www.nathaliedarnaudat.fr](https://www.nathaliedarnaudat.fr)  
- Contenu et fonctionnalités adaptés à l’activité de télésecrétariat et assistance administrative pour professionnels de santé 
- Optimisé SEO et accessible
- Évolutif selon les besoins futurs de l’activité

---

## 👩‍💻 Activité

Site officiel de
**Nathalie Darnaudat – Télésecrétaire et assistante administrative indépendante (secteur médico-social)**

🌐 https://www.nathaliedarnaudat.fr
🔗 LinkedIn : https://www.linkedin.com/company/nathalie-darnaudat-assistante-administrative