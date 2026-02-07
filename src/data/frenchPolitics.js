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
    party: 'rn',
    position: 'Député des Alpes-Maritimes (alliance RN depuis 2024)',
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
    party: 'lfi',
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
    party: 'lfi',
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
    deceased: true,
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
    deceased: true,
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

  // ===== RN =====

  {
    id: nextId++,
    name: 'Jean-Marie Le Pen',
    party: 'rn',
    position: 'Fondateur du Front National',
    convictions: 4,
    ongoingCases: 0,
    deceased: true,
    details: {
      birthDate: '1928-06-20',
      birthPlace: 'La Trinité-sur-Mer',
      career: [
        'Fondateur du Front national (1972)',
        'Président du Front national (1972-2011)',
        'Député européen (1984-2019)',
        'Candidat à l\'élection présidentielle (1974, 1988, 1995, 2002, 2007)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '1991',
          description: 'Condamné pour contestation de crimes contre l\'humanité. Avait qualifié les chambres à gaz de « détail de l\'histoire de la Seconde Guerre mondiale » en 1987.',
          penalty: '1,2 million de francs d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Jean-Marie Le Pen - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Marie_Le_Pen' }
          ]
        },
        {
          type: 'Condamnation',
          date: '1998',
          description: 'Condamné pour violences volontaires envers une élue socialiste, Annette Peulvast-Bergeal, lors de la campagne des législatives de 1997.',
          penalty: 'Amende et dommages et intérêts',
          status: 'Définitif',
          sources: [
            { title: 'Jean-Marie Le Pen - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Marie_Le_Pen' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2008',
          description: 'Condamné pour provocation à la discrimination et à la haine raciale. Propos tenus dans le journal Rivarol en 2005 sur l\'occupation allemande en France.',
          penalty: '3 mois de prison avec sursis et 10 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Jean-Marie Le Pen - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Marie_Le_Pen' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2015',
          description: 'Condamné pour contestation de crimes contre l\'humanité. Réitération du qualificatif de « détail » concernant les chambres à gaz.',
          penalty: 'Amende',
          status: 'Définitif',
          sources: [
            { title: 'Jean-Marie Le Pen - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jean-Marie_Le_Pen' }
          ]
        }
      ]
    }
  },

  // ===== LR =====

  {
    id: nextId++,
    name: 'Charles Pasqua',
    party: 'lr',
    position: 'Ancien Ministre de l\'Intérieur',
    convictions: 2,
    ongoingCases: 0,
    deceased: true,
    details: {
      birthDate: '1927-04-18',
      birthPlace: 'Grasse',
      career: [
        'Ministre de l\'Intérieur (1986-1988, 1993-1995)',
        'Sénateur des Hauts-de-Seine (1977-2011)',
        'Président du Conseil général des Hauts-de-Seine (1988-2004)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2010',
          description: 'Condamné dans l\'affaire de la Sofremi pour complicité d\'abus de biens sociaux. Ventes d\'armes à l\'Angola via la société Sofremi.',
          penalty: '18 mois de prison avec sursis et 100 000€ d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Charles Pasqua - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Charles_Pasqua' },
            { title: 'Affaire de la Sofremi - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_de_la_Sofremi' }
          ]
        },
        {
          type: 'Condamnation',
          date: '2010',
          description: 'Condamné pour financement illicite dans l\'affaire du casino d\'Annemasse.',
          penalty: '18 mois de prison avec sursis',
          status: 'Définitif',
          sources: [
            { title: 'Charles Pasqua - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Charles_Pasqua' }
          ]
        }
      ]
    }
  },

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
    name: 'Jacques Médecin',
    party: 'lr',
    position: 'Ancien Maire de Nice',
    convictions: 2,
    ongoingCases: 0,
    deceased: true,
    details: {
      birthDate: '1928-05-05',
      birthPlace: 'Nice',
      career: [
        'Maire de Nice (1966-1990)',
        'Député des Alpes-Maritimes (1962-1973)',
        'Secrétaire d\'État au Tourisme (1976-1978)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '1995',
          description: 'Condamné pour détournement de fonds publics et corruption. S\'était enfui en Uruguay en 1990 pour échapper à la justice. Extradé en 1994.',
          penalty: '3 ans et demi de prison ferme',
          status: 'Définitif',
          sources: [
            { title: 'Jacques Médecin - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jacques_M%C3%A9decin' }
          ]
        },
        {
          type: 'Condamnation',
          date: '1998',
          description: 'Condamné pour fraude fiscale. Dissimulation de revenus et de patrimoine à l\'étranger.',
          penalty: 'Amende et prison',
          status: 'Définitif',
          sources: [
            { title: 'Jacques Médecin - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jacques_M%C3%A9decin' }
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
    ongoingCases: 0,
    details: {
      birthDate: '1967-07-14',
      birthPlace: 'Neuilly-sur-Seine',
      career: [
        'Ministre de l\'Enseignement supérieur et de la Recherche (2007-2011)',
        'Ministre du Budget (2011-2012)',
        'Présidente de la Région Île-de-France (2015-)',
        'Candidate à l\'élection présidentielle (2022)'
      ],
      justiceIncidents: []
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
    ongoingCases: 0,
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
          type: 'Relaxe',
          date: '2015',
          description: 'Acquitté du chef de proxénétisme aggravé dans l\'affaire du Carlton de Lille.',
          status: 'Relaxé',
          sources: [
            { title: 'Dominique Strauss-Kahn - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Dominique_Strauss-Kahn' },
            { title: 'Affaire du Carlton de Lille - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_du_Carlton_de_Lille' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Roland Dumas',
    party: 'ps',
    position: 'Ancien Président du Conseil constitutionnel',
    convictions: 0,
    ongoingCases: 0,
    deceased: true,
    details: {
      birthDate: '1922-08-23',
      birthPlace: 'Limoges',
      career: [
        'Ministre des Affaires étrangères (1984-1986, 1988-1993)',
        'Président du Conseil constitutionnel (1995-2000)',
        'Député de Haute-Vienne (1956-1958, 1967-1968, 1981-1993)',
        'Avocat de François Mitterrand'
      ],
      justiceIncidents: [
        {
          type: 'Relaxe en appel',
          date: '2003',
          description: 'Condamné en première instance en 2001 pour complicité et recel d\'abus de biens sociaux dans l\'affaire Elf. Accusé d\'avoir reçu des avantages via sa compagne Christine Deviers-Joncour. Relaxé en appel en 2003.',
          status: 'Relaxé en appel',
          sources: [
            { title: 'Roland Dumas - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Roland_Dumas' },
            { title: 'Affaire Elf - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Elf' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Henri Emmanuelli',
    party: 'ps',
    position: 'Ancien Président de l\'Assemblée nationale',
    convictions: 1,
    ongoingCases: 0,
    deceased: true,
    details: {
      birthDate: '1945-05-31',
      birthPlace: 'Eaux-Bonnes',
      career: [
        'Président de l\'Assemblée nationale (1992-1993)',
        'Député des Landes (1978-2017)',
        'Président du Conseil général des Landes (1982-2001)',
        'Premier secrétaire du PS (1994-1995)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '1997',
          description: 'Condamné pour recel d\'abus de biens sociaux dans l\'affaire Urba. Système de financement occulte du Parti socialiste via le bureau d\'études Urba.',
          penalty: '18 mois de prison avec sursis et 30 000 francs d\'amende',
          status: 'Définitif',
          sources: [
            { title: 'Henri Emmanuelli - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Henri_Emmanuelli' },
            { title: 'Affaire Urba - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Urba' }
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
          penalty: '3 ans de prison avec sursis et 60 000€ d\'amende',
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
    name: 'Bernard Tapie',
    party: 'ps',
    position: 'Ancien Ministre de la Ville',
    convictions: 1,
    ongoingCases: 0,
    deceased: true,
    details: {
      birthDate: '1943-01-26',
      birthPlace: 'Paris',
      career: [
        'Ministre de la Ville (1992-1993)',
        'Député des Bouches-du-Rhône (1989-1996)',
        'Député européen (1994-1997)',
        'Président de l\'Olympique de Marseille (1986-1994)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '1995',
          description: 'Condamné dans l\'affaire OM-VA pour corruption dans le match Olympique de Marseille - Valenciennes (1993). Tentative de corruption de joueurs adverses.',
          penalty: '2 ans de prison dont 1 ferme et interdiction de gérer une entreprise',
          status: 'Définitif',
          sources: [
            { title: 'Bernard Tapie - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Bernard_Tapie' },
            { title: 'Affaire VA-OM - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_VA-OM' }
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

  // ===== MoDem =====

  {
    id: nextId++,
    name: 'François Bayrou',
    party: 'modem',
    position: 'Premier ministre, Président du MoDem',
    convictions: 0,
    ongoingCases: 1,
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
          type: 'Mise en examen',
          date: '2019',
          description: 'Mis en examen pour complicité de détournement de fonds publics dans l\'affaire des assistants parlementaires du MoDem au Parlement européen. Soupçons d\'emplois fictifs d\'assistants européens affectés à des tâches nationales.',
          status: 'Renvoyé en procès',
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
          date: '2023',
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
          type: 'Non-lieu',
          date: '2015',
          description: 'Mis en examen dans l\'affaire Bettencourt pour trafic d\'influence et recel. Accusé d\'avoir facilité l\'obtention de la Légion d\'honneur pour le gestionnaire de fortune de Liliane Bettencourt. Non-lieu prononcé en 2015.',
          status: 'Non-lieu',
          sources: [
            { title: 'Éric Woerth - Wikipedia', url: 'https://fr.wikipedia.org/wiki/%C3%89ric_Woerth' },
            { title: 'Affaire Woerth-Bettencourt - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Affaire_Woerth-Bettencourt' }
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
    party: 'ensemble',
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
    name: 'Aurélien Pradié',
    party: 'lr',
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
    party: 'ensemble',
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
          date: '2020',
          description: 'Condamné pour abus de confiance dans la gestion d\'une association. Détournement de fonds associatifs à des fins personnelles.',
          penalty: '1 an de prison avec sursis et 3 ans d\'inéligibilité',
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
    ongoingCases: 1,
    details: {
      birthDate: '1961-10-10',
      birthPlace: 'L\'Argentière-la-Bessée',
      career: [
        'Député des Hautes-Alpes (2002-2022)',
        'Secrétaire d\'État à la Ruralité (2020-2022)',
        'Rapporteur général du budget (2017-2020)'
      ],
      justiceIncidents: [
        {
          type: 'Mise en examen',
          date: '2023',
          description: 'Mis en examen pour prise illégale d\'intérêts dans le cadre de marchés publics passés lorsqu\'il était maire de L\'Argentière-la-Bessée.',
          status: 'En cours',
          sources: [
            { title: 'Joël Giraud - Wikipedia', url: 'https://fr.wikipedia.org/wiki/Jo%C3%ABl_Giraud' }
          ]
        }
      ]
    }
  },

  {
    id: nextId++,
    name: 'Stéphane Claireaux',
    party: 'ensemble',
    position: 'Ancien député de Saint-Pierre-et-Miquelon',
    convictions: 1,
    ongoingCases: 0,
    details: {
      birthDate: '1968-12-15',
      birthPlace: 'Saint-Pierre-et-Miquelon',
      career: [
        'Député de Saint-Pierre-et-Miquelon (2017-2022)',
        'Maire de Saint-Pierre (2014-2020)'
      ],
      justiceIncidents: [
        {
          type: 'Condamnation',
          date: '2023',
          description: 'Condamné pour avoir tiré sur des pêcheurs avec un fusil à plombs lors d\'une manifestation devant son domicile.',
          penalty: '3 mois de prison avec sursis et interdiction de port d\'armes',
          status: 'Définitif',
          sources: [
            { title: 'Stéphane Claireaux - Wikipedia', url: 'https://fr.wikipedia.org/wiki/St%C3%A9phane_Claireaux' }
          ]
        }
      ]
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
    party: 'rn',
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
    party: 'lr',
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
    ongoingCases: 0,
    details: {
      birthDate: '1977-01-12',
      birthPlace: 'Paris',
      career: [
        'Députée de Paris (2024-)',
        'Directrice de campagne de Jean-Luc Mélenchon (2012, 2017)',
        'Fondatrice de Mediascop'
      ],
      justiceIncidents: []
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
