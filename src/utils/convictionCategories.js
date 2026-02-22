// Catégories de condamnations avec détection automatique par mots-clés
export const CONVICTION_CATEGORIES = {
  corruptionFraude: {
    id: 'corruptionFraude',
    label: 'Corruption et fraude financière',
    color: '#dc2626', // red-600
    keywords: [
      'corruption', 'fraude fiscale', 'blanchiment', 'détournement de fonds',
      'trafic d\'influence', 'abus de biens sociaux', 'fraude', 'recel',
      'pots-de-vin', 'financement occulte'
    ]
  },
  emploisFictifs: {
    id: 'emploisFictifs',
    label: 'Emplois fictifs et financement illégal',
    color: '#ea580c', // orange-600
    keywords: [
      'emplois fictifs', 'emploi fictif', 'financement illégal',
      'financement de campagne', 'dépassement', 'plafond', 'bygmalion',
      'assistants parlementaires', 'assistant parlementaire'
    ]
  },
  violencesSexuelles: {
    id: 'violencesSexuelles',
    label: 'Violences sexuelles',
    color: '#7c3aed', // violet-600
    keywords: [
      'viol', 'viols', 'agression sexuelle', 'agressions sexuelles',
      'harcèlement sexuel', 'atteinte sexuelle', 'administration de substance nuisible'
    ]
  },
  violencesPhysiques: {
    id: 'violencesPhysiques',
    label: 'Violences physiques',
    color: '#c026d3', // fuchsia-600
    keywords: [
      'violences conjugales', 'violences volontaires', 'violences sur',
      'violence physique', 'coups', 'agression physique',
      'violences en réunion'
    ]
  },
  racisme: {
    id: 'racisme',
    label: 'Racisme et discrimination',
    color: '#b45309', // amber-700
    keywords: [
      'haine raciale', 'discrimination raciale', 'injure raciale',
      'injures racistes', 'provocation à la discrimination',
      'raciste', 'racistes', 'racisme', 'noirs et arabes', 'islamiser',
      'invasion', 'immigrés', 'colonisateurs'
    ]
  },
  antisemitisme: {
    id: 'antisemitisme',
    label: 'Antisémitisme',
    color: '#92400e', // amber-900
    keywords: [
      'antisémite', 'antisémitisme', 'haine antisémite',
      'négation', 'crimes contre l\'humanité', 'shoah', 'holocauste'
    ]
  },
  diffamation: {
    id: 'diffamation',
    label: 'Diffamation et injures',
    color: '#ca8a04', // yellow-600
    keywords: [
      'diffamation', 'injure publique', 'provocation à la haine religieuse',
      'calomnie'
    ]
  },
  atteintesJustice: {
    id: 'atteintesJustice',
    label: 'Atteintes à la justice',
    color: '#4338ca', // indigo-700
    keywords: [
      'intimidation', 'magistrat', 'outrage', 'rébellion',
      'procédure abusive', 'autorité publique'
    ]
  },
  autres: {
    id: 'autres',
    label: 'Autres infractions',
    color: '#64748b', // slate-500
    keywords: [
      'harcèlement moral', 'usage de stupéfiants', 'conduite en état d\'ivresse',
      'favoritisme', 'prise illégale d\'intérêts', 'non-déclaration',
      'patrimoine', 'HATVP', 'négligence', 'falsification'
    ]
  }
};

/**
 * Catégorise une condamnation en fonction de sa description
 * @param {Object} incident - L'incident de justice
 * @returns {string[]} - Liste des IDs de catégories correspondantes
 */
export function categorizeConviction(incident) {
  if (incident.type !== 'Condamnation') return [];

  const description = (incident.description || '').toLowerCase();
  const charges = (incident.charges || []).join(' ').toLowerCase();
  const fullText = `${description} ${charges}`;

  const categories = [];

  // Vérifier chaque catégorie
  Object.values(CONVICTION_CATEGORIES).forEach(category => {
    const hasMatch = category.keywords.some(keyword => {
      const keywordLower = keyword.toLowerCase();
      // Utiliser une regex avec word boundaries des deux côtés pour éviter les faux positifs
      // Ex: "viol" ne doit pas matcher "violences"
      const escapedKeyword = keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i');
      return regex.test(fullText);
    });

    if (hasMatch) {
      categories.push(category.id);
    }
  });

  // Si aucune catégorie trouvée, mettre dans "autres"
  if (categories.length === 0) {
    categories.push('autres');
  }

  return categories;
}

/**
 * Compte le nombre de condamnations par catégorie pour un parti
 * @param {Object[]} politicians - Liste de politiciens
 * @param {string} partyId - ID du parti
 * @param {string[]} selectedCategories - Catégories sélectionnées
 * @returns {number} - Nombre de condamnations
 */
export function countConvictionsByCategory(politicians, partyId, selectedCategories) {
  const partyPoliticians = politicians.filter(p => p.party === partyId);

  let count = 0;
  partyPoliticians.forEach(politician => {
    const incidents = politician.details?.justiceIncidents || [];
    incidents.forEach(incident => {
      if (incident.type === 'Condamnation') {
        const categories = categorizeConviction(incident);
        // Vérifier si au moins une catégorie de l'incident correspond aux catégories sélectionnées
        const hasMatchingCategory = categories.some(cat => selectedCategories.includes(cat));
        if (hasMatchingCategory) {
          count++;
        }
      }
    });
  });

  return count;
}

/**
 * Récupère toutes les condamnations avec leurs catégories
 * @param {Object[]} politicians - Liste de tous les politiciens
 * @returns {Object[]} - Liste des condamnations enrichies
 */
export function getAllConvictions(politicians) {
  const convictions = [];

  politicians.forEach(politician => {
    const incidents = politician.details?.justiceIncidents || [];
    incidents.forEach(incident => {
      if (incident.type === 'Condamnation') {
        const categories = categorizeConviction(incident);
        convictions.push({
          politician,
          incident,
          categories
        });
      }
    });
  });

  return convictions;
}
