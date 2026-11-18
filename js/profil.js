/* =========================================================
   PROFIL DE L'ÉLÈVE : QUI EST L'ÉLÈVE, ET COMMENT L'APPLI LUI PARLE
   ---------------------------------------------------------
   Deux fichiers à remplir pour chaque élève :
   • profil.js  (ce fichier) : pseudo, niveau, aides dys, rubriques,
                passions, animaux guides, couleurs ;
   • contenu.js : les activités de chaque rubrique (ce qu'on travaille).
   Le reste du code ne contient AUCUN nom : il lit ces deux fichiers.

   Règles de confidentialité (le site est PUBLIC) :
   • un PSEUDO, jamais le vrai prénom + nom de famille ;
   • pas de photo, pas d'adresse, pas de nom d'école ;
   • pour l'entourage : « Mamie », « Tonton », « le grand frère »…

   Ce qu'on peut choisir :
   • univers  : 'foot' | 'karate' | 'trottinette' | 'dinosaures' | 'trail' | 'moto'
                | 'danse' | 'velo' | 'peinture' | 'musique'
                (l'objet à décorer dans la boutique et le décor)
   • passions : une liste d'univers (les problèmes, les mots et les
                autocollants mélangent ces thèmes)
   • especes des animaux : 'chat' | 'chien' | 'lapin' | 'cheval' | 'tortue' | 'oiseau' | 'humain'
     (humain = une personne de l'entourage dessinée en buste, sans photo)
   • roles des animaux : 'accueil' (celui qui t'accueille), une rubrique
     ('francais', 'maths', 'geometrie', 'histoire', 'svt'…), ou un jeu
     intégré ('mots', 'tables', 'problemes', 'parcours'), ou 'devoirs'.
     Un même animal peut avoir plusieurs rôles. S'il manque un rôle,
     c'est l'animal d'accueil qui s'en occupe.
   • appelle (facultatif) : comment ce guide appelle l'élève (« ma chérie », « champion »…)
   • presente (facultatif) : comment l'élève le présente (« mon chéri Sylvain », « Papy »…)
   • entourage : chaque personne peut avoir ses « encouragements » à elle.
   • adaptations : façons de faire, cumulables : 'moteur', 'dys', 'dyscalculie',
     'tdah', 'hpi', 'tsa', 'malvoyance', 'allophone' (par ex. ['dys', 'tdah']).
     Elles changent les devoirs et l'affichage ; l'espace parents peut les changer.
   • langue (élève allophone) : { code: 'uk-UA', nom: 'Українською', sens: 'ltr' }
     (sens 'rtl' pour l'arabe). Les consignes ont alors une « traduction ».
   • niveau : choisit aussi le TON : cycle2/cycle3 = enfantin, voix qui parlent
     tout de suite ; cycle4 = sympa, phrase rigolote du jour ;
     lycee = sobre et sérieux, blague du jour.
   • couleurs : codes couleur, par ex. '#8b5a2b' (marron).
     Aide : https://htmlcolorcodes.com/fr/
   ========================================================= */
var PROFIL = {

  id: 'brahim',

  /* --- Brahim : 52 ans, cheveux grisonnants, petites lunettes rondes,
     bouc et petite barbe bien taillée, grisonnants aussi ; habillé « chill »
     (chemise ouverte sur un t-shirt). Description donnée par Cécile. --- */
  enfant: {
    pseudo: 'Brahim',
    genre: 'garçon',
    numero: 1,
    apparence: {
      peau: '#d9a77c',
      cheveux: '#77716b',
      coiffure: 'courts',
      yeux: '#3b2416',
      tshirt: '#e5e7eb',
      veste: '#4b6584',
      barbe: '#9a948d',
      bouc: '#6b655f',
      lunettes: '#1f2937'
    }
  },

  /* --- Adulte, professeur : ton sobre, avec une blague du jour --- */
  niveau: 'lycee',
  classe: 'adulte',

  /* --- HPI : on dit pourquoi, des défis bonus, les QCM affichés en entier.
     Aucune aide de lecture imposée (réglables dans l'espace parents). --- */
  adaptations: ['hpi'],
  aides: {
    lectureAuto: false,
    police: 'lexend',
    taille: 1.0,
    espacement: false,
    syllabes: false,
    lignesCouleur: false,
    voixDessinAnime: false
  },

  style: { guides: true },

  /* --- Ses rubriques : aucune matière scolaire de base, quatre tuiles à lui --- */
  rubriques: {
    actives: [],
    enPlus: [
      { id: 'soufisme', titre: 'Soufisme', icone: '📿', couleur: '#115e59' },
      { id: 'pse', titre: 'PSE', icone: '⛑️', couleur: '#b91c1c' },
      { id: 'cuisine', titre: 'Cuisine', icone: '🍟', couleur: '#c2410c' },
      { id: 'escale', titre: 'L’Escale', icone: '✈️', couleur: '#1d4ed8' }
    ]
  },

  appli: {
    nom: 'Le Caravansérail',
    nomCourt: 'Caravansérail',
    jeux: { mots: '', tables: '', problemes: '', parcours: '', devoirs: 'Les défis de la semaine' },
    adulte: 'Feriel',        // c'est sa fille qui valide ses rédactions
    ecole: 'l\'inspecteur'
  },

  /* --- La bibliothèque connectée : livres, iPhone, iPad, MacBook (il adore Apple),
     entre deux bibliothèques. Il commence avec un livre. --- */
  univers: 'bibliotheque',
  depart: { model: 'livre', color: 'argent', acc: 'aucun' },
  passions: ['bibliotheque', 'musique'],

  /* --- Les guides ---
     La Huppe : l'oiseau qui guide les autres dans « La Conférence des oiseaux »
     de Farîd al-Dîn 'Attâr. Elle accueille et s'occupe du soufisme et de l'Escale.
     Prudence : une tortue préventrice (aucun accident déclaré, elle ne court jamais).
     Feriel : sa fille. Elle présente les défis, la cuisine, et vient le féliciter.
     Dessin de Feriel provisoire, lui aussi. */
  animaux: [
    { id: 'huppe', nom: 'La Huppe', espece: 'oiseau', roles: ['accueil', 'soufisme', 'escale', 'mots'],
      couleurs: { pelage: '#e0995e', clair: '#f6d7b0', ailes: '#27272a', bec: '#3f3f46', yeux: '#1f2937' },
      voix: { hauteur: 1.1, vitesse: 0.95 } },
    { id: 'prudence', nom: 'Prudence', espece: 'tortue', roles: ['pse', 'problemes', 'tables', 'parcours'],
      couleurs: { pelage: '#a3b18a', carapace: '#3f6212', bord: '#facc15', yeux: '#1f2937' },
      voix: { hauteur: 0.85, vitesse: 0.85 } },
    { id: 'feriel', nom: 'Feriel', espece: 'humain', roles: ['devoirs', 'cuisine'],
      appelle: 'Papa', presente: 'ma fille Feriel',
      couleurs: { peau: '#d9a77c', cheveux: '#2b1d14', coupe: 'longs', yeux: '#3b2416', tshirt: '#7c3aed', motif: '#ddd6fe' },
      voix: { hauteur: 1.25, vitesse: 1.0 } }
  ],

  entourage: [
    { nom: 'Feriel', emoji: '🌸', homme: false,
      encouragements: ['Bravo Papa. Je le dirai à personne, sinon tu vas prendre la grosse tête.',
        'Pas mal, Papa. Presque aussi bien que tes frites.',
        'Bravo Papa ! Ça mérite un restaurant. Sans gluten, je sais.',
        'Tu es le meilleur, Papa. Ce n\'est pas une flatterie, c\'est une donnée.'] },
    { nom: 'Billy, la bibliothèque', emoji: '📚', homme: true,
      encouragements: ['Je tiens debout depuis 1979. Toi aussi, tu tiens. Bravo.',
        'Tu as tout bon. Il ne reste aucune vis en trop.',
        'Brahim, tu as encore besoin d\'une étagère pour ranger tous ces livres ?'] },
    { nom: 'Le Chef', emoji: '🧑‍🍳', homme: true,
      encouragements: ['Chef ! Oui, chef. C\'est parfait, chef.',
        'Croustillant dehors, juste dedans. Comme ta réponse.',
        'Le client de la table 4 demande ta recette.'] }
  ],
  encouragements: [
    'Bravo @enfant. Ne le dis à personne : ils vont vouloir que tu les aides.',
    'Juste. Comme d\'habitude. C\'en devient presque gênant.',
    'Exact. On pourrait encadrer cette réponse dans un cadre RIBBA.',
    'Excellent. Même l\'inspection n\'aurait rien trouvé à redire.',
    'Bonne réponse. Le document unique ne signale aucun risque d\'erreur.',
    'Parfait. Les frites peuvent sortir de l\'air fryer.'
  ],

  /* --- La fête : Feriel vient le féliciter --- */
  fete: {
    avec: 'feriel',
    phrasesBisou: ['Bravo Papa ! Un bisou, et tu choisis le restaurant ce soir.',
      'Je suis fière de toi, Papa. On fête ça chez IKEA ? Je plaisante. Quoique.',
      'Bravo Papa ! Tu as gagné le droit de faire des frites.',
      'Un câlin pour le plus savant des papas. Même s\'il le sait déjà.']
  },

  /* --- De temps en temps (1 fête sur 4), Cécile apparaît, vite fait,
     à la barre de pole fitness. Apparence décrite par Cécile. --- */
  pole: {
    nom: 'Cécile',
    chance: 0.25,
    apparence: { peau: '#f1c7a5', cheveux: '#a47148', meches: '#e9c46a', haut: '#ec4899', short: '#a21caf' },  // châtain clair, mèches blondes, chignon bouclé ; yeux bleu-gris-vert
    phrases: ['Bravo Brahim. Moi aussi, je travaille ma figure : la chaise.',
      'Je passais par là. Bravo. Je repars.',
      'Figure de la chaise. Risque évalué, prise vérifiée, document unique à jour.',
      'Bravo Brahim. Chacun son samâ‘ : toi, les livres ; moi, la barre.',
      'Tu as gagné. Moi aussi : j’ai tenu dix secondes.']
  },

  prononciation: { 'PSE': 'P S E', 'CAP': 'C A P', 'DUERP': 'D U E R P' },

  couleurs: { principale: '#0f766e', fond: '#f0fdfa' }
};
