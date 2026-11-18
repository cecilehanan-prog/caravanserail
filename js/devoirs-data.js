/* =========================================================
   MES DEVOIRS : le contenu de la semaine
   ---------------------------------------------------------
   Ce fichier est le SEUL à changer pour les devoirs. Le plus simple :
   envoyer une photo de l'agenda à Claude en lui demandant
   « transforme ces devoirs en exercices pour devoirs-data.js ».

   Ci-dessous : un EXEMPLE (un exercice de chaque sorte), à remplacer.
   Pour ne mettre aucun devoir : items: []

   Types d'exercice :
   • verbes   : phrases à trous. « ¤ » = un trou. Pour chaque trou :
                [début du mot, bonne fin, [fins fausses], question pour trouver le sujet,
                 le sujet, le pronom qui le remplace]
   • sujet    : encadrer le verbe (V:) et souligner le sujet (S:).
                s?: / v?: = mot accepté en plus, mais pas obligatoire.
   • mathador : nombres à combiner pour s'approcher de la cible.
   • poesie   : texte tapé par l'adulte (bouton « Pour … » de l'exercice).
   • activite : n'importe quelle consigne, avec un moteur de contenu.js :
                moteur: 'qcm' | 'trous' | 'paires' | 'ordre' | 'cartes' | 'calcul' | 'schema' | 'posee'
                + les mêmes données que dans contenu.js (questions, texte, items…).

   Champs en plus, pour tous les exercices (facultatifs) :
   • pourquoi   : à quoi sert l'exercice (affiché avec l'adaptation HPI) ;
   • defi       : une question bonus pour aller plus loin (HPI) ;
   • defiReponse: une réponse possible, montrée sur demande.
   • consigneOrigine : la consigne exacte du professeur, quand « consigne » est
                une version simplifiée (bouton « Voir la consigne d'origine ») ;
   • traduction : la consigne dans la langue de l'élève allophone
                (profil.js → langue), lue avec une voix de cette langue.

   ADAPTATIONS (profil.js → adaptations, cumulables) : Claude écrit les
   devoirs de la photo en tenant compte de chacune.
   • dys  : phrases courtes, mots simples, tout est lu à voix haute,
            peu de texte par écran, choix plutôt qu'écriture ;
   • tdah : exercices courts (6 questions au plus, sinon on coupe en deux),
            barre de progression, pause de 2 minutes proposée entre deux exercices ;
   • tsa  : consignes explicites, sans sous-entendu ni second degré ;
            le plan de chaque exercice est affiché, les devoirs se font dans l'ordre,
            pas de confettis ;
   • hpi  : on dit pourquoi on fait l'exercice, un défi bonus à la fin,
            moins de répétitions ; les QCM s'affichent en entier, d'un coup.
   • moteur : tout au toucher ; réponses dictées au micro (QCM, nombres,
            chiffres de l'opération posée, rédaction) ; boutons du côté de la
            main valide ; les calculs en « posee » plutôt qu'en ligne.
   • dyscalculie : aide-mémoire 📋 (table de Pythagore) toujours à portée,
            opérations posées guidées colonne par colonne, calculatrice 🧮
            si le PAP l'autorise (réglage de l'espace parents).
   • malvoyance : texte énorme, contraste fort, tout est lu.
   • allophone : consigne simplifiée, lue, et traduite (champ « traduction »).

   NOUVELLE SEMAINE : on DÉPLACE l'objet ci-dessous dans js/devoirs-archives.js
   (il devient un « ancien devoir », toujours jouable pour réviser),
   puis on écrit ici les nouveaux devoirs avec un nouvel id (la date du lundi).
   ========================================================= */
window.ZDEVOIRS = {
  id: 'semaine-1', titre: 'Les défis de la semaine',
  items: [
    {
      id: 'pgp', type: 'activite', moteur: 'ordre', pour: 'Lundi', titre: 'Les neuf principes, dans l’ordre',
      consigne: 'Range les neuf principes généraux de prévention dans l’ordre de l’article L4121-2.',
      pourquoi: 'L’ordre n’est pas décoratif : il dit qu’on agit d’abord sur le risque, et seulement à la fin sur la personne.',
      defi: 'Trouve un exemple, dans un atelier de tes élèves, où l’on a sauté directement au principe 8 (les EPI).',
      defiReponse: 'Par exemple : donner des bouchons d’oreille au lieu d’encoffrer la machine bruyante. Les bouchons arrivent après la protection collective.',
      series: [
        ['Éviter les risques', 'Évaluer les risques qui ne peuvent pas être évités', 'Combattre les risques à la source', 'Adapter le travail à l’homme',
          'Tenir compte de l’évolution de la technique', 'Remplacer ce qui est dangereux par ce qui l’est moins', 'Planifier la prévention',
          'Donner la priorité à la protection collective sur la protection individuelle', 'Donner les instructions appropriées aux travailleurs']
      ]
    },
    {
      id: 'stations', type: 'activite', moteur: 'paires', pour: 'Mercredi', titre: 'Les stations du chemin',
      consigne: 'Relie chaque station (maqâm) à sa traduction.',
      pourquoi: 'Les premiers manuels (al-Sarrâj, al-Qushayrî) décrivent le chemin comme une suite de stations : les connaître, c’est lire leur carte.',
      defi: 'Pourquoi le repentir (tawba) est-il presque toujours la première station ?',
      defiReponse: 'Parce que c’est le retour : on ne peut pas avancer sur un chemin sans s’être d’abord tourné vers lui.',
      paires: [['Tawba', 'Le repentir, le retour'], ['Wara‘', 'Le scrupule'], ['Zuhd', 'Le renoncement'], ['Faqr', 'La pauvreté'], ['Sabr', 'La patience'], ['Tawakkul', 'La remise confiante en Dieu'], ['Ridâ', 'Le contentement']]
    },
    {
      id: 'samedi', type: 'activite', moteur: 'qcm', pour: 'Samedi', titre: 'Avant d’aller chez IKEA',
      consigne: 'Trois questions de prévention, à faire dans la voiture. À l’arrêt.',
      pourquoi: 'Une sortie au magasin est une situation de travail comme une autre : il y a de la manutention.',
      defi: 'Analyse avec ITAMaMi le transport d’une armoire PAX du parking jusqu’au troisième étage.',
      defiReponse: 'Individu : toi (et Feriel, qui « aide »). Tâche : porter un colis lourd et long. Matériel : le colis, le diable si tu en as un. Milieu : l’escalier étroit. Conclusion : on demande la livraison.',
      questions: [
        { q: 'Un carton de 40 kg, à porter seul : quelle est la meilleure mesure ?', choix: ['Supprimer le port manuel : un chariot, ou la livraison', 'Le porter dos bien droit', 'Mettre une ceinture lombaire'], explication: 'Supprimer le risque passe avant les bons gestes et avant les protections individuelles.' },
        { q: 'Que fait la notice de montage, en PSE ?', choix: ['C’est une consigne de sécurité écrite', 'C’est un document facultatif', 'C’est une œuvre d’art suédoise'], explication: 'On la lit avant. Si si.' },
        { q: 'Feriel veut monter le lit seule pendant que tu fais les frites. En PSE, c’est…', choix: ['Une situation dangereuse : elle est exposée à un danger', 'Un dommage', 'Une maladie professionnelle'], explication: 'Le danger : la chute du cadre. L’exposition : elle est seule. Il manque l’événement dangereux. Ne le laisse pas arriver.' }
      ]
    }
  ]
};
