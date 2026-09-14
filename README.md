

# **README — MinistryFlow**  
### *Plateforme moderne de gestion d’église, ministères et opérations pastorales*

---

<div align="center">
  <img src="logo-ministryflow.png" alt="MinistryFlow Logo" width="180" />
</div>

---

## Présentation du projet

**MinistryFlow** est une plateforme moderne conçue pour aider les églises à gérer leurs opérations administratives, ministérielles et communautaires.  
Elle centralise les informations, automatise les processus, facilite la communication et offre une vue d’ensemble claire de la vie de l’église.

MinistryFlow fait partie de l’écosystème technologique d’**API Business Technology**.

---

## Objectifs du système

MinistryFlow permet de :

- Gérer les membres et familles  
- Organiser les ministères et équipes  
- Planifier les événements et cultes  
- Suivre les présences et statistiques  
- Gérer les finances (dîmes, offrandes, dépenses)  
- Communiquer efficacement (SMS, email, notifications)  
- Centraliser documents, prédications et archives  
- Offrir un tableau de bord moderne et intuitif  

---

## Fonctionnalités principales

### Gestion des membres
- Fiches membres complètes  
- Familles et relations  
- Nouveaux convertis  
- Suivi pastoral  

### Gestion des ministères
- Chorale  
- Protocole  
- Intercession  
- Évangélisation  
- Jeunesse  
- Enfants  
- Femmes / Hommes  
- Groupes de maison  

### Gestion des événements
- Cultes  
- Réunions  
- Conférences  
- Retraites  
- Répétitions  
- Calendrier centralisé  

### Présences & statistiques
- Présence aux cultes  
- Présence aux ministères  
- Taux de participation  
- Croissance mensuelle  
- Rapports PDF  

### Finances
- Dîmes  
- Offrandes  
- Dépenses  
- Rapports financiers  
- Historique complet  

### Communication
- SMS  
- Email  
- Notifications internes  
- Messages ciblés  

### Documents & archives
- Prédications  
- Programmes  
- Rapports  
- Fichiers internes  

---

## Architecture globale

```
MinistryFlow
│
├── Frontend (React / Next.js)
│   ├── Tableau de bord
│   ├── Membres
│   ├── Ministères
│   ├── Événements
│   ├── Finances
│   └── Communication
│
├── Desktop App (Electron)
│   ├── Version locale
│   ├── Accès fichiers
│   └── Notifications natives
│
├── Backend (Node.js / Express)
│   ├── API REST
│   ├── Gestion des membres
│   ├── Gestion des ministères
│   ├── Finances
│   ├── Événements
│   └── Sécurité & Authentification
│
├── Base de données (PostgreSQL)
│   ├── Membres
│   ├── Ministères
│   ├── Événements
│   ├── Finances
│   └── Documents
│
└── DevOps
    ├── GitLab CI/CD
    ├── Tests automatisés
    ├── SonarQube
    ├── Stryker
    ├── Monitoring
    └── Infrastructure sécurisée
```

---

## Technologies utilisées

### Frontend
- React  
- Next.js  
- TailwindCSS  

### Desktop
- Electron  

### Backend
- Node.js  
- Express  
- TypeScript  

### Base de données
- PostgreSQL  

### DevOps
- GitLab CI/CD  
- SonarQube  
- Stryker  
- Docker  
- Azure  

---

## Installation & Déploiement

### Backend
```bash
npm install
npm run build
npm start
```

### Frontend
```bash
npm install
npm run dev
```

### Desktop (Electron)
```bash
npm install
npm run electron
```

### Déploiement
- Pipeline GitLab CI/CD  
- Environnements : dev → staging → production  
- Déploiement sécurisé via Azure  

---

## Documentation API (aperçu)

### Membres
- `GET /members`  
- `POST /members/add`  
- `GET /members/:id`  

### Ministères
- `GET /ministries`  
- `POST /ministries/add`  

### Événements
- `GET /events`  
- `POST /events/create`  

### Finances
- `GET /finance/records`  
- `POST /finance/add`  

### Communication
- `POST /notifications/send`  

---

## Roadmap

### 2026
- Version web complète  
- Version desktop Electron  
- Gestion finances v1  
- Communication v1  

### 2027
- IA prédictive (croissance, participation)  
- Automatisation des communications  
- Rapports intelligents  

### 2028
- Version entreprise  
- Multi‑églises  
- Intégration cloud complète  

---

## Licence

Ce projet est **UNLICENSED**.  
Aucune permission n’est accordée pour utiliser, copier, modifier ou distribuer ce logiciel sans autorisation explicite du propriétaire.

Tous droits réservés.  
© API Business Technology – Projet MinistryFlow

---

## Contact

**Fondateur & CEO : Pierre Richard Saint Louis**  
API Business Technology  
Ottawa, Ontario, Canada

--- 
- **Badges CI/CD**  

