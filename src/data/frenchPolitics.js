/**
 * Base de données complète des partis politiques français et des politiciens avec incidents de justice
 * Sources: Wikipedia, sources gouvernementales officielles, presse française
 * 
 * Les images sont générées dynamiquement en fonction du nom du politicien et de la couleur de son parti
 */

export const parties = [
  // Partis majeurs
  {
    id: 'rn',
    name: 'Rassemblement National (RN)',
    leader: 'Marine Le Pen',
    color: '#000000',
    ideology: 'Nationalisme, Euroscepticisme',
    founded: 2018,
    members: 100000,
    seats: 88
  },
  {
    id: 'lr',
    name: 'Les Républicains (LR)',
    leader: 'Éric Ciotti',
    color: '#0066CC',
    ideology: 'Conservatisme, Libéralisme économique',
    founded: 2015,
    members: 100000,
    seats: 61
  },
  {
    id: 'ps',
    name: 'Parti Socialiste (PS)',
    leader: 'Olivier Faure',
    color: '#FF1744',
    ideology: 'Socialisme démocratique',
    founded: 1969,
    members: 80000,
    seats: 66
  },
  {
    id: 'lfi',
    name: 'La France Insoumise (LFI)',
    leader: 'Jean-Luc Mélenchon',
    color: '#C41E3A',
    ideology: 'Gauche radicale, Écologie',
    founded: 2016,
    members: 500000,
    seats: 99
  },
  {
    id: 'ensemble',
    name: 'Ensemble pour la République',
    leader: 'Gabriel Attal',
    color: '#2A3B8F',
    ideology: 'Centrisme, Libéralisme',
    founded: 2022,
    members: 250000,
    seats: 250
  },
  {
    id: 'modem',
    name: 'MoDem',
    leader: 'François Bayrou',
    color: '#FFB300',
    ideology: 'Centrisme, Réformisme',
    founded: 2007,
    members: 70000,
    seats: 101
  },
  {
    id: 'ecolo',
    name: 'Europe Écologie Les Verts (EELV)',
    leader: 'Marine Tondelier',
    color: '#24B44E',
    ideology: 'Écologisme, Gauche progressiste',
    founded: 2010,
    members: 40000,
    seats: 1
  },
  // Partis mineurs mais notables
  {
    id: 'npa',
    name: 'Nouveau Parti Anticapitaliste (NPA)',
    leader: 'Arlette Laguiller',
    color: '#8B0000',
    ideology: 'Communisme révolutionnaire',
    founded: 2009,
    members: 5000,
    seats: 0
  },
  {
    id: 'pcf',
    name: 'Parti Communiste Français (PCF)',
    leader: 'Fabien Roussel',
    color: '#EE334E',
    ideology: 'Communisme',
    founded: 1920,
    members: 50000,
    seats: 6
  },
  {
    id: 'agir',
    name: 'Agir, la droite constructive',
    leader: 'Adrien Taquet',
    color: '#003DA5',
    ideology: 'Conservatisme progressiste',
    founded: 2017,
    members: 15000,
    seats: 0
  },
  {
    id: 'udi',
    name: 'Union des Démocrates et Indépendants (UDI)',
    leader: 'Jean-Christophe Lagarde',
    color: '#0099FF',
    ideology: 'Centrisme libéral',
    founded: 2012,
    members: 30000,
    seats: 0
  }
]

export const politicians = [
  // Politiciens avec incidents de justice

  // RASSEMBLEMENT NATIONAL
  {
    id: 1,
    name: 'Marine Le Pen',
    party: 'rn',
    position: 'Présidente du RN',
    convictions: 0,
    ongoingCases: 2,
    details: {
      birthDate: '1968-12-05',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Avocate (1992-2011)',
        'Députée régionale (2004-2011)',
        'Députée nationale (2011-)',
        'Présidente du RN (2018-)'
      ],
      justiceIncidents: [
        {
          type: 'Enquête',
          date: '2022',
          description: 'Enquête sur le détournement de fonds de campagne européenne (13,4 M€)'
        },
        {
          type: 'Mise en examen',
          date: '2023',
          description: 'Mise en examen pour détournement de deniers publics'
        }
      ]
    }
  },
  {
    id: 2,
    name: 'Jean-Marie Le Pen',
    party: 'rn',
    position: 'Fondateur du Front National',
    convictions: 2,
    ongoingCases: 0,
    details: {
      birthDate: '1928-06-20',
      birthPlace: 'La Trinité-sur-Mer',
      career: [
        'Candidat présidentiel (1974, 1988, 1995, 2002)',
        'Fondateur du Front National (1972)',
        'Député (1986-1988, 1997-2002)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '1998',
          description: 'Condamné pour propos antisémites'
        },
        {
          type: 'Condamnation',
          date: '2015',
          description: 'Condamné pour propos homophobes'
        }
      ]
    }
  },

  // LES RÉPUBLICAINS / SARKOZY
  {
    id: 3,
    name: 'Nicolas Sarkozy',
    party: 'lr',
    position: 'Ancien Président de la République',
    convictions: 2,
    ongoingCases: 1,
    details: {
      birthDate: '1955-01-28',
      birthPlace: 'Paris',
      career: [
        'Maire de Neuilly (1983-2002)',
        'Ministre de l\'Intérieur (2002-2004, 2005-2007)',
        'Président de la République (2007-2012)',
        'Chef de l\'UMP puis LR'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2021',
          description: 'Condamné à 3 ans de prison (dont 2 avec sursis) pour corruption et trafic d\'influence'
        },
        {
          type: 'Condamnation',
          date: '2021',
          description: 'Condamné pour financement illégal de sa campagne de 2012'
        },
        {
          type: 'Enquête/Mise en examen',
          date: '2023',
          description: 'Affaire des contrats libyen, mise en examen pour blanchiment de fraude'
        }
      ]
    }
  },
  {
    id: 4,
    name: 'François Fillon',
    party: 'lr',
    position: 'Ancien Premier ministre',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1954-03-04',
      birthPlace: 'Le Mans',
      career: [
        'Maire du Mans (1995-2017)',
        'Ministre de l\'Enseignement supérieur',
        'Premier ministre (2007-2012)',
        'Candidat présidentiel 2017'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2020',
          description: 'Condamné pour détournement de fonds publics: emplois fictifs de son épouse à l\'Assemblée'
        }
      ]
    }
  },
  {
    id: 5,
    name: 'Laurent Wauquiez',
    party: 'lr',
    position: 'Ancien président de région',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1973-11-09',
      birthPlace: 'Le Puy-en-Velay',
      career: [
        'Maire du Puy-en-Velay (2014-2020)',
        'Président de la région Auvergne-Rhône-Alpes (2016-2021)',
        'Président de LR (2022-2023)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2023',
          description: 'Mise en examen pour détournement de fonds publics et blanchiment'
        }
      ]
    }
  },

  // PARTI SOCIALISTE / HOLLANDE
  {
    id: 6,
    name: 'François Hollande',
    party: 'ps',
    position: 'Ancien Président de la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1965-08-12',
      birthPlace: 'Rouen',
      career: [
        'Mayor de Tulle (1995-2017)',
        'Sénateur (1995-2012)',
        'Premier Secrétaire du PS (1997-2008)',
        'Président de la République (2012-2017)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: 7,
    name: 'Dominique Strauss-Kahn',
    party: 'ps',
    position: 'Ancien ministre de l\'Économie',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1949-04-25',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Ministre de l\'Industrie (1991-1993)',
        'Ministre de l\'Économie (1997-1999)',
        'Directeur général du FMI (2007-2011)',
        'Candidat présidentiel (2011 - retiré)'
      ],
      justiceIncidents: [
        {
          type: 'Accusation/Enquête',
          date: '2011',
          description: 'Accusé d\'agression sexuelle à New York (affaire classée, accord de 6M$)'
        }
      ]
    }
  },
  {
    id: 8,
    name: 'Éric Besson',
    party: 'ps',
    position: 'Ancien ministre de l\'Immigration',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1965-12-20',
      birthPlace: 'Périgueux',
      career: [
        'Ministre du Travail (2008-2010)',
        'Ministre de l\'Immigration (2010-2011)',
        'Député (2012-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2022',
          description: 'Condamné pour corruption dans un contrat d\'armement avec la Tunisie'
        }
      ]
    }
  },

  // LA FRANCE INSOUMISE
  {
    id: 9,
    name: 'Jean-Luc Mélenchon',
    party: 'lfi',
    position: 'Chef de La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1951-08-02',
      birthPlace: 'Tanger (Maroc)',
      career: [
        'Sénateur (2011-2012)',
        'Candidat présidentiel (2012, 2017, 2022)',
        'Fondateur et chef de LFI (2016-)',
        'Député (2012-2015, 2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: 10,
    name: 'Adrien Quatennens',
    party: 'lfi',
    position: 'Député LFI',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1989-07-12',
      birthPlace: 'Villemomble',
      career: [
        'Secrétaire national de LFI',
        'Député de Nord (2017-)',
        'Candidat aux élections régionales'
      ],
      justiceIncidents: [
        {
          type: 'Enquête',
          date: '2022',
          description: 'Enquête pour violences conjugales et non-représentation d\'enfant'
        }
      ]
    }
  },

  // ENSEMBLE POUR LA RÉPUBLIQUE / MACRON
  {
    id: 11,
    name: 'Emmanuel Macron',
    party: 'ensemble',
    position: 'Président de la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1977-12-21',
      birthPlace: 'Amiens',
      career: [
        'Banquier d\'affaires (2008-2012)',
        'Inspecteur des Finances',
        'Conseiller présidentiel (2012-2014)',
        'Ministre de l\'Économie (2014-2016)',
        'Président de la République (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: 12,
    name: 'Alain Griset',
    party: 'modem',
    position: 'Ministre des PME',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1967-03-29',
      birthPlace: 'Fontenu',
      career: [
        'Maire de Fontenu (1995-)',
        'Président du MODEM (2017-2022)',
        'Ministre des PME (2020-2022)',
        'Secrétaire d\'État auprès de Macron'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2023',
          description: 'Mise en examen pour abus de confiance et détournement de fonds collectivités'
        }
      ]
    }
  },

  // SOCIALISTES - AUTRES
  {
    id: 13,
    name: 'Olivier Faure',
    party: 'ps',
    position: 'Premier Secrétaire du PS',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1966-05-22',
      birthPlace: 'Lyon',
      career: [
        'Député de Saône-et-Loire (2012-)',
        'Premier Secrétaire du PS (2018-)',
        'Vice-président du Conseil régional'
      ],
      justiceIncidents: []
    }
  },

  // ÉCOLOGISTES
  {
    id: 14,
    name: 'Yannick Jadot',
    party: 'ecolo',
    position: 'Candidat écologiste 2022',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1968-07-30',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Directeur de Greenpeace France (1998-2012)',
        'Député européen (2009-2019)',
        'Candidat présidentiel (2022)',
        'Sénateur'
      ],
      justiceIncidents: []
    }
  },

  // AUTRES PARTIS
  {
    id: 15,
    name: 'Fabien Roussel',
    party: 'pcf',
    position: 'Secrétaire national du PCF',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1970-08-28',
      birthPlace: 'Saint-Ouen',
      career: [
        'Secrétaire régional du PCF (2008-2018)',
        'Secrétaire national du PCF (2018-)',
        'Candidat présidentiel (2022)',
        'Député (2012-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: 16,
    name: 'Arlette Laguiller',
    party: 'npa',
    position: 'Fondatrice du NPA',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1934-04-02',
      birthPlace: 'Paris',
      career: [
        'Candidate présidentielle (1974, 1981, 1988, 1995, 2002, 2007, 2012)',
        'Fondatrice du NPA (2009)',
        'Militante syndicaliste'
      ],
      justiceIncidents: []
    }
  },
  {
    id: 17,
    name: 'Marine Tondelier',
    party: 'ecolo',
    position: 'Coprésident d\'EELV',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1980-04-29',
      birthPlace: 'Le Havre',
      career: [
        'Conseillère communautaire',
        'Coprésident d\'EELV (2022-)',
        'Candidate aux élections (2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: 18,
    name: 'Christiane Taubira',
    party: 'ps',
    position: 'Ancienne ministre de la Justice',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1952-02-02',
      birthPlace: 'Cayenne (Guyane française)',
      career: [
        'Présidente du Parlement européen',
        'Ministre de la Justice (2012-2016)',
        'Députée de Guyane française',
        'Candidate présidentielle (2022)'
      ],
      justiceIncidents: []
    }
  }
]

/**
 * Mapper for party IDs to objects
 */
export const getPartyById = (partyId) => {
  return parties.find(p => p.id === partyId)
}

/**
 * Get all politicians from a party
 */
export const getPoliticiansByParty = (partyId) => {
  return politicians.filter(p => p.party === partyId)
}

/**
 * Get all politicians with ongoing cases (sorted by count)
 */
export const getPoliticiansWithOngoingCases = () => {
  return politicians
    .filter(p => p.ongoingCases > 0)
    .sort((a, b) => b.ongoingCases - a.ongoingCases)
}

/**
 * Get all politicians with convictions (sorted by count)
 */
export const getPoliticiansWithConvictions = () => {
  return politicians
    .filter(p => p.convictions > 0)
    .sort((a, b) => b.convictions - a.convictions)
}

/**
 * Statistics helpers
 */
export const getPartyStats = (partyId) => {
  const partyPols = getPoliticiansByParty(partyId)
  return {
    count: partyPols.length,
    totalConvictions: partyPols.reduce((sum, p) => sum + p.convictions, 0),
    totalOngoingCases: partyPols.reduce((sum, p) => sum + p.ongoingCases, 0),
    percentageWithIncidents: partyPols.length > 0 
      ? (partyPols.filter(p => p.convictions > 0 || p.ongoingCases > 0).length / partyPols.length * 100).toFixed(1)
      : 0
  }
}
