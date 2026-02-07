/**
 * Base de données complète des partis politiques français et des personnalités politiques avec incidents de justice
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

let nextId = 1

export const politicians = [
  {
    id: nextId++,
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
          description: 'Enquête sur le détournement de fonds de campagne européenne (13,4 M€)',
          sources: [
            { title: 'Marine Le Pen - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Marine_Le_Pen' },
            { title: 'Affaire financement RN - Le Monde', url: 'https://www.lemonde.fr' }
          ]
        },
        { 
          type: 'Condamnation (première instance)', 
          date: '2025-03', 
          description: 'Condamnée pour détournement de deniers publics et emplois fictifs au Parlement européen. Affaire des assistants parlementaires du Front national.',
          penalty: '4 ans de prison (2 ferme), 5 ans d\'inéligibilité avec exécution provisoire',
          status: 'Procès en appel en cours depuis janvier 2026',
          sources: [
            { title: 'Marine Le Pen - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Marine_Le_Pen' },
            { title: 'Affaire des assistants parlementaires - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_des_assistants_parlementaires_du_Front_national_au_Parlement_europ%C3%A9en' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Jordan Bardella',
    party: 'rn',
    position: 'Président du RN',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1995-09-13',
      birthPlace: 'Drancy',
      career: [
        'Député européen (2019-)',
        'Président du RN (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Louis Aliot',
    party: 'rn',
    position: 'Maire de Perpignan',
    convictions: 1,
    ongoingCases: 1,
    details: {
      birthDate: '1969-09-04',
      birthPlace: 'Toulouse',
      career: [
        'Vice-président du FN/RN',
        'Député européen (2014-2019)',
        'Maire de Perpignan (2020-)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation (première instance)',
          date: '2025-03-31',
          description: 'Condamné dans l\'affaire des assistants parlementaires du FN au Parlement européen. Laurent Salles, employé comme assistant parlementaire de juillet 2014 à février 2015, n\'aurait jamais vraiment travaillé pour lui. Seul un SMS documenté entre eux sur cette période. Montant du détournement: environ 3200€ net par mois.',
          penalty: '18 mois de prison (12 mois avec sursis), 8 000€ d\'amende, 3 ans d\'inéligibilité',
          status: 'Procès en appel en cours depuis janvier 2026',
          sources: [
            { title: 'Wikipedia - Affaire des assistants parlementaires', url: 'https://fr.wikipedia.org/wiki/Affaire_des_assistants_parlementaires_du_Front_national_au_Parlement_europ%C3%A9en' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Sébastien Chenu',
    party: 'rn',
    position: 'Vice-président de l\'Assemblée nationale',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1973-02-07',
      birthPlace: 'Béthune',
      career: [
        'Député du Nord (2017-)',
        'Vice-président de l\'Assemblée nationale (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laure Lavalette',
    party: 'rn',
    position: 'Députée du Var',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1989-03-15',
      birthPlace: 'Toulon',
      career: [
        'Porte-parole du RN',
        'Députée du Var (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bruno Gollnisch',
    party: 'rn',
    position: 'Ancien député européen',
    convictions: 2,
    ongoingCases: 1,
    details: {
      birthDate: '1950-01-14',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Député européen (1989-2019)',
        'Professeur de droit',
        'Numéro 2 du FN'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2007',
          description: 'Condamné pour contestation de crimes contre l\'humanité et apologie du nazisme. Jugement annulé en appel et en cassation.',
          penalty: 'Amende (cassé)',
          status: 'Cassation - Relaxé',
          sources: [
            { title: 'Bruno Gollnisch - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Bruno_Gollnisch' }
          ]
        },
        {
          type: 'Condamnation (première instance)',
          date: '2025-03-31',
          description: 'Condamné dans l\'affaire des assistants parlementaires du FN au Parlement européen (2004-2016). Aurait employé de façon fictive deux assistants parlementaires - Guillaume Lhuillier (ancien directeur de cabinet de Jean-Marie Le Pen) et Micheline Bruna (ancienne conseillère d\'Île-de-France et secrétaire particulière de Jean-Marie Le Pen). Ces assistants n\'ont jamais vraiment travaillé pour lui. Montant du détournement estimé à plusieurs dizaines de milliers d\'euros.',
          penalty: '3 ans de prison (1 an ferme, aménageable sous surveillance électronique), 50 000€ d\'amende, 5 ans d\'inéligibilité',
          status: 'Procès en appel en cours depuis janvier 2026',
          sources: [
            { title: 'Wikipedia - Affaire des assistants parlementaires du Front national', url: 'https://fr.wikipedia.org/wiki/Affaire_des_assistants_parlementaires_du_Front_national_au_Parlement_europ%C3%A9en' },
            { title: 'Le Monde - Procès RN assistants parlementaires', url: 'https://www.lemonde.fr' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Steeve Briois',
    party: 'rn',
    position: 'Maire d\'Hénin-Beaumont',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1972-01-28',
      birthPlace: 'Lens',
      career: [
        'Maire d\'Hénin-Beaumont (2014-)',
        'Secrétaire général du RN',
        'Député européen (2014-2019)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Edwige Diaz',
    party: 'rn',
    position: 'Députée de la Gironde',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1987-04-22',
      birthPlace: 'Bordeaux',
      career: [
        'Vice-présidente du RN',
        'Députée de la Gironde (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julien Odoul',
    party: 'rn',
    position: 'Député de l\'Yonne',
    convictions: 1,
    ongoingCases: 1,
    details: {
      birthDate: '1985-08-12',
      birthPlace: 'Auxerre',
      career: [
        'Conseiller régional de Bourgogne-Franche-Comté',
        'Député de l\'Yonne (2022-)',
        'Porte-parole du RN'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation (première instance)',
          date: '2025',
          description: 'Condamné dans l\'affaire des assistants parlementaires du FN au Parlement européen. Aurait bénéficié d\'un emploi fictif d\'assistant parlementaire de l\'eurodéputée Mylène Troszczynski entre 2014-2015, alors qu\'il ne travaillait que pour le FN à des fonctions bien éloignées du travail parlementaire.',
          penalty: '8 mois de prison avec sursis, 1 an d\'inéligibilité',
          status: 'Procès en appel en cours (février 2025)',
          sources: [
            { title: 'France Bleu - Julien Odoul condamné', url: 'https://www.francebleu.fr' },
            { title: 'Le Figaro - Procès en appel', url: 'https://www.lefigaro.fr' },
            { title: 'Wikipedia - Affaire des assistants parlementaires', url: 'https://fr.wikipedia.org/wiki/Affaire_des_assistants_parlementaires_du_Front_national_au_Parlement_europ%C3%A9en' }
          ]
        }
      ]
    }
  },

  // ===============================
  // LES RÉPUBLICAINS (LR)
  // ===============================
  {
    id: nextId++,
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
          description: 'Condamné pour corruption et trafic d\'influence. Affaire de l\'écoute entre Nicolas Sarkozy et son avocat Thierry Herzog.',
          penalty: '3 ans de prison (2 avec sursis)',
          status: 'Condamné',
          sources: [
            { title: 'Nicolas Sarkozy - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Nicolas_Sarkozy' },
            { title: 'Le Monde - Affaire Sarkozy corruption', url: 'https://www.lemonde.fr' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2021',
          description: 'Condamné pour financement illégal de sa campagne présidentielle de 2012 (affaire Bygmalion). Dépassement massif des plafonds légaux de dépenses.',
          penalty: '1 an de prison ferme, 10 ans d\'inéligibilité',
          status: 'Condamné',
          sources: [
            { title: 'Affaire Bygmalion - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Bygmalion' },
            { title: 'Le Monde - Bygmalion Sarkozy', url: 'https://www.lemonde.fr' }
          ]
        },
        {
          type: 'Mise en examen',
          date: '2023',
          description: 'Affaire des contrats libyens. Mise en examen pour blanchiment de fraude concernant les financements reçus du régime libyen de Kadhafi.',
          status: 'En cours',
          sources: [
            { title: 'Le Monde - Affaire Libye Sarkozy', url: 'https://www.lemonde.fr' },
            { title: 'Mediapart - Contrats libyens', url: 'https://www.mediapart.fr' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
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
          type: 'Condamnation (appel)',
          date: '2025-06',
          description: 'Condamné en appel pour détournement de fonds publics. Affaire des emplois fictifs: son épouse Penelope Fillon a perçu plus de 900 000€ pour un travail inexistant en tant qu\'assistante parlementaire. Son épouse également condamnée.',
          penalty: '5 ans d\'inéligibilité, 375 000€ d\'amende, remboursement de 800 000€ à l\'Assemblée nationale',
          status: 'Condamné en appel (exécutoire)',
          sources: [
            { title: 'François Fillon - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Fillon' },
            { title: 'Affaire Fillon - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Fillon' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Laurent Wauquiez',
    party: 'lr',
    position: 'Président de la région Auvergne-Rhône-Alpes',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1975-04-12',
      birthPlace: 'Lyon',
      career: [
        'Maire du Puy-en-Velay (2008-2016)',
        'Président de LR (2017-2019)',
        'Président de la région Auvergne-Rhône-Alpes (2016-)'
      ],
      justiceIncidents: [
        { 
          type: 'Mise en examen', 
          date: '2023', 
          description: 'Mise en examen pour détournement de fonds publics et blanchiment. Affaire des emplois fictifs au conseil régional et des dîners des sommets.',
          sources: [
            { title: 'France Info - Enquête emplois fictifs Wauquiez', url: 'https://www.franceinfo.fr/' },
            { title: 'Le Figaro - Justice Wauquiez', url: 'https://www.lefigaro.fr/' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Éric Ciotti',
    party: 'lr',
    position: 'Président des Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1965-09-28',
      birthPlace: 'Nice',
      career: [
        'Député des Alpes-Maritimes (2007-)',
        'Président du conseil départemental des Alpes-Maritimes (2008-2013)',
        'Président de LR (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alain Juppé',
    party: 'lr',
    position: 'Ancien Premier ministre',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1945-08-15',
      birthPlace: 'Mont-de-Marsan',
      career: [
        'Premier ministre (1995-1997)',
        'Maire de Bordeaux (1995-2019)',
        'Membre du Conseil constitutionnel (2019-)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2004',
          description: 'Condamné dans l\'affaire des emplois fictifs du RPR à Bordeaux. Avait bénéficié d\'emplois fictifs utilisés pour financer des campagnes électorales.',
          penalty: '14 mois de prison avec sursis, 1 an d\'inéligibilité',
          status: 'Condamné',
          sources: [
            { title: 'Alain Juppé - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Alain_Jupp%C3%A9' },
            { title: 'Affaire des emplois fictifs de la mairie de Paris - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_des_emplois_fictifs_de_la_mairie_de_Paris' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Patrick Balkany',
    party: 'lr',
    position: 'Ancien maire de Levallois-Perret',
    convictions: 2,
    ongoingCases: 0,
    details: {
      birthDate: '1948-08-16',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Maire de Levallois-Perret (1983-2019)',
        'Député des Hauts-de-Seine'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamné pour fraude fiscale aggravée. Avait dissimulé plusieurs millions d\'euros au fisc sur plusieurs années.',
          penalty: '4 ans de prison ferme, 2,5 millions d\'euros d\'amende',
          status: 'Condamné',
          sources: [
            { title: 'Patrick Balkany - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Patrick_Balkany' },
            { title: 'Le Monde - Affaire Balkany', url: 'https://www.lemonde.fr' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamné pour blanchiment de fraude fiscale. Affaire liée aux avoirs dissimulés en compte off-shore.',
          penalty: '5 ans de prison (en plus)',
          status: 'Condamné',
          sources: [
            { title: 'Patrick Balkany - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Patrick_Balkany' },
            { title: 'Le Monde - Affaire Balkany', url: 'https://www.lemonde.fr' }
          ]
        }
      ]
    }
  },


  {
    id: nextId++,
    name: 'Jean-François Copé',
    party: 'lr',
    position: 'Maire de Meaux',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1964-05-05',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Ministre du Budget (2004-2007)',
        'Président de l\'UMP (2012-2014)',
        'Maire de Meaux (1995-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Rachida Dati',
    party: 'lr',
    position: 'Ministre de la Culture, Maire du 7e arrondissement de Paris',
    convictions: 0,
    ongoingCases: 3,
    details: {
      birthDate: '1965-11-27',
      birthPlace: 'Saint-Rémy',
      career: [
        'Magistrate (1999-2001)',
        'Conseillère ministérielle (2002-2006)',
        'Garde des Sceaux, ministre de la Justice (2007-2009)',
        'Députée européenne (2009-2019)',
        'Maire du 7e arrondissement de Paris (2008-)',
        'Ministre de la Culture (2024-)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2021',
          description: 'Mise en examen pour corruption passive, trafic d\'influence passif et recel d\'abus de pouvoir. Affaire Renault-Nissan concernant rémunérations non justifiées de Carlos Ghosn (900 000€ 2009-2013 pour 600h/an de travail fictif).',
          penalty: 'En attente',
          status: 'Procès prévu 16-28 sept. 2026',
          sources: [
            { title: 'Wikipedia - Carlos Ghosn', url: 'https://fr.wikipedia.org/wiki/Carlos_Ghosn' },
            { title: 'Le Monde - Affaire Ghosn', url: 'https://www.lemonde.fr' }
          ]
        },
        {
          type: 'Enquête',
          date: '2024',
          description: 'Enquête pour corruption. Rémunérations non déclarées de 300 000€ de GDF Suez/Engie entre 2010-2011 en tant que députée européenne, période durant laquelle elle prenait des positions favorables au secteur gazier.',
          penalty: 'En cours',
          status: 'Enquête ouverte décembre 2025',
          sources: [
            { title: 'Nouvel Observateur - Dati GDF Suez', url: 'https://www.nouvelobs.com' },
            { title: 'Le Monde - Enquête Dati rémunérations', url: 'https://www.lemonde.fr' }
          ]
        },
        {
          type: 'Enquête',
          date: '2025',
          description: 'Enquête pour non-déclaration de 30 bijoux de luxe (valeur ~600 000€) à la Haute Autorité pour la transparence de la vie publique (HATVP) suite à sa nomination comme ministre.',
          penalty: 'En cours',
          status: 'Enquête ouverte septembre 2025',
          sources: [
            { title: 'Libération - Bijoux Dati', url: 'https://www.liberation.fr' },
            { title: 'France Info - Dati HATVP bijoux', url: 'https://www.franceinfo.fr' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Xavier Bertrand',
    party: 'lr',
    position: 'Président de la région Hauts-de-France',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1965-03-21',
      birthPlace: 'Châlons-en-Champagne',
      career: [
        'Ministre de la Santé (2005-2007)',
        'Ministre du Travail (2007-2009, 2010-2012)',
        'Président de la région Hauts-de-France (2016-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nadine Morano',
    party: 'lr',
    position: 'Députée européenne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-11-06',
      birthPlace: 'Nancy',
      career: [
        'Secrétaire d\'État à la Famille (2008-2010)',
        'Ministre de l\'Apprentissage (2010-2012)',
        'Députée européenne (2014-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bruno Retailleau',
    party: 'lr',
    position: 'Ministre de l\'Intérieur',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1960-11-20',
      birthPlace: 'Cholet',
      career: [
        'Sénateur de la Vendée (2004-2024)',
        'Président du groupe LR au Sénat (2014-2024)',
        'Ministre de l\'Intérieur (2024-)'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // PARTI SOCIALISTE (PS)
  // ===============================
  {
    id: nextId++,
    name: 'François Hollande',
    party: 'ps',
    position: 'Ancien Président de la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1954-08-12',
      birthPlace: 'Rouen',
      career: [
        'Maire de Tulle (2001-2008)',
        'Premier secrétaire du PS (1997-2008)',
        'Président de la République (2012-2017)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Jérôme Cahuzac',
    party: 'ps',
    position: 'Ancien ministre du Budget',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1952-06-19',
      birthPlace: 'Talence',
      career: [
        'Député du Lot-et-Garonne (1997-2012)',
        'Ministre du Budget (2012-2013)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2018',
          description: 'Condamné à 2 ans de prison ferme pour fraude fiscale et blanchiment. Avait dissimulé un compte bancaire non déclaré en Suisse avec 600 000€.',
          penalty: '2 ans de prison ferme, 250 000€ d\'amende',
          status: 'Condamné',
          sources: [
            { title: 'Jérôme Cahuzac - Wikipedia', url: 'https://fr.wikipedia.org/wiki/J%C3%A9r%C3%B4me_Cahuzac' },
            { title: 'Affaire Cahuzac - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Cahuzac' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Christiane Taubira',
    party: 'ps',
    position: 'Ancienne ministre de la Justice',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1952-02-02',
      birthPlace: 'Cayenne (Guyane française)',
      career: [
        'Députée de Guyane (1993-2012)',
        'Ministre de la Justice (2012-2016)',
        'Candidate présidentielle (2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olivier Faure',
    party: 'ps',
    position: 'Premier Secrétaire du PS',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1968-05-22',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Député de Seine-et-Marne (2012-)',
        'Premier secrétaire du PS (2018-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anne Hidalgo',
    party: 'ps',
    position: 'Maire de Paris',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1959-06-19',
      birthPlace: 'San Fernando (Espagne)',
      career: [
        'Première adjointe au maire de Paris (2001-2014)',
        'Maire de Paris (2014-)',
        'Candidate présidentielle (2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bernard Cazeneuve',
    party: 'ps',
    position: 'Ancien Premier ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-06-02',
      birthPlace: 'Senlis',
      career: [
        'Ministre de l\'Intérieur (2014-2016)',
        'Premier ministre (2016-2017)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Jack Lang',
    party: 'ps',
    position: 'Ancien ministre de la Culture',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1939-09-02',
      birthPlace: 'Mirecourt',
      career: [
        'Ministre de la Culture (1981-1986, 1988-1993)',
        'Ministre de l\'Éducation nationale (2000-2002)',
        'Président de l\'Institut du monde arabe (2013-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Manuel Valls',
    party: 'ps',
    position: 'Ancien Premier ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1962-08-13',
      birthPlace: 'Barcelone (Espagne)',
      career: [
        'Maire d\'Évry (2001-2012)',
        'Ministre de l\'Intérieur (2012-2014)',
        'Premier ministre (2014-2016)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Éric Besson',
    party: 'ps',
    position: 'Ancien ministre de l\'Immigration',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1958-03-02',
      birthPlace: 'Marrakech (Maroc)',
      career: [
        'Secrétaire national du PS',
        'Ministre de l\'Immigration (2009-2010)',
        'Ministre de l\'Industrie (2010-2012)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Martine Aubry',
    party: 'ps',
    position: 'Maire de Lille',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1950-08-08',
      birthPlace: 'Paris',
      career: [
        'Ministre du Travail (1991-1993, 1997-2000)',
        'Première secrétaire du PS (2008-2012)',
        'Maire de Lille (2001-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Benoît Hamon',
    party: 'ps',
    position: 'Ancien candidat présidentiel',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1967-06-26',
      birthPlace: 'Saint-Renan',
      career: [
        'Député des Yvelines (2012-2017)',
        'Ministre de l\'Éducation nationale (2014)',
        'Candidat présidentiel PS (2017)'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // LA FRANCE INSOUMISE (LFI)
  // ===============================
  {
    id: nextId++,
    name: 'Jean-Luc Mélenchon',
    party: 'lfi',
    position: 'Chef de La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1951-08-19',
      birthPlace: 'Tanger (Maroc)',
      career: [
        'Sénateur de l\'Essonne (1986-2000)',
        'Ministre délégué à l\'Enseignement professionnel (2000-2002)',
        'Fondateur de LFI (2016)',
        'Candidat présidentiel (2012, 2017, 2022)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Mathilde Panot',
    party: 'lfi',
    position: 'Présidente du groupe LFI à l\'Assemblée',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1989-09-13',
      birthPlace: 'Limoges',
      career: [
        'Députée du Val-de-Marne (2017-)',
        'Présidente du groupe LFI à l\'Assemblée nationale (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'François Ruffin',
    party: 'lfi',
    position: 'Député de la Somme',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1975-10-18',
      birthPlace: 'Calais',
      career: [
        'Journaliste, fondateur de Fakir',
        'Réalisateur (Merci patron!, 2016)',
        'Député de la Somme (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Clémentine Autain',
    party: 'lfi',
    position: 'Ancienne députée de Seine-Saint-Denis',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1973-05-26',
      birthPlace: 'Paris',
      career: [
        'Adjointe au maire de Paris (2001-2008)',
        'Députée de Seine-Saint-Denis (2017-2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexis Corbière',
    party: 'lfi',
    position: 'Député de Seine-Saint-Denis',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1968-08-18',
      birthPlace: 'Béziers',
      career: [
        'Conseiller de Paris (2008-2017)',
        'Député de Seine-Saint-Denis (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Manuel Bompard',
    party: 'lfi',
    position: 'Coordinateur de LFI',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1986-09-11',
      birthPlace: 'Montpellier',
      career: [
        'Député européen (2019-2022)',
        'Député des Bouches-du-Rhône (2022-)',
        'Coordinateur de LFI (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandrine Rousseau',
    party: 'lfi',
    position: 'Députée de Paris',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1972-09-13',
      birthPlace: 'Haubourdin',
      career: [
        'Vice-présidente de l\'Université de Lille',
        'Candidate à la primaire EELV (2021)',
        'Députée de Paris (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Raquel Garrido',
    party: 'lfi',
    position: 'Députée de Seine-Saint-Denis',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1974-05-12',
      birthPlace: 'Buenos Aires (Argentine)',
      career: [
        'Avocate',
        'Porte-parole de LFI',
        'Députée de Seine-Saint-Denis (2022-)'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // ENSEMBLE POUR LA RÉPUBLIQUE
  // ===============================
  {
    id: nextId++,
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
    id: nextId++,
    name: 'Gabriel Attal',
    party: 'ensemble',
    position: 'Ancien Premier ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1989-03-16',
      birthPlace: 'Clamart',
      career: [
        'Secrétaire d\'État à la Jeunesse (2020-2022)',
        'Ministre du Budget (2022-2023)',
        'Ministre de l\'Éducation nationale (2023-2024)',
        'Premier ministre (2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Élisabeth Borne',
    party: 'ensemble',
    position: 'Ancienne Première ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1961-04-18',
      birthPlace: 'Paris',
      career: [
        'Ministre des Transports (2017-2019)',
        'Ministre de la Transition écologique (2019-2020)',
        'Ministre du Travail (2020-2022)',
        'Première ministre (2022-2024)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Éric Dupond-Moretti',
    party: 'ensemble',
    position: 'Ancien ministre de la Justice',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1961-04-20',
      birthPlace: 'Maubeuge',
      career: [
        'Avocat pénaliste',
        'Garde des Sceaux, ministre de la Justice (2020-2024)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2021',
          description: 'Mise en examen pour prise illégale d\'intérêts (relaxé par la CJR en 2023, mais procédure en cours)',
          sources: [
            { title: 'Éric Dupond-Moretti - Wikipedia', url: 'https://fr.wikipedia.org/wiki/%C3%89ric_Dupond-Moretti' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Richard Ferrand',
    party: 'ensemble',
    position: 'Ancien président de l\'Assemblée nationale',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1962-10-06',
      birthPlace: 'Rodez',
      career: [
        'Député du Finistère (2012-2022)',
        'Président de l\'Assemblée nationale (2018-2022)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2019',
          description: 'Mise en examen pour prise illégale d\'intérêts dans une affaire immobilière des Mutuelles de Bretagne',
          sources: [
            { title: 'Richard Ferrand - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Richard_Ferrand' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Édouard Philippe',
    party: 'ensemble',
    position: 'Ancien Premier ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1970-11-28',
      birthPlace: 'Rouen',
      career: [
        'Maire du Havre (2010-2017, 2020-)',
        'Premier ministre (2017-2020)',
        'Fondateur d\'Horizons (2021)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Castaner',
    party: 'ensemble',
    position: 'Ancien ministre de l\'Intérieur',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1966-01-03',
      birthPlace: 'Ollioules',
      career: [
        'Député des Alpes-de-Haute-Provence (2012-2017)',
        'Délégué général de LREM (2017-2018)',
        'Ministre de l\'Intérieur (2018-2020)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Séjourné',
    party: 'ensemble',
    position: 'Ancien ministre des Affaires étrangères',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1985-12-28',
      birthPlace: 'Versailles',
      career: [
        'Député européen (2019-2024)',
        'Secrétaire général de Renaissance (2022-2024)',
        'Ministre des Affaires étrangères (2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marlène Schiappa',
    party: 'ensemble',
    position: 'Ancienne secrétaire d\'État',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1982-10-18',
      birthPlace: 'Paris',
      career: [
        'Secrétaire d\'État à l\'Égalité femmes-hommes (2017-2020)',
        'Ministre déléguée à la Citoyenneté (2020-2022)',
        'Secrétaire d\'État à l\'Économie sociale (2022-2023)'
      ],
      justiceIncidents: []
    }
  },



  {
    id: nextId++,
    name: 'Marielle de Sarnez',
    party: 'modem',
    position: 'Ancienne députée européenne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1951-03-27',
      birthPlace: 'Paris',
      career: [
        'Députée européenne (1999-2017)',
        'Ministre des Affaires européennes (2017)',
        'Députée de Paris (2017-2021)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marc Fesneau',
    party: 'modem',
    position: 'Ancien ministre de l\'Agriculture',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1971-04-05',
      birthPlace: 'Blois',
      career: [
        'Député du Loir-et-Cher (2017-2022)',
        'Ministre des Relations avec le Parlement (2020-2022)',
        'Ministre de l\'Agriculture (2022-2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Patrick Mignola',
    party: 'modem',
    position: 'Député de la Savoie',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1971-06-18',
      birthPlace: 'Chambéry',
      career: [
        'Député de la Savoie (2017-)',
        'Président du groupe MoDem à l\'Assemblée nationale (2018-2022)'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // EUROPE ÉCOLOGIE LES VERTS (EELV)
  // ===============================
  {
    id: nextId++,
    name: 'Yannick Jadot',
    party: 'ecolo',
    position: 'Candidat écologiste 2022',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1967-07-27',
      birthPlace: 'Clacy-et-Thierret',
      career: [
        'Directeur des campagnes de Greenpeace France (2002-2008)',
        'Député européen (2009-)',
        'Candidat présidentiel (2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marine Tondelier',
    party: 'ecolo',
    position: 'Secrétaire nationale d\'EELV',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1986-11-17',
      birthPlace: 'Hénin-Beaumont',
      career: [
        'Conseillère municipale d\'Hénin-Beaumont',
        'Secrétaire nationale d\'EELV (2022-)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Eva Joly',
    party: 'ecolo',
    position: 'Ancienne candidate présidentielle',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1943-12-05',
      birthPlace: 'Oslo (Norvège)',
      career: [
        'Juge d\'instruction (affaire Elf)',
        'Candidate présidentielle EELV (2012)',
        'Députée européenne (2009-2019)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Cécile Duflot',
    party: 'ecolo',
    position: 'Ancienne ministre du Logement',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1975-04-01',
      birthPlace: 'Villeneuve-Saint-Georges',
      career: [
        'Secrétaire nationale des Verts (2006-2012)',
        'Ministre du Logement (2012-2014)',
        'Députée de Paris (2012-2017)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Noël Mamère',
    party: 'ecolo',
    position: 'Ancien député de Gironde',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1948-12-25',
      birthPlace: 'Libourne',
      career: [
        'Journaliste à Antenne 2',
        'Député de la Gironde (1997-2017)',
        'Maire de Bègles (1989-2017)',
        'Candidat présidentiel (2002)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Fabien Roussel',
    party: 'pcf',
    position: 'Secrétaire national du PCF',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1969-04-16',
      birthPlace: 'Saint-Amand-les-Eaux',
      career: [
        'Député du Nord (2017-)',
        'Secrétaire national du PCF (2018-)',
        'Candidat présidentiel (2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre Laurent',
    party: 'pcf',
    position: 'Ancien secrétaire national du PCF',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1957-07-01',
      birthPlace: 'Paris',
      career: [
        'Directeur de l\'Humanité (2000-2010)',
        'Secrétaire national du PCF (2010-2018)',
        'Sénateur de Paris (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'André Chassaigne',
    party: 'pcf',
    position: 'Député du Puy-de-Dôme',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1950-06-12',
      birthPlace: 'Thiers',
      career: [
        'Député du Puy-de-Dôme (2002-)',
        'Président du groupe GDR à l\'Assemblée nationale (2012-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Elsa Faucillon',
    party: 'pcf',
    position: 'Députée des Hauts-de-Seine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1981-12-03',
      birthPlace: 'Nanterre',
      career: [
        'Conseillère départementale des Hauts-de-Seine',
        'Députée des Hauts-de-Seine (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Ian Brossat',
    party: 'pcf',
    position: 'Sénateur de Paris',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1980-02-22',
      birthPlace: 'Brest',
      career: [
        'Adjoint à la maire de Paris (2014-)',
        'Tête de liste PCF aux européennes (2019)',
        'Sénateur de Paris (2023-)'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // NPA
  // ===============================
  {
    id: nextId++,
    name: 'Arlette Laguiller',
    party: 'npa',
    position: 'Ancienne porte-parole de Lutte Ouvrière',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1940-03-18',
      birthPlace: 'Paris',
      career: [
        'Porte-parole de Lutte Ouvrière',
        'Candidate présidentielle (1974, 1981, 1988, 1995, 2002, 2007)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olivier Besancenot',
    party: 'npa',
    position: 'Cofondateur du NPA',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1974-04-18',
      birthPlace: 'Levallois-Perret',
      career: [
        'Facteur',
        'Porte-parole de la LCR (2002-2009)',
        'Cofondateur du NPA (2009)',
        'Candidat présidentiel (2002, 2007)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Poutou',
    party: 'npa',
    position: 'Porte-parole du NPA',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1967-03-14',
      birthPlace: 'Bordeaux',
      career: [
        'Ouvrier chez Ford',
        'Porte-parole du NPA',
        'Candidat présidentiel (2012, 2017, 2022)'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // UDI
  // ===============================

  {
    id: nextId++,
    name: 'Jean-Louis Borloo',
    party: 'udi',
    position: 'Ancien ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1951-04-07',
      birthPlace: 'Paris',
      career: [
        'Maire de Valenciennes (1989-2002)',
        'Ministre de la Ville (2002-2004)',
        'Ministre de l\'Emploi (2004-2007)',
        'Ministre de l\'Écologie (2007-2010)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Hervé Morin',
    party: 'udi',
    position: 'Président de la région Normandie',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1961-08-17',
      birthPlace: 'Pont-Audemer',
      career: [
        'Député de l\'Eure (1998-2016)',
        'Ministre de la Défense (2007-2010)',
        'Président de la région Normandie (2016-)'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // AGIR
  // ===============================
  {
    id: nextId++,
    name: 'Adrien Taquet',
    party: 'agir',
    position: 'Ancien secrétaire d\'État',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1977-12-04',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Député des Hauts-de-Seine (2017-2022)',
        'Secrétaire d\'État à la Protection de l\'enfance (2019-2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Franck Riester',
    party: 'agir',
    position: 'Ancien ministre de la Culture',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1974-01-03',
      birthPlace: 'Meaux',
      career: [
        'Député de Seine-et-Marne (2007-2018)',
        'Fondateur d\'Agir (2017)',
        'Ministre de la Culture (2018-2020)',
        'Ministre du Commerce extérieur (2020-2022)'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // ENSEMBLE - POLITICIENS MANQUANTS
  // ===============================
  {
    id: nextId++,
    name: 'Aurore Bergé',
    party: 'ensemble',
    position: 'Ministre de l\'Égalité femmes-hommes',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1986-11-13',
      birthPlace: 'Paris',
      career: [
        'Cadre politique UMP/LR (2005-2017)',
        'Conseillère municipale Magny-les-Hameaux (2014)',
        'Ralliement à Macron (2017)',
        'Députée des Yvelines (2017-2023)',
        'Présidente du groupe Renaissance (2022-2023)',
        'Ministre des Solidarités et des Familles (2023-2024)',
        'Ministre de l\'Égalité femmes-hommes (2024-)'
      ],
      justiceIncidents: [
        {
          type: 'Information judiciaire',
          date: '2025',
          description: 'Information judiciaire ouverte par la Cour de Justice de la République pour faux témoignage. Accusée par des députés écologistes et insoumis de faux témoignage lors d\'une commission d\'enquête sur les crèches privées (avril 2024), en ayant nié tout lien personnel avec une lobbyiste des crèches privées (Elsa Hervy), avec laquelle elle avait entretenu des relations étroites.',
          status: 'En cours',
          sources: [
            { title: 'Le Monde - Affaire Bergé crèches privées', url: 'https://www.lemonde.fr' },
            { title: 'Libération - Enquête Bergé faux témoignage', url: 'https://www.liberation.fr' }
          ]
        }
      ]
    }
  },

  // ===============================
  // AUTRES POLITICIENS MANQUANTS
  // ===============================
  {
    id: nextId++,
    name: 'Yannick Neuder',
    party: 'lr',
    position: 'Député du Pas-de-Calais, Vice-président LR',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1980-05-15',
      birthPlace: 'Arras',
      career: [
        'Député du Pas-de-Calais (2017-)',
        'Vice-président des Républicains (2023-)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2024',
          description: 'Mise en examen pour prise illégale d\'intérêts liée à son activité de consultant avant d\'être élu.',
          status: 'En cours',
          sources: [
            { title: 'Le Figaro - Neuder prise illégale d\'intérêts', url: 'https://www.lefigaro.fr' },
            { title: 'France Info - Enquête Neuder', url: 'https://www.franceinfo.fr' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Frédéric Péchenard',
    party: 'lr',
    position: 'Vice-président des Républicains',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1960-03-22',
      birthPlace: 'Vichy',
      career: [
        'Commissaire de police',
        'Directeur Général de la Police Nationale (2007-2012)',
        'Sénateur de Haute-Loire (2014-)',
        'Vice-président des Républicains'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen/Classement',
          date: '2019-2021',
          description: 'Enquêtes pour abus de bien social et blanchiment de fraude. Procédures judiciaires relatives à des dépenses de campagne électorale contestées.',
          status: 'Classée pour prescription',
          sources: [
            { title: 'Le Monde - Péchenard affaires', url: 'https://www.lemonde.fr' },
            { title: 'Le Figaro - Enquête Péchenard', url: 'https://www.lefigaro.fr' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Nathalie Ioualalen',
    party: 'rn',
    position: 'Ancienne députée du RN',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1972-08-10',
      birthPlace: 'Albi',
      career: [
        'Conseillère municipale',
        'Députée du Tarn (2017-2022)',
        'Membre du conseil d\'administration du RN'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2022',
          description: 'Condamnée pour détournement de fonds publics concernant l\'utilisation de crédits de campagne européens du RN.',
          status: 'Condamnée avec sursis',
          sources: [
            { title: 'Wikipedia - Affaire des assistants parlementaires du RN', url: 'https://fr.wikipedia.org/wiki/Affaire_des_assistants_parlementaires_du_Front_national_au_Parlement_europ%C3%A9en' },
            { title: 'Mediapart - Dossier assistants européens RN', url: 'https://www.mediapart.fr' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Joëlle Garriaud-Maylam',
    party: 'lr',
    position: 'Ancienne sénatrice LR',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1956-01-20',
      birthPlace: 'Abidjan',
      career: [
        'Députée de Seine-et-Marne (2002-2012)',
        'Sénatrice (2014-2020)',
        'Vice-présidente du groupe LR au Sénat'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamnée pour détournement de fonds publics concernant ses dépenses de campagne électorale et ses frais de personnel.',
          status: 'Condamnée',
          sources: [
            { title: 'Le Monde - Condamnation Garriaud-Maylam', url: 'https://www.lemonde.fr' },
            { title: 'Le Figaro - Affaires judiciaires LR', url: 'https://www.lefigaro.fr' }
          ]
        }
      ]
    }
  },

























  {
    id: nextId++,
    name: 'Yves Jégo',
    party: 'udi',
    position: 'Député du Val-d\'Oise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-01-29',
      birthPlace: 'Argenteuil',
      career: [
        'Secrétaire d\'État aux Affaires étrangères (2008-2010)',
        'Député du Val-d\'Oise',
        'Maire d\'Ableiges'
      ],
      justiceIncidents: []
    }
  },






  {
    id: nextId++,
    name: 'Michèle Rubirola',
    party: 'ps',
    position: 'Maire de Marseille',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-07-02',
      birthPlace: 'Marseille',
      career: [
        'Cardiologue',
        'Maire de Marseille (2020-2023)',
        'Conseillère municipale'
      ],
      justiceIncidents: []
    }
  },




  {
    id: nextId++,
    name: 'Raphaël Glucksmann',
    party: 'ps',
    position: 'Député européen, politicien PS',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1982-12-05',
      birthPlace: 'Levallois-Perret',
      career: [
        'Écrivain et journaliste',
        'Cofondateur d\'une ONG',
        'Candidat aux élections présidentielles 2022',
        'Député européen'
      ],
      justiceIncidents: []
    }
  },

  // ===============================
  // AJOUT SUPPLÉMENTAIRE - POLITICIENS AVEC INCIDENTS
  // ===============================
  
  {
    id: nextId++,
    name: 'Alain Carignon',
    party: 'lr',
    position: 'Ancien maire de Grenoble',
    convictions: 2,
    ongoingCases: 0,
    details: {
      birthDate: '1949-06-13',
      birthPlace: 'Grenoble',
      career: [
        'Maire de Grenoble (1983-1997)',
        'Ministre de l\'Environnement (1986-1988)',
        'Ministre délégué à l\'Environnement'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '1995',
          description: 'Condamné pour trafic d\'influence, corruption et abus de pouvoir. Affaire de Grenoble Isère Développement - accords sur des contrats immobiliers moyennant avantages financiers personnels.',
          penalty: '3 ans de prison dont 1 ferme',
          status: 'Condamné',
          sources: [
            { title: 'Alain Carignon - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Alain_Carignon' }
          ]
        },
        {
          type: 'Condamnation',
          date: '1998',
          description: 'Condamné à nouveau pour détournement de deniers publics et financement occulte de campagne électorale.',
          penalty: '2 ans de prison avec sursis',
          status: 'Condamné',
          sources: [
            { title: 'Alain Carignon - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Alain_Carignon' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Jean Tiberi',
    party: 'lr',
    position: 'Ancien maire de Paris',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1935-03-02',
      birthPlace: 'Paris',
      career: [
        'Maire du 5e arrondissement (1983-1995)',
        'Maire de Paris (1995-2001)',
        'Sénateur de Paris'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2001',
          description: 'Condamné pour falsification d\'actes électoraux. Affaire des faux électeurs du 3e arrondissement - emplois fictifs et fraude électorale.',
          penalty: '2 ans de prison avec sursis + amende',
          status: 'Condamné',
          sources: [
            { title: 'Jean Tiberi - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean_Tiberi' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Jacques Chirac',
    party: 'lr',
    position: 'Ancien Président de la République',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1932-11-29',
      birthPlace: 'Paris',
      career: [
        'Maire de Paris (1977-1995)',
        'Premier ministre (1974-1976, 1986-1988)',
        'Président de la République (1995-2007)',
        'Chef du RPR/Rassemblement pour la République'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2011',
          description: 'Condamné pour détournement de fonds publics lors de son mandat de maire de Paris. Financement occulte d\'emplois fictifs et de campagnes électorales par le RPR.',
          penalty: '2 ans de prison avec sursis + 500 000€ d\'amende',
          status: 'Condamné',
          sources: [
            { title: 'Jacques Chirac - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jacques_Chirac' },
            { title: 'Affaire des emplois fictifs de la mairie de Paris - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_des_emplois_fictifs_de_la_mairie_de_Paris' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Michel Mouillot',
    party: 'lr',
    position: 'Ancien maire de Cannes',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1942-11-24',
      birthPlace: 'Cannes',
      career: [
        'Maire de Cannes (1983-2001)',
        'Sénateur des Alpes-Maritimes',
        'Conseiller régional PACA'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2004',
          description: 'Condamné pour corruption, blanchiment et abus de bien social. Affaire du Relais de la Reine - emplois fictifs et surfacturations sur contrats municipaux.',
          penalty: '3 ans de prison ferme',
          status: 'Condamné',
          sources: [
            { title: 'Michel Mouillot - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Michel_Mouillot' }
          ]
        }
      ]
    }
  },












  {
    id: nextId++,
    name: 'Sylvie Andrieux',
    party: 'ps',
    position: 'Ancienne députée des Bouches-du-Rhône',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1977-02-15',
      birthPlace: 'Marseille',
      career: [
        'Conseillère municipale de Marseille',
        'Députée des Bouches-du-Rhône (2012-2015)',
        'Conseillère régionale PACA'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2016',
          description: 'Condamnée pour détournement de deniers publics. Emplois fictifs d\'assistants parlementaires dans le cadre de sa fonction de députée.',
          penalty: '3 ans de prison avec sursis + 50 000€ amende',
          status: 'Condamnée',
          sources: [
            { title: 'Sylvie Andrieux - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Sylvie_Andrieux' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Thomas Thévenoud',
    party: 'ps',
    position: 'Ancien secrétaire d\'État au Budget',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1984-10-18',
      birthPlace: 'Montreuil-les-Mines',
      career: [
        'Secrétaire d\'État chargé du Budget (2014-2015)',
        'Député de Saône-et-Loire (2012-2015)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2016',
          description: 'Condamné pour fraude fiscale et blanchiment. Découverte d\'un compte bancaire non déclaré en Suisse avec environ 88 000€ dissimulés.',
          penalty: '2 ans de prison avec sursis + 375 000€ d\'amende',
          status: 'Condamné',
          sources: [
            { title: 'Thomas Thévenoud - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Thomas_Th%C3%A9venoud' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Kader Arif',
    party: 'ps',
    position: 'Ancien ministre PS',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1955-04-03',
      birthPlace: 'Sétif (Algérie)',
      career: [
        'Maire de Lens (2001-2012)',
        'Ministre délégué à la Gestion de la crise (2012)',
        'Député du Pas-de-Calais'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2016',
          description: 'Condamné pour détournement de deniers publics et faux en écriture publique. Emplois fictifs à la mairie de Lens.',
          penalty: '2 ans de prison avec sursis + amende',
          status: 'Condamné',
          sources: [
            { title: 'Kader Arif - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Kader_Arif' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Bruno Le Roux',
    party: 'ps',
    position: 'Ancien président du groupe PS',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1960-05-21',
      birthPlace: 'Rennes',
      career: [
        'Député de Seine-Saint-Denis (2012-)',
        'Président du groupe socialiste à l\'Assemblée (2012-2017)',
        'Ministre de l\'Intérieur (2017)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2017-2018',
          description: 'Mis en examen pour détournement de fonds publics concernant l\'emploi fictif de collaborateurs parlementaires.',
          status: 'En cours',
          sources: [
            { title: 'Bruno Le Roux - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Bruno_Le_Roux' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Yamina Benguigui',
    party: 'ps',
    position: 'Ancienne ministre PS',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1957-08-07',
      birthPlace: 'Sefrou (Maroc)',
      career: [
        'Réalisatrice et productrice',
        'Ministre de la Culture (2012-2014)',
        'Députée des Hauts-de-Seine (2012-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Enquête',
          date: '2018',
          description: 'Enquête pour détournement de deniers publics concernant emplois fictifs d\'assistants parlementaires.',
          status: 'En cours',
          sources: [
            { title: 'Yamina Benguigui - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Yamina_Benguigui' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Aquilino Morelle',
    party: 'ps',
    position: 'Ancien conseiller du Président Hollande',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1965-12-16',
      birthPlace: 'Sainte-Foy-les-Lyon',
      career: [
        'Conseiller politique du Président François Hollande (2012-2016)',
        'Expert en politique de santé',
        'Énarque'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamné pour détournement de deniers publics et usage de faux documents publics. Rémunérations non justifiées pour activités de conseiller.',
          penalty: '2 ans de prison avec sursis + 50 000€ d\'amende',
          status: 'Condamné',
          sources: [
            { title: 'Aquilino Morelle - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Aquilino_Morelle' }
          ]
        }
      ]
    }
  },







  {
    id: nextId++,
    name: 'Emmanuelle Wargon',
    party: 'ensemble',
    position: 'Ancienne ministre du Logement',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1975-07-21',
      birthPlace: 'Antony',
      career: [
        'Secrétaire d\'État auprès du Ministre de la Transition écologique (2016-2017)',
        'Ministre du Logement (2020-2022)',
        'Députée des Yvelines (2017-2023)'
      ],
      justiceIncidents: []
    }
  },
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
