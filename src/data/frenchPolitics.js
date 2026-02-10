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
    seats: 122
  },
  {
    id: 'lr',
    name: 'Les Républicains (LR)',
    leader: 'Laurent Wauquiez',
    color: '#0066CC',
    ideology: 'Conservatisme, Libéralisme économique',
    founded: 2015,
    members: 100000,
    seats: 49
  },
  {
    id: 'ps',
    name: 'Parti Socialiste (PS)',
    leader: 'Olivier Faure',
    color: '#FF1744',
    ideology: 'Socialisme démocratique',
    founded: 1969,
    members: 80000,
    seats: 69
  },
  {
    id: 'lfi',
    name: 'La France Insoumise (LFI)',
    leader: 'Jean-Luc Mélenchon',
    color: '#C41E3A',
    ideology: 'Gauche radicale, Écologie',
    founded: 2016,
    members: 500000,
    seats: 71
  },
  {
    id: 'ensemble',
    name: 'Ensemble pour la République',
    leader: 'Gabriel Attal',
    color: '#2A3B8F',
    ideology: 'Centrisme, Libéralisme',
    founded: 2022,
    members: 250000,
    seats: 92
  },
  {
    id: 'modem',
    name: 'MoDem',
    leader: 'François Bayrou',
    color: '#FFB300',
    ideology: 'Centrisme, Réformisme',
    founded: 2007,
    members: 70000,
    seats: 36
  },
  {
    id: 'ecolo',
    name: 'Europe Écologie Les Verts (EELV)',
    leader: 'Marine Tondelier',
    color: '#24B44E',
    ideology: 'Écologisme, Gauche progressiste',
    founded: 2010,
    members: 40000,
    seats: 38
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
    seats: 17
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
  },
  {
    id: 'horizons',
    name: 'Horizons (HOR)',
    leader: 'Édouard Philippe',
    color: '#4A90D9',
    ideology: 'Centre-droit, Progressisme',
    founded: 2021,
    members: 30000,
    seats: 34
  },
  {
    id: 'liot',
    name: 'LIOT (Libertés, Indépendants, Outre-mer et Territoires)',
    leader: 'Stéphane Lenormand',
    color: '#8B6914',
    ideology: 'Centrisme, Régionalisme',
    founded: 2022,
    members: 0,
    seats: 22
  },
  {
    id: 'udr',
    name: 'Union des droites pour la République (UDR)',
    leader: 'Éric Ciotti',
    color: '#1B3A5C',
    ideology: 'Droite conservatrice, Souverainisme',
    founded: 2024,
    members: 0,
    seats: 17
  },
  {
    id: 'reconquete',
    name: 'Reconquête',
    leader: 'Éric Zemmour',
    color: '#1A2C5B',
    ideology: 'Droite nationaliste, Conservatisme',
    founded: 2021,
    members: 100000,
    seats: 0
  },
  {
    id: 'ni',
    name: 'Non-inscrits (NI)',
    leader: '-',
    color: '#808080',
    ideology: 'Divers',
    founded: 0,
    members: 0,
    seats: 10
  }
]

let nextId = 1

export const politicians = [
  {
    id: nextId++,
    name: 'Marine Le Pen',
    party: 'rn',
    position: 'Présidente du RN',
    convictions: 1,
    ongoingCases: 0,
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
          type: 'Relaxe',
          date: '2021-05',
          description: 'Poursuivie pour diffusion d\'images violentes accessibles aux mineurs. En décembre 2015, elle publie sur Twitter des photos d\'exécutions de Daech avec le commentaire "Daech, c\'est ça !". Relaxée par le tribunal de Nanterre en mai 2021, la justice reconnaissant une "vocation informative" et une "démarche de protestation politique".',
          status: 'Relaxe définitive',
          sources: [
            { title: 'France Bleu - Relaxe photos Daech', url: 'https://www.francebleu.fr/infos/faits-divers-justice/marine-le-pen-et-gilbert-collard-relaxes-dans-l-affaire-des-photos-d-exactions-de-daech-1620131450' },
            { title: 'CNEWS - Photos Daesh relaxés', url: 'https://www.cnews.fr/france/2021-05-04/photos-dexaction-de-daesh-sur-twitter-marine-le-pen-et-gilbert-collard-relaxes' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2025-12',
          description: 'Condamnée définitivement pour diffamation envers l\'association La Cimade. En janvier 2022, sur BFM-TV, elle accuse la Cimade d\'organiser "la filière d\'immigration clandestine en provenance des Comores" à Mayotte. Condamnée en appel (Paris, 11 septembre 2024), cassation rejetée le 16 décembre 2025.',
          penalty: '500€ d\'amende avec sursis',
          status: 'Condamnation définitive',
          sources: [
            { title: 'La Cimade - Condamnation définitive', url: 'https://www.lacimade.org/diffamation-a-lencontre-de-la-cimade-marine-le-pen-definitivement-condamnee/' },
            { title: 'Le Club des Juristes', url: 'https://www.leclubdesjuristes.com/en-bref/marine-le-pen-definitivement-condamnee-pour-diffamation-envers-la-cimade-13397/' }
          ]
        },
        {
          type: 'Condamnation (première instance)',
          date: '2025-03',
          description: 'Condamnée pour détournement de deniers publics et emplois fictifs au Parlement européen. Affaire des assistants parlementaires du Front national.',
          penalty: '4 ans de prison (2 ferme), 5 ans d\'inéligibilité avec exécution provisoire',
          status: 'Procès en appel en cours depuis janvier 2026',
          sources: [
            { title: 'Affaire des assistants parlementaires - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_des_assistants_parlementaires_du_Front_national_au_Parlement_europ%C3%A9en' },
            { title: 'France Info - Procès en appel', url: 'https://www.franceinfo.fr/politique/front-national/affaire-des-assistants-fn-au-parlement-europeen/direct-proces-en-appel-de-marine-le-pen-suivez-les-plaidoiries-des-avocats-du-parlement-europeen-mardi-matin-avant-les-requisitions-dans-l-apres-midi_7779869.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Éric Zemmour',
    party: 'reconquete',
    position: 'Président de Reconquête, candidat à la présidentielle 2022',
    convictions: 5,
    ongoingCases: 0,
    details: {
      birthDate: '1958-08-31',
      birthPlace: 'Montreuil',
      career: [
        'Journaliste au Figaro (1996-2021)',
        'Chroniqueur TV (CNews, 2019-2021)',
        'Candidat à l\'élection présidentielle (2022)',
        'Président de Reconquête (2021-)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2011-02',
          description: 'Condamné pour provocation à la discrimination raciale. Sur Canal+ ("Salut les Terriens", mars 2010) : "la plupart des trafiquants sont noirs et arabes". Sur France O : les employeurs auraient "le droit" de refuser des Noirs et des Arabes. Pas d\'appel, définitive.',
          penalty: '2 000€ d\'amende avec sursis',
          status: 'Définitive',
          sources: [
            { title: 'Condamnation Zemmour 2011 - Le Monde', url: 'https://www.lemonde.fr/societe/article/2011/02/18/eric-zemmour-condamne-pour-provocation-a-la-discrimination-raciale_1481785_3224.html' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2019-09-17',
          description: 'Condamné pour provocation à la haine religieuse. Sur France 5 ("C à vous", septembre 2016), déclare que la France vit "une invasion" et "une lutte pour islamiser" certains quartiers. Cassation rejetée le 17 septembre 2019. Condamnation validée par la CEDH en décembre 2022.',
          penalty: '3 000€ d\'amende',
          status: 'Définitive (cassation rejetée)',
          sources: [
            { title: 'Zemmour condamné provocation haine religieuse - Puremedias', url: 'https://www.ozap.com/actu/eric-zemmour-definitivement-condamne-a-3-000-euros-d-amende-pour-provocation-a-la-haine-religieuse/583655' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2025-09-17',
          description: 'Condamné pour provocation à la haine raciale et injures racistes. Lors de la "Convention de la droite" (septembre 2019), qualifie les immigrés de "colonisateurs", le voile et la djellaba d\'"uniformes d\'une armée d\'occupation". Relaxé en appel (2021), cassation annule (2023), recondamné en appel (février 2024), cassation rejetée le 17 septembre 2025.',
          penalty: '15 000€ d\'amende',
          status: 'Définitive (cassation rejetée)',
          sources: [
            { title: 'Zemmour définitivement condamné - France Bleu', url: 'https://www.francebleu.fr/infos/societe/eric-zemmour-a-ete-definitivement-condamne-pour-provocation-a-la-haine-raciale-et-injures-racistes-6052200' },
            { title: 'Zemmour condamné propos racistes - FranceInfo', url: 'https://www.franceinfo.fr/politique/eric-zemmour/eric-zemmour-definitivement-condamne-pour-des-propos-racistes-en-2019_7497130.html' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2025-12-02',
          description: 'Condamné pour complicité de provocation à la haine raciale et injure publique. Sur CNews (septembre 2020), à propos des mineurs isolés étrangers : "ils sont voleurs, ils sont assassins, ils sont violeurs". Cassation rejetée le 2 décembre 2025.',
          penalty: '100 jours-amende à 100€',
          status: 'Définitive (cassation rejetée)',
          sources: [
            { title: 'Zemmour condamné mineurs isolés - FranceInfo', url: 'https://www.franceinfo.fr/politique/eric-zemmour/eric-zemmour-a-ete-definitivement-condamne-pour-complicite-de-provocation-a-la-haine-apres-ses-propos-tenus-sur-des-mineurs-isoles_7653920.html' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2025-12-02',
          description: 'Condamné pour diffamation envers l\'avocat Patrick Klugman. Durant la campagne présidentielle 2022, l\'accuse de vouloir "étouffer l\'affaire" de la mort de Jérémie Cohen. Cassation rejetée le 2 décembre 2025.',
          penalty: '1 000€ d\'amende',
          status: 'Définitive (cassation rejetée)',
          sources: [
            { title: 'Zemmour condamné diffamation Klugman - FranceInfo', url: 'https://www.franceinfo.fr/politique/eric-zemmour/mort-de-jeremie-cohen-en-2022-eric-zemmour-condamne-a-1-000-euros-d-amende-pour-diffamation_6312012.html' }
          ]
        },
        {
          type: 'Condamnation (première instance)',
          date: '2025-04-02',
          description: 'Condamné en appel pour contestation de crime contre l\'humanité. En 2019, affirme que le maréchal Pétain aurait "sauvé" les juifs français. Relaxé en première instance (2021) et en appel (2022), cassation annule, recondamné en appel le 2 avril 2025. Pourvoi en cassation annoncé.',
          penalty: '10 000€ d\'amende',
          status: 'Pourvoi en cassation',
          sources: [
            { title: 'Zemmour condamné Pétain - FranceInfo', url: 'https://www.franceinfo.fr/politique/eric-zemmour/eric-zemmour-condamne-a-10-000-euros-d-amende-pour-avoir-soutenu-que-le-marechal-petain-avait-sauve-des-juifs-francais_7166175.html' }
          ]
        },
        {
          type: 'Relaxe',
          date: '2021-09-08',
          description: 'Relaxé en appel pour des propos sur les musulmans tenus au Corriere della Sera (octobre 2014). Initialement condamné, cassation annule, relaxé en appel après renvoi.',
          status: 'Relaxé définitivement',
          sources: [
            { title: 'Zemmour relaxé propos musulmans - Europe 1', url: 'https://www.europe1.fr/societe/eric-zemmour-relaxe-en-appel-apres-des-propos-polemiques-sur-les-musulmans-3810566' }
          ]
        },
        {
          type: 'Relaxe',
          date: '2024-09-11',
          description: 'Relaxé en appel pour injure homophobe. Sur CNews (octobre 2019), propos sur les homosexuels. Condamné en première instance (septembre 2023, 4 000€), relaxé en appel le 11 septembre 2024.',
          status: 'Relaxé définitivement',
          sources: [
            { title: 'Zemmour relaxé injures homophobes - Boulevard Voltaire', url: 'https://www.bvoltaire.fr/affaire-des-injures-homophobes-eric-zemmour-relaxe/' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Sarah Knafo',
    party: 'reconquete',
    position: 'Eurodéputée Reconquête',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1992-12-28',
      birthPlace: 'Paris',
      career: [
        'Diplômée de l\'ENA',
        'Auditrice à la Cour des comptes (2020-2024)',
        'Eurodéputée Reconquête (2024-)',
        'Candidate à la mairie de Paris (2026)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Bay',
    party: 'ni',
    position: 'Eurodéputé (La France fière, ex-Reconquête)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1977-05-14',
      birthPlace: 'Chambray-lès-Tours',
      career: [
        'Député européen (2014-)',
        'Vice-président du FN/RN (2014-2022)',
        'Secrétaire général de Reconquête (2022-2024)',
        'Exclu de Reconquête (juin 2024)',
        'Co-fondateur de La France fière (2024)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation (première instance)',
          date: '2025-03',
          description: 'Condamné pour détournement de fonds publics dans l\'affaire des assistants parlementaires du Front national au Parlement européen. Accusé d\'avoir employé fictivement Timothée Houssin comme assistant parlementaire européen alors que celui-ci travaillait pour le parti en France.',
          penalty: '12 mois de prison dont 6 mois ferme sous bracelet électronique, 8 000 € d\'amende, 3 ans d\'inéligibilité avec exécution provisoire',
          status: 'Appel en cours - verdict attendu été 2026',
          sources: [
            { title: 'Affaire des assistants parlementaires du FN - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_des_assistants_parlementaires_du_Front_national_au_Parlement_europ%C3%A9en' },
            { title: 'Nicolas Bay condamné - France Bleu', url: 'https://www.francebleu.fr/infos/faits-divers-justice/proces-des-assistants-d-eurodeputes-rn-les-normands-timothee-houssin-nicolas-bay-et-thierry-legier-condamnes-1943856' }
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
    convictions: 0,
    ongoingCases: 0,
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
    convictions: 0,
    ongoingCases: 0,
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
          type: 'Relaxe',
          date: '2010',
          description: 'Condamné en première instance en 2007 pour contestation de crimes contre l\'humanité. Relaxé en appel en 2009, confirmé en cassation en 2010.',
          penalty: 'Néant (relaxé)',
          status: 'Relaxé définitivement',
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
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1972-01-28',
      birthPlace: 'Lens',
      career: [
        'Maire d\'Hénin-Beaumont (2014-)',
        'Secrétaire général du RN',
        'Député européen (2014-2019)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2014',
          description: 'Condamné définitivement pour injure publique envers un élu socialiste d\'Hénin-Beaumont.',
          penalty: '3 000€ d\'amende',
          status: 'Condamnation définitive'
        }
      ]
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
    convictions: 0,
    ongoingCases: 0,
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
          status: 'Procès en appel en cours depuis janvier 2026',
          sources: [
            { title: 'France Bleu - Julien Odoul condamné', url: 'https://www.francebleu.fr' },
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
          type: 'Condamnation',
          date: '2024-04',
          description: 'Condamné définitivement pour détournement de fonds publics. Affaire des emplois fictifs : son épouse Penelope Fillon a perçu plus de 900 000€ pour un travail inexistant en tant qu\'assistante parlementaire. Condamné en première instance (2020), confirmé en appel (2021), pourvoi en cassation rejeté (2024).',
          penalty: '4 ans de prison (1 an ferme sous bracelet électronique), 375 000€ d\'amende, 10 ans d\'inéligibilité',
          status: 'Condamnation définitive',
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
    party: 'udr',
    position: 'Député des Alpes-Maritimes (alliance RN depuis 2024)',
    convictions: 0,
    ongoingCases: 3,
    details: {
      birthDate: '1965-09-28',
      birthPlace: 'Nice',
      career: [
        'Député des Alpes-Maritimes (2007-)',
        'Président du conseil départemental des Alpes-Maritimes (2008-2013)',
        'Président de LR (2022-)'
      ],
      justiceIncidents: [
        {
          type: 'Enquête',
          date: '2024',
          description: 'Enquête pour détournement de fonds publics concernant l\'utilisation de cartes de stationnement gratuites au port de Nice, fournies par la CCI Nice Côte d\'Azur, lors de la campagne des législatives 2022. Perquisition effectuée au port de Nice en novembre 2024.',
          status: 'En cours',
          sources: [
            { title: 'Éric Ciotti - Enquête détournement de fonds', url: 'https://www.franceinfo.fr/alpes-maritimes/nice-la-permanence-du-depute-eric-ciotti-a-ete-perquisitionnee-dans-le-cadre-d-une-enquete-pour-detournement-de-fonds-publics_6909293.html' }
          ]
        },
        {
          type: 'Enquête',
          date: '2024',
          description: 'Enquête préliminaire sur des soupçons de cumuls d\'emplois au conseil départemental des Alpes-Maritimes bénéficiant à des proches d\'Éric Ciotti.',
          status: 'En cours',
          sources: [
            { title: 'Éric Ciotti - Wikipedia', url: 'https://fr.wikipedia.org/wiki/%C3%89ric_Ciotti' }
          ]
        },
        {
          type: 'Enquête',
          date: '2022',
          description: 'Enquête du Parquet National Financier (PNF) sur les emplois occupés par Caroline Magne, ex-épouse d\'Éric Ciotti.',
          status: 'En cours',
          sources: [
            { title: 'Éric Ciotti - Wikipedia', url: 'https://fr.wikipedia.org/wiki/%C3%89ric_Ciotti' }
          ]
        }
      ]
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
    ongoingCases: 1,
    details: {
      birthDate: '1964-05-05',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Ministre du Budget (2004-2007)',
        'Président de l\'UMP (2012-2014)',
        'Maire de Meaux (1995-)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2015',
          description: 'Mis en examen dans l\'affaire Bygmalion pour abus de confiance et financement illégal de la campagne présidentielle de Nicolas Sarkozy en 2012.',
          status: 'En cours'
        },
        {
          type: 'Condamnation (première instance)',
          date: '2024',
          description: 'Condamné en première instance dans l\'affaire Bygmalion.',
          penalty: '1 an de prison avec sursis',
          status: 'Appel probable'
        }
      ]
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
          penalty: '2 ans de prison ferme, 300 000€ d\'amende',
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
    convictions: 1,
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
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2019-12-09',
          description: 'Condamné pour actes d\'intimidation envers un magistrat et un dépositaire de l\'autorité publique, rébellion et provocation. Incident lors de la perquisition au siège de LFI le 16 octobre 2018.',
          charges: ['Intimidation envers magistrat', 'Intimidation envers autorité publique', 'Rébellion', 'Provocation'],
          penalty: '3 mois de prison avec sursis et 8 000 euros d\'amende',
          status: 'Condamnation définitive',
          sources: [
            { title: 'France Info', url: 'https://www.franceinfo.fr/politique/melenchon/perquisition-mouvementee-a-la-france-insoumise-jean-luc-melenchon-condamne-a-trois-mois-de-prison-avec-sursis-et-8000-euros-d-amende_3737089.html' },
            { title: 'France 24', url: 'https://www.france24.com/fr/20191209-france-melenchon-condamne-trois-mois-prison-sursis-perquisition-lfi' }
          ]
        },
        {
          type: 'Relaxe',
          date: '2014',
          description: 'Poursuivi pour injure publique suite à la plainte de Marine Le Pen en 2012 (il l\'avait qualifiée de "fasciste"). Relaxé par le tribunal correctionnel de Paris en 2014.',
          charges: ['Injure publique'],
          status: 'Relaxé',
          sources: [
            { title: 'Le JDD', url: 'https://www.lejdd.fr/Societe/Jean-Luc-Melenchon-mis-en-examen-pour-injure-publique-apres-une-plainte-de-Marine-Le-Pen-contre-attaque-521248-3212393' },
            { title: 'France Info', url: 'https://www.franceinfo.fr/politique/jean-luc-melenchon-a-t-il-injurie-marine-le-pen-en-la-traitant-de-fasciste_267787.html' }
          ]
        }
      ]
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
    party: 'ecolo',
    position: 'Député de la Somme (a quitté LFI en 2024)',
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
    party: 'ecolo',
    position: 'Ancienne députée de Seine-Saint-Denis (a quitté LFI en 2023)',
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
    party: 'ecolo',
    position: 'Député de Seine-Saint-Denis (a quitté LFI en 2023)',
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
    party: 'ecolo',
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
    position: 'Ancienne députée de Seine-Saint-Denis (a quitté LFI en 2023)',
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
    ongoingCases: 0,
    details: {
      birthDate: '1961-04-20',
      birthPlace: 'Maubeuge',
      career: [
        'Avocat pénaliste',
        'Garde des Sceaux, ministre de la Justice (2020-2024)'
      ],
      justiceIncidents: [
        {
          type: 'Relaxe',
          date: '2023',
          description: 'Mis en examen en juillet 2021 pour prise illégale d\'intérêts. Accusé d\'avoir utilisé sa fonction de Garde des Sceaux pour régler des comptes avec des magistrats ayant enquêté sur lui comme avocat. Acquitté par la Cour de Justice de la République le 29 novembre 2023.',
          status: 'Relaxé',
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
    ongoingCases: 0,
    details: {
      birthDate: '1962-10-06',
      birthPlace: 'Rodez',
      career: [
        'Député du Finistère (2012-2022)',
        'Président de l\'Assemblée nationale (2018-2022)'
      ],
      justiceIncidents: [
        {
          type: 'Prescription',
          date: '2022',
          description: 'Mis en examen en 2019 pour prise illégale d\'intérêts dans une affaire immobilière des Mutuelles de Bretagne. Soupçonné d\'avoir favorisé sa compagne dans une transaction immobilière à Brest. La Cour de cassation a confirmé la prescription le 5 octobre 2022, mettant fin aux poursuites.',
          status: 'Prescription',
          sources: [
            { title: 'Richard Ferrand - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Richard_Ferrand' },
            { title: 'Affaire Richard Ferrand - France Info', url: 'https://www.franceinfo.fr/politique/affaire/affaire-richard-ferrand/affaire-richard-ferrand-la-cour-de-cassation-confirme-la-prescription-dans-le-dossier-des-mutuelles-de-bretagne_5399044.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Alexis Kohler',
    party: 'ensemble',
    position: 'Ancien Secrétaire général de l\'Élysée',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1973-02-14',
      birthPlace: 'Strasbourg',
      career: [
        'Secrétaire général de la présidence de la République (2017-2024)',
        'Directeur de cabinet d\'Emmanuel Macron au ministère de l\'Économie (2014-2016)',
        'Haut fonctionnaire au ministère des Finances'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2022',
          description: 'Mis en examen le 23 septembre 2022 pour prise illégale d\'intérêts et trafic d\'influence. Soupçonné de conflit d\'intérêts avec la compagnie maritime MSC (Mediterranean Shipping Company), détenue par les cousins de sa mère (famille Aponte). Accusé d\'avoir participé à 8 réunions concernant MSC sans déclarer ses liens familiaux. Renvoyé en procès par la cour d\'appel de Paris en novembre 2024.',
          status: 'Renvoyé en procès',
          sources: [
            { title: 'Alexis Kohler - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Alexis_Kohler' },
            { title: 'Alexis Kohler mis en examen - France 24', url: 'https://www.france24.com/en/france/20221003-macron-s-top-adviser-placed-under-formal-investigation-for-conflict-of-interest' }
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
    ongoingCases: 1,
    details: {
      birthDate: '1970-11-28',
      birthPlace: 'Rouen',
      career: [
        'Maire du Havre (2010-2017, 2020-)',
        'Premier ministre (2017-2020)',
        'Fondateur d\'Horizons (2021)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2023',
          description: 'Mis en examen par la CJR pour abstention de combattre un sinistre dans la gestion de la crise Covid-19 (stocks de masques, retard des mesures).',
          status: 'En cours'
        }
      ]
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
    name: 'Jean-Vincent Place',
    party: 'ecolo',
    position: 'Ancien sénateur, ancien secrétaire d\'État à la Réforme de l\'État (2016-2017)',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Sénateur de l\'Essonne (2011-2017)',
        'Secrétaire d\'État à la Réforme de l\'État (2016-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2020',
          description: 'Condamné définitivement pour conduite en état d\'ivresse (interpellé en 2018 avec 1,54 g/l d\'alcool).',
          penalty: 'Amende',
          status: 'Condamnation définitive',
          sources: [
            { title: 'Jean-Vincent Placé - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Vincent_Plac%C3%A9' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Denis Baupin',
    party: 'ecolo',
    position: 'Ancien vice-président de l\'Assemblée nationale, ancien adjoint au maire de Paris',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Adjoint au maire de Paris chargé du développement durable (2001-2014)',
        'Vice-président de l\'Assemblée nationale (2012-2016)'
      ],
      justiceIncidents: [
        {
          type: 'Classement',
          date: '2017',
          description: 'Accusé de harcèlement et agression sexuelle par plusieurs femmes. Classé sans suite pour prescription.',
          status: 'Classé sans suite',
          sources: [
            { title: 'Denis Baupin - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Denis_Baupin' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamné pour procédure abusive après avoir attaqué en diffamation les femmes qui l\'avaient accusé.',
          penalty: 'Amende',
          status: 'Condamnation définitive',
          sources: [
            { title: 'Denis Baupin - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Denis_Baupin' }
          ]
        }
      ]
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
  {
    id: nextId++,
    name: 'Maxime Gremetz',
    party: 'pcf',
    position: 'Ancien député PCF de la Somme (1978-2012)',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Député de la Somme (1978-2012)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2014',
          description: 'Condamné définitivement pour violences sur un huissier de justice.',
          penalty: 'Amende',
          status: 'Condamnation définitive',
          sources: [
            { title: 'Maxime Gremetz - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Maxime_Gremetz' }
          ]
        }
      ]
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
    party: 'ensemble',
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
          type: 'Enquête',
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
    position: 'Ministre de la Santé',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1969-03-15',
      birthPlace: 'Tullins (Isère)',
      career: [
        'Cardiologue au CHU de Grenoble',
        'Député de l\'Isère (2022-2024)',
        'Ministre de la Santé et de l\'Accès aux soins (2024-)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Frédéric Péchenard',
    party: 'lr',
    position: 'Vice-président des Républicains',
    convictions: 0,
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
          type: 'Prescription',
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
      birthDate: '1961-02-15',
      birthPlace: 'Marseille',
      career: [
        'Conseillère municipale de Marseille',
        'Députée des Bouches-du-Rhône (2002-2012)',
        'Conseillère régionale PACA'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2016',
          description: 'Condamnée pour détournement de subventions régionales PACA au profit d\'associations fictives.',
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
    position: 'Ancien secrétaire d\'État au Commerce extérieur',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1973-10-18',
      birthPlace: 'Chalon-sur-Saône',
      career: [
        'Secrétaire d\'État au Commerce extérieur (septembre 2014, 9 jours)',
        'Député de Saône-et-Loire (2012-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2017',
          description: 'Condamné pour fraude fiscale par non-déclaration de revenus et non-paiement d\'impôts. Affaire révélée sous le nom de \u00ab phobie administrative \u00bb.',
          penalty: '3 mois de prison avec sursis + 5 000\u20ac d\'amende',
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
    position: 'Ancien secrétaire d\'État aux Anciens combattants',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1959-08-26',
      birthPlace: 'Toulouse',
      career: [
        'Député européen (2004-2012)',
        'Secrétaire d\'État aux Anciens combattants et à la Mémoire (2012-2014)',
        'Député de Haute-Garonne (2014-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2015',
          description: 'Mis en examen pour favoritisme dans l\'attribution de marchés publics liés aux commémorations du centenaire de la Première Guerre mondiale.',
          status: 'En cours',
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
    ongoingCases: 0,
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
          type: 'Condamnation (première instance)',
          date: '2024-10',
          description: 'Condamné en première instance pour détournement de fonds publics concernant l\'emploi fictif de collaborateurs parlementaires.',
          penalty: '2 ans de sursis, 50 000€ d\'amende',
          status: 'Condamné en première instance',
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
    position: 'Ancienne ministre déléguée à la Francophonie',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1957-04-09',
      birthPlace: 'Lille',
      career: [
        'Réalisatrice et productrice',
        'Adjointe au maire de Paris (2008-2012)',
        'Ministre déléguée à la Francophonie (2012-2014)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2016',
          description: 'Condamnée pour non-déclaration de patrimoine à la Haute Autorité pour la transparence de la vie publique (HATVP).',
          penalty: 'Amende',
          status: 'Condamné',
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
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1962-06-05',
      birthPlace: 'Paris',
      career: [
        'Conseiller de Lionel Jospin (1997-2002)',
        'Conseiller politique du Président François Hollande (2012-2014)',
        'Énarque, médecin'
      ],
      justiceIncidents: [
        {
          type: 'Classement',
          date: '2015',
          description: 'Enquête préliminaire pour prise illégale d\'intérêts liée à une mission rémunérée 12 500€ pour le laboratoire danois Lundbeck en 2007, alors qu\'il était membre de l\'IGAS. Enquête classée sans suite.',
          status: 'Classé sans suite',
          sources: [
            { title: 'Europe 1', url: 'https://www.europe1.fr/politique/Conflit-d-interets-je-suis-blanchi-assure-Aquilino-Morelle-779670' },
            { title: 'Tendance Ouest (AFP)', url: 'https://www.tendanceouest.com/actualite-96964-paris-afp-conflit-d-interets-l-enquete-preliminaire-visant-aquilino-morelle-classee-sans-suite' }
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

  // ===== RN =====

  // ===== LR =====

  {
    id: nextId++,
    name: 'Claude Guéant',
    party: 'lr',
    position: 'Ancien Ministre de l\'Intérieur',
    convictions: 2,
    ongoingCases: 0,
    details: {
      birthDate: '1945-05-09',
      birthPlace: 'Vimy',
      career: [
        'Secrétaire général de l\'Élysée (2007-2011)',
        'Ministre de l\'Intérieur (2011-2012)',
        'Préfet'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2017',
          description: 'Condamné pour détournement de fonds publics. Primes en espèces versées irrégulièrement au cabinet du ministère de l\'Intérieur.',
          penalty: '2 ans de prison dont 1 ferme et 75 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Claude Guéant - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Claude_Gu%C3%A9ant' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2021',
          description: 'Condamné pour blanchiment de fraude fiscale dans l\'affaire des tableaux flamands. Vente de deux tableaux attribués à Andries van Eertvelt pour 500 000€.',
          penalty: '3 ans de prison dont 1 ferme',
          status: 'Définitif',
          sources: [
            { title: 'Claude Guéant - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Claude_Gu%C3%A9ant' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Georges Tron',
    party: 'lr',
    position: 'Ancien Secrétaire d\'État à la Fonction publique',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1957-09-01',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Député de l\'Essonne (1993-2017)',
        'Maire de Draveil (1995-2018)',
        'Secrétaire d\'État à la Fonction publique (2010-2011)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2021',
          description: 'Condamné en appel pour viols et agressions sexuelles sur deux anciennes employées de la mairie de Draveil. Acquitté en première instance en 2018, condamné par la cour d\'assises d\'appel de Paris en février 2021.',
          penalty: '5 ans de prison dont 3 ferme',
          status: 'Définitif',
          sources: [
            { title: 'Georges Tron - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Georges_Tron' },
            { title: 'Affaire Georges Tron - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Georges_Tron' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Brice Hortefeux',
    party: 'lr',
    position: 'Ancien Ministre de l\'Intérieur',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1958-05-11',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Ministre de l\'Immigration (2007-2009)',
        'Ministre de l\'Intérieur (2009-2011)',
        'Député européen (2014-2019)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2010',
          description: 'Condamné pour injure raciale lors de l\'université d\'été de l\'UMP en 2009. Propos tenus à l\'encontre d\'un jeune militant d\'origine arabe.',
          penalty: '750€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Brice Hortefeux - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Brice_Hortefeux' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Isabelle Balkany',
    party: 'lr',
    position: 'Ancienne Première adjointe au maire de Levallois-Perret',
    convictions: 2,
    ongoingCases: 0,
    details: {
      birthDate: '1947-05-10',
      birthPlace: 'Paris',
      career: [
        'Première adjointe au maire de Levallois-Perret (1983-2020)',
        'Conseillère régionale d\'Île-de-France'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamnée pour fraude fiscale. Dissimulation de patrimoine immobilier au Maroc et à Saint-Martin avec son époux Patrick Balkany.',
          penalty: '3 ans de prison dont 1 ferme',
          status: 'Définitif',
          sources: [
            { title: 'Isabelle Balkany - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Isabelle_Balkany' },
            { title: 'Affaire Balkany - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Balkany' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2020',
          description: 'Condamnée pour blanchiment de fraude fiscale aggravé. Montage financier via des sociétés offshore pour dissimuler la propriété de biens immobiliers.',
          penalty: '4 ans de prison dont 1 ferme',
          status: 'Définitif',
          sources: [
            { title: 'Isabelle Balkany - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Isabelle_Balkany' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Jérôme Lavrilleux',
    party: 'lr',
    position: 'Ancien député européen',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1965-06-13',
      birthPlace: 'Reims',
      career: [
        'Directeur adjoint de la campagne présidentielle de Nicolas Sarkozy (2012)',
        'Député européen (2014-2019)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2021',
          description: 'Condamné dans l\'affaire Bygmalion pour complicité de financement illégal de la campagne présidentielle de Nicolas Sarkozy en 2012. Système de fausses factures pour dissimuler le dépassement du plafond des dépenses de campagne.',
          penalty: '3 ans de prison dont 2 avec sursis et 50 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Jérôme Lavrilleux - Wikipedia', url: 'https://fr.wikipedia.org/wiki/J%C3%A9r%C3%B4me_Lavrilleux' },
            { title: 'Affaire Bygmalion - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Bygmalion' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Renaud Donnedieu de Vabres',
    party: 'lr',
    position: 'Ancien Ministre de la Culture',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1954-12-19',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Député d\'Indre-et-Loire (1997-2007)',
        'Ministre de la Culture et de la Communication (2004-2007)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2004',
          description: 'Condamné pour recel d\'abus de biens sociaux dans l\'affaire du financement occulte du Parti républicain.',
          penalty: '2 mois de prison avec sursis',
          status: 'Définitif',
          sources: [
            { title: 'Renaud Donnedieu de Vabres - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Renaud_Donnedieu_de_Vabres' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Pierre Bédier',
    party: 'lr',
    position: 'Président du Conseil départemental des Yvelines',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1957-08-14',
      birthPlace: 'Marseille',
      career: [
        'Député des Yvelines (1993-2006)',
        'Président du Conseil départemental des Yvelines (2014-)',
        'Secrétaire d\'État aux Programmes immobiliers de la Justice (2002-2004)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2009',
          description: 'Condamné pour corruption passive et recel d\'abus de biens sociaux. Perception de pots-de-vin dans le cadre de marchés publics liés aux prisons.',
          penalty: '18 mois de prison avec sursis et 30 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Pierre Bédier - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Pierre_B%C3%A9dier' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Henri Guaino',
    party: 'lr',
    position: 'Ancien conseiller spécial du Président Sarkozy',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1957-04-28',
      birthPlace: 'Arles',
      career: [
        'Conseiller spécial du Président Nicolas Sarkozy (2007-2012)',
        'Député des Yvelines (2012-2017)',
        'Commissaire au Plan (1995-1997)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamné pour outrage à magistrat. Propos publics contre le juge Jean-Michel Gentil dans le cadre de l\'affaire Bettencourt.',
          penalty: '2 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Henri Guaino - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Henri_Guaino' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Christine Lagarde',
    party: 'lr',
    position: 'Présidente de la BCE, ancienne Ministre de l\'Économie',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1956-01-01',
      birthPlace: 'Paris',
      career: [
        'Ministre de l\'Économie (2007-2011)',
        'Directrice générale du FMI (2011-2019)',
        'Présidente de la Banque centrale européenne (2019-)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2016',
          description: 'Reconnue coupable de négligence par la Cour de justice de la République dans l\'affaire de l\'arbitrage Tapie. Décision de recourir à un arbitrage privé ayant abouti à un versement de 404 millions d\'euros à Bernard Tapie.',
          penalty: 'Dispensée de peine',
          status: 'Définitif',
          sources: [
            { title: 'Christine Lagarde - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Christine_Lagarde' },
            { title: 'Affaire de l\'arbitrage Tapie - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_de_l%27arbitrage_entre_Bernard_Tapie_et_le_Cr%C3%A9dit_lyonnais' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Dominique de Villepin',
    party: 'lr',
    position: 'Ancien Premier ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1953-11-14',
      birthPlace: 'Rabat (Maroc)',
      career: [
        'Premier ministre (2005-2007)',
        'Ministre des Affaires étrangères (2002-2004)',
        'Ministre de l\'Intérieur (2004-2005)',
        'Secrétaire général de l\'Élysée (1995-2002)'
      ],
      justiceIncidents: [
        {
          type: 'Relaxe',
          date: '2010',
          description: 'Relaxé dans l\'affaire Clearstream 2. Accusé de dénonciation calomnieuse et complicité pour avoir utilisé de faux listings bancaires visant Nicolas Sarkozy. Relaxé en première instance (2010) et confirmé en appel (2011).',
          status: 'Relaxé définitivement',
          sources: [
            { title: 'Dominique de Villepin - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Dominique_de_Villepin' },
            { title: 'Affaire Clearstream 2 - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Clearstream_2' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Michel Noir',
    party: 'lr',
    position: 'Ancien Maire de Lyon',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1944-05-11',
      birthPlace: 'Lyon',
      career: [
        'Maire de Lyon (1989-1995)',
        'Ministre du Commerce extérieur (1988-1990)',
        'Député du Rhône (1983-1995)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '1999',
          description: 'Condamné pour recel d\'abus de biens sociaux dans l\'affaire Botton. Son gendre Pierre Botton avait financé indirectement son activité politique via des entreprises.',
          penalty: '15 mois de prison avec sursis et 30 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Michel Noir - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Michel_Noir' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Gaston Flosse',
    party: 'lr',
    position: 'Ancien Président de la Polynésie française',
    convictions: 2,
    ongoingCases: 0,
    details: {
      birthDate: '1931-06-24',
      birthPlace: 'Rikitea, Polynésie française',
      career: [
        'Président de la Polynésie française (1984-1987, 1991-2004, 2013-2014)',
        'Sénateur de la Polynésie française (1998-2008, 2014-2016)',
        'Secrétaire d\'État chargé du Pacifique Sud (1986-1988)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2014',
          description: 'Condamné pour détournement de fonds publics. Emplois fictifs de personnels rémunérés sur fonds publics de la Polynésie française.',
          penalty: '5 ans de prison avec sursis et inéligibilité',
          status: 'Définitif',
          sources: [
            { title: 'Gaston Flosse - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Gaston_Flosse' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2013',
          description: 'Condamné pour prise illégale d\'intérêts dans l\'attribution de marchés publics en Polynésie française.',
          penalty: 'Prison avec sursis et inéligibilité',
          status: 'Définitif',
          sources: [
            { title: 'Gaston Flosse - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Gaston_Flosse' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Guy Drut',
    party: 'lr',
    position: 'Ancien Ministre de la Jeunesse et des Sports',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1950-12-06',
      birthPlace: 'Oignies',
      career: [
        'Champion olympique du 110m haies (1976)',
        'Député de Seine-et-Marne (1988-2002)',
        'Ministre de la Jeunesse et des Sports (1995-1997)',
        'Membre du Comité international olympique'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2004',
          description: 'Condamné dans l\'affaire des marchés publics d\'Île-de-France pour financement illicite de parti politique. Gracié par le président Jacques Chirac en 2005.',
          penalty: '15 mois de prison avec sursis et 50 000€ d\'amende',
          status: 'Gracié par le Président Chirac',
          sources: [
            { title: 'Guy Drut - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Guy_Drut' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Valérie Pécresse',
    party: 'lr',
    position: 'Présidente de la Région Île-de-France',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1967-07-14',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Ministre de l\'Enseignement supérieur et de la Recherche (2007-2011)',
        'Ministre du Budget (2011-2012)',
        'Présidente de la Région Île-de-France (2015-)',
        'Candidate à l\'élection présidentielle (2022)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2024',
          description: 'Mise en examen par le PNF pour financement illégal de sa campagne présidentielle 2022 (dépassement du plafond de dépenses).',
          status: 'En cours'
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Christian Estrosi',
    party: 'lr',
    position: 'Maire de Nice',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1955-07-01',
      birthPlace: 'Nice',
      career: [
        'Maire de Nice (2008-2017, 2020-)',
        'Président de la Région PACA (2015-2017)',
        'Ministre de l\'Industrie (2009-2010)',
        'Député des Alpes-Maritimes (1988-2017)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Gérard Larcher',
    party: 'lr',
    position: 'Président du Sénat',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1949-09-14',
      birthPlace: 'Flers',
      career: [
        'Président du Sénat (2014-)',
        'Sénateur des Yvelines (1986-)',
        'Maire de Rambouillet (1983-2004)',
        'Ministre délégué au Travail (2004-2005)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Michel Barnier',
    party: 'lr',
    position: 'Ancien Premier ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1951-01-09',
      birthPlace: 'La Tronche',
      career: [
        'Premier ministre (2024)',
        'Commissaire européen (1999-2004, 2010-2014)',
        'Ministre des Affaires étrangères (2004-2005)',
        'Négociateur en chef du Brexit pour l\'UE (2016-2021)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'François Baroin',
    party: 'lr',
    position: 'Ancien Ministre de l\'Économie',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1965-06-21',
      birthPlace: 'Paris',
      career: [
        'Ministre de l\'Économie et des Finances (2011-2012)',
        'Ministre du Budget (2010-2011)',
        'Maire de Troyes (1995-2022)',
        'Président de l\'Association des maires de France (2014-2021)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Michèle Alliot-Marie',
    party: 'lr',
    position: 'Ancienne Ministre des Affaires étrangères',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1946-09-10',
      birthPlace: 'Villeneuve-le-Roi',
      career: [
        'Ministre de la Défense (2002-2007)',
        'Ministre de l\'Intérieur (2007-2009)',
        'Ministre de la Justice (2009-2010)',
        'Ministre des Affaires étrangères (2010-2011)',
        'Députée des Pyrénées-Atlantiques (1986-2012)'
      ],
      justiceIncidents: []
    }
  },

  // ===== PS =====

  {
    id: nextId++,
    name: 'Dominique Strauss-Kahn',
    party: 'ps',
    position: 'Ancien Directeur général du FMI',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1949-04-25',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Ministre de l\'Économie et des Finances (1997-1999)',
        'Directeur général du FMI (2007-2011)',
        'Député du Val-d\'Oise (1986-2007)'
      ],
      justiceIncidents: [
        {
          type: 'Classement',
          date: '2012',
          description: 'Affaire du Sofitel de New York (2011). Accusé d\'agression sexuelle par une femme de chambre. Poursuites pénales abandonnées aux États-Unis.',
          status: 'Classé sans suite',
          sources: [
            { title: 'Dominique Strauss-Kahn - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Dominique_Strauss-Kahn' },
            { title: 'Affaire DSK - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Dominique_Strauss-Kahn' }
          ]
        },
        {
          type: 'Classement',
          date: '2011',
          description: 'Plainte de Tristane Banon pour tentative de viol en 2002. Enquête ouverte en juillet 2011, classée sans suite pour prescription et insuffisance de preuves.',
          status: 'Classé sans suite',
          sources: [
            { title: 'Tristane Banon - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Tristane_Banon' }
          ]
        },
        {
          type: 'Relaxe',
          date: '2015',
          description: 'Acquitté du chef de proxénétisme aggravé dans l\'affaire du Carlton de Lille.',
          status: 'Relaxé',
          sources: [
            { title: 'Dominique Strauss-Kahn - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Dominique_Strauss-Kahn' },
            { title: 'Affaire du Carlton de Lille - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_du_Carlton_de_Lille' }
          ]
        },
        {
          type: 'Non-lieu',
          date: '2001',
          description: 'Mis en examen dans l\'affaire Elf Aquitaine pour complicité et recel d\'abus de biens sociaux. Non-lieu prononcé en novembre 2001.',
          status: 'Non-lieu',
          sources: [
            { title: 'Affaire Elf - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Elf' }
          ]
        },
        {
          type: 'Enquête',
          date: '2021',
          description: 'Enquête préliminaire du Parquet National Financier (PNF) pour blanchiment de fraude fiscale aggravée, dans le cadre des révélations des Pandora Papers. Soupçons de montages financiers via des sociétés au Maroc et aux Émirats arabes unis.',
          status: 'En cours',
          sources: [
            { title: 'Pandora Papers - DSK - ICIJ', url: 'https://www.icij.org/investigations/pandora-papers/former-imf-boss-strauss-kahn-mired-in-french-investigation-sparked-by-pandora-papers-revelations/' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Jean-Noël Guérini',
    party: 'ps',
    position: 'Ancien Président du Conseil général des Bouches-du-Rhône',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1951-05-28',
      birthPlace: 'Marseille',
      career: [
        'Sénateur des Bouches-du-Rhône (2004-)',
        'Président du Conseil général des Bouches-du-Rhône (1998-2015)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2022',
          description: 'Condamné pour prise illégale d\'intérêts dans l\'affaire de la décharge de Septèmes-les-Vallons. Favoritisme dans l\'attribution de marchés de gestion des déchets.',
          penalty: '2 ans de prison avec sursis et 40 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Jean-Noël Guérini - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-No%C3%ABl_Gu%C3%A9rini' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Harlem Désir',
    party: 'ps',
    position: 'Ancien Secrétaire d\'État aux Affaires européennes',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1959-11-25',
      birthPlace: 'Paris',
      career: [
        'Fondateur de SOS Racisme (1984)',
        'Premier secrétaire du PS (2012-2014)',
        'Secrétaire d\'État aux Affaires européennes (2014-2017)',
        'Député européen (1999-2014)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2021',
          description: 'Condamné pour abus de confiance dans la gestion des comptes du Parti socialiste. Dépenses somptuaires injustifiées payées avec les fonds du parti.',
          penalty: '8 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Harlem Désir - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Harlem_D%C3%A9sir' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Jean-Marc Ayrault',
    party: 'ps',
    position: 'Ancien Premier ministre',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1950-01-25',
      birthPlace: 'Maulévrier',
      career: [
        'Premier ministre (2012-2014)',
        'Ministre des Affaires étrangères (2016-2017)',
        'Maire de Nantes (1989-2012)',
        'Député de Loire-Atlantique (1986-2012)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '1997',
          description: 'Condamné pour favoritisme dans l\'attribution de marchés publics de la ville de Nantes.',
          penalty: '6 mois de prison avec sursis et 30 000 francs d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Jean-Marc Ayrault - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Marc_Ayrault' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Julien Dray',
    party: 'ps',
    position: 'Ancien député de l\'Essonne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1955-08-02',
      birthPlace: 'Oran (Algérie)',
      career: [
        'Cofondateur de SOS Racisme (1984)',
        'Député de l\'Essonne (1988-2012)',
        'Conseiller régional d\'Île-de-France'
      ],
      justiceIncidents: [
        {
          type: 'Non-lieu',
          date: '2015',
          description: 'Mis en examen pour abus de confiance et recel d\'abus de biens sociaux en lien avec SOS Racisme et la mutuelle MNEF. Non-lieu prononcé en 2015 après plusieurs années d\'instruction.',
          status: 'Non-lieu',
          sources: [
            { title: 'Julien Dray - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Julien_Dray' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Ségolène Royal',
    party: 'ps',
    position: 'Ancienne Ministre de l\'Écologie',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1953-09-22',
      birthPlace: 'Dakar (Sénégal)',
      career: [
        'Candidate PS à l\'élection présidentielle (2007)',
        'Présidente de la Région Poitou-Charentes (2004-2014)',
        'Ministre de l\'Écologie (2014-2017)',
        'Ambassadrice des pôles arctique et antarctique (2017-2020)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2024',
          description: 'Mise en examen pour détournement de fonds publics dans le cadre de ses fonctions d\'ambassadrice des pôles arctique et antarctique.',
          status: 'En cours',
          sources: [
            { title: 'Ségolène Royal - Wikipedia', url: 'https://fr.wikipedia.org/wiki/S%C3%A9gol%C3%A8ne_Royal' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Laurent Fabius',
    party: 'ps',
    position: 'Président du Conseil constitutionnel',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1946-08-20',
      birthPlace: 'Paris',
      career: [
        'Premier ministre (1984-1986)',
        'Président de l\'Assemblée nationale (1988-1992, 1997-2000)',
        'Ministre des Affaires étrangères (2012-2016)',
        'Président du Conseil constitutionnel (2016-)'
      ],
      justiceIncidents: [
        {
          type: 'Relaxe',
          date: '1999',
          description: 'Acquitté par la Cour de justice de la République dans l\'affaire du sang contaminé. Poursuivi pour homicide involontaire en tant que Premier ministre lors de la contamination de lots de sang par le virus du SIDA dans les années 1980.',
          status: 'Acquitté',
          sources: [
            { title: 'Laurent Fabius - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Laurent_Fabius' },
            { title: 'Affaire du sang contaminé - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_du_sang_contamin%C3%A9' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Jean-Christophe Cambadélis',
    party: 'ps',
    position: 'Ancien premier secrétaire du PS, ancien député de Paris',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Député de Paris (1988-2017)',
        'Premier secrétaire du Parti socialiste (2014-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2006',
          description: 'Condamné définitivement pour recel d\'abus de biens sociaux dans l\'affaire de la MNEF. Avait bénéficié d\'un emploi fictif à la mutuelle étudiante entre 1991 et 1995.',
          penalty: '6 mois de prison avec sursis',
          status: 'Condamnation définitive',
          sources: [
            { title: 'Jean-Christophe Cambadélis - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Christophe_Cambad%C3%A9lis' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Jean-Pierre Kucheida',
    party: 'ps',
    position: 'Ancien député du Pas-de-Calais (1988-2012), ancien maire de Liévin',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Député du Pas-de-Calais (1988-2012)',
        'Maire de Liévin (1992-2014)',
        'Président de la communauté d\'agglomération de Lens-Liévin'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2014',
          description: 'Condamné pour détournement de fonds publics. Avait utilisé les fonds de la communauté d\'agglomération de Lens-Liévin pour des voyages personnels.',
          penalty: '3 ans de prison dont 18 mois ferme, 100 000€ d\'amende',
          status: 'Condamnation définitive',
          sources: [
            { title: 'Jean-Pierre Kucheida - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Pierre_Kucheida' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Patrick Mennucci',
    party: 'ps',
    position: 'Ancien député des Bouches-du-Rhône',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Député des Bouches-du-Rhône (2012-2017)',
        'Conseiller municipal de Marseille'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2017',
          description: 'Condamné pour favoritisme dans l\'attribution de marchés publics.',
          penalty: 'Peine avec sursis',
          status: 'Condamnation définitive',
          sources: [
            { title: 'Patrick Mennucci - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Patrick_Mennucci' }
          ]
        }
      ]
    }
  },

  // ===== MoDem =====

  {
    id: nextId++,
    name: 'François Bayrou',
    party: 'modem',
    position: 'Premier ministre, Président du MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1951-05-25',
      birthPlace: 'Bordères',
      career: [
        'Premier ministre (2024-2025)',
        'Président du MoDem (2007-)',
        'Ministre de l\'Éducation nationale (1993-1997)',
        'Député des Pyrénées-Atlantiques (1986-2012)',
        'Maire de Pau (2014-)',
        'Candidat à l\'élection présidentielle (2002, 2007, 2012)'
      ],
      justiceIncidents: [
        {
          type: 'Relaxe',
          date: '2024',
          description: 'Poursuivi pour complicité de détournement de fonds publics dans l\'affaire des assistants parlementaires du MoDem au Parlement européen. Soupçons d\'emplois fictifs d\'assistants européens affectés à des tâches nationales. Relaxé « au bénéfice du doute » par le tribunal correctionnel de Paris le 5 février 2024.',
          status: 'Relaxé',
          sources: [
            { title: 'François Bayrou - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Fran%C3%A7ois_Bayrou' },
            { title: 'Affaire des assistants parlementaires du MoDem - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_des_assistants_parlementaires_du_MoDem' }
          ]
        }
      ]
    }
  },

  // ===== Ensemble =====

  {
    id: nextId++,
    name: 'Gérald Darmanin',
    party: 'ensemble',
    position: 'Ancien Ministre de l\'Intérieur',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1982-10-11',
      birthPlace: 'Valenciennes',
      career: [
        'Ministre de l\'Intérieur (2020-2024)',
        'Ministre de l\'Action et des Comptes publics (2017-2020)',
        'Député du Nord (2012-2017)',
        'Maire de Tourcoing (2014-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Non-lieu',
          date: '2024',
          description: 'Accusé de viol par une femme. Après plusieurs années d\'enquête, non-lieu prononcé.',
          status: 'Non-lieu',
          sources: [
            { title: 'Gérald Darmanin - Wikipedia', url: 'https://fr.wikipedia.org/wiki/G%C3%A9rald_Darmanin' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Damien Abad',
    party: 'ensemble',
    position: 'Ancien Ministre des Solidarités',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1980-04-05',
      birthPlace: 'Nîmes',
      career: [
        'Ministre des Solidarités (2022)',
        'Président du groupe LR à l\'Assemblée nationale (2019-2022)',
        'Député de l\'Ain (2012-2024)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2024',
          description: 'Mis en examen pour tentative de viol. Accusations de violences sexuelles ayant conduit à son éviction du gouvernement en 2022.',
          status: 'En cours',
          sources: [
            { title: 'Damien Abad - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Damien_Abad' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Éric Woerth',
    party: 'ensemble',
    position: 'Ancien Ministre du Budget',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1956-01-29',
      birthPlace: 'Creil',
      career: [
        'Ministre du Budget (2007-2010)',
        'Ministre du Travail (2010)',
        'Député de l\'Oise (2002-2024)',
        'Trésorier de l\'UMP (2002-2010)'
      ],
      justiceIncidents: [
        {
          type: 'Relaxe',
          date: '2015',
          description: 'Poursuivi dans l\'affaire Bettencourt pour trafic d\'influence et recel. Accusé d\'avoir facilité l\'obtention de la Légion d\'honneur pour le gestionnaire de fortune de Liliane Bettencourt. Relaxé par le tribunal correctionnel de Bordeaux en 2015.',
          status: 'Relaxé',
          sources: [
            { title: 'Éric Woerth - Wikipedia', url: 'https://fr.wikipedia.org/wiki/%C3%89ric_Woerth' },
            { title: 'Affaire Woerth-Bettencourt - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Woerth-Bettencourt' }
          ]
        },
        {
          type: 'Relaxe',
          date: '2025',
          description: 'Poursuivi pour complicité de financement illégal de campagne électorale dans l\'affaire du financement libyen de la campagne présidentielle de Nicolas Sarkozy en 2007. Relaxé par le tribunal correctionnel de Paris en septembre 2025.',
          status: 'Relaxé',
          sources: [
            { title: 'Affaire du financement libyen - France 3', url: 'https://france3-regions.franceinfo.fr/hauts-de-france/oise/soupcons-de-financement-libyen-eric-woerth-depute-de-l-oise-et-ancien-ministre-du-budget-relaxe-3222758.html' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Jean Castex',
    party: 'lr',
    position: 'Ancien Premier ministre',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1965-06-25',
      birthPlace: 'Vic-Fezensac',
      career: [
        'Premier ministre (2020-2022)',
        'Maire de Prades (2008-2020)',
        'PDG de la RATP (2022-)'
      ],
      justiceIncidents: []
    }
  },

  // --- Ministres récurrents (gouvernements 2017-2025) ---

  {
    id: nextId++,
    name: 'Bruno Le Maire',
    party: 'ensemble',
    position: 'Ancien ministre de l\'Économie',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1969-04-15',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Ministre de l\'Économie, des Finances et de la Souveraineté industrielle et numérique (2017-2024)',
        'Ministre de l\'Agriculture (2009-2012)',
        'Député de l\'Eure (2007-2017)',
        'Secrétaire d\'État aux Affaires européennes (2008-2009)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sébastien Lecornu',
    party: 'ensemble',
    position: 'Ministre des Armées',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1986-11-11',
      birthPlace: 'Rouen',
      career: [
        'Ministre des Armées (2022-)',
        'Ministre des Outre-mer (2020-2022)',
        'Secrétaire d\'État à la Transition écologique (2017-2018)',
        'Ministre délégué aux Collectivités territoriales (2018-2020)',
        'Président du conseil départemental de l\'Eure (2015-2017)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Noël Barrot',
    party: 'modem',
    position: 'Ministre de l\'Europe et des Affaires étrangères',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1983-05-15',
      birthPlace: 'Paris',
      career: [
        'Ministre de l\'Europe et des Affaires étrangères (2024-)',
        'Ministre délégué à l\'Europe (2024)',
        'Ministre délégué à la Transition numérique (2022-2024)',
        'Député des Yvelines (2017-2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Catherine Vautrin',
    party: 'ensemble',
    position: 'Ministre du Travail, de la Santé et des Solidarités',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1960-04-22',
      birthPlace: 'Reims',
      career: [
        'Ministre du Travail, de la Santé et des Solidarités (2024)',
        'Ministre du Partenariat avec les Territoires (2024)',
        'Présidente du Grand Reims (2014-)',
        'Députée de la Marne (2002-2017)',
        'Secrétaire d\'État à l\'Intégration (2004-2007)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olivier Dussopt',
    party: 'ensemble',
    position: 'Ancien ministre du Travail',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1978-08-16',
      birthPlace: 'Annonay',
      career: [
        'Ministre du Travail, du Plein emploi et de l\'Insertion (2022-2024)',
        'Ministre délégué aux Comptes publics (2020-2022)',
        'Secrétaire d\'État à la Fonction publique (2017-2020)',
        'Député de l\'Ardèche (2007-2020)',
        'Maire d\'Annonay (2008-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2025',
          description: 'Relaxé en première instance en janvier 2024, puis condamné en appel en février 2025 pour favoritisme dans l\'attribution d\'un contrat de gestion de l\'eau à la société Saur à Annonay (5,6 M€) lorsqu\'il était maire.',
          penalty: '15 000€ d\'amende dont 10 000€ avec sursis',
          status: 'Condamnation définitive',
          sources: [
            { title: 'Olivier Dussopt - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Olivier_Dussopt' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Olivier Véran',
    party: 'ensemble',
    position: 'Ancien ministre de la Santé et Porte-parole du Gouvernement',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1980-04-22',
      birthPlace: 'Saint-Martin-d\'Hères',
      career: [
        'Porte-parole du Gouvernement (2022-2024)',
        'Ministre de la Santé et des Solidarités (2020-2022)',
        'Député de l\'Isère (2017-2020)'
      ],
      justiceIncidents: [
        {
          type: 'Non-lieu',
          date: '2025',
          description: 'Visé par des plaintes pour mise en danger de la vie d\'autrui dans le cadre de la gestion de la crise du Covid-19 (pénurie de masques, mesures tardives). Non-lieu prononcé en juillet 2025.',
          status: 'Non-lieu',
          sources: [
            { title: 'Olivier Véran - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Olivier_V%C3%A9ran' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Agnès Buzyn',
    party: 'ensemble',
    position: 'Ancienne ministre de la Santé',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1962-11-01',
      birthPlace: 'Paris',
      career: [
        'Ministre des Solidarités et de la Santé (2017-2020)',
        'Présidente de la Haute Autorité de santé (2016-2017)',
        'Présidente de l\'Institut national du cancer (2011-2016)'
      ],
      justiceIncidents: [
        {
          type: 'Non-lieu',
          date: '2023',
          description: 'Mise en examen pour mise en danger de la vie d\'autrui dans le cadre de la gestion de la pandémie de Covid-19. La Cour de cassation a annulé la mise en examen le 20 janvier 2023.',
          status: 'Non-lieu',
          sources: [
            { title: 'Agnès Buzyn - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Agn%C3%A8s_Buzyn' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Jean-Michel Blanquer',
    party: 'ensemble',
    position: 'Ancien ministre de l\'Éducation nationale',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1964-12-04',
      birthPlace: 'Paris',
      career: [
        'Ministre de l\'Éducation nationale et de la Jeunesse (2017-2022)',
        'Directeur général de l\'enseignement scolaire (2009-2012)',
        'Recteur de l\'académie de Guyane (2004-2006)',
        'Recteur de l\'académie de Créteil (2007-2009)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicole Belloubet',
    party: 'ensemble',
    position: 'Ancienne ministre de la Justice et de l\'Éducation nationale',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1955-05-15',
      birthPlace: 'Paris',
      career: [
        'Ministre de l\'Éducation nationale et de la Jeunesse (2024)',
        'Garde des Sceaux, ministre de la Justice (2017-2020)',
        'Membre du Conseil constitutionnel (2013-2017)',
        'Rectrice de l\'académie de Limoges (2005-2007)',
        'Rectrice de l\'académie de Toulouse (2007-2013)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Barbara Pompili',
    party: 'ensemble',
    position: 'Ancienne ministre de la Transition écologique',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1975-06-13',
      birthPlace: 'Bois-Bernard',
      career: [
        'Ministre de la Transition écologique (2020-2022)',
        'Secrétaire d\'État à la Biodiversité (2016-2017)',
        'Députée de la Somme (2012-2020)',
        'Présidente de la commission du développement durable de l\'AN (2017-2020)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Florence Parly',
    party: 'ensemble',
    position: 'Ancienne ministre des Armées',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-05-08',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Ministre des Armées (2017-2022)',
        'Secrétaire d\'État au Budget (2000-2002)',
        'Directrice générale de la SNCF Voyageurs (2014-2017)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Yves Le Drian',
    party: 'ps',
    position: 'Ancien ministre des Affaires étrangères',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1947-06-30',
      birthPlace: 'Lorient',
      career: [
        'Ministre de l\'Europe et des Affaires étrangères (2017-2022)',
        'Ministre de la Défense (2012-2017)',
        'Président du conseil régional de Bretagne (2004-2012)',
        'Député du Morbihan (1978-2012)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Najat Vallaud-Belkacem',
    party: 'ps',
    position: 'Ancienne ministre de l\'Éducation nationale',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1977-10-04',
      birthPlace: 'Beni Chiker (Maroc)',
      career: [
        'Ministre de l\'Éducation nationale (2014-2017)',
        'Ministre des Droits des femmes (2012-2014)',
        'Porte-parole du Gouvernement (2012-2014)',
        'Conseillère régionale Rhône-Alpes (2004-2012)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Roselyne Bachelot',
    party: 'ensemble',
    position: 'Ancienne ministre de la Culture',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1946-12-24',
      birthPlace: 'Nevers',
      career: [
        'Ministre de la Culture (2020-2022)',
        'Ministre des Solidarités et de la Cohésion sociale (2010-2012)',
        'Ministre de la Santé (2007-2010)',
        'Ministre de l\'Écologie (2002-2004)',
        'Députée de Maine-et-Loire (1988-2002, 2007-2012)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Amélie de Montchalin',
    party: 'ensemble',
    position: 'Ancienne ministre de la Transition écologique',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1985-06-19',
      birthPlace: 'Lyon',
      career: [
        'Ministre de la Transition écologique (2022)',
        'Ministre de la Transformation et de la Fonction publiques (2020-2022)',
        'Secrétaire d\'État aux Affaires européennes (2019-2020)',
        'Députée de l\'Essonne (2017-2020)',
        'Ministre déléguée aux Comptes publics (2024-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'François Rebsamen',
    party: 'ps',
    position: 'Ministre de l\'Aménagement du territoire',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1951-06-05',
      birthPlace: 'Dijon',
      career: [
        'Ministre de l\'Aménagement du territoire et de la Décentralisation (2024-)',
        'Ministre du Travail (2014-2015)',
        'Sénateur de la Côte-d\'Or (2008-2014)',
        'Maire de Dijon (2001-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Primas',
    party: 'lr',
    position: 'Porte-parole du Gouvernement Bayrou',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1958-07-06',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Porte-parole du Gouvernement (2024-2025)',
        'Sénatrice des Yvelines (2011-2024)',
        'Présidente de la commission des affaires économiques du Sénat (2020-2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Charlotte Parmentier-Lecocq',
    party: 'ensemble',
    position: 'Ministre déléguée aux Personnes handicapées',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1976-05-27',
      birthPlace: 'Lille',
      career: [
        'Ministre déléguée aux Personnes handicapées (2024-)',
        'Députée du Nord (2017-2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stanislas Guerini',
    party: 'ensemble',
    position: 'Ancien ministre de la Transformation et de la Fonction publiques',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1982-05-14',
      birthPlace: 'Paris',
      career: [
        'Ministre de la Transformation et de la Fonction publiques (2022-2024)',
        'Délégué général de La République en Marche (2018-2022)',
        'Député de Paris (2017-2022)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Alain Griset',
    party: 'ensemble',
    position: 'Ancien ministre délégué aux PME',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1955-08-07',
      birthPlace: 'Roubaix',
      career: [
        'Président de l\'Union des entreprises de proximité (U2P)',
        'Ministre délégué aux Petites et Moyennes Entreprises (2020-2021)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2022',
          description: 'Condamné pour omission substantielle de déclaration de patrimoine auprès de la HATVP. A démissionné du gouvernement.',
          penalty: '3 mois de prison avec sursis, 5 ans d\'inéligibilité',
          status: 'Condamnation définitive'
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Laetitia Avia',
    party: 'ensemble',
    position: 'Ancienne députée LREM de Paris',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1985-05-23',
      birthPlace: 'Livry-Gargan',
      career: [
        'Avocate',
        'Députée de Paris (2017-2022)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2023',
          description: 'Condamnée pour harcèlement moral envers ses anciens assistants parlementaires.',
          penalty: '5 mois de prison avec sursis',
          status: 'Condamnation définitive'
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Benoît Simian',
    party: 'ensemble',
    position: 'Ancien député LREM de la Gironde',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1977-09-30',
      birthPlace: 'Bordeaux',
      career: [
        'Député de la Gironde (2017-2022)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2022',
          description: 'Condamné pour harcèlement par ex-conjoint.',
          penalty: '4 mois de prison avec sursis',
          status: 'Condamnation définitive'
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Coralie Dubost',
    party: 'ensemble',
    position: 'Ancienne députée LREM de l\'Hérault',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1983-03-10',
      birthPlace: 'Montpellier',
      career: [
        'Avocate',
        'Députée de l\'Hérault (2017-2022)'
      ],
      justiceIncidents: [
        {
          type: 'Enquête',
          date: '2022',
          description: 'Enquête pour soupçons de frais de taxis excessifs et usage abusif des indemnités de frais de mandat.',
          status: 'En cours'
        }
      ]
    }
  },

  // ===== UDI =====

  {
    id: nextId++,
    name: 'Jean-Christophe Lagarde',
    party: 'udi',
    position: 'Président de l\'UDI, Maire de Drancy',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1967-10-24',
      birthPlace: 'Drancy',
      career: [
        'Président de l\'UDI (2014-)',
        'Député de Seine-Saint-Denis (2002-2022)',
        'Maire de Drancy (2001-)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2020',
          description: 'Mis en examen pour détention d\'armes de catégorie B et de munitions. Armes découvertes lors d\'une perquisition à son domicile.',
          status: 'En cours',
          sources: [
            { title: 'Jean-Christophe Lagarde - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Christophe_Lagarde' }
          ]
        }
      ]
    }
  },

  // ===== DÉPUTÉS ACTUELS DE L'ASSEMBLÉE NATIONALE =====

  // Ensemble / Renaissance
  {
    id: nextId++,
    name: 'Yaël Braun-Pivet',
    party: 'ensemble',
    position: 'Présidente de l\'Assemblée nationale',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1970-10-07',
      birthPlace: 'Paris',
      career: [
        'Présidente de l\'Assemblée nationale (2022-)',
        'Députée des Yvelines (2017-)',
        'Présidente de la commission des Lois (2017-2022)',
        'Avocate'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Sylvain Maillard',
    party: 'ensemble',
    position: 'Député de Paris, président du groupe Renaissance',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1977-01-13',
      birthPlace: 'Montbéliard',
      career: [
        'Député de Paris (2017-)',
        'Président du groupe Renaissance à l\'Assemblée nationale (2024-)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Prisca Thevenot',
    party: 'ensemble',
    position: 'Députée des Hauts-de-Seine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1985-06-21',
      birthPlace: 'Clamart',
      career: [
        'Porte-parole du gouvernement (2024)',
        'Députée des Hauts-de-Seine (2022-)',
        'Porte-parole de Renaissance'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Clément Beaune',
    party: 'ensemble',
    position: 'Député de Paris',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1981-08-14',
      birthPlace: 'Paris',
      career: [
        'Secrétaire d\'État aux Affaires européennes (2020-2022)',
        'Ministre des Transports (2022-2024)',
        'Député de Paris (2024-)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Sacha Houlié',
    party: 'ps',
    position: 'Ancien député de la Vienne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1989-01-24',
      birthPlace: 'Poitiers',
      career: [
        'Député de la Vienne (2017-2024)',
        'Président de la commission des Lois (2022-2024)'
      ],
      justiceIncidents: []
    }
  },

  // RN
  {
    id: nextId++,
    name: 'Jean-Philippe Tanguy',
    party: 'rn',
    position: 'Député de la Somme',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1978-01-15',
      birthPlace: 'Arras',
      career: [
        'Député de la Somme (2022-)',
        'Responsable du programme économique du RN'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Hélène Laporte',
    party: 'rn',
    position: 'Députée du Lot-et-Garonne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1973-05-30',
      birthPlace: 'Agen',
      career: [
        'Députée européenne (2019-2022)',
        'Députée du Lot-et-Garonne (2022-)',
        'Vice-présidente de l\'Assemblée nationale (2022-)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Laurent Jacobelli',
    party: 'rn',
    position: 'Député de la Moselle',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1978-04-12',
      birthPlace: 'Metz',
      career: [
        'Député de la Moselle (2022-)',
        'Porte-parole du Rassemblement national'
      ],
      justiceIncidents: []
    }
  },

  // LR
  {
    id: nextId++,
    name: 'Annie Genevard',
    party: 'lr',
    position: 'Députée du Doubs',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1956-07-07',
      birthPlace: 'Pontarlier',
      career: [
        'Ministre de l\'Éducation nationale (2024)',
        'Députée du Doubs (2012-)',
        'Secrétaire générale de LR (2019-2022)',
        'Vice-présidente de l\'Assemblée nationale (2017-2022)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Olivier Marleix',
    party: 'lr',
    position: 'Député d\'Eure-et-Loir, président du groupe LR',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1970-01-04',
      birthPlace: 'Chartres',
      career: [
        'Député d\'Eure-et-Loir (2012-)',
        'Président du groupe LR à l\'Assemblée nationale (2022-)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'André Santini',
    party: 'lr',
    position: 'Maire d\'Issy-les-Moulineaux, ancien secrétaire d\'État',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Maire d\'Issy-les-Moulineaux (1980-)',
        'Secrétaire d\'État à la Fonction publique (2007-2009)',
        'Député des Hauts-de-Seine (1988-2007)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2014',
          description: 'Condamné pour emploi fictif de son épouse comme assistante parlementaire.',
          penalty: '2 ans de prison avec sursis',
          status: 'Condamnation définitive'
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Pierre Lellouche',
    party: 'lr',
    position: 'Ancien secrétaire d\'État aux Affaires européennes, ancien député de Paris',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Secrétaire d\'État aux Affaires européennes (2009-2010)',
        'Secrétaire d\'État au Commerce extérieur (2010-2012)',
        'Député de Paris (1993-2017)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamné pour fraude fiscale.',
          penalty: '2 ans de prison avec sursis',
          status: 'Condamnation définitive'
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'François Léotard',
    party: 'lr',
    position: 'Ancien ministre de la Défense',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Ministre de la Défense (1993-1995)',
        'Ministre de la Culture (1986-1988)',
        'Président du Parti républicain (1982-1997)',
        'Député du Var (1978-2002)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2004',
          description: 'Condamné dans l\'affaire des frégates de Taïwan (affaire La Fayette) pour abus de confiance.',
          penalty: '10 mois de prison avec sursis',
          status: 'Condamnation définitive'
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'André Rossinot',
    party: 'lr',
    position: 'Ancien ministre, maire de Nancy',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Ministre de la Fonction publique (1993-1995)',
        'Maire de Nancy (1983-2014)',
        'Président de la Communauté urbaine du Grand Nancy (1996-2014)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2005',
          description: 'Condamné pour recel d\'abus de biens sociaux dans l\'affaire des Mutuelles de Lorraine.',
          penalty: '6 mois de prison avec sursis',
          status: 'Condamnation définitive'
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Dominique Perben',
    party: 'lr',
    position: 'Ancien garde des Sceaux',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Garde des Sceaux, ministre de la Justice (2002-2005)',
        'Ministre des Transports (2005-2007)',
        'Député du Rhône (1986-2002)',
        'Maire de Chalon-sur-Saône (1983-2001)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2019',
          description: 'Condamné pour manquement aux obligations déclaratives auprès de la HATVP.',
          penalty: '1 an d\'inéligibilité',
          status: 'Condamnation définitive'
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Aurélien Pradié',
    party: 'ni',
    position: 'Député du Lot',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1986-12-22',
      birthPlace: 'Cahors',
      career: [
        'Député du Lot (2017-)',
        'Vice-président de l\'Assemblée nationale',
        'Secrétaire général adjoint de LR (2019-2022)'
      ],
      justiceIncidents: []
    }
  },

  // PS
  {
    id: nextId++,
    name: 'Boris Vallaud',
    party: 'ps',
    position: 'Député des Landes, président du groupe PS',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1976-12-16',
      birthPlace: 'Bayonne',
      career: [
        'Député des Landes (2017-)',
        'Président du groupe Socialistes à l\'Assemblée nationale (2022-)',
        'Secrétaire général adjoint de l\'Élysée (2014-2017)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Valérie Rabault',
    party: 'ps',
    position: 'Députée de Tarn-et-Garonne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1971-05-05',
      birthPlace: 'Castelsarrasin',
      career: [
        'Députée de Tarn-et-Garonne (2012-)',
        'Présidente du groupe PS à l\'Assemblée nationale (2018-2022)',
        'Rapporteure générale du budget (2014-2017)'
      ],
      justiceIncidents: []
    }
  },

  // LFI
  {
    id: nextId++,
    name: 'Adrien Quatennens',
    party: 'lfi',
    position: 'Député du Nord',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1990-03-23',
      birthPlace: 'Lille',
      career: [
        'Député du Nord (2017-)',
        'Coordinateur de La France Insoumise (2019-2022)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2022',
          description: 'Condamné pour violences conjugales envers son épouse. Reconnu coupable de violences sans incapacité de travail par le tribunal correctionnel de Lille.',
          penalty: '4 mois de prison avec sursis',
          status: 'Définitif',
          sources: [
            { title: 'Adrien Quatennens - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Adrien_Quatennens' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Antoine Léaument',
    party: 'lfi',
    position: 'Député de l\'Essonne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1993-04-30',
      birthPlace: 'Corbeil-Essonnes',
      career: [
        'Député de l\'Essonne (2022-)',
        'Responsable de la communication numérique de LFI'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Clémence Guetté',
    party: 'lfi',
    position: 'Députée du Val-de-Marne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1991-09-17',
      birthPlace: 'Créteil',
      career: [
        'Députée du Val-de-Marne (2022-)',
        'Coordinatrice du programme de LFI'
      ],
      justiceIncidents: []
    }
  },

  // MoDem
  {
    id: nextId++,
    name: 'Jean-Paul Mattei',
    party: 'modem',
    position: 'Député des Pyrénées-Atlantiques, président du groupe MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-06-15',
      birthPlace: 'Pau',
      career: [
        'Député des Pyrénées-Atlantiques (2017-)',
        'Président du groupe Démocrate (MoDem) à l\'Assemblée nationale (2022-)',
        'Avocat fiscaliste'
      ],
      justiceIncidents: []
    }
  },

  // EELV / Écologiste
  {
    id: nextId++,
    name: 'Cyrielle Chatelain',
    party: 'ecolo',
    position: 'Députée de l\'Isère, présidente du groupe Écologiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1987-08-21',
      birthPlace: 'Grenoble',
      career: [
        'Députée de l\'Isère (2022-)',
        'Présidente du groupe Écologiste et Social à l\'Assemblée nationale (2022-)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Julien Bayou',
    party: 'ecolo',
    position: 'Ancien député de Paris (a quitté EELV en 2023)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1980-08-12',
      birthPlace: 'Valence',
      career: [
        'Député de Paris (2022-2024)',
        'Secrétaire national d\'EELV (2019-2022)',
        'Conseiller régional d\'Île-de-France (2015-2022)'
      ],
      justiceIncidents: []
    }
  },

  // PCF / Gauche Démocrate et Républicaine
  {
    id: nextId++,
    name: 'Stéphane Peu',
    party: 'pcf',
    position: 'Député de Seine-Saint-Denis',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-06-05',
      birthPlace: 'Saint-Denis',
      career: [
        'Député de Seine-Saint-Denis (2017-)',
        'Adjoint au maire de Saint-Denis (2001-2017)'
      ],
      justiceIncidents: []
    }
  },

  // Horizons / Centre
  {
    id: nextId++,
    name: 'Laurent Marcangeli',
    party: 'horizons',
    position: 'Député de Corse-du-Sud, président du groupe Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1980-01-25',
      birthPlace: 'Ajaccio',
      career: [
        'Ministre de la Fonction publique (2024-2025)',
        'Député de Corse-du-Sud (2017-)',
        'Président du groupe Horizons à l\'Assemblée nationale (2022-2024)',
        'Maire d\'Ajaccio (2014-2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Joël Guerriau',
    party: 'horizons',
    position: 'Sénateur de Loire-Atlantique (exclu d\'Horizons)',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1954-08-17',
      birthPlace: 'Nantes',
      career: [
        'Sénateur de Loire-Atlantique (2011-)',
        'Maire de Saint-Herblain (2001-2014)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2023-11',
          description: 'Mis en examen pour avoir administré de l\'ecstasy à sa collègue sénatrice Sandrine Josso dans une coupe de champagne.',
          charges: ['Administration de substance à l\'insu d\'une personne'],
          status: 'En cours'
        }
      ]
    }
  },

  // Divers - Députés notables avec affaires judiciaires
  {
    id: nextId++,
    name: 'Nicolas Dupont-Aignan',
    party: 'lr',
    position: 'Député de l\'Essonne (Debout la France)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1961-03-07',
      birthPlace: 'Paris',
      career: [
        'Député de l\'Essonne (1997-)',
        'Maire d\'Yerres (1995-2017)',
        'Président de Debout la France (2008-)',
        'Candidat à l\'élection présidentielle (2012, 2017, 2022)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Thierry Solère',
    party: 'ensemble',
    position: 'Ancien député des Hauts-de-Seine',
    convictions: 0,
    ongoingCases: 1,
    details: {
      birthDate: '1971-06-17',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Député des Hauts-de-Seine (2012-2022)',
        'Conseiller politique d\'Emmanuel Macron'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2019',
          description: 'Mis en examen pour fraude fiscale, détournement de fonds publics, abus de confiance, trafic d\'influence et recel de violation du secret professionnel.',
          status: 'En cours',
          sources: [
            { title: 'Thierry Solère - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Thierry_Sol%C3%A8re' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Mustapha Laabid',
    party: 'ensemble',
    position: 'Ancien député d\'Ille-et-Vilaine',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1971-07-12',
      birthPlace: 'Rennes',
      career: [
        'Député d\'Ille-et-Vilaine (2017-2020)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2021',
          description: 'Condamné pour abus de confiance dans la gestion d\'une association. Détournement de fonds associatifs à des fins personnelles.',
          penalty: '8 mois de prison avec sursis et 3 ans d\'inéligibilité',
          status: 'Définitif',
          sources: [
            { title: 'Mustapha Laabid - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Mustapha_Laabid' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'M\'jid El Guerrab',
    party: 'ensemble',
    position: 'Ancien député des Français de l\'étranger',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1980-08-10',
      birthPlace: 'Meknès (Maroc)',
      career: [
        'Député des Français de l\'étranger (2017-2022)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2022',
          description: 'Condamné pour violences volontaires avec arme (coup de casque) sur Boris Faure, cadre du PS, en 2017.',
          penalty: '1 an de prison avec sursis',
          status: 'Définitif',
          sources: [
            { title: 'M\'jid El Guerrab - Wikipedia', url: 'https://fr.wikipedia.org/wiki/M%27jid_El_Guerrab' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Joël Giraud',
    party: 'ensemble',
    position: 'Ancien député des Hautes-Alpes',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1959-10-14',
      birthPlace: 'Gap',
      career: [
        'Député des Hautes-Alpes (2002-2022)',
        'Rapporteur général du budget (2017-2020)',
        'Secrétaire d\'État à la Ruralité (2020-2022)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Stéphane Claireaux',
    party: 'ensemble',
    position: 'Ancien député de Saint-Pierre-et-Miquelon',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1964-06-23',
      birthPlace: 'Saint-Pierre-et-Miquelon',
      career: [
        'Député de Saint-Pierre-et-Miquelon (2017-2022)',
        'Maire de Saint-Pierre (2014-2020)'
      ],
      justiceIncidents: []
    }
  },

  {
    id: nextId++,
    name: 'Moetai Brotherson',
    party: 'ensemble',
    position: 'Président de la Polynésie française',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1969-04-20',
      birthPlace: 'Papeete, Polynésie française',
      career: [
        'Président de la Polynésie française (2023-)',
        'Député de la Polynésie française (2017-2023)'
      ],
      justiceIncidents: []
    }
  },

  // ===== DÉPUTÉS ACTUELS - COMPLÉMENTS =====

  // --- RN ---
  {
    id: nextId++,
    name: 'Franck Allisio',
    party: 'rn',
    position: 'Député des Bouches-du-Rhône',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1974-03-22',
      birthPlace: 'Marseille',
      career: [
        'Député des Bouches-du-Rhône (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bruno Bilde',
    party: 'rn',
    position: 'Député du Pas-de-Calais',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1975-12-25',
      birthPlace: 'Lens',
      career: [
        'Député du Pas-de-Calais (2017-)',
        'Député européen (2019-2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thomas Ménagé',
    party: 'rn',
    position: 'Député du Loiret',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1994-09-15',
      birthPlace: 'Orléans',
      career: [
        'Député du Loiret (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christine Engrand',
    party: 'ni',
    position: 'Députée du Pas-de-Calais',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-01-17',
      birthPlace: 'Boulogne-sur-Mer',
      career: [
        'Députée du Pas-de-Calais (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emeric Salmon',
    party: 'rn',
    position: 'Député de la Somme',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1979-05-10',
      birthPlace: 'Amiens',
      career: [
        'Député de la Somme (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexandre Sabatou',
    party: 'rn',
    position: 'Député de l\'Oise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1996-03-12',
      birthPlace: 'Beauvais',
      career: [
        'Député de l\'Oise (2022-)',
        'Conseiller régional des Hauts-de-France'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Lottiaux',
    party: 'rn',
    position: 'Député du Var',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-06-20',
      birthPlace: 'Toulon',
      career: [
        'Député du Var (2022-)',
        'Ancien haut fonctionnaire'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Kévin Pfeffer',
    party: 'rn',
    position: 'Député de la Moselle',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1989-07-14',
      birthPlace: 'Forbach',
      career: [
        'Député de la Moselle (2022-)',
        'Conseiller municipal de Forbach'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexis Jolly',
    party: 'rn',
    position: 'Député du Val-d\'Oise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1990-02-18',
      birthPlace: 'Pontoise',
      career: [
        'Député du Val-d\'Oise (2024-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Florence Goulet',
    party: 'rn',
    position: 'Députée de la Meuse',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1966-04-03',
      birthPlace: 'Bar-le-Duc',
      career: [
        'Sénatrice de la Meuse (2020-2022)',
        'Députée de la Meuse (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frédéric Boccaletti',
    party: 'rn',
    position: 'Député du Var',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1968-08-15',
      birthPlace: 'Toulon',
      career: [
        'Député du Var (2022-)',
        'Conseiller régional de PACA'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Bentz',
    party: 'rn',
    position: 'Député de la Sarthe',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1988-12-01',
      birthPlace: 'Le Mans',
      career: [
        'Député de la Sarthe (2024-)'
      ],
      justiceIncidents: []
    }
  },

  // --- Ensemble / Renaissance ---
  {
    id: nextId++,
    name: 'Guillaume Kasbarian',
    party: 'ensemble',
    position: 'Ministre du Logement, député d\'Eure-et-Loir',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1987-10-01',
      birthPlace: 'Chartres',
      career: [
        'Député d\'Eure-et-Loir (2017-)',
        'Ministre délégué au Logement (2024-)',
        'Rapporteur de la loi anti-squat'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Maud Bregeon',
    party: 'ensemble',
    position: 'Porte-parole du gouvernement, députée des Hauts-de-Seine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1990-04-22',
      birthPlace: 'Boulogne-Billancourt',
      career: [
        'Députée des Hauts-de-Seine (2022-)',
        'Porte-parole du gouvernement (2024-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Karl Olive',
    party: 'ensemble',
    position: 'Député des Yvelines',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1970-12-02',
      birthPlace: 'Poissy',
      career: [
        'Député des Yvelines (2022-)',
        'Maire de Poissy (2014-2022)',
        'Journaliste sportif'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Benjamin Haddad',
    party: 'ensemble',
    position: 'Député de Paris',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1985-09-10',
      birthPlace: 'Paris',
      career: [
        'Député de Paris (2022-)',
        'Secrétaire d\'État chargé de l\'Europe (2024-)',
        'Directeur Europe à l\'Atlantic Council'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie Lebec',
    party: 'ensemble',
    position: 'Députée des Yvelines',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1983-01-15',
      birthPlace: 'Versailles',
      career: [
        'Députée des Yvelines (2017-)',
        'Ministre des Relations avec le Parlement (2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Astrid Panosyan-Bouvet',
    party: 'ensemble',
    position: 'Ministre du Travail, députée de Paris',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1978-03-15',
      birthPlace: 'Paris',
      career: [
        'Députée de Paris (2022-)',
        'Ministre du Travail et de l\'Emploi (2024-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Mathieu Lefèvre',
    party: 'ensemble',
    position: 'Député du Val-de-Marne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1986-05-20',
      birthPlace: 'Créteil',
      career: [
        'Député du Val-de-Marne (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pieyre-Alexandre Anglade',
    party: 'ensemble',
    position: 'Député des Français de l\'étranger',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1982-11-05',
      birthPlace: 'Paris',
      career: [
        'Député des Français établis hors de France (2017-)'
      ],
      justiceIncidents: []
    }
  },

  // --- LR ---
  {
    id: nextId++,
    name: 'Raphaël Schellenberger',
    party: 'ni',
    position: 'Député du Haut-Rhin',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1987-06-15',
      birthPlace: 'Mulhouse',
      career: [
        'Député du Haut-Rhin (2017-)',
        'Président de la commission d\'enquête sur la sûreté nucléaire'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Juvin',
    party: 'lr',
    position: 'Député des Hauts-de-Seine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1964-02-17',
      birthPlace: 'Paris',
      career: [
        'Député des Hauts-de-Seine (2022-)',
        'Maire de La Garenne-Colombes (2008-)',
        'Chef des urgences de l\'hôpital Georges-Pompidou',
        'Député européen (2009-2022)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thibault Bazin',
    party: 'lr',
    position: 'Député de Meurthe-et-Moselle',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1981-08-30',
      birthPlace: 'Nancy',
      career: [
        'Député de Meurthe-et-Moselle (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Virginie Duby-Muller',
    party: 'lr',
    position: 'Députée de Haute-Savoie',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1978-09-23',
      birthPlace: 'Annemasse',
      career: [
        'Députée de Haute-Savoie (2012-)',
        'Vice-présidente de l\'Assemblée nationale'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Ian Boucard',
    party: 'lr',
    position: 'Député du Territoire de Belfort',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1987-02-28',
      birthPlace: 'Belfort',
      career: [
        'Député du Territoire de Belfort (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julien Dive',
    party: 'lr',
    position: 'Député de l\'Aisne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1985-12-15',
      birthPlace: 'Saint-Quentin',
      career: [
        'Député de l\'Aisne (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Vincent Descoeur',
    party: 'lr',
    position: 'Député du Cantal',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1961-04-18',
      birthPlace: 'Aurillac',
      career: [
        'Député du Cantal (2017-)',
        'Président du Conseil départemental du Cantal (2008-2017)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre-Henri Dumont',
    party: 'lr',
    position: 'Député du Pas-de-Calais',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1987-06-10',
      birthPlace: 'Calais',
      career: [
        'Député du Pas-de-Calais (2017-)',
        'Maire de Marck (2014-2017)'
      ],
      justiceIncidents: []
    }
  },

  // --- PS ---
  {
    id: nextId++,
    name: 'Jérôme Guedj',
    party: 'ps',
    position: 'Député de l\'Essonne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1972-04-21',
      birthPlace: 'Paris',
      career: [
        'Député de l\'Essonne (2022-)',
        'Président du Conseil général de l\'Essonne (2011-2015)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Brun',
    party: 'ps',
    position: 'Député de l\'Eure',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1979-05-15',
      birthPlace: 'Évreux',
      career: [
        'Député de l\'Eure (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Inaki Echaniz',
    party: 'ps',
    position: 'Député des Pyrénées-Atlantiques',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1988-07-10',
      birthPlace: 'Bayonne',
      career: [
        'Député des Pyrénées-Atlantiques (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Arthur Delaporte',
    party: 'ps',
    position: 'Député du Calvados',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1991-12-08',
      birthPlace: 'Caen',
      career: [
        'Député du Calvados (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christine Pirès-Beaune',
    party: 'ps',
    position: 'Députée du Puy-de-Dôme',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1959-12-02',
      birthPlace: 'Clermont-Ferrand',
      career: [
        'Députée du Puy-de-Dôme (2012-)',
        'Spécialiste des questions fiscales'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Fatiha Keloua Hachi',
    party: 'ps',
    position: 'Députée de Seine-Saint-Denis',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1976-03-20',
      birthPlace: 'Saint-Denis',
      career: [
        'Députée de Seine-Saint-Denis (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Dominique Potier',
    party: 'ps',
    position: 'Député de Meurthe-et-Moselle',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1963-09-10',
      birthPlace: 'Nancy',
      career: [
        'Député de Meurthe-et-Moselle (2012-)',
        'Rapporteur de la loi sur le devoir de vigilance'
      ],
      justiceIncidents: []
    }
  },

  // --- LFI ---
  {
    id: nextId++,
    name: 'Louis Boyard',
    party: 'lfi',
    position: 'Député du Val-de-Marne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '2000-08-26',
      birthPlace: 'Ivry-sur-Seine',
      career: [
        'Député du Val-de-Marne (2022-)',
        'Ancien chroniqueur de TPMP'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Danièle Obono',
    party: 'lfi',
    position: 'Députée de Paris',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1974-08-05',
      birthPlace: 'Libreville (Gabon)',
      career: [
        'Députée de Paris (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thomas Portes',
    party: 'lfi',
    position: 'Député de Seine-Saint-Denis',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1986-07-22',
      birthPlace: 'Paris',
      career: [
        'Député de Seine-Saint-Denis (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophia Chikirou',
    party: 'lfi',
    position: 'Députée de Paris',
    convictions: 0,
    ongoingCases: 2,
    details: {
      birthDate: '1977-01-12',
      birthPlace: 'Paris',
      career: [
        'Députée de Paris (2024-)',
        'Directrice de campagne de Jean-Luc Mélenchon (2012, 2017)',
        'Fondatrice de Mediascop'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2024-09',
          charges: ['Escroquerie aggravée', 'Abus de biens sociaux'],
          description: 'Mise en examen pour escroquerie aggravée dans l\'affaire des comptes de campagne de LFI en 2017. Sa société Mediascop est soupçonnée d\'avoir surfacturé des prestations pour obtenir des remboursements publics plus élevés.',
          status: 'En cours',
          sources: [
            { title: 'France Bleu', url: 'https://www.francebleu.fr/infos/faits-divers-justice/comptes-de-campagne-de-lfi-en-2017-sophia-chikirou-mise-en-examen-pour-escroquerie-aggravee-6147820' },
            { title: 'Europe 1', url: 'https://www.europe1.fr/Police-Justice/comptes-de-campagne-lfi-2017-sophia-chikirou-mise-en-examen-pour-escroquerie-aggravee-4269260' }
          ]
        },
        {
          type: 'Mise en examen',
          date: '2025',
          description: 'Renvoyée en procès pour escroquerie dans l\'affaire Le Média. Soupçonnée d\'avoir tenté de transférer plus de 67 000 euros vers sa société Mediascop au détriment du site d\'information qu\'elle avait cofondé.',
          status: 'En cours - Procès prévu mai 2026',
          sources: [
            { title: 'France Bleu', url: 'https://www.francebleu.fr/infos/faits-divers-justice/la-deputee-lfi-sophia-chikirou-jugee-en-mai-pour-escroquerie-2367700' },
            { title: 'Europe 1', url: 'https://www.europe1.fr/politique/candidate-lfi-a-la-mairie-de-paris-sophia-chikirou-sera-jugee-pour-escroquerie-877414' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Hadrien Clouet',
    party: 'lfi',
    position: 'Député de Haute-Garonne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1988-03-15',
      birthPlace: 'Toulouse',
      career: [
        'Député de Haute-Garonne (2022-)',
        'Sociologue, chercheur'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sébastien Delogu',
    party: 'lfi',
    position: 'Député des Bouches-du-Rhône',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1987-04-20',
      birthPlace: 'Marseille',
      career: [
        'Député des Bouches-du-Rhône (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aurélien Saintoul',
    party: 'lfi',
    position: 'Député des Hauts-de-Seine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1984-06-10',
      birthPlace: 'Nanterre',
      career: [
        'Député des Hauts-de-Seine (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Carlos Martens Bilongo',
    party: 'lfi',
    position: 'Député du Val-d\'Oise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1986-09-05',
      birthPlace: 'Kinshasa (RDC)',
      career: [
        'Député du Val-d\'Oise (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Ersilia Soudais',
    party: 'lfi',
    position: 'Députée de Seine-et-Marne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1978-11-25',
      birthPlace: 'Meaux',
      career: [
        'Députée de Seine-et-Marne (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Arnaud Le Gall',
    party: 'lfi',
    position: 'Député du Val-d\'Oise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1973-02-20',
      birthPlace: 'Paris',
      career: [
        'Député du Val-d\'Oise (2022-)',
        'Journaliste et géopolitologue'
      ],
      justiceIncidents: []
    }
  },

  // --- Ecolo ---
  {
    id: nextId++,
    name: 'Eva Sas',
    party: 'ecolo',
    position: 'Députée de Paris',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1970-04-05',
      birthPlace: 'Paris',
      career: [
        'Députée de Paris (2022-)',
        'Députée de l\'Essonne (2012-2017)',
        'Porte-parole d\'EELV'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie-Charlotte Garin',
    party: 'ecolo',
    position: 'Députée du Rhône',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1993-08-12',
      birthPlace: 'Lyon',
      career: [
        'Députée du Rhône (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Lisa Belluco',
    party: 'ecolo',
    position: 'Députée de la Vienne',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1990-01-20',
      birthPlace: 'Poitiers',
      career: [
        'Députée de la Vienne (2022-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Thierry',
    party: 'ecolo',
    position: 'Député de la Gironde',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1977-10-10',
      birthPlace: 'Bordeaux',
      career: [
        'Député de la Gironde (2024-)',
        'Vice-président de la Région Nouvelle-Aquitaine (2016-2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Benjamin Lucas-Lundy',
    party: 'ecolo',
    position: 'Député des Yvelines',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1988-05-02',
      birthPlace: 'Versailles',
      career: [
        'Député des Yvelines (2022-)',
        'Secrétaire national de Génération.s (2018-2022)'
      ],
      justiceIncidents: []
    }
  },

  // --- PCF ---
  {
    id: nextId++,
    name: 'Sébastien Jumel',
    party: 'pcf',
    position: 'Député de Seine-Maritime',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1971-09-20',
      birthPlace: 'Dieppe',
      career: [
        'Député de Seine-Maritime (2017-)',
        'Maire de Dieppe (2008-2017)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Sansu',
    party: 'pcf',
    position: 'Député du Cher',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1971-03-05',
      birthPlace: 'Bourges',
      career: [
        'Député du Cher (2012-2017, 2022-)',
        'Maire de Vierzon (2008-2020)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Soumya Bourouaha',
    party: 'pcf',
    position: 'Députée de Seine-Saint-Denis',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1974-08-15',
      birthPlace: 'Saint-Denis',
      career: [
        'Députée de Seine-Saint-Denis (2022-)'
      ],
      justiceIncidents: []
    }
  },

  // --- MoDem ---
  {
    id: nextId++,
    name: 'Erwan Balanant',
    party: 'modem',
    position: 'Député du Finistère',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1970-04-25',
      birthPlace: 'Quimperlé',
      career: [
        'Député du Finistère (2017-)',
        'Rapporteur de la loi contre le harcèlement scolaire'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Vigier',
    party: 'modem',
    position: 'Député d\'Eure-et-Loir',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1958-11-14',
      birthPlace: 'Châteaudun',
      career: [
        'Député d\'Eure-et-Loir (2002-)',
        'Secrétaire d\'État aux Outre-mer (2023-2024)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bruno Millienne',
    party: 'modem',
    position: 'Député des Yvelines',
    convictions: 0,
    ongoingCases: 0,
    details: {
      birthDate: '1959-07-20',
      birthPlace: 'Mantes-la-Jolie',
      career: [
        'Député des Yvelines (2017-)'
      ],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexandre Dufosset',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexandre Loubet',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anthony Boulogne',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Antoine Golliot',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Antoine Villedieu',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Auguste Evrard',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aurélien Dutremble',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aurélien Lopez-Liguori',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bruno Clavet',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bryan Masson',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christian Girard',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Barthès',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'David Magnier',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Eddy Casterman',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Blairy',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Fouquart',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Taché',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frank Giletti',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frédéric Falcon',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frédéric Weber',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frédéric-Pierre Vos',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Gaëtan Dussausaye',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Guillaume Bigot',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Guillaume Florquin',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Hervé de Lépinau',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jocelyn Dessigny',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jonathan Géry',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jordan Guitton',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jorys Bovet',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Joseph Rivière',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'José Beaurain',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'José Gonzalez',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julien Gabarron',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julien Guibert',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julien Limongi',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julien Rancoule',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jérôme Buisson',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Kévin Mauvieux',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Lionel Tivoli',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marc de Fleurian',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Matthias Renault',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Matthieu Marchio',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Maxime Amblard',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Michaël Taverne',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Michel Guiniot',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Dragon',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Meizonnet',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pascal Jenft',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pascal Markowsky',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Patrice Martin',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Ballard',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Schreck',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre Meurin',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'René Lioret',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Robert Le Bourgeois',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Roger Chudeau',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Romain Baubry',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Romain Tonussi',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Serge Muller',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Rambaud',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sébastien Humbert',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thibaut Monnier',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thierry Frappé',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thierry Perez',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thierry Tesson',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Théo Bernhardt',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Timothée Houssin',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: [
        {
          type: 'Condamnation (première instance)',
          date: '2025-03-31',
          description: 'Condamné dans l\'affaire des assistants parlementaires du FN au Parlement européen. Employé fictivement comme assistant de Nicolas Bay.',
          penalty: '8 mois de prison avec sursis, 1 an d\'inéligibilité',
          status: 'Appel en cours'
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Yoann Gillet',
    party: 'rn',
    position: 'Député - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexandra Masson',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anaïs Sabatini',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anchya Bamana',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Angélique Ranc',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anne Sicard',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Béatrice Roullaud',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bénédicte Auzanot',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Caroline Colombier',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Caroline Parmentier',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Catherine Rimbert',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christine Loir',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Claire Marais-Beuil',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Florence Joubert',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Gisèle Lelouis',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Géraldine Grangier',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Joëlle Mélin',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julie Lechanteux',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Katiana Levavasseur',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laurence Robert-Dehault',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Lisette Pollet',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Manon Bouquin',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie-France Lorho',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marine Hamelet',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Michèle Martinez',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Monique Griseti',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nadine Lechon',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nathalie Da Conceição Carvalho',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pascale Bordes',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandrine Dogor-Such',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Blanc',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie-Laurence Roy',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphanie Galzy',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sylvie Josserand',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Tiffany Joncour',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Yaël Ménache',
    party: 'rn',
    position: 'Députée - Rassemblement National',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Gilbert Collard',
    party: 'ni',
    position: 'Ancien député et eurodéputé (ex-RN, ex-Reconquête)',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: ['Avocat', 'Député du Gard (2017-2022)', 'Eurodéputé RN puis Reconquête (2022-2024)'],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2017',
          description: 'Condamné définitivement pour injure publique.',
          penalty: '5 000€ d\'amende',
          status: 'Condamnation définitive'
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'David Rachline',
    party: 'rn',
    position: 'Sénateur du Var, maire de Fréjus',
    convictions: 0,
    ongoingCases: 2,
    details: {
      career: [
        'Sénateur du Var (2014-)',
        'Maire de Fréjus (2014-)',
        'Vice-président du RN (2022-2025, démission décembre 2025)'
      ],
      justiceIncidents: [
        {
          type: 'Relaxe',
          date: '2026-01-27',
          description: 'Poursuivi pour prise illégale d\'intérêts en tant que maire de Fréjus. Relaxé par le tribunal correctionnel de Draguignan le 27 janvier 2026. Le parquet a fait appel le 3 février 2026.',
          status: 'Relaxé (appel du parquet)',
          sources: [
            { title: 'France 3 - Rachline relaxé', url: 'https://france3-regions.franceinfo.fr/provence-alpes-cote-d-azur/var/frejus-et-saint-raphael/le-maire-rn-de-frejus-david-rachline-juge-pour-prise-illegale-d-interets-relaxe-3288783.html' },
            { title: 'FranceInfo - Parquet fait appel', url: 'https://www.franceinfo.fr/politique/prise-illegale-d-interets-le-parquet-fait-appel-de-la-relaxe-du-maire-rn-de-frejus-david-rachline_7780205.html' }
          ]
        },
        {
          type: 'Enquête',
          date: '2024-01',
          description: 'Enquête du Parquet National Financier pour corruption active et passive d\'élu, favoritisme et recel de favoritisme. Perquisitions à la mairie de Fréjus le 4 mars 2025. Soupçons de marchés publics truqués au profit d\'un entrepreneur local.',
          status: 'En cours',
          sources: [
            { title: 'FranceInfo - Perquisitions mairie Fréjus', url: 'https://www.franceinfo.fr/societe/justice/des-perquisitions-en-cours-a-la-mairie-rn-de-frejus-dans-le-cadre-d-une-enquete-pour-corruption-active-et-passive-d-elu_7109610.html' }
          ]
        },
        {
          type: 'Enquête',
          date: '2025',
          description: 'Renvoyé devant le tribunal correctionnel de Draguignan pour favoritisme. Accusé, avec 5 collaborateurs, d\'avoir favorisé une société de sécurité pour des marchés publics (mairie, office de tourisme, centre de vaccination COVID). Montant total : 263 000€. Procès prévu le 22 septembre 2026.',
          status: 'Renvoyé en correctionnelle',
          sources: [
            { title: 'FranceInfo - Rachline jugé en septembre 2026', url: 'https://www.franceinfo.fr/politique/front-national/le-maire-rn-de-frejus-david-rachline-sera-juge-en-septembre-2026-pour-favoritisme-annonce-le-procureur-de-draguignan_7690123.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Mylène Troszczynski',
    party: 'rn',
    position: 'Ex-eurodéputée FN (2014-2019)',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: ['Eurodéputée FN (2014-2019)'],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2025-03-31',
          description: 'Condamnée dans l\'affaire des assistants parlementaires du FN au Parlement européen. N\'a pas fait appel, condamnation définitive.',
          penalty: '800€ d\'amende',
          status: 'Définitive (pas d\'appel)',
          sources: [
            { title: 'FranceInfo - 25 condamnations assistants FN', url: 'https://www.franceinfo.fr/politique/front-national/affaire-des-assistants-fn-au-parlement-europeen/marine-le-pen-louis-aliot-julien-odoul-on-a-liste-les-25-condamnations-a-l-issue-du-proces-des-assistants-parlementaires-du-fn_7162527.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Christelle Lechevalier',
    party: 'rn',
    position: 'Ex-eurodéputée FN (2017-2019)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Eurodéputée FN (2017-2019, remplaçante de Marine Le Pen)'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Montel',
    party: 'rn',
    position: 'Ex-eurodéputée FN (2014-2019)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Eurodéputée FN (2014-2019)'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Dominique Martin',
    party: 'rn',
    position: 'Ex-eurodéputé FN (2014-2019)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Eurodéputé FN (2014-2019)'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Wallerand de Saint-Just',
    party: 'rn',
    position: 'Ancien trésorier du FN/RN',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Avocat',
        'Trésorier du Front National / Rassemblement National',
        'Candidat aux municipales de Paris (2014)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2024-06',
          description: 'Condamné définitivement dans l\'affaire du micro-parti Jeanne, créé pour financer les campagnes de Marine Le Pen. Pourvoi en cassation rejeté en juin 2024.',
          penalty: '1 an de prison avec sursis, 2 ans d\'inéligibilité',
          status: 'Définitive (cassation rejetée)',
          sources: [
            { title: 'Wikipedia - Affaire Jeanne', url: 'https://fr.wikipedia.org/wiki/Affaire_Jeanne' }
          ]
        },
        {
          type: 'Condamnation (première instance)',
          date: '2025-03-31',
          description: 'Condamné dans l\'affaire des assistants parlementaires du FN au Parlement européen en tant que trésorier du parti. A fait appel.',
          penalty: '2 ans de prison avec sursis, 3 ans d\'inéligibilité',
          status: 'Procès en appel en cours depuis janvier 2026',
          sources: [
            { title: 'FranceInfo - 25 condamnations assistants FN', url: 'https://www.franceinfo.fr/politique/front-national/affaire-des-assistants-fn-au-parlement-europeen/marine-le-pen-louis-aliot-julien-odoul-on-a-liste-les-25-condamnations-a-l-issue-du-proces-des-assistants-parlementaires-du-fn_7162527.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Marie-Christine Arnautu',
    party: 'rn',
    position: 'Ancienne eurodéputée FN (2014-2019)',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Vice-présidente du Front National',
        'Eurodéputée FN (2014-2019)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2025-03-31',
          description: 'Condamnée dans l\'affaire des assistants parlementaires du FN au Parlement européen pour détournement de fonds publics. N\'a pas fait appel, condamnation définitive.',
          penalty: '18 mois de prison avec sursis, 800€ d\'amende, 3 ans d\'inéligibilité',
          status: 'Définitive (pas d\'appel)',
          sources: [
            { title: 'FranceInfo - 25 condamnations assistants FN', url: 'https://www.franceinfo.fr/politique/front-national/affaire-des-assistants-fn-au-parlement-europeen/marine-le-pen-louis-aliot-julien-odoul-on-a-liste-les-25-condamnations-a-l-issue-du-proces-des-assistants-parlementaires-du-fn_7162527.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Marie-Christine Boutonnet',
    party: 'rn',
    position: 'Ancienne eurodéputée FN (2014-2019)',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Eurodéputée FN (2014-2019)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2025-03-31',
          description: 'Condamnée dans l\'affaire des assistants parlementaires du FN au Parlement européen pour détournement de fonds publics. N\'a pas fait appel, condamnation définitive.',
          penalty: '18 mois de prison avec sursis, 3 ans d\'inéligibilité avec sursis',
          status: 'Définitive (pas d\'appel)',
          sources: [
            { title: 'FranceInfo - 25 condamnations assistants FN', url: 'https://www.franceinfo.fr/politique/front-national/affaire-des-assistants-fn-au-parlement-europeen/marine-le-pen-louis-aliot-julien-odoul-on-a-liste-les-25-condamnations-a-l-issue-du-proces-des-assistants-parlementaires-du-fn_7162527.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Dominique Bilde',
    party: 'rn',
    position: 'Ancienne eurodéputée FN (2014-2024)',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Eurodéputée FN/RN (2014-2024)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2025-03-31',
          description: 'Condamnée dans l\'affaire des assistants parlementaires du FN au Parlement européen pour détournement de fonds publics. Emploi fictif d\'assistant parlementaire en 2014. N\'a pas fait appel, condamnation définitive.',
          penalty: '18 mois de prison avec sursis, 3 ans d\'inéligibilité avec sursis, remboursement de 40 320€',
          status: 'Définitive (pas d\'appel)',
          sources: [
            { title: 'France Bleu - Dominique Bilde condamnée', url: 'https://www.francebleu.fr/infos/politique/l-ex-eurodeputee-de-meurthe-et-moselle-dominique-bilde-condamnee-dans-l-affaire-des-assistants-parlementaires-du-fn-2373373' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Fernand Le Rachinel',
    party: 'rn',
    position: 'Ancien eurodéputé FN (2004-2009)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: [
        'Eurodéputé FN (2004-2009)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation (première instance)',
          date: '2025-03-31',
          description: 'Condamné dans l\'affaire des assistants parlementaires du FN au Parlement européen pour détournement de fonds publics. A fait appel.',
          penalty: '18 mois de prison avec sursis, 3 ans d\'inéligibilité',
          status: 'Procès en appel en cours depuis janvier 2026',
          sources: [
            { title: 'FranceInfo - 25 condamnations assistants FN', url: 'https://www.franceinfo.fr/politique/front-national/affaire-des-assistants-fn-au-parlement-europeen/marine-le-pen-louis-aliot-julien-odoul-on-a-liste-les-25-condamnations-a-l-issue-du-proces-des-assistants-parlementaires-du-fn_7162527.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Anthony Brosse',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Antoine Armand',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bastien Marchive',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Benjamin Dirx',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Benoît Larrouquis',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bertrand Sorre',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Charles Rodwell',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Charles Sitzenstuhl',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Marion',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Mongardien',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christopher Weissberg',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Daniel Labaronne',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Denis Masseglia',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Didier Le Gac',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Florent Boudié',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'François Cormier-Bouligeon',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Guillaume Gouffier Valente',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Hervé Berville',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean Terlier',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-François Rousset',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Luc Fugit',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Marie Fiévet',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Michel Jacques',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-René Cazeneuve',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Lionel Causse',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Ludovic Mendes',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marc Ferracci',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Michel Lauzzana',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Mikaele Seo',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Moerani Frébault',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Metzdorf',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olivier Becht',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Paul Midy',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre Cazeneuve',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Buchou',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Mazars',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Travert',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sébastien Huyghe',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thomas Cazenave',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thomas Gassilloud',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Vincent Cauré',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Vincent Ledoux',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Yannick Chenevard',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Éric Bothorel',
    party: 'ensemble',
    position: 'Député - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Agnès Pannier-Runacher',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Amélia Lakrafi',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Annaïg Le Meur',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anne Genetet',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anne-Sophie Ronceret',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Annie Vidal',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Brigitte Klinkert',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Brigitte Liso',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Camille Galliard-Minier',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Caroline Yadan',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Catherine Ibled',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christine Le Nabour',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Constance Le Grip',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Corinne Vignon',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Céline Calvez',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Danielle Brulebois',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Françoise Buffet',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Graziella Melchior',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Joséphine Missoffe',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julie Delpech',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laure Miller',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Liliana Tanguy',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie-Pierre Rixain',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Natalia Pouzyreff',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nathalie Coggia',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicole Dubré-Chirat',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicole Le Peih',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olga Givernet',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olivia Grégoire',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandra Marsaud',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandrine Lalanne',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandrine Le Feur',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Panonacle',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphanie Rist',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Violette Spillebout',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Véronique Riotton',
    party: 'ensemble',
    position: 'Députée - Ensemble pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Abdelkader Lahmar',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aly Diouara',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Andy Kerbrat',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2024-10',
          description: 'Condamné à 1 000 euros d\'amende pour usage de stupéfiants. Interpellé le 17 octobre 2024 en flagrant délit d\'achat de 3-MMC (drogue de synthèse) auprès d\'un revendeur dans une station de métro parisienne.',
          status: 'Condamné',
          penalty: '1 000 euros d\'amende',
          sources: [
            { title: 'Frontières Media', url: 'https://www.frontieresmedia.fr/societe/info-frontieres-andy-kerbrat-le-depute-lfi-condamne-a-1000-euros-damende-pour-usage-de-stupefia' },
            { title: 'France Info', url: 'https://www.franceinfo.fr/sante/drogue-addictions/le-depute-lfi-andy-kerbrat-interpelle-en-possession-de-drogue-reconnait-avoir-fait-n-importe-quoi-avec-ses-frais-de-mandat_6899522.html' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Arnaud Saint-Martin',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aurélien Le Coq',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aurélien Taché',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aymeric Caron',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bastien Lachaud',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 1,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2021',
          description: 'Mis en examen dans le cadre de l\'enquête sur les comptes de campagne présidentielle 2017 de Jean-Luc Mélenchon. Soupçons de surfacturations et d\'abus de confiance.',
          charges: ['Abus de confiance', 'Escroquerie aggravée'],
          status: 'En cours',
          sources: [
            { title: 'Wikipédia', url: 'https://fr.wikipedia.org/wiki/Affaire_des_comptes_de_campagne_de_Jean-Luc_M%C3%A9lenchon_en_2017' },
            { title: 'Europe 1', url: 'https://www.europe1.fr/politique/comptes-de-campagne-2017-une-association-proche-de-melenchon-et-sa-mandataire-financiere-mis-en-examen-4058975' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'Bérenger Cernon',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Bex',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Damien Maudet',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'David Guiraud',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Fernandes',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'François Piquemal',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Gabriel Amard',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Idir Boumertit',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-François Coulomme',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Hugues Ratenon',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Philippe Nilor',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jérôme Legavre',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laurent Alexandre',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Loïc Prud\'homme',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Matthias Tavel',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Maxime Laisney',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Paul Vannier',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Perceval Gaillard',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre-Yves Cadalen',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Raphaël Arnault',
    party: 'lfi',
    position: 'Député du Vaucluse',
    convictions: 1,
    ongoingCases: 0,
    details: {
      career: [
        'Député du Vaucluse (2024-)',
        'Cofondateur de la Jeune Garde Antifasciste (2018)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2022-02-18',
          description: 'Condamné à 4 mois de prison avec sursis pour violences volontaires en réunion. En 2021, accompagné d\'un groupe, il avait agressé un jeune homme de 18 ans lors d\'une manifestation identitaire à Lyon (Croix-Rousse). Condamnation devenue définitive après retrait de son appel en 2025.',
          status: 'Définitif',
          penalty: '4 mois de prison avec sursis, 1 600 € de dommages et intérêts',
          sources: [
            { title: 'Le JDD', url: 'https://www.lejdd.fr/Societe/violences-en-reunion-le-depute-lfi-raphael-arnault-definitivement-condamne-164653' },
            { title: 'Lyon Capitale', url: 'https://www.lyoncapitale.fr/actualite/lyon-la-condamnation-pour-violences-du-depute-lfi-raphael-arnault-confirmee' }
          ]
        }
      ]
    }
  },
  {
    id: nextId++,
    name: 'René Pilato',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Rodrigo Arenas',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sylvain Carrière',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Ugo Bernalicis',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Éric Coquerel',
    party: 'lfi',
    position: 'Député - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alma Dufour',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anaïs Belouassa-Cherifi',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Andrée Taurinya',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anne Stambach-Terrenoir',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aurélie Trouvé',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Claire Lejeune',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Farida Amrani',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Gabrielle Cathala',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Karen Erodi',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Manon Meunier',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marianne Maximi',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie Mesmeur',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Mathilde Feld',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Mathilde Hignet',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Murielle Lepvraud',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nadège Abomangoli',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nathalie Oziol',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandrine Nosbé',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sarah Legrain',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sylvie Ferrer',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Ségolène Amiot',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Zahia Hamdane',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Élisa Martin',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Élise Leboucher',
    party: 'lfi',
    position: 'Députée - La France Insoumise',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alain David',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Arnaud Simion',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Aurélien Rousseau',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Belkhir Belhaddad',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christian Baptiste',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Proença',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Denis Fègne',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Élie Califer',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Grégoire',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Fabrice Barusseau',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Fabrice Roussel',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Guillaume Garot',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Gérard Leseul',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Hervé Saulignac',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jacques Oberti',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jiovanny William',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Joël Aviragnet',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julien Gokel',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Karim Benbrahim',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laurent Baumel',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laurent Lhardit',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marc Pena',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Mickaël Bouloux',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Paul Christophle',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Peio Dufau',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Naillet',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre Pribetich',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierrick Courbon',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Roger Vicot',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Romain Eskenazi',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Delautrette',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Hablot',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sébastien Saint-Pasteur',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thierry Sother',
    party: 'ps',
    position: 'Député - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anna Pic',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Ayda Hadizadeh',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Béatrice Bellay',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Chantal Jourdan',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christine Pirès Beaune',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Claudia Rouaux',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Colette Capdevielle',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Céline Hervieu',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Céline Thiébault-Martinez',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Dieynaba Diop',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Estelle Mercier',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Fanny Dombre Coste',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Florence Herouin-Léautey',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Isabelle Santiago',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie Récalde',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie-José Allemand',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie-Noëlle Battistel',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marietta Karamanli',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Martine Froger',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Mélanie Thomin',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Océane Godard',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pascale Got',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandrine Runel',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Pantel',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Valérie Rossi',
    party: 'ps',
    position: 'Députée - Parti Socialiste',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexandre Portier',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Antoine Vermorel-Marques',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Corentin Le Fur',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Éric Liégeon',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Fabien Di Filippo',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Fabrice Brun',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'François-Xavier Ceccoli',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Guillaume Lepers',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Hubert Brigand',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Didier Berger',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Louis Thiériot',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Luc Bourgeaux',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Pierre Taité',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Pierre Vigier',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Yves Bony',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jérôme Nury',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Lionel Duparay',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Michel Herbillon',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Ray',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Tryzna',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Patrick Hetzel',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Gosselin',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre Cordier',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Vincent Rolland',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Xavier Breton',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Éric Pauget',
    party: 'lr',
    position: 'Député - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexandra Martin',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alix Fruchon',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anne-Laure Blin',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christelle Minard',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frédérique Meunier',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Josiane Corneloup',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Justine Gruet',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie-Christine Dalloz',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Michèle Tabarot',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sylvie Bonnet',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Valérie Bazin-Malgras',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Véronique Louwagie',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Élisabeth de Maistre',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Émilie Bonnivard',
    party: 'lr',
    position: 'Députée - Les Républicains',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Arnaud Bonnet',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Benoît Biteau',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Boris Tavernier',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Charles Fournier',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Damien Girard',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Duplessy',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Hendrik Davi',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Claude Raux',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Louis Roumégas',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jérémie Iordanoff',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Karim Ben Cheikh',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Bonnet',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pouria Amirshahi',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Steevy Gustave',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sébastien Peytavie',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Tristan Lahais',
    party: 'ecolo',
    position: 'Député - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Catherine Hervieu',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christine Arrighi',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Danielle Simonnet',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Delphine Batho',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Dominique Voynet',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julie Laernoes',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julie Ozenne',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Léa Balage El Mariky',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie Pochon',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sabrina Sebaihi',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandra Régol',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Taillé-Polian',
    party: 'ecolo',
    position: 'Députée - Écologiste et Social',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bruno Fuchs',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Blanchet',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Cyrille Isaac-Sibille',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Didier Padey',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Mandon',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frantz Gumbs',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frédéric Petit',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Hubert Ott',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Carles Grelier',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jimmy Pahun',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laurent Croizier',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Mickaël Cosson',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicolas Turquois',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olivier Falorni',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pascal Lecamp',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Bolo',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Latombe',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Richard Ramos',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Romain Daubié',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Éric Martineau',
    party: 'modem',
    position: 'Député - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anne Bergantz',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Blandine Brocard',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Delphine Lingemann',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Geneviève Darrieussecq',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Géraldine Bannier',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Josy Poueyto',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Louise Morel',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Maud Petit',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Perrine Goulet',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sabine Thillaye',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandrine Josso',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Mette',
    party: 'modem',
    position: 'Députée - MoDem',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Benoît Blanchard',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bertrand Bouyx',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Plassard',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Didier Lemaire',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'François Gernigon',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'François Jolivet',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frédéric Valletoux',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Henri Alfandari',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean Moullière',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-François Portarrieu',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Michel Brard',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jérémie Patrier-Leitus',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Loïc Kervran',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Michel Criaud',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Paul Christophe',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Fait',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre Henriet',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sylvain Berrios',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thierry Benoit',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Thomas Lam',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Vincent Thiébaut',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Xavier Albertini',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Xavier Roseren',
    party: 'horizons',
    position: 'Député - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Agnès Firmin Le Bodo',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Anne-Cécile Violland',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Béatrice Bellamy',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Béatrice Piron',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Félicie Gérard',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Isabelle Rauch',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laetitia Saint-Paul',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Lise Magnier',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marie-Agnès Poussier-Winsback',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nathalie Colin-Oesterlé',
    party: 'horizons',
    position: 'Députée - Horizons',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Charles de Courson',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christophe Naegelen',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'David Habib',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'David Taupiac',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Harold Huwart',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Luc Warsmann',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Pierre Bataille',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Joël Bruneau',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Laurent Mazaury',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Max Mathiasin',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Michel Castellani',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olivier Serva',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Paul Molac',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Paul-André Colombani',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Lenormand',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stéphane Viry',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Yannick Favennec-Bécot',
    party: 'liot',
    position: 'Député - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Audrey Abadie-Amiel',
    party: 'liot',
    position: 'Députée - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Constance de Pélichy',
    party: 'liot',
    position: 'Députée - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Estelle Youssouffa',
    party: 'liot',
    position: 'Députée - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Nicole Sanquer',
    party: 'liot',
    position: 'Députée - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Valérie Létard',
    party: 'liot',
    position: 'Députée - LIOT',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Davy Rimane',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Maurel',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emmanuel Tjibaou',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Frédéric Maillot',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Paul Lecoq',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Jean-Victor Castor',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Julien Brugerolles',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marcellin Nadeau',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Yannick Monnet',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Édouard Bénard',
    party: 'pcf',
    position: 'Député - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Karine Lebon',
    party: 'pcf',
    position: 'Députée - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Mereana Reid Arbelot',
    party: 'pcf',
    position: 'Députée - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Emeline K/Bidi',
    party: 'pcf',
    position: 'Députée - Gauche démocrate et républicaine',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Alexandre Allegret-Pilot',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Antoine Valentin',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bartholomé Lenoir',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Bernard Chaix',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Charles Alloncle',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Gérault Verny',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Marc Chavent',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Matthieu Bloch',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Maxime Michelet',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Olivier Fayssat',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Pierre-Henri Carbonnel',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Vincent Trébuchet',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Éric Michoux',
    party: 'udr',
    position: 'Député - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Christelle D\'Intorni',
    party: 'udr',
    position: 'Députée - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Hanane Mansouri',
    party: 'udr',
    position: 'Députée - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Ricourt Vaginay',
    party: 'udr',
    position: 'Députée - Union des droites pour la République',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Daniel Grenon',
    party: 'ni',
    position: 'Député - Non-inscrit(e)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Lionel Vuibert',
    party: 'ni',
    position: 'Député - Non-inscrit(e)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Philippe Bonnecarrère',
    party: 'ni',
    position: 'Député - Non-inscrit(e)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Député de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sandra Delannoy',
    party: 'ni',
    position: 'Députée - Non-inscrit(e)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Sophie Errante',
    party: 'ni',
    position: 'Députée - Non-inscrit(e)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Stella Dupont',
    party: 'ni',
    position: 'Députée - Non-inscrit(e)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
      justiceIncidents: []
    }
  },
  {
    id: nextId++,
    name: 'Véronique Besse',
    party: 'ni',
    position: 'Députée - Non-inscrit(e)',
    convictions: 0,
    ongoingCases: 0,
    details: {
      career: ['Députée de la XVIIe législature'],
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
