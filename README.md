# French Politics Tracker

Plateforme de suivi des affaires judiciaires et condamnations des hommes politiques français.

## Fonctionnalités

- 🔍 Recherche par nom de politicien
- 📊 Statistiques visuelles (histogrammes, camemberts)
- 🗳️ Filtrage par parti politique (LFI, PS, RN, LR, etc.)
- 💼 Fiches détaillées avec photo, carrière, affaires en cours
- 📈 Dashboard avec visualisations des données

## Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **API:** Axios (pour intégrations futures)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le serveur est accessible à `http://localhost:5173`

## Build

```bash
npm run build
```

## Structure du projet

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── PartyStats.jsx
│   ├── PoliticianCard.jsx
│   └── PoliticiansList.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Prochaines étapes

- [ ] Intégration API pour données réelles
- [ ] Base de données avec détails complets
- [ ] Système de filtres avancés
- [ ] Export de rapports
- [ ] Notifications pour nouvelles affaires

## Licence

Privé - Tradim
