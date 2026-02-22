# French Politics Tracker - Project Memory

## Project Scope
- Site référençant les politiciens français : députés, sénateurs, députés européens français (actuels), membres de gouvernements (passés/présents), candidats à la présidentielle ou aux législatives
- Objectif : tous les référencer au fur et à mesure
- **818 politiciens** dans la base, **102 avec incidents judiciaires** (au 22/02/2026)
- **Députés européens français** : 81/81 complétés ✓ (législature 2024-2029)

## Architecture
- React + Vite, données dans `src/data/frenchPolitics.js` (fichier JS ~450KB, 818 politiciens)
- Pas de BDD, tout en mémoire dans un module JS
- Routing: `/` (accueil), `/politician/:id`, `/party/:id`, `/classement`, `/condamnations`, `/mentions-legales`
- Composants clés : `PartyStats.jsx` (3 histogrammes), `PartyCard.jsx`, `SearchBar.jsx`, `SeverityStamp.jsx`, `Classement.jsx`, `Condamnations.jsx`
- **Tailwind CSS v4** : `source(none)` dans index.css + `@source` explicites pour éviter le scan de `src/data/` (crash Invalid code point sur le gros fichier de données)

## Data Structure
- Politicians: `{ id, name, party, position, convictions, ongoingCases, details: { birthDate, birthPlace, career[], justiceIncidents[] } }`
- Incident types valides: `'Condamnation'`, `'Condamnation (première instance)'`, `'Mise en examen'`, `'Enquête'`, `'Relaxe'`, `'Non-lieu'`, `'Classement'`, `'Prescription'`
- Parties: `{ id, name, leader, color, ideology, founded, members, seats }`
- Incident structure: `{ type, date, description, charges?[], penalty?, status, sources[{ title, url }] }`
- **RÈGLE CRITIQUE : Chaque incident de justice DOIT avoir au moins 1 source vérifiable**

## Compteurs (CRITIQUE - règles strictes)
- `convictions` : compte UNIQUEMENT les `type === 'Condamnation'` (définitives)
- `ongoingCases` : compte UNIQUEMENT `'Mise en examen'` + `'Enquête'`
- `Condamnation (première instance)` ne compte dans AUCUN compteur (présomption d'innocence, appel possible)
- `Relaxe`, `Non-lieu`, `Classement`, `Prescription` ne comptent dans aucun compteur
- Toujours vérifier la cohérence compteurs vs incidents réels après modification

## Homepage Structure
- Header avec stats + liens "Voir le classement complet" et "Condamnations par catégorie"
- SearchBar → filtre partagé (checkboxes) → 3 histogrammes (PartyStats) → grille des partis
- Filtre unique pour les histogrammes, seul "Condamnations" coché par défaut
- Histogramme 1 : nombre absolu d'incidents par parti (trié par condamnations desc)
- Histogramme 2 : ratio % (barres empilées avec couleurs par catégorie + "Sans incident" en vert)
- Histogramme 3 : score de sévérité moyen par parti (basé sur les condamnations définitives)

## Score de sévérité
- Basé sur les peines prononcées par les juges (impartial, factuel)
- Formule : `(mois_prison_ferme × 10) + (mois_sursis × 3) + (mois_inéligibilité × 5) + (log₁₀(amende) × 2)`
- Seules les `type === 'Condamnation'` sont scorées (pas première instance)
- Amendes avec sursis comptent quand même (condamnation = condamnation)
- Parser regex dans `src/utils/penaltyParser.js`, score dans `src/utils/severityScore.js`
- Composant `SeverityGauge.jsx` (barre verte→rouge, détail dépliable par condamnation)
- Score par parti : `computePartySeverity()` = total / nb personnalités référencées (moyenne)
- Affiché dans `PartyCard.jsx` (mini jauge), `PartyDetail.jsx` (tuile stats), `PartyStats.jsx` (3e histogramme)
- Tri dans PartyDetail par score de sévérité + ongoingCases × 10
- 96.6% de taux de parsing (56/58 condamnations, 2 sans peine documentée)
- Top: Balkany 1093, Sarkozy 912, Fillon 839, Tron 432

## Page Classement (`/classement`)
- Liste tous les politiciens avec score de sévérité > 0, triés du plus haut au plus bas
- Lazy loading : 30 par lot via IntersectionObserver
- Affiche : rang, avatar, nom (lien), position, parti (couleur), SeverityStamp
- Composant : `src/components/Classement.jsx`
- Lien d'accès depuis la HomePage (sous les tuiles stats)

## Page Condamnations (`/condamnations`)
- Analyse thématique des condamnations définitives
- **9 catégories** : Corruption et fraude financière, Emplois fictifs et financement illégal, Violences sexuelles, Violences physiques, Racisme et discrimination, Antisémitisme, Diffamation et injures, Atteintes à la justice, Autres infractions
- Filtres par catégorie (checkboxes, possibilité de tout décocher)
- Tableau des stats par parti (nombre de condamnations par catégories filtrées)
- Liste des condamnations avec lazy loading (30 par page), badges de catégories colorés
- Catégorisation automatique via mots-clés dans `src/utils/convictionCategories.js`
- **IMPORTANT** : Utilise regex avec word boundaries (`\b...\b`) pour éviter faux positifs (ex: "viol" ne doit pas matcher "violences")
- Composant : `src/components/Condamnations.jsx`

## Key Decisions
- Reconquête est un parti dans la base (Zemmour, Knafo). Bay et Collard → NI (exclus/partis 2024)
- Les acquittements/relaxes/non-lieux sont documentés dans justiceIncidents mais ne comptent pas
- On ne documente QUE les affaires visant directement la personne (ex: Schiappa pas d'incident car pas personnellement visée par l'enquête Fonds Marianne)
- **Pas de personnes décédées** dans la base (Chirac, JMLP, Pasqua, Tapie, etc. retirés)
- Pas de labels de jugement (plus de "Fiable", "Préoccupant", etc.)

## Vérifications effectuées

### Session 09/02/2026
- Vérification complète des 76 politiciens avec incidents → ~40 erreurs corrigées
- Vérification des ~650 politiciens SANS incidents → ~25 manquants ajoutés
- Script de cohérence : vérifie compteurs vs incidents + types valides (verify.cjs)
- Résultat : "All data is consistent!" (741 politiciens, 96 avec incidents)

### Session 22/02/2026 - Nettoyage massif + ajout députés européens
- **Vérification des sources** : 17 incidents sans sources identifiés et traités
  - 9 incidents RETIRÉS (faux/non vérifiables) : Santini (relaxé), É.Philippe (témoin assisté), Pécresse (enquête classée), Copé (non-lieu), Rossinot, Perben, Lellouche, Briois, Collard
  - 6 incidents CORRIGÉS avec sources + peines exactes : Griset, Simian, Avia, Léotard, Houssin, Guerriau
  - 2 incidents avec sources ajoutées : Dubost, Bay
- **Refresh Reconquête** : Zemmour 6e condamnation (INED), Stéphane Ravier ajouté (2 condamnations)
- **Députés européens français** : 81/81 complétés (76 ajoutés en 5 lots)
- **Page Condamnations** : nouvelle page d'analyse thématique créée avec catégorisation automatique
- **Bug fix catégorisation** : correction du matching par mots-clés (word boundaries pour éviter "viol" → "violences")
- Résultat : "All data is consistent!" (818 politiciens, 102 avec incidents)

## Erreurs fréquentes à éviter
- Ne PAS compter `Condamnation (première instance)` dans convictions
- Ne PAS utiliser de types inventés (ex: 'Condamnation (appel)', 'Enquête (Mise en examen pour injure)', 'Mise en examen/Classement')
- Toujours vérifier si une "condamnation" en première instance a été confirmée en appel/cassation
- **Ne PAS confondre les homonymes** : Christophe Bay (préfet, eurodéputé 2024, 0 incident) ≠ Nicolas Bay (condamné affaire assistants)
- **Distinguer relaxe vs condamnation** : André Santini RELAXÉ en appel 2015 (ne doit PAS être dans les condamnés)
- **Témoin assisté ≠ mise en examen** : Édouard Philippe témoin assisté CJR (ne doit PAS compter comme mis en examen)
- **Vérifier l'issue des enquêtes** : Valérie Pécresse enquête classée sans suite (ne doit PAS compter comme mise en examen)
- Gollnisch : condamné 2007, RELAXÉ en appel 2009, confirmé cassation 2010 → type 'Relaxe'
- Fillon : condamné définitivement (cassation rejeté avril 2024) → type 'Condamnation'
- Marine Le Pen : photos Daech = RELAXÉE (pas condamnée !), vraie condamnation = diffamation Cimade (500€ sursis, cassation dec 2025)
- François Léotard : condamnation 2004 = affaire Fondo/blanchiment Parti républicain (PAS frégates de Taïwan)

## Refresh parti (tâche récurrente)
- L'utilisateur peut demander un "refresh" d'un parti = vérifier membres manquants + incidents à jour
- Étapes : audit DB actuelle → recherche web → vérifier entrées disputées → corriger/ajouter → verify.cjs → commit
- Attention : toujours cross-checker les noms (ex: Bruno Bilde ≠ Dominique Bilde)
- Vérifier qui a fait appel vs pas d'appel pour les condamnations en première instance
- Affaire assistants FN : 25 condamnés (9 eurodéputés + 15 collaborateurs/staff + le parti RN)
- 13 ont fait appel dont Le Pen, Aliot, Bay, Gollnisch, Le Rachinel, Odoul, Houssin, Griset, Saint-Just

## Députés européens français (complet 81/81)
- Législature 2024-2029 complète dans la base (ajout 22/02/2026)
- Répartition : RN 30, Renaissance 13, PS/Place Publique 13, LFI 9, EELV 5, LR 5, La France fière 4, Reconquête 1, NI 1
- Incidents documentés : Griset, Sanchez, Leggeri, Mariani, Maréchal, Peltier, Hassan, Bay (Christophe), Werbrouck
- **Marion Maréchal, Guillaume Peltier, Laurence Trochu** : party 'ni' (exclus Reconquête juin 2024, groupe ECR)
- **Malika Sorel** : party 'ni' (a quitté délégation RN avril 2025)

## Working Strategy
- Travailler de manière incrémentale (contrainte tokens Pro)
- Ajouter les politiciens par lots progressifs
- Toujours commit + push à chaque étape
- Utiliser des agents parallèles pour les gros lots d'ajouts/vérifications
- Script de vérification `verify.cjs` à exécuter après chaque modification importante
