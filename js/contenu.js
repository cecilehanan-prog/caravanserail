/* =========================================================
   CONTENU DE BRAHIM (adulte, très haut niveau, professeur de PSE)
   Quatre tuiles : Soufisme, PSE (niveau professeur), Cuisine
   (sans gluten, air fryer), L’Escale (voyages, musique, lecture,
   restaurants, IKEA). Profil HPI : QCM affichés en entier, défis.
   Sources PSE : programmes officiels de PSE (CAP : arrêté du 3 avril
   2019, BO spécial n° 5 du 11 avril 2019 ; seconde, terminale
   professionnelle), Code du travail, INRS.
   Dans les textes, on écrit l’apostrophe typographique ’ : pas besoin de \'.
   ========================================================= */

/* ---------- La pensée soufie du jour (une par jour), avec un petit commentaire ----------
   Textes et paroles bien attestés ; « d’après » = traduction libre ;
   « selon la tradition » = parole attribuée, transmise par les recueils. */
ZDATA.blagues = [
  '« Écoute la flûte de roseau : elle raconte, elle se plaint des séparations. » (d’après Rûmî, premier vers du Masnavî) Tout le Masnavî tient dans cette plainte.',
  '« Quiconque est resté loin de son origine aspire au jour de l’union. » (d’après Rûmî, Masnavî, livre I) Le roseau veut retrouver sa roselière.',
  'Sept vallées séparent les oiseaux du Sîmorgh : la quête, l’amour, la connaissance, le détachement, l’unité, la stupéfaction, le dénuement. (d’après ‘Attâr, La Conférence des oiseaux) Il n’y a pas de raccourci, même avec la huppe.',
  'Des milliers d’oiseaux partent ; trente arrivent, et découvrent que « si morgh », trente oiseaux, c’est le Sîmorgh. (‘Attâr, La Conférence des oiseaux) Ce qu’ils cherchaient, c’était eux-mêmes, réunis.',
  'Les papillons de nuit cherchent la flamme. Un seul la connaît vraiment : celui qui s’y jette. (d’après ‘Attâr, La Conférence des oiseaux) La différence entre savoir et goûter.',
  '« Quelle différence entre connaître la définition de l’ivresse et être ivre ! » (d’après al-Ghazâlî, Erreur et délivrance) C’est le dhawq, le goût : la voie se vit, elle ne se récite pas.',
  '« C’est par le rappel de Dieu que les cœurs se tranquillisent. » (Coran, sourate 13, verset 28) Le dhikr, cœur de toutes les voies.',
  '« Adorer Dieu comme si tu Le voyais ; car si tu ne Le vois pas, Lui te voit. » (le hadith de Gabriel, sur l’ihsân) La définition la plus courte du chemin.',
  '« Si je T’adore par crainte de l’enfer, brûle-moi en enfer ; si je T’adore pour le paradis, prive-m’en ; mais si je T’adore pour Toi seul, ne me prive pas de Ta beauté. » (Rabi‘a, selon la tradition) L’amour pur, sans calcul.',
  '« Le soufisme, c’est que Dieu te fasse mourir à toi-même, et vivre en Lui. » (d’après al-Junayd, cité par al-Qushayrî) Le fanâ’, puis le baqâ’.',
  '« Mon cœur est devenu capable d’accueillir toute forme… Je professe la religion de l’amour. » (d’après Ibn ‘Arabî, L’Interprète des désirs) Un cœur sans étagère trop petite.',
  '« L’un des signes qu’on s’appuie sur ses œuvres, c’est de perdre espoir quand on a fauté. » (d’après Ibn ‘Atâ’ Allâh, première des Hikam) On s’appuie sur Dieu, pas sur son bulletin.',
  'Dans le noir, des hommes touchent un éléphant : l’un dit « un tuyau », l’autre « un éventail », l’autre « un pilier ». (d’après Rûmî, Masnavî, livre III) Chacun a raison sur une partie. Aucun ne voit le tout.',
  '« Le soufisme est aujourd’hui un nom sans réalité ; autrefois, c’était une réalité sans nom. » (Abû al-Hasan Fûshanjî, cité par al-Hujwîrî) Déjà au XIe siècle, on regrettait le bon vieux temps.',
  '« Anâ al-Haqq » : « Je suis la Vérité ». (al-Hallâj) Une parole qui a fait couler mille ans d’encre, et un peu de sang.',
  'La huppe dit aux oiseaux qu’elle connaît le chemin, et qu’il est long. (d’après ‘Attâr, La Conférence des oiseaux) Elle n’a jamais promis que ce serait facile. Ni qu’il y aurait une cafétéria.'
];
ZDATA.praise = ['Exact.', 'Juste. Sans surprise.', 'Bonne réponse. On s’en doutait.', 'Correct. L’inspection n’a rien à ajouter.',
  'C’est ça. Il faudra trouver plus dur.', 'Parfait. Ça devient lassant.', 'Exact. Même la huppe est impressionnée.', 'Juste, et bien raisonné.'];
ZDATA.retry = ['Non. Mais c’est une information.', 'Pas tout à fait. Relis : le diable est dans le détail.',
  'Raté. C’est noté dans le registre, à la ligne « événement non souhaité ».', 'Non. On dira que c’était pour tester l’appli.'];

window.ZCONTENU = {

  /* ===================== SOUFISME ===================== */
  soufisme: [
    { id: 'notions', type: 'qcm', titre: 'Les notions fondamentales', notion: 'Vocabulaire du tasawwuf',
      consigne: 'Douze notions. Les réponses fausses sont plausibles : c’est fait exprès.',
      questions: [
        { q: 'Selon l’étymologie la plus souvent retenue, le mot « soufi » vient de…', choix: ['Sûf : la laine', 'Safâ’ : la pureté', 'Sophia : la sagesse grecque'], explication: 'La laine, vêtement des ascètes. Safâ’ et ahl al-suffa sont des étymologies proposées par la tradition. Sophia est rejetée par les linguistes.' },
        { q: 'Le dhikr, c’est…', choix: ['Le rappel, ou la remémoration de Dieu, souvent par la répétition de Ses noms', 'La retraite solitaire', 'L’audition de la musique'], explication: 'Le Coran dit : « C’est par le rappel de Dieu que les cœurs se tranquillisent » (sourate 13, verset 28).' },
        { q: 'Le samâ‘ désigne…', choix: ['L’audition spirituelle : musique, poésie chantée, parfois danse', 'Le jeûne surérogatoire', 'La chaîne de transmission'], explication: 'Le samâ‘ a fait débat dès les premiers siècles. La cérémonie des Mevlevis en est la forme la plus connue.' },
        { q: 'Quelle différence entre un maqâm et un hâl ?', choix: ['Le maqâm est une station acquise par l’effort, le hâl un état reçu, passager', 'Le maqâm est un état passager, le hâl une station durable', 'Ce sont deux noms du même degré'], explication: 'C’est la distinction classique, par exemple chez al-Qushayrî : la station se gagne, l’état se reçoit.' },
        { q: 'Fanâ’ et baqâ’ signifient…', choix: ['L’extinction (du moi) et la subsistance (en Dieu)', 'La pauvreté et la patience', 'L’ivresse et la sobriété'], explication: 'Le fanâ’ n’est pas la fin du chemin : la plupart des maîtres insistent sur le baqâ’ qui le suit.' },
        { q: 'La silsila, c’est…', choix: ['La chaîne initiatique qui relie le maître au Prophète', 'Le chapelet', 'Le manteau du disciple'], explication: 'Chaque voie (tarîqa) se rattache par une silsila. Le chapelet se dit subha ou tasbîh.' },
        { q: 'Le murîd est…', choix: ['Le disciple, « celui qui veut »', 'Le maître spirituel', 'Le lieu de réunion'], explication: 'Murîd vient de irâda, la volonté. Le maître est le shaykh, ou murshid (le guide).' },
        { q: 'L’ihsân, défini dans le hadith de Gabriel, c’est…', choix: ['Adorer Dieu comme si tu Le voyais, car si tu ne Le vois pas, Lui te voit', 'Donner l’aumône en secret', 'Connaître la loi par cœur'], explication: 'Islâm, îmân, ihsân : les soufis voient souvent dans l’ihsân le cœur de leur voie.' },
        { q: 'Le nafs ammâra (sourate 12, verset 53) est…', choix: ['L’âme qui incite au mal', 'L’âme qui se blâme', 'L’âme apaisée'], explication: 'Les trois degrés coraniques : ammâra (12 : 53), lawwâma (75 : 2), mutma’inna (89 : 27).' },
        { q: 'La khalwa est…', choix: ['La retraite spirituelle, dans l’isolement', 'La réunion collective du vendredi', 'Le pèlerinage sur la tombe d’un saint'], explication: 'La visite pieuse d’un tombeau se dit ziyâra.' },
        { q: 'Zuhd, tawakkul, faqr : ce sont…', choix: ['Le renoncement, la remise confiante en Dieu, la pauvreté spirituelle', 'Trois confréries', 'Trois prières du soir'], explication: 'Ce sont des stations classiques du chemin, décrites dès les premiers manuels.' },
        { q: 'Une zâwiya (ou khânqâh, ou tekke) est…', choix: ['Un lieu où se réunit une confrérie', 'Un traité de théologie', 'Un instrument de musique'], explication: 'Zâwiya au Maghreb, khânqâh en Iran et en Inde, tekke en Turquie.' }
      ] },
    { id: 'lexique', type: 'paires', titre: 'Le lexique, en paires', notion: 'Vocabulaire',
      consigne: 'Relie chaque terme à son sens.',
      paires: [['Ma‘rifa', 'La connaissance intime de Dieu'], ['Tarîqa', 'La voie, la confrérie'], ['Baraka', 'La grâce, la bénédiction'], ['Walî', 'L’ami de Dieu, le saint'],
        ['Qutb', 'Le pôle spirituel de son temps'], ['Wird', 'La litanie quotidienne propre à une voie'], ['Khirqa', 'Le froc transmis au disciple'], ['Sukr', 'L’ivresse spirituelle']] },
    { id: 'maitres', type: 'qcm', titre: 'Les grands maîtres', notion: 'Figures du soufisme',
      questions: [
        { q: 'Quelle femme de Bassora, au VIIIe siècle, est célèbre pour sa doctrine de l’amour pur de Dieu ?', choix: ['Rabi‘a al-‘Adawiyya', 'Fâtima de Nishapur', 'Sayyida Nafîsa'], explication: 'Selon la tradition, elle voulait brûler le paradis et éteindre l’enfer, pour qu’on aime Dieu pour Lui seul.' },
        { q: 'Qui, à Bagdad, est le grand maître de la « sobriété » (sahw), mort en 910 ?', choix: ['Al-Junayd', 'Al-Hallâj', 'Abû Yazîd al-Bistâmî'], explication: 'On l’appelle souvent « le maître de la voie ». Beaucoup de chaînes passent par lui.' },
        { q: 'Qui est associé à « l’ivresse » (sukr) et à la parole « Gloire à moi » ?', choix: ['Abû Yazîd al-Bistâmî', 'Al-Ghazâlî', 'Ibn ‘Atâ’ Allâh'], explication: 'Ses paroles extatiques (shatahât) sont restées célèbres, et discutées.' },
        { q: 'Qui fut exécuté à Bagdad en 922, après avoir dit « Anâ al-Haqq » (« Je suis la Vérité ») ?', choix: ['Al-Hallâj', 'Al-Junayd', 'Shams de Tabriz'], explication: 'Louis Massignon lui a consacré sa grande thèse, « La Passion d’al-Hallâj » (1922).' },
        { q: 'Quel théologien a réconcilié le soufisme et l’orthodoxie dans « La Revivification des sciences de la religion » ?', choix: ['Al-Ghazâlî', 'Ibn Taymiyya', 'Ibn Rushd'], explication: 'Al-Ghazâlî (mort en 1111) raconte sa crise et sa conversion au soufisme dans « Al-Munqidh min al-dalâl » (« Erreur et délivrance »).' },
        { q: 'Qui est surnommé « al-Shaykh al-Akbar », le plus grand maître ?', choix: ['Ibn ‘Arabî', 'Rûmî', '‘Abd al-Qâdir al-Jîlânî'], explication: 'Né à Murcie en 1165, mort à Damas en 1240. Jeune, il rencontra Averroès à Cordoue.' },
        { q: 'Quelle rencontre a bouleversé Jalâl al-Dîn Rûmî à Konya, en 1244 ?', choix: ['Celle de Shams de Tabriz', 'Celle d’Ibn ‘Arabî', 'Celle de Hâfez'], explication: 'Shams disparut quelques années plus tard. La douleur de cette perte nourrit toute la poésie de Rûmî.' },
        { q: 'Où Rûmî est-il né, en 1207 ?', choix: ['À Balkh, dans l’actuel Afghanistan (ou dans sa région)', 'À Konya, en Turquie', 'À Shiraz, en Iran'], explication: 'Sa famille a fui vers l’ouest avant l’arrivée des Mongols et s’est installée à Konya.' },
        { q: 'Qui a fondé la confrérie des Mevlevis, les « derviches tourneurs » ?', choix: ['Sultan Walad, le fils de Rûmî, et ses successeurs', 'Rûmî lui-même, par un acte écrit', 'Shams de Tabriz'], explication: 'C’est Sultan Walad qui a organisé la voie après la mort de son père, en 1273.' },
        { q: 'Quel maître de Bagdad (mort en 1166) a donné son nom à la Qâdiriyya ?', choix: ['‘Abd al-Qâdir al-Jîlânî', '‘Abd al-Qâdir al-Jazâ’irî', 'Ahmad al-Rifâ‘î'], explication: 'Piège : l’émir Abdelkader (al-Jazâ’irî) est un autre ‘Abd al-Qâdir, du XIXe siècle.' },
        { q: 'L’émir Abdelkader, après son exil, a été enterré d’abord à Damas. Près de qui ?', choix: ['Près d’Ibn ‘Arabî, son maître spirituel à travers les siècles', 'Près de Saladin', 'Près de Rûmî'], explication: 'Il commentait Ibn ‘Arabî dans son « Livre des haltes » (Kitâb al-Mawâqif). Ses restes sont en Algérie depuis 1966.' },
        { q: 'Quel maître de Mostaganem, mort en 1934, a fondé la ‘Alawiyya ?', choix: ['Le cheikh Ahmad al-‘Alawî', 'Le cheikh Ahmad al-Tijânî', 'Le cheikh Amadou Bamba'], explication: 'L’actuel guide de cette voie, le cheikh Khaled Bentounès, a porté l’idée de la Journée internationale du vivre-ensemble en paix.' }
      ] },
    { id: 'oeuvres', type: 'paires', titre: 'Chaque auteur et son œuvre', notion: 'Textes',
      consigne: 'Relie chaque auteur au texte qu’il a écrit.',
      paires: [['Rûmî', 'Le Masnavî'], ['Farîd al-Dîn ‘Attâr', 'La Conférence des oiseaux'], ['Ibn ‘Arabî', 'Les Gemmes de la sagesse (Fusûs al-hikam)'], ['Al-Ghazâlî', 'Erreur et délivrance'],
        ['Ibn ‘Atâ’ Allâh', 'Les Hikam (sentences)'], ['Al-Qushayrî', 'La Risâla, épître sur le soufisme'], ['Al-Hujwîrî', 'Kashf al-mahjûb, en persan'], ['Hâfez', 'Le Divan']] },
    { id: 'frise', type: 'ordre', titre: 'La frise des maîtres', notion: 'Chronologie',
      consigne: 'Range-les du plus ancien au plus récent (date de mort).',
      series: [
        ['Hasan al-Basrî (728)', 'Al-Junayd (910)', 'Al-Hallâj (922)', 'Al-Ghazâlî (1111)', 'Ibn ‘Arabî (1240)', 'Rûmî (1273)', 'L’émir Abdelkader (1883)', 'Ahmad al-‘Alawî (1934)']
      ] },
    { id: 'textes', type: 'qcm', titre: 'Textes et poésie', notion: 'Littérature soufie',
      questions: [
        { q: 'Par quoi commence le Masnavî de Rûmî ?', choix: ['La plainte de la flûte de roseau, arrachée à sa roselière', 'Un éloge du sultan', 'Le récit de la création'], explication: '« Écoute la flûte de roseau… » : le ney pleure la séparation, comme l’âme loin de son origine.' },
        { q: 'Dans « La Conférence des oiseaux », qui guide les oiseaux ?', choix: ['La huppe', 'Le rossignol', 'Le faucon'], explication: 'Oui : le guide de cette appli n’a pas été choisi au hasard.' },
        { q: 'À la fin, trente oiseaux arrivent devant le Sîmorgh. Quel est le jeu de mots ?', choix: ['« Sî morgh » veut dire « trente oiseaux » en persan', 'Sîmorgh veut dire « montagne »', 'Sîmorgh est le nom de la huppe'], explication: 'Ils découvrent que ce qu’ils cherchaient, c’était eux-mêmes, réunis.' },
        { q: 'Combien de livres compte le Masnavî ?', choix: ['Six', 'Trois', 'Douze'], explication: 'Six livres et plus de 25 000 vers. Eva de Vitray-Meyerovitch l’a traduit en français.' },
        { q: 'Quel poète de Shiraz a inspiré à Goethe son « Divan occidental-oriental » ?', choix: ['Hâfez', 'Saadi', 'Omar Khayyâm'], explication: 'Goethe a découvert Hâfez par la traduction allemande de Hammer-Purgstall.' },
        { q: 'Les « Futûhât al-Makkiyya » (« Les Illuminations de La Mecque ») sont de…', choix: ['Ibn ‘Arabî', 'Al-Ghazâlî', 'Rûmî'], explication: 'Une somme immense, commencée à La Mecque.' },
        { q: 'Quel est le plus ancien grand traité de soufisme en persan ?', choix: ['Le Kashf al-mahjûb d’al-Hujwîrî', 'Le Masnavî', 'Le Divan de Hâfez'], explication: 'Al-Hujwîrî est enterré à Lahore. Son sanctuaire s’appelle Data Darbar.' },
        { q: 'Quel poète turc du XIIIe-XIVe siècle a chanté l’amour divin dans une langue populaire ?', choix: ['Yunus Emre', 'Nazim Hikmet', 'Fuzûlî'], explication: 'Yunus Emre écrivait en turc, et non en persan ou en arabe : ses vers sont encore chantés.' },
        { q: '« L’Homme parfait » (al-Insân al-kâmil) est le titre d’un traité de…', choix: ['‘Abd al-Karîm al-Jîlî', 'Al-Junayd', 'Rabi‘a'], explication: 'La notion vient d’Ibn ‘Arabî. Al-Jîlî, au tournant du XVe siècle, l’a développée.' },
        { q: 'Les Hikam d’Ibn ‘Atâ’ Allâh appartiennent à quelle voie ?', choix: ['La Shâdhiliyya', 'La Naqshbandiyya', 'La Chishtiyya'], explication: 'Il fut le troisième maître de la Shâdhiliyya, à Alexandrie puis au Caire.' }
      ] },
    { id: 'voies', type: 'qcm', titre: 'Les voies (turuq)', notion: 'Confréries',
      questions: [
        { q: 'Quelle voie pratique surtout le dhikr silencieux, « dans le cœur » ?', choix: ['La Naqshbandiyya', 'La Mevleviyya', 'La Rifâ‘iyya'], explication: 'Fondée sur l’enseignement de Bahâ’ al-Dîn Naqshband, à Boukhara (XIVe siècle).' },
        { q: 'La Chishtiyya est surtout présente…', choix: ['En Inde et au Pakistan', 'Au Sénégal', 'En Bosnie'], explication: 'Le tombeau de Mu‘în al-Dîn Chishtî est à Ajmer. Cette voie est liée au qawwali.' },
        { q: 'Qui a fondé la Tijâniyya ?', choix: ['Ahmad al-Tijânî, à la fin du XVIIIe siècle', 'Ahmad al-‘Alawî', 'Abû al-Hasan al-Shâdhilî'], explication: 'Son tombeau est à Fès. La voie est très présente en Afrique de l’Ouest.' },
        { q: 'La Mouridiyya a pour centre…', choix: ['Touba, au Sénégal', 'Konya, en Turquie', 'Fès, au Maroc'], explication: 'Fondée par le cheikh Amadou Bamba. Le Grand Magal rappelle son départ en exil, en 1895.' },
        { q: 'La Bektachiyya est liée…', choix: ['À Hacı Bektaş Veli, en Anatolie, et aux janissaires ottomans', 'À Ibn ‘Arabî, à Damas', 'Au Maghreb andalou'], explication: 'Elle a été interdite en Turquie en 1826 avec les janissaires, puis en 1925 avec toutes les confréries.' },
        { q: 'En 1925, la République turque…', choix: ['A fermé les tekkes et interdit les confréries', 'A fait des Mevlevis la religion officielle', 'A créé le festival de Konya'], explication: 'Le samâ‘ des Mevlevis a survécu, puis est revenu sous forme de cérémonie publique.' },
        { q: 'Quand l’UNESCO a-t-elle inscrit la cérémonie du samâ‘ des Mevlevis sur sa liste du patrimoine immatériel ?', choix: ['En 2008 (après sa proclamation comme chef-d’œuvre en 2005)', 'En 1973, pour les 700 ans de la mort de Rûmî', 'En 2020'], explication: 'Proclamée chef-d’œuvre en 2005, elle a été inscrite sur la Liste représentative en 2008.' },
        { q: 'Que fête-t-on à Konya chaque 17 décembre ?', choix: ['La « nuit de noces » (Şeb-i Arûs) : l’anniversaire de la mort de Rûmî', 'La naissance de Rûmî', 'L’arrivée de Shams'], explication: 'Pour Rûmî, la mort est l’union avec l’Aimé : on parle donc de noces, et non de deuil.' }
      ] },
    { id: 'histoire', type: 'cartes', titre: 'Histoire et transmission', notion: 'Histoire du soufisme',
      cartes: [
        { recto: 'Qui étaient les « gens de la banquette » (ahl al-suffa) ?', verso: 'Des compagnons pauvres qui vivaient sous l’auvent de la mosquée du Prophète, à Médine.', choix: ['Des compagnons pauvres de Médine', 'Les premiers juristes de Bagdad', 'Une confrérie turque', 'Des poètes persans'] },
        { recto: 'Les Malâmatiyya, à Nishapur, cherchaient…', verso: 'Le blâme : cacher leur vie spirituelle, pour fuir l’orgueil.', choix: ['Le blâme', 'La gloire', 'Le pouvoir', 'La solitude au désert'] },
        { recto: 'Qui a écrit « L’Imagination créatrice dans le soufisme d’Ibn ‘Arabî » ?', verso: 'Henry Corbin.', choix: ['Henry Corbin', 'Louis Massignon', 'René Guénon', 'Éric Geoffroy'] },
        { recto: 'Qui a traduit Rûmî en français, au XXe siècle ?', verso: 'Eva de Vitray-Meyerovitch.', choix: ['Eva de Vitray-Meyerovitch', 'Annemarie Schimmel', 'Marguerite Yourcenar', 'Germaine Tillion'] },
        { recto: 'Quand l’ONU a-t-elle adopté la Journée internationale du vivre-ensemble en paix, fixée au 16 mai ?', verso: 'Le 8 décembre 2017, à l’initiative de l’Algérie. L’idée vient du cheikh Khaled Bentounès.', choix: ['En 2017', 'En 2001', 'En 1995', 'En 2023'] },
        { recto: 'Qui est l’auteur de « Initiation au soufisme » (2003) ?', verso: 'Éric Geoffroy, islamologue français.', choix: ['Éric Geoffroy', 'Abdelwahab Meddeb', 'Henry Corbin', 'Malek Chebel'] },
        { recto: '« Wahdat al-shuhûd » (l’unité de la contemplation) a été opposée à « wahdat al-wujûd » par…', verso: 'Ahmad Sirhindî, maître naqshbandi de l’Inde moghole (mort en 1624).', choix: ['Ahmad Sirhindî', 'Ibn ‘Arabî', 'Rûmî', 'Al-Hallâj'] }
      ] },
    { id: 'haut-vol', type: 'qcm', titre: '🧠 Défis de haut vol', notion: 'Pour les spécialistes',
      consigne: 'Le niveau monte. Si tout est juste, la huppe exige une explication.',
      questions: [
        { q: 'L’expression « wahdat al-wujûd » (l’unicité de l’être)…', choix: ['Est associée à Ibn ‘Arabî, mais s’impose surtout chez ses commentateurs et ses critiques', 'Est le titre d’un livre d’Ibn ‘Arabî', 'A été inventée par Rûmî'], explication: 'Ibn ‘Arabî ne l’emploie pas comme formule technique. Elle devient une étiquette plus tard, chez ses disciples et chez ses adversaires, comme Ibn Taymiyya.' },
        { q: 'Pour al-Junayd, la sobriété (sahw) est supérieure à l’ivresse (sukr) parce que…', choix: ['Le retour à la conscience, après l’extinction, est plus parfait que l’extase', 'L’ivresse est interdite par la loi', 'La sobriété ne demande aucun effort'], explication: 'C’est le baqâ’ après le fanâ’ : on revient vers le monde, transformé.' },
        { q: 'Le barzakh, chez Ibn ‘Arabî, est…', choix: ['Un isthme, un entre-deux qui sépare et relie à la fois', 'Le paradis', 'Une prière de nuit'], explication: 'Le mot est coranique (sourate 55, verset 20 : un barzakh entre les deux mers).' },
        { q: 'Pourquoi al-Hallâj a-t-il été condamné ?', choix: ['Pour des raisons à la fois religieuses et politiques, dans un procès long et complexe', 'Pour un seul vers, sans procès', 'Pour avoir refusé de payer l’impôt'], explication: 'Massignon a montré le rôle des rivalités à la cour abbasside. La phrase « Anâ al-Haqq » n’explique pas tout.' },
        { q: 'Dans le soufisme, « mourir avant de mourir » renvoie à…', choix: ['L’extinction du moi (fanâ’) pendant la vie', 'Le jeûne de quarante jours', 'Le pèlerinage à La Mecque'], explication: 'Cette parole est souvent citée comme hadith, mais les spécialistes du hadith ne la reconnaissent pas comme authentique.' },
        { q: 'Que veut dire « derviche » ?', choix: ['Pauvre, en persan (darvîsh) : comme « faqîr » en arabe', 'Danseur, en turc', 'Savant, en arabe'], explication: 'La pauvreté (faqr) est d’abord intérieure : avoir besoin de Dieu seul.' }
      ] },
    { id: 'ney', type: 'redaction', titre: 'Expliquer la flûte de roseau à Feriel', notion: 'Commentaire',
      consigne: 'Explique à Feriel, en quelques phrases, pourquoi le Masnavî commence par une flûte. Feriel validera. Elle est exigeante.',
      etapes: [
        { titre: 'L’image', consigne: 'Décris l’image : d’où vient la flûte, pourquoi elle pleure.', mots: ['roseau', 'roselière', 'séparation', 'plainte'] },
        { titre: 'Le sens', consigne: 'Dis ce que représente la flûte, et ce que représente la roselière.', mots: ['l’âme', 'l’origine', 'le retour', 'la nostalgie'] },
        { titre: 'La musique', consigne: 'Fais le lien avec le ney des Mevlevis et le samâ‘.', mots: ['ney', 'souffle', 'samâ‘', 'derviches'] }
      ],
      checklist: ['Une image, un sens, un lien avec la musique', 'Pas plus de six phrases (Feriel a d’autres choses à faire)', 'Aucun mot savant sans explication'] }
  ],

  /* ===================== PSE (niveau professeur) ===================== */
  pse: [
    { id: 'programme', type: 'qcm', titre: 'Le programme, en détail', notion: 'CAP, seconde, première, terminale',
      consigne: 'Les programmes de PSE de la voie professionnelle. Pour un professeur, c’est une formalité. En théorie.',
      questions: [
        { q: 'Combien de thématiques compte le programme de PSE en CAP ?', choix: ['Quatre (A, B, C, D)', 'Trois (A, B, C)', 'Cinq (A à E)'], explication: 'En CAP, il y a une thématique D : « L’individu consommateur averti ». Le bac pro n’en a que trois.' },
        { q: 'Que contient la thématique D du CAP ?', choix: ['L’assurance, le budget, les achats', 'Le bruit, l’eau, l’énergie', 'Le sommeil, l’activité physique, les addictions'], explication: 'Modules D1 « L’assurance », D2 « Le budget », D3 « Les achats ».' },
        { q: 'Où ont été publiés les programmes de PSE de CAP et de seconde professionnelle de la réforme de la voie professionnelle ?', choix: ['Au BO spécial n° 5 du 11 avril 2019', 'Au BO n° 1 du 1er janvier 2017', 'Au Journal officiel du 14 juillet 2021'], explication: 'Arrêté du 3 avril 2019, en vigueur à la rentrée 2019.' },
        { q: 'En CAP, quel module forme les élèves au Sauvetage Secourisme du Travail (SST) ?', choix: ['C8 : La gestion des situations d’urgence', 'C6 : Les acteurs et les organismes de la prévention', 'A1 : Le système de santé'], explication: 'La formation est faite par un formateur SST à jour, selon le référentiel de l’INRS.' },
        { q: 'En bac pro, dans quelle classe se trouve le module C4 « L’assistance et le secours en milieu professionnel » ?', choix: ['En première', 'En seconde', 'En terminale'], explication: 'En seconde : C1 et C2. En première : C3 à C6. En terminale : C7 à C12.' },
        { q: 'Quel module de terminale bac pro traite de la sécurité alimentaire ?', choix: ['A9', 'B1', 'C11'], explication: 'A9 « La sécurité alimentaire » : qualité microbiologique et chimique, chaîne du froid, DLC, allergènes, paquet hygiène.' },
        { q: 'Quels outils d’analyse d’une activité de travail le programme de CAP cite-t-il ?', choix: ['5M, QQOQCP, ITAMaMi', 'SWOT, PESTEL, Pareto', 'AMDEC, HACCP, ISO 45001'], explication: 'ITAMaMi : Individu, Tâche, Matériel, Milieu. 5M : Main-d’œuvre, Matière, Matériel, Méthode, Milieu.' },
        { q: 'Quelle brochure de l’INRS le programme cite-t-il pour la classification des risques ?', choix: ['La brochure ED 840', 'La brochure ED 6251', 'La brochure ED 950'], explication: 'ED 840 : l’évaluation des risques professionnels. ED 6251, citée en terminale, porte sur les risques psychosociaux.' },
        { q: 'En terminale bac pro, que traite le module C12 ?', choix: ['L’égalité de traitement au travail', 'Les risques psychosociaux', 'L’analyse d’une situation de travail'], explication: 'C9 : risques psychosociaux. C11 : analyse d’une situation de travail. C12 : égalité (jeunes, handicap, femmes-hommes).' },
        { q: 'Avec quelle formation le module C10 de terminale (activité physique) fait-il le lien ?', choix: ['PRAP : prévention des risques liés à l’activité physique', 'PSC1', 'BAFA'], explication: 'Le programme invite à relier les mesures de prévention aux principes généraux de prévention et à la PRAP.' }
      ] },
    { id: 'notions-base', type: 'paires', titre: 'Les notions de base', notion: 'Approche par le risque',
      consigne: 'Relie chaque notion à sa définition.',
      paires: [['Danger', 'Ce qui peut causer un dommage (propriété intrinsèque)'], ['Situation dangereuse', 'Une personne exposée à un danger'], ['Événement dangereux', 'Ce qui déclenche le dommage'],
        ['Dommage', 'La lésion ou l’atteinte à la santé'], ['Risque', 'La possibilité qu’un dommage survienne'], ['Maladie professionnelle', 'Une atteinte due à une exposition chronique']] },
    { id: 'processus', type: 'ordre', titre: 'Le processus d’apparition d’un dommage', notion: 'Approche par le risque',
      consigne: 'Remets chaque série dans l’ordre.',
      series: [
        ['Un danger', 'Une situation dangereuse (l’opérateur est exposé)', 'Un événement dangereux (le déclencheur)', 'Le dommage'],
        ['Supprimer le risque', 'Le réduire à la source', 'La protection collective', 'La protection individuelle', 'La formation et l’information'],
        ['Protéger', 'Examiner', 'Faire alerter ou alerter', 'Secourir']
      ] },
    { id: 'reglementation', type: 'qcm', titre: 'Le Code du travail, sans le code', notion: 'Réglementation',
      questions: [
        { q: 'Combien de principes généraux de prévention l’article L4121-2 du Code du travail énonce-t-il ?', choix: ['Neuf', 'Sept', 'Douze'], explication: 'Du premier, « éviter les risques », au dernier, « donner les instructions appropriées aux travailleurs ».' },
        { q: 'Quel est le premier principe général de prévention ?', choix: ['Éviter les risques', 'Former les salariés', 'Fournir des équipements de protection individuelle'], explication: 'Les protections individuelles arrivent après les protections collectives : c’est le principe 8.' },
        { q: 'Le document unique d’évaluation des risques professionnels (DUERP) est obligatoire…', choix: ['Dès le premier salarié', 'À partir de 11 salariés', 'À partir de 50 salariés'], explication: 'À partir de 11 salariés, il doit en plus être mis à jour au moins une fois par an.' },
        { q: 'Depuis les ordonnances de 2017, quelle instance a remplacé le CHSCT ?', choix: ['Le CSE, comité social et économique', 'Le comité d’entreprise', 'La CARSAT'], explication: 'À partir de 300 salariés, le CSE doit avoir une commission santé, sécurité et conditions de travail (CSSCT).' },
        { q: 'Bruit au travail : à partir de quel niveau d’exposition (8 heures) l’employeur doit-il fournir des protections auditives ?', choix: ['80 dB(A)', '85 dB(A)', '87 dB(A)'], explication: '80 dB(A) : valeur inférieure, protections mises à disposition. 85 : valeur supérieure, port obligatoire. 87 : valeur limite, protections comprises.' },
        { q: 'Un salarié victime d’un accident du travail doit prévenir son employeur…', choix: ['Dans les 24 heures', 'Dans les 48 heures', 'Dans la semaine'], explication: 'L’employeur déclare ensuite l’accident à la CPAM dans les 48 heures (sans compter dimanches et jours fériés).' },
        { q: 'Quel article du Code pénal le programme de terminale cite-t-il pour la responsabilité de l’employeur ?', choix: ['L’article 223-1 : la mise en danger d’autrui', 'L’article 121-3 : les délits non intentionnels', 'L’article 1240 : la responsabilité civile'], explication: 'Piège : l’article 1240 existe, mais il est dans le Code civil.' },
        { q: 'La visite d’information et de prévention (VIP) et l’examen médical d’aptitude (EMA) : lequel concerne les postes à risque ?', choix: ['L’examen médical d’aptitude', 'La visite d’information et de prévention', 'Les deux, sans différence'], explication: 'Les postes à risques particuliers ont un suivi individuel renforcé, avec examen d’aptitude (article R4624-23).' },
        { q: 'De quand date l’accord national interprofessionnel sur le stress au travail, cité par le programme ?', choix: ['Du 2 juillet 2008', 'Du 26 mars 2010', 'Du 4 août 2014'], explication: '2010 : harcèlement et violence au travail. 4 août 2014 : la loi pour l’égalité réelle entre les femmes et les hommes.' },
        { q: 'Qu’est-ce qu’une « faute inexcusable » de l’employeur ?', choix: ['Il avait ou aurait dû avoir conscience du danger, et n’a pas pris les mesures nécessaires', 'Une faute volontaire du salarié', 'Une faute commise hors du temps de travail'], explication: 'Elle ouvre droit à une majoration de la rente et à l’indemnisation d’autres préjudices.' }
      ] },
    { id: 'acteurs', type: 'cartes', titre: 'Qui fait quoi ?', notion: 'Les acteurs de la prévention',
      cartes: [
        { recto: 'Qui contrôle l’application du Code du travail dans l’entreprise ?', verso: 'L’inspection du travail.', choix: ['L’inspection du travail', 'La CARSAT', 'L’INRS', 'Le CSE'] },
        { recto: 'Qui fixe le taux de cotisation AT-MP de l’entreprise et conseille en prévention, en région ?', verso: 'La CARSAT (la CRAMIF en Île-de-France).', choix: ['La CARSAT', 'L’ANACT', 'L’inspection du travail', 'Le médecin du travail'] },
        { recto: 'Qui produit les brochures « ED » et les études sur les risques professionnels ?', verso: 'L’INRS, Institut national de recherche et de sécurité.', choix: ['L’INRS', 'L’ANSES', 'La DGCCRF', 'L’OPPBTP'] },
        { recto: 'Qui s’occupe de prévention dans le bâtiment et les travaux publics ?', verso: 'L’OPPBTP.', choix: ['L’OPPBTP', 'L’INRS', 'L’ANACT', 'La CPAM'] },
        { recto: 'Qui améliore les conditions de travail, avec son réseau régional (les ARACT) ?', verso: 'L’ANACT.', choix: ['L’ANACT', 'La CARSAT', 'L’INRS', 'L’URSSAF'] },
        { recto: 'Qui, dans le service de santé au travail, n’est pas médecin mais intervient en prévention (ergonome, toxicologue…) ?', verso: 'Un IPRP : intervenant en prévention des risques professionnels.', choix: ['Un IPRP', 'Un SST', 'Un CSE', 'Un DUERP'] },
        { recto: 'Qui contrôle la sécurité des aliments, au niveau du département ?', verso: 'La DDPP (ou la DDETSPP), direction départementale de la protection des populations.', choix: ['La DDPP', 'La CARSAT', 'L’inspection du travail', 'L’ARS seule'] }
      ] },
    { id: 'arbre', type: 'qcm', titre: 'L’arbre des causes', notion: 'Approche par l’accident',
      questions: [
        { q: 'Par où commence-t-on la construction d’un arbre des causes ?', choix: ['Par le dommage, puis on remonte vers les causes', 'Par la cause principale', 'Par la mesure de prévention'], explication: 'On part du fait ultime (la lésion) et on remonte, fait par fait.' },
        { q: 'Que recueille-t-on pour construire l’arbre ?', choix: ['Des faits, sans interprétation ni jugement', 'Des opinions de témoins', 'Le nom du responsable'], explication: 'On ne cherche pas un coupable, mais les causes, pour prévenir.' },
        { q: 'Quelles questions pose-t-on devant chaque fait ?', choix: ['Qu’a-t-il fallu pour que ce fait arrive ? Est-ce nécessaire ? Est-ce suffisant ?', 'Qui est responsable ? Combien ça coûte ?', 'Quand ? Où ? Combien ?'], explication: 'Si un seul fait suffit : c’est un enchaînement. S’il en faut plusieurs : c’est une conjonction.' },
        { q: 'Un fait qui entraîne plusieurs faits, c’est…', choix: ['Une disjonction', 'Une conjonction', 'Un enchaînement'], explication: 'Trois liaisons : enchaînement, conjonction, disjonction.' },
        { q: 'Le but final de l’arbre des causes est…', choix: ['De proposer des mesures de prévention, pour que l’accident ne se reproduise pas', 'De calculer l’indemnité de la victime', 'De remplir la déclaration à la CPAM'], explication: 'On cherche surtout les causes sur lesquelles on peut agir.' }
      ] },
    { id: 'sante', type: 'qcm', titre: 'Santé, alimentation, bruit', notion: 'Thématiques A et B',
      questions: [
        { q: 'DLC et DDM : laquelle peut être dépassée sans danger ?', choix: ['La DDM, « à consommer de préférence avant »', 'La DLC, « à consommer jusqu’au »', 'Aucune des deux'], explication: 'La DLC concerne les produits très périssables : après, il y a un risque microbiologique.' },
        { q: 'Combien d’allergènes doivent être signalés, selon la réglementation européenne ?', choix: ['14', '8', '22'], explication: 'Le premier de la liste : les céréales contenant du gluten. Brahim le sait mieux que la liste.' },
        { q: 'Au restaurant, l’information sur les allergènes…', choix: ['Est obligatoire, par écrit ou à l’oral si un écrit l’indique', 'Est facultative', 'N’est obligatoire que pour les arachides'], explication: 'Depuis 2015, en France, pour les plats non préemballés aussi.' },
        { q: 'Dans l’oreille, qu’est-ce qui ne se renouvelle pas, et explique la surdité due au bruit ?', choix: ['Les cellules ciliées de la cochlée', 'Le tympan', 'Les osselets'], explication: 'C’est pour ça que la prévention est la seule protection : une perte d’audition due au bruit est définitive.' },
        { q: 'Quelle part des maladies professionnelles reconnues représentent les troubles musculo-squelettiques ?', choix: ['La grande majorité : plus de 8 sur 10', 'Environ la moitié', 'Environ un quart'], explication: 'C’est pour ça que les modules sur l’activité physique ont une telle place dans le programme.' },
        { q: 'Les six familles de facteurs de risques psychosociaux citées par le programme : laquelle n’en fait pas partie ?', choix: ['La température du local', 'Les exigences émotionnelles', 'Les conflits de valeurs'], explication: 'Les six : intensité et temps de travail, exigences émotionnelles, manque d’autonomie, rapports sociaux dégradés, conflits de valeurs, insécurité de la situation de travail.' },
        { q: 'Prévention primaire, secondaire, tertiaire : le dépistage, c’est…', choix: ['La prévention secondaire', 'La prévention primaire', 'La prévention tertiaire'], explication: 'Primaire : éviter l’apparition. Secondaire : repérer tôt. Tertiaire : limiter les conséquences.' }
      ] },
    { id: 'indicateurs', type: 'calcul', titre: 'Les chiffres de la prévention', notion: 'Calculs',
      questions: [
        { q: 'Une entreprise a eu 6 accidents avec arrêt pour 400 000 heures travaillées. Quel est son taux de fréquence ?', reponse: 15,
          aide: 'TF = nombre d’accidents avec arrêt × 1 000 000 ÷ heures travaillées.', solution: '6 × 1 000 000 ÷ 400 000 = 15.' },
        { q: 'Même entreprise : 120 journées perdues pour 400 000 heures. Quel est son taux de gravité ?', reponse: 0.3, tolerance: 0.001,
          aide: 'TG = journées perdues × 1 000 ÷ heures travaillées.', solution: '120 × 1 000 ÷ 400 000 = 0,3.' },
        { q: 'Règle des 3 dB : chaque fois qu’on ajoute 3 dB, l’énergie sonore double. 85 dB(A) pendant 8 h, c’est la même dose que 88 dB(A) pendant combien d’heures ?', reponse: 4, unite: 'h',
          aide: '+3 dB = deux fois plus d’énergie : il faut deux fois moins de temps.', solution: '8 ÷ 2 = 4 heures.' },
        { q: 'Et à 94 dB(A) ? Combien de temps pour atteindre la même dose que 85 dB(A) pendant 8 h ?', reponse: 1, unite: 'h',
          aide: '94 − 85 = 9 dB, soit trois fois 3 dB.', solution: '8 ÷ 2 ÷ 2 ÷ 2 = 1 heure. Un concert, en somme.' }
      ] },
    { id: 'seance', type: 'redaction', titre: 'Préparer une séance (C2, seconde)', notion: 'Didactique',
      consigne: 'Construis une séance sur le module C2 « Les notions de base en prévention des risques professionnels ». Feriel validera : elle connaît le sujet, elle vit avec toi.',
      etapes: [
        { titre: 'La situation de départ', consigne: 'Choisis une activité de travail réelle du métier de tes élèves, et la question qui lance la séance.', mots: ['activité de travail', 'plateau technique', 'PFMP', 'problématique'] },
        { titre: 'L’activité des élèves', consigne: 'Ce que les élèves font : repérer les dangers, les relier aux dommages possibles.', mots: ['danger', 'situation dangereuse', 'dommage potentiel', 'ED 840'] },
        { titre: 'La synthèse', consigne: 'Ce qu’ils retiennent, en deux ou trois phrases.', mots: ['risque', 'famille de risques'] },
        { titre: 'Le lien avec le métier', consigne: 'Le lien avec le professeur d’enseignement professionnel.', mots: ['consignes de sécurité', 'enseignement professionnel'] }
      ],
      checklist: ['Une situation réelle, pas un cas d’école', 'Les notions clés du programme', 'Une trace écrite courte', 'Un lien avec l’enseignement professionnel'] }
  ],

  /* ===================== CUISINE ===================== */
  cuisine: [
    { id: 'gluten', type: 'qcm', titre: 'Le gluten, ce traître', notion: 'Sans gluten',
      consigne: 'Feriel pose les questions. Elle connaît déjà les réponses : elle vit avec toi.',
      questions: [
        { q: 'Le gluten est…', choix: ['Un ensemble de protéines (gliadines et gluténines)', 'Un sucre', 'Une graisse'], explication: 'C’est lui qui donne son élasticité à la pâte à pain.' },
        { q: 'Lequel contient du gluten ?', choix: ['L’épeautre', 'Le sarrasin', 'Le quinoa'], explication: 'Blé, épeautre, kamut, seigle, orge : oui. Sarrasin, quinoa, riz, maïs, millet : non.' },
        { q: 'Le sarrasin, appelé « blé noir »…', choix: ['Ne contient pas de gluten : ce n’est même pas une céréale', 'Contient du gluten, comme le blé', 'Contient du gluten seulement en Bretagne'], explication: 'Le sarrasin est de la famille de l’oseille et de la rhubarbe.' },
        { q: 'L’avoine…', choix: ['Ne convient que si elle est certifiée sans gluten (risque de contamination)', 'Contient autant de gluten que le blé', 'Est toujours sans risque'], explication: 'Elle est souvent cultivée et moulue près du blé.' },
        { q: 'Quel est le piège dans la sauce soja classique ?', choix: ['Elle contient souvent du blé', 'Elle contient de l’orge', 'Aucun'], explication: 'Le tamari est souvent sans blé : on vérifie l’étiquette.' },
        { q: 'Panure aux corn-flakes : bonne idée ?', choix: ['Prudence : beaucoup contiennent de l’extrait de malt d’orge', 'Oui, le maïs ne contient pas de gluten', 'Oui, la cuisson détruit le gluten'], explication: 'Le maïs, oui. Le malt, non. Et la cuisson ne détruit pas le gluten.' },
        { q: 'En Europe, un produit « sans gluten » contient au plus…', choix: ['20 mg de gluten par kg', '0 mg, strictement', '200 mg par kg'], explication: 'Au-dessus de 100 mg par kg, on ne peut pas dire « très faible teneur en gluten ».' },
        { q: 'Lequel est 100 % gluten ?', choix: ['Le seitan', 'Le tofu', 'Le tempeh'], explication: 'Le seitan est fait de gluten de blé. À éviter, donc, malgré son air innocent.' },
        { q: 'Au restaurant, des frites « sans gluten » peuvent poser problème si…', choix: ['Elles cuisent dans la même huile que des produits panés', 'Elles sont salées', 'Elles sont faites maison'], explication: 'C’est la contamination croisée. D’où l’air fryer de Brahim : une friteuse qui ne fréquente personne.' }
      ] },
    { id: 'farines', type: 'paires', titre: 'Les farines et leurs recettes', notion: 'Sans gluten et voyages',
      consigne: 'Relie chaque farine à une recette qui l’utilise.',
      paires: [['Farine de pois chiche', 'La socca de Nice'], ['Farine de sarrasin', 'La galette bretonne'], ['Fécule de manioc (tapioca)', 'Le pão de queijo brésilien'],
        ['Farine de châtaigne', 'Le gâteau à la châtaigne corse'], ['Poudre d’amande', 'Le financier'], ['Farine de maïs', 'La polenta']] },
    { id: 'airfryer', type: 'qcm', titre: 'La science de l’air fryer', notion: 'Cuisson',
      questions: [
        { q: 'Un air fryer est, en réalité…', choix: ['Un petit four à convection : de l’air très chaud pulsé', 'Une friteuse à huile sans huile', 'Un four à micro-ondes'], explication: 'Il ne frit pas : il rôtit très vite, grâce à un ventilateur puissant dans un petit volume.' },
        { q: 'Pourquoi tremper les frites crues dans l’eau froide ?', choix: ['Pour enlever l’amidon de surface : elles croustillent mieux et dorent moins vite', 'Pour les saler', 'Pour qu’elles gonflent'], explication: 'On les sèche bien ensuite : l’eau empêche le croustillant.' },
        { q: 'Quelle réaction donne leur couleur dorée et leur goût aux frites ?', choix: ['La réaction de Maillard', 'La fermentation', 'La caramélisation des graisses'], explication: 'Sucres et acides aminés réagissent à haute température.' },
        { q: 'Pourquoi faut-il viser « doré » et non « brun » ?', choix: ['Pour limiter l’acrylamide, qui se forme quand on cuit trop les aliments riches en amidon', 'Pour garder les vitamines', 'Par élégance'], explication: 'Le conseil des autorités sanitaires : « doré, pas brun ». Tremper les pommes de terre aide aussi.' },
        { q: 'Pourquoi secouer le panier à mi-cuisson ?', choix: ['Pour que l’air chaud touche toutes les faces', 'Pour faire du bruit', 'Pour refroidir l’appareil'], explication: 'Et on ne surcharge pas le panier : l’air doit circuler.' },
        { q: 'Combien d’huile pour 500 g de frites à l’air fryer ?', choix: ['Environ une cuillère à soupe', 'Un demi-litre', 'Aucune goutte, jamais'], explication: 'Un peu d’huile aide la réaction de Maillard et le croustillant.' },
        { q: 'Pour adapter une recette de four à l’air fryer, une règle pratique souvent donnée est…', choix: ['Baisser d’environ 20 °C et réduire un peu le temps, en surveillant', 'Doubler la température', 'Garder exactement la même chose'], explication: 'C’est une règle d’usage, pas une loi : chaque appareil est différent.' }
      ] },
    { id: 'recettes', type: 'ordre', titre: 'Trois recettes à l’air fryer', notion: 'Recettes sans gluten',
      consigne: 'Remets les étapes de chaque recette dans l’ordre.',
      series: [
        ['Couper les pommes de terre en bâtonnets', 'Les tremper 30 minutes dans l’eau froide', 'Bien les sécher', 'Ajouter une cuillère d’huile', 'Cuire à 190 °C en secouant à mi-cuisson', 'Saler à la sortie'],
        ['Rincer et égoutter des pois chiches cuits', 'Les sécher dans un torchon', 'Les mélanger avec un peu d’huile, du cumin et du paprika', 'Cuire à 200 °C environ 15 minutes en secouant', 'Laisser refroidir : ils croustillent encore'],
        ['Couper des blancs de poulet en lamelles', 'Les passer dans l’œuf battu', 'Les rouler dans de la polenta fine et des épices', 'Cuire à 190 °C en les retournant à mi-cuisson', 'Vérifier que le cœur est bien cuit']
      ] },
    { id: 'proportions', type: 'calcul', titre: 'Les maths du chef', notion: 'Proportions',
      questions: [
        { q: 'Pour Feriel et toi, il faut 400 g de pommes de terre. Feriel invite 3 amies. Combien de grammes pour vous 5 ?', reponse: 1000, unite: 'g',
          aide: '400 g pour 2, donc 200 g par personne.', solution: '200 × 5 = 1 000 g, soit 1 kg.' },
        { q: 'Ton panier tient 500 g de frites par fournée, et chaque fournée dure 18 minutes. Combien de minutes pour 1,5 kg ?', reponse: 54, unite: 'min',
          aide: '1,5 kg = 1 500 g : combien de fournées ?', solution: '1 500 ÷ 500 = 3 fournées, et 3 × 18 = 54 minutes. Prévois un apéritif.' },
        { q: 'Une recette de four indique 210 °C. Tu baisses de 20 °C pour l’air fryer. Quelle température ?', reponse: 190, unite: '°C',
          aide: '210 − 20.', solution: '190 °C.' },
        { q: 'Une pâte à socca : 250 g de farine de pois chiche pour 500 ml d’eau. Combien d’eau pour 100 g de farine ?', reponse: 200, unite: 'ml',
          aide: 'Il faut deux fois plus d’eau que de farine.', solution: '100 × 2 = 200 ml.' }
      ] },
    { id: 'epices', type: 'cartes', titre: 'Les épices du monde', notion: 'Cuisine et voyages',
      cartes: [
        { recto: 'Le ras el hanout vient…', verso: 'Du Maghreb. Son nom veut dire « la tête de la boutique » : le meilleur de l’épicier.', choix: ['Du Maghreb', 'De l’Inde', 'Du Mexique', 'Du Japon'] },
        { recto: 'Le za‘atar, mélange de thym, de sumac et de sésame, vient…', verso: 'Du Proche-Orient (Liban, Syrie, Palestine, Jordanie).', choix: ['Du Proche-Orient', 'De Chine', 'D’Éthiopie', 'De Turquie seulement'] },
        { recto: 'Le garam masala vient…', verso: 'De l’Inde et du Pakistan.', choix: ['De l’Inde', 'Du Maroc', 'Du Pérou', 'De Grèce'] },
        { recto: 'Le berbéré, mélange très pimenté, vient…', verso: 'D’Éthiopie et d’Érythrée.', choix: ['D’Éthiopie', 'Du Maroc', 'D’Algérie', 'Du Liban'] },
        { recto: 'Le dukkah, mélange de noisettes, de sésame et d’épices, vient…', verso: 'D’Égypte.', choix: ['D’Égypte', 'De Thaïlande', 'D’Espagne', 'Du Brésil'] },
        { recto: 'Le sumac donne une saveur…', verso: 'Acidulée, citronnée.', choix: ['Acidulée', 'Sucrée', 'Très piquante', 'Fumée'] }
      ] },
    { id: 'signature', type: 'redaction', titre: 'Ma recette signature, pour Feriel', notion: 'Rédaction',
      consigne: 'Écris ta meilleure recette sans gluten à l’air fryer, pour que Feriel puisse la refaire. Elle validera. Après dégustation.',
      etapes: [
        { titre: 'Le nom et l’histoire', consigne: 'Le nom du plat, et d’où il vient (un voyage, un restaurant, une idée de nuit).', mots: ['inspiré de', 'souvenir', 'voyage'] },
        { titre: 'Les ingrédients', consigne: 'La liste, avec les quantités. Vérifie qu’aucun ne cache du gluten.', mots: ['sans gluten', 'farine de riz', 'polenta', 'fécule'] },
        { titre: 'Les étapes', consigne: 'Les étapes dans l’ordre, avec la température et le temps.', mots: ['préchauffer', 'secouer', 'à mi-cuisson', 'doré'] },
        { titre: 'Le secret du chef', consigne: 'L’astuce que personne ne connaît. Sauf Feriel, maintenant.' }
      ],
      checklist: ['Des quantités précises', 'Aucun ingrédient piège (sauce soja, malt, chapelure)', 'La température et le temps', 'Un secret, un seul'] }
  ],

  /* ===================== L’ESCALE : voyages, musique, lecture, restaurants, IKEA ===================== */
  escale: [
    { id: 'lieux', type: 'qcm', titre: 'Voyage sur les pas des soufis', notion: 'Voyages',
      questions: [
        { q: 'Où se trouve le mausolée de Rûmî, sous son dôme vert ?', choix: ['À Konya, en Turquie', 'À Istanbul', 'À Tabriz, en Iran'], explication: 'C’est aujourd’hui le musée Mevlâna.' },
        { q: 'Où se trouve le tombeau d’Ibn ‘Arabî ?', choix: ['À Damas, dans le quartier de Salihiyya', 'À Murcie, en Espagne', 'Au Caire'], explication: 'Le sultan ottoman Selim Ier y a fait construire une mosquée, juste après la conquête de Damas (1516).' },
        { q: 'Dans quelle ville a lieu, depuis 1994, le Festival des musiques sacrées du monde ?', choix: ['À Fès, au Maroc', 'À Konya', 'À Marrakech'], explication: 'Fès accueille aussi un festival de la culture soufie.' },
        { q: 'Où se trouve le grand sanctuaire de Mu‘în al-Dîn Chishtî ?', choix: ['À Ajmer, en Inde', 'À Lahore, au Pakistan', 'À Boukhara, en Ouzbékistan'], explication: 'Des foules immenses y viennent, de toutes les religions.' },
        { q: 'Dans quelle ville peut-on voir un samâ‘ dans un ancien couvent mevlevi du XVe siècle, la Galata Mevlevihanesi ?', choix: ['À Istanbul', 'À Konya', 'À Ankara'], explication: 'C’est le plus ancien couvent mevlevi d’Istanbul.' },
        { q: 'Où repose ‘Abd al-Qâdir al-Jîlânî ?', choix: ['À Bagdad', 'À Damas', 'À Fès'], explication: 'Son tombeau, dans le quartier de Bab al-Sheikh, attire des pèlerins du monde entier.' }
      ] },
    { id: 'battuta', type: 'qcm', titre: 'Ibn Battûta, le grand voyageur', notion: 'Voyages',
      questions: [
        { q: 'Dans quelle ville Ibn Battûta est-il né, en 1304 ?', choix: ['À Tanger', 'À Fès', 'À Tunis'], explication: 'Il part en 1325 pour le pèlerinage… et rentre presque trente ans plus tard.' },
        { q: 'Qui a mis par écrit son récit, la Rihla ?', choix: ['Ibn Juzayy, sur ordre du sultan mérinide de Fès', 'Ibn Battûta seul, pendant le voyage', 'Ibn Khaldûn'], explication: 'Ibn Battûta a dicté ses souvenirs : on discute encore de certains passages.' },
        { q: 'Quelle fonction a-t-il exercée à Delhi ?', choix: ['Juge (cadi), au service du sultan Muhammad ibn Tughluq', 'Cuisinier du sultan', 'Ambassadeur de Venise'], explication: 'Il a aussi été cadi aux Maldives.' },
        { q: 'Quel empire africain a-t-il visité au milieu du XIVe siècle ?', choix: ['L’empire du Mali', 'L’empire du Ghana', 'L’empire songhaï'], explication: 'Il y est allé vers 1352-1353, sous le règne de Mansa Sulayman.' }
      ] },
    { id: 'musique', type: 'qcm', titre: 'Musiques', notion: 'Musique',
      questions: [
        { q: 'Le ney est…', choix: ['Une flûte de roseau', 'Un tambour sur cadre', 'Un luth'], explication: 'C’est l’instrument des Mevlevis : le Masnavî commence par sa plainte.' },
        { q: 'Quel chanteur pakistanais a fait connaître le qawwali dans le monde entier ?', choix: ['Nusrat Fateh Ali Khan', 'Ravi Shankar', 'Cheb Khaled'], explication: 'Le qawwali est la musique de dévotion de la Chishtiyya.' },
        { q: 'Le oud, luth arabe, n’a pas…', choix: ['De frettes', 'De cordes', 'De caisse de résonance'], explication: 'Sans frettes, il peut jouer les quarts de ton des maqâms.' },
        { q: 'Un maqâm, en musique arabe, c’est…', choix: ['Un mode : une échelle de notes, avec ses règles et sa couleur', 'Un instrument', 'Un rythme de danse'], explication: 'Le même mot désigne une station spirituelle dans le soufisme.' },
        { q: '« Enta Omri » (1964), chantée par Oum Kalthoum, a été composée par…', choix: ['Mohammed Abdel Wahab', 'Farid El Atrache', 'Baligh Hamdi'], explication: 'Leur première collaboration, longtemps attendue : on l’a appelée « la rencontre des géants ».' },
        { q: 'Quelle chanteuse pakistanaise est surnommée la « reine du chant soufi » ?', choix: ['Abida Parveen', 'Noor Jehan', 'Oum Kalthoum'], explication: 'Elle chante notamment les poèmes de Bulleh Shah et de Shah Abdul Latif.' }
      ] },
    { id: 'lectures', type: 'cartes', titre: 'La bibliothèque (pas Billy, une vraie)', notion: 'Lecture',
      cartes: [
        { recto: 'Qui a écrit « Léon l’Africain » (1986) et « Samarcande » (1988) ?', verso: 'Amin Maalouf.', choix: ['Amin Maalouf', 'Tahar Ben Jelloun', 'Naguib Mahfouz', 'Kamel Daoud'] },
        { recto: 'Quel roman d’Elif Shafak raconte la rencontre de Rûmî et de Shams ?', verso: '« Soufi, mon amour » (en anglais « The Forty Rules of Love »).', choix: ['Soufi, mon amour', 'La Bâtarde d’Istanbul', 'L’Architecte du sultan', 'Bonbon Palace'] },
        { recto: 'Quel écrivain égyptien a reçu le prix Nobel de littérature en 1988 ?', verso: 'Naguib Mahfouz, l’auteur de la « Trilogie du Caire ».', choix: ['Naguib Mahfouz', 'Taha Hussein', 'Alaa El Aswany', 'Albert Cossery'] },
        { recto: 'Qui a écrit la « Muqaddima », l’introduction à l’histoire universelle ?', verso: 'Ibn Khaldûn, au XIVe siècle.', choix: ['Ibn Khaldûn', 'Ibn Battûta', 'Ibn Rushd', 'Al-Bîrûnî'] },
        { recto: 'Qui a traduit en arabe les fables de « Kalîla et Dimna » ?', verso: 'Ibn al-Muqaffa‘, au VIIIe siècle.', choix: ['Ibn al-Muqaffa‘', 'Al-Jâhiz', 'Al-Mutanabbî', 'Abû Nuwâs'] },
        { recto: 'Qui a fait connaître « Les Mille et Une Nuits » en France, au début du XVIIIe siècle ?', verso: 'Antoine Galland.', choix: ['Antoine Galland', 'Voltaire', 'Gérard de Nerval', 'Jean de La Fontaine'] },
        { recto: 'Quel roman a valu le prix Goncourt 1987 à Tahar Ben Jelloun ?', verso: '« La Nuit sacrée ».', choix: ['La Nuit sacrée', 'L’Enfant de sable', 'Partir', 'Le Bonheur conjugal'] }
      ] },
    { id: 'restaurant', type: 'qcm', titre: 'Au restaurant, sans gluten', notion: 'Restaurants',
      consigne: 'Situation réelle. Le serveur a dit « Normalement, il n’y en a pas ». Analyse.',
      questions: [
        { q: 'Quelle est la première question à poser pour des frites ?', choix: ['« Est-ce que la friteuse sert aussi pour des produits panés ? »', '« Elles sont faites avec quelle variété ? »', '« Elles sont salées ? »'], explication: 'La contamination croisée est le piège le plus courant.' },
        { q: 'Une sauce liée « au roux », c’est…', choix: ['Du beurre et de la farine de blé : donc du gluten', 'Une sauce à la tomate', 'Une sauce sans gluten'], explication: 'La béchamel aussi. On peut lier à la fécule de maïs.' },
        { q: 'Les tempuras japonaises…', choix: ['Contiennent souvent de la farine de blé', 'Sont toujours sans gluten', 'Ne contiennent que du riz'], explication: 'Et souvent de la sauce soja à côté. Double piège.' },
        { q: 'Le couscous et le boulgour…', choix: ['Sont faits de blé : ils contiennent du gluten', 'Sont sans gluten', 'Dépendent du pays'], explication: 'Il existe du couscous de maïs ou de millet. On le précise en commandant.' },
        { q: 'Le serveur dit : « Normalement, il n’y en a pas. » En PSE, on appelle ça…', choix: ['Un danger non maîtrisé', 'Une mesure de prévention', 'Une garantie'], explication: 'On demande la fiche allergènes : elle est obligatoire.' }
      ] },
    { id: 'ikea', type: 'qcm', titre: 'IKEA, culture générale', notion: 'Le samedi',
      consigne: 'Questions pour l’entrée du magasin. Il reste 3 km de parcours fléché.',
      questions: [
        { q: 'Que veut dire IKEA ?', choix: ['Ingvar Kamprad, Elmtaryd, Agunnaryd : le fondateur, sa ferme, son village', 'Intérieur, Kit, Économie, Assemblage', 'C’est un mot suédois qui veut dire « maison »'], explication: 'Ingvar Kamprad a fondé l’entreprise en 1943, en Suède. Il avait 17 ans.' },
        { q: 'En quelle année est née la bibliothèque BILLY ?', choix: ['En 1979', 'En 1955', 'En 1999'], explication: 'Dessinée par Gillis Lundgren, qui en aurait esquissé l’idée sur une serviette en papier.' },
        { q: 'Comment s’appelle l’outil fourni avec les meubles ?', choix: ['Une clé Allen (une clé hexagonale)', 'Une clé de Kamprad', 'Un tournevis suédois'], explication: 'Les meubles à plat, à monter soi-même, ont fait le succès de la marque.' },
        { q: 'Après le montage, il reste une vis. C’est…', choix: ['Un fait, à noter dans l’arbre des causes', 'Normal, c’est un cadeau', 'Le signe qu’il faut retourner chez IKEA'], explication: 'Les trois réponses sont acceptables. Seule la première est professionnelle.' },
        { q: 'Que fait Brahim au restaurant d’IKEA ?', choix: ['Il lit la liste des allergènes. En entier.', 'Il prend des boulettes sans regarder', 'Il n’y va jamais'], explication: 'L’information sur les allergènes est obligatoire. Brahim la connaît mieux que le personnel.' }
      ] }
  ]
};

/* =========================================================
   LES PALIERS : facile → moyen → expert
   ---------------------------------------------------------
   Chaque activité ci-dessus est découpée en trois paliers :
   • facile : les questions dont le numéro est dans « facile » ;
   • moyen  : les autres (pour les paires : toute la liste) ;
   • expert : de nouvelles questions, pointues, ci-dessous.
   Le moteur ouvre le palier suivant à 80 % de réussite du premier coup.
   Faits vérifiés ; « d’après » = traduction libre.
   ========================================================= */
(function () {
  const EXPERT = {
    'soufisme:notions': [
      { q: 'Les trois degrés de la certitude, tirés du Coran, sont…', choix: ['‘Ilm al-yaqîn, ‘ayn al-yaqîn, haqq al-yaqîn : la science, l’œil, la vérité de la certitude', 'Islâm, îmân, ihsân', 'Sharî‘a, tarîqa, haqîqa'], explication: 'Sourate 102 (versets 5 et 7) et sourate 56, verset 95. On illustre souvent : savoir qu’il y a du feu, le voir, s’y brûler.' },
      { q: 'Qabd et bast désignent…', choix: ['La contraction et la dilatation du cœur : deux états qui alternent', 'L’aller et le retour du pèlerinage', 'Le jeûne et la rupture du jeûne'], explication: 'Ce sont des états (ahwâl), au-dessus de la crainte (khawf) et de l’espérance (rajâ’).' },
      { q: 'Chez Ibn ‘Arabî, le tajallî est…', choix: ['La manifestation de Dieu dans les formes : la théophanie', 'La retraite de quarante jours', 'Le serment d’allégeance au maître'], explication: 'Chaque chose est un lieu où un nom divin se manifeste. Henry Corbin a beaucoup travaillé cette notion.' },
      { q: 'Les a‘yân thâbita, chez Ibn ‘Arabî, sont…', choix: ['Les « entités immuables » : les choses telles qu’elles sont dans la science divine, avant d’exister', 'Les sept cieux', 'Les maîtres de la chaîne initiatique'], explication: 'Une notion clé des Fusûs al-hikam, souvent traduite par « essences immuables » ou « archétypes ».' },
      { q: 'La triade sharî‘a, tarîqa, haqîqa décrit…', choix: ['La loi, la voie et la réalité : trois niveaux d’une même religion', 'Trois confréries rivales', 'Trois prières de la nuit'], explication: 'Pour les soufis, la voie ne remplace pas la loi : elle la suppose et l’approfondit.' },
      { q: 'Al-Hârith al-Muhâsibî (mort en 857) doit son nom à…', choix: ['La muhâsaba : l’examen de conscience', 'Sa ville natale', 'Son métier de comptable'], explication: 'Il examinait ses intentions sans relâche. Il fut l’un des maîtres d’al-Junayd.' }
    ],
    'soufisme:lexique': [['Qabd', 'La contraction du cœur'], ['Bast', 'La dilatation du cœur'], ['Tajallî', 'La théophanie, la manifestation divine'], ['Muhâsaba', 'L’examen de conscience'],
      ['Murâqaba', 'La vigilance contemplative'], ['Jam‘', 'Le rassemblement, l’union'], ['Farq', 'La séparation, la distinction'], ['Ghayba', 'L’absence à soi-même']],
    'soufisme:maitres': [
      { q: 'Qui était l’oncle et le maître d’al-Junayd ?', choix: ['Sarî al-Saqatî', 'Ma‘rûf al-Karkhî', 'Dhû al-Nûn al-Misrî'], explication: 'Sarî al-Saqatî, à Bagdad. Lui-même avait fréquenté Ma‘rûf al-Karkhî.' },
      { q: 'Quel maître égyptien (mort en 861) est associé à la ma‘rifa, la connaissance intime ?', choix: ['Dhû al-Nûn al-Misrî', 'Ibn ‘Atâ’ Allâh', 'Al-Shâdhilî'], explication: 'On lui attribue d’avoir donné sa place centrale à la ma‘rifa dans le vocabulaire soufi.' },
      { q: 'Shihâb al-Dîn Yahyâ al-Suhrawardî, exécuté à Alep en 1191, est…', choix: ['Le « maître de l’illumination » (Shaykh al-Ishrâq), et non le fondateur de la Suhrawardiyya', 'Le fondateur de la confrérie Suhrawardiyya', 'Un disciple de Rûmî'], explication: 'Piège classique : la confrérie vient d’Abû al-Najîb et d’Abû Hafs ‘Umar al-Suhrawardî, deux autres Suhrawardî.' },
      { q: 'Najm al-Dîn Kubrâ, fondateur de la Kubrawiyya, est mort…', choix: ['En 1221, pendant l’attaque mongole sur le Khwarezm', 'À Konya, en 1273', 'À Damas, en 1240'], explication: 'Il est connu pour ses descriptions des lumières colorées perçues par le mystique.' },
      { q: 'Qui fut le disciple et beau-fils d’Ibn ‘Arabî, installé à Konya au temps de Rûmî ?', choix: ['Sadr al-Dîn al-Qûnawî', 'Sultan Walad', 'Shams de Tabriz'], explication: 'Il a beaucoup fait pour la diffusion et l’interprétation des œuvres d’Ibn ‘Arabî.' },
      { q: 'Rûzbehân Baqlî de Shiraz (mort en 1209) a écrit un traité traduit par Henry Corbin sous le titre…', choix: ['« Le Jasmin des fidèles d’amour »', '« Le Tabernacle des lumières »', '« Le Livre des haltes »'], explication: 'Un traité sur l’amour humain comme chemin vers l’amour divin. Le Tabernacle est d’al-Ghazâlî, les Haltes de l’émir Abdelkader.' },
      { q: 'Ahmad Sirhindî est surnommé…', choix: ['« Le rénovateur du second millénaire » (Mujaddid-i alf-i thânî)', '« Le pôle de Bagdad »', '« Le sultan des amoureux »'], explication: 'Maître naqshbandi en Inde moghole. Sa branche s’appelle la Mujaddidiyya.' }
    ],
    'soufisme:oeuvres': [['Al-Sarrâj', 'Kitâb al-Luma‘'], ['Al-Kalâbâdhî', 'Kitâb al-Ta‘arruf'], ['Abû Tâlib al-Makkî', 'Qût al-qulûb, la nourriture des cœurs'], ['‘Abd al-Karîm al-Jîlî', 'Al-Insân al-kâmil'],
      ['Shihâb al-Dîn Yahyâ al-Suhrawardî', 'Hikmat al-ishrâq'], ['Abû Hafs ‘Umar al-Suhrawardî', '‘Awârif al-ma‘ârif'], ['Jâmî', 'Nafahât al-uns'], ['Al-Hallâj', 'Kitâb al-Tawâsîn']],
    'soufisme:frise': [['Dhû al-Nûn (861)', 'Al-Junayd (910)', 'Al-Sarrâj (988)', 'Al-Qushayrî (1072)', 'Rûzbehân Baqlî (1209)', 'Najm al-Dîn Kubrâ (1221)', 'Ibn ‘Arabî (1240)', 'Jâmî (1492)', 'Ahmad Sirhindî (1624)']],
    'soufisme:textes': [
      { q: 'Quel recueil de Rûmî rassemble ses ghazals, signés du nom de son maître ?', choix: ['Le Dîwân-e Shams-e Tabrîzî', 'Le Masnavî', 'Fîhi mâ fîhi'], explication: 'Rûmî signe ses poèmes du nom de Shams : l’élève s’efface dans le maître.' },
      { q: '« Fîhi mâ fîhi » (« Le Livre du dedans ») est…', choix: ['Un recueil d’entretiens de Rûmî, en prose', 'Un traité d’Ibn ‘Arabî', 'Un poème de ‘Attâr'], explication: 'Des propos tenus devant ses disciples, mis par écrit.' },
      { q: 'Pour qui Ibn ‘Arabî a-t-il écrit « L’Interprète des désirs » (Tarjumân al-ashwâq) ?', choix: ['Pour Nizâm, la fille d’un maître persan rencontré à La Mecque', 'Pour le sultan de Damas', 'Pour sa mère'], explication: 'Accusé d’avoir écrit des poèmes d’amour profane, il en a rédigé un commentaire mystique.' },
      { q: 'Quelle œuvre de ‘Attâr est la source de nombreux récits sur Rabi‘a ?', choix: ['Le Mémorial des saints (Tadhkirat al-awliyâ’)', 'La Conférence des oiseaux', 'Le Livre divin'], explication: 'Un recueil de vies de saints, en persan.' },
      { q: '« Le Tabernacle des lumières » (Mishkât al-anwâr) d’al-Ghazâlî commente…', choix: ['Le verset de la Lumière (sourate 24, verset 35)', 'La sourate Al-Fâtiha', 'Le verset du Trône'], explication: '« Dieu est la Lumière des cieux et de la terre… »' },
      { q: 'Combien de chapitres comptent les « Fusûs al-hikam » d’Ibn ‘Arabî ?', choix: ['27, chacun consacré à un prophète', '114, comme les sourates', '7, comme les cieux'], explication: 'D’Adam à Muhammad : chaque prophète est le « chaton » d’une sagesse.' },
      { q: 'Selon une formule attribuée à Jâmî, le Masnavî est…', choix: ['« Le Coran en langue persane »', '« Le Livre des rois »', '« Le Jardin des roses »'], explication: 'Le « Livre des rois » est de Ferdowsî ; le « Jardin des roses » (Golestân), de Saadi.' }
    ],
    'soufisme:voies': [
      { q: 'La Naqshbandiyya fait passer sa chaîne principale par…', choix: ['Abû Bakr', '‘Alî', '‘Umar'], explication: 'C’est une exception : la plupart des voies remontent au Prophète par ‘Alî.' },
      { q: '« Khalwat dar anjuman », principe naqshbandi, veut dire…', choix: ['La retraite au milieu de la foule', 'La retraite au désert', 'Le chant en assemblée'], explication: 'Être intérieurement avec Dieu tout en restant dans le monde. Ce principe est attribué à ‘Abd al-Khâliq Ghujduwânî.' },
      { q: 'Dans le samâ‘ mevlevi, le haut bonnet de feutre (sikke) symbolise…', choix: ['La pierre tombale de l’ego', 'La couronne du sultan', 'Le minaret'], explication: 'La robe blanche représente le linceul ; le manteau noir qu’on retire, la tombe.' },
      { q: 'De quelle voie la ‘Alawiyya de Mostaganem est-elle une branche ?', choix: ['De la Darqâwiyya, elle-même branche de la Shâdhiliyya', 'De la Qâdiriyya', 'De la Tijâniyya'], explication: 'La Darqâwiyya vient de Mawlây al-‘Arabî al-Darqâwî, mort en 1823.' },
      { q: 'Le roi Idris de Libye était le chef de quelle confrérie ?', choix: ['La Sanûsiyya', 'La Mouridiyya', 'La Bektachiyya'], explication: 'Fondée par Muhammad ibn ‘Alî al-Sanûsî au XIXe siècle.' },
      { q: 'Uthmân dan Fodio, fondateur du califat de Sokoto au début du XIXe siècle, appartenait à…', choix: ['La Qâdiriyya', 'La Naqshbandiyya', 'La Mevleviyya'], explication: 'La Qâdiriyya a joué un grand rôle en Afrique de l’Ouest, avant l’essor de la Tijâniyya.' }
    ],
    'soufisme:histoire': [
      { recto: 'Quel penseur du XIVe siècle a écrit un traité sur le soufisme, « Shifâ’ al-sâ’il » ?', verso: 'Ibn Khaldûn.', choix: ['Ibn Khaldûn', 'Ibn Battûta', 'Ibn Rushd', 'Ibn Sînâ'] },
      { recto: 'Qui a protégé des milliers de chrétiens pendant les massacres de Damas, en 1860 ?', verso: 'L’émir Abdelkader.', choix: ['L’émir Abdelkader', 'Ahmad al-‘Alawî', 'Le sultan ottoman', 'Amadou Bamba'] },
      { recto: 'Sous quel nom René Guénon est-il mort au Caire, en 1951 ?', verso: '‘Abd al-Wâhid Yahyâ.', choix: ['‘Abd al-Wâhid Yahyâ', '‘Abd al-Qâdir', 'Muhammad Asad', 'Isâ Nûr al-Dîn'] },
      { recto: 'Qui a écrit « Mystical Dimensions of Islam » (1975) ?', verso: 'Annemarie Schimmel.', choix: ['Annemarie Schimmel', 'Henry Corbin', 'William Chittick', 'Louis Massignon'] },
      { recto: 'Qui a écrit « Le Sceau des saints », sur la sainteté chez Ibn ‘Arabî ?', verso: 'Michel Chodkiewicz (1986).', choix: ['Michel Chodkiewicz', 'Éric Geoffroy', 'Eva de Vitray-Meyerovitch', 'Henry Corbin'] },
      { recto: 'Avant Ibn ‘Arabî, qui avait écrit sur le « sceau des saints » (khatm al-awliyâ’) ?', verso: 'Al-Hakîm al-Tirmidhî, au IXe siècle.', choix: ['Al-Hakîm al-Tirmidhî', 'Al-Ghazâlî', 'Al-Junayd', 'Rabi‘a'] }
    ],
    'soufisme:haut-vol': [
      { q: 'Pourquoi la condamnation de Shihâb al-Dîn Yahyâ al-Suhrawardî (1191) est-elle souvent rapprochée de celle d’al-Hallâj ?', choix: ['Deux mystiques exécutés pour des raisons à la fois doctrinales et politiques', 'Ils sont morts la même année', 'Ils appartenaient à la même confrérie'], explication: 'On l’appelle d’ailleurs parfois al-Maqtûl, « le tué ».' },
      { q: 'Wahdat al-shuhûd, selon Sirhindî, veut dire que…', choix: ['L’unité est vécue dans la contemplation, sans que les créatures soient identiques à Dieu', 'Tout est Dieu, sans distinction', 'La contemplation est interdite'], explication: 'Sirhindî corrige ainsi une lecture moniste de l’unicité de l’être.' },
      { q: 'Dans la doctrine des noms divins d’Ibn ‘Arabî, l’Homme parfait est…', choix: ['Le miroir où se reflètent tous les noms divins', 'Le plus savant en droit', 'Celui qui n’a jamais péché'], explication: 'D’où le chapitre sur Adam au début des Fusûs.' },
      { q: 'Dans la Risâla d’al-Qushayrî, la différence entre maqâm et hâl est surtout…', choix: ['L’un s’acquiert par l’effort (makâsib), l’autre est un don (mawâhib)', 'L’un est réservé aux femmes', 'L’un se pratique seul, l’autre en groupe'], explication: 'Le hâl vient et s’en va ; le maqâm reste.' },
      { q: 'Dans le Masnavî, l’histoire de l’éléphant dans le noir montre…', choix: ['Que chacun ne saisit qu’une partie de la réalité', 'Que les éléphants sont sacrés', 'Qu’il faut voyager en Inde'], explication: 'Avec une bougie, dit Rûmî, les divergences auraient disparu.' }
    ],
    'pse:programme': [
      { q: 'Combien de modules compte la thématique C en CAP ?', choix: ['Huit (C1 à C8)', 'Six (C1 à C6)', 'Douze (C1 à C12)'], explication: 'De C1 « Les différents contrats de travail » à C8 « La gestion des situations d’urgence ».' },
      { q: 'En CAP, quel est le module C1 ?', choix: ['Les différents contrats de travail', 'Les enjeux de la santé et sécurité au travail', 'Le suivi médical des salariés'], explication: 'En bac pro, le C1 est « Les enjeux de la santé et sécurité au travail » : même lettre, autre contenu.' },
      { q: 'En terminale bac pro, B5 s’intitule…', choix: ['Les ressources en énergie et le développement durable', 'Le bruit au quotidien', 'Les risques majeurs'], explication: 'Le bruit au quotidien est le module B4 du CAP.' },
      { q: 'Quelle vidéo de l’INRS le programme de terminale propose-t-il pour la responsabilité de l’employeur (C8) ?', choix: ['« L’affaire Berthier »', '« Napo dans… »', '« TutoPrev’-Accueil »'], explication: 'TutoPrev’-Accueil est cité en seconde, pour le module C2.' },
      { q: 'Le module C11 de terminale mobilise quelles notions ?', choix: ['Travail réel / travail prescrit, activité / tâche, déterminants', 'Budget, assurance, achats', 'Antigène, anticorps, mémoire immunitaire'], explication: 'C’est l’ergonomie : on analyse l’écart entre ce qui est demandé et ce qui est fait.' },
      { q: 'Dans le programme de CAP, le module C6 cite le « salarié compétent ». Pour quoi faire ?', choix: ['La protection et la prévention des risques professionnels (PPRP)', 'Le secourisme uniquement', 'La représentation syndicale'], explication: 'Le même module cite les IPRP du service de santé au travail.' }
    ],
    'pse:notions-base': [['Prévention intrinsèque', 'Supprimer le danger dès la conception'], ['Protection collective', 'Un garde-corps, un capotage'], ['Protection individuelle', 'Des bouchons d’oreille'],
      ['VLEP', 'Valeur limite d’exposition professionnelle'], ['Prévention secondaire', 'Repérer tôt : le dépistage'], ['Prévention tertiaire', 'Limiter les séquelles']],
    'pse:processus': [
      ['Recueillir les faits', 'Construire l’arbre des causes', 'Rechercher des mesures de prévention', 'Choisir et mettre en œuvre les mesures', 'Suivre et évaluer leur efficacité'],
      ['Identifier les dangers', 'Analyser les risques', 'Classer et hiérarchiser les risques', 'Proposer des actions de prévention', 'Transcrire dans le document unique', 'Mettre à jour']
    ],
    'pse:reglementation': [
      { q: 'Quel article du Code du travail fonde le droit de retrait du salarié ?', choix: ['L4131-1', 'L4121-2', 'R4541-9'], explication: 'Le salarié peut se retirer d’une situation dont il a un motif raisonnable de penser qu’elle présente un danger grave et imminent.' },
      { q: 'Depuis la loi du 2 août 2021, combien de temps faut-il conserver les versions du DUERP ?', choix: ['40 ans', '5 ans', '10 ans'], explication: 'Pour garder la trace des expositions, utile notamment pour les maladies qui apparaissent tard.' },
      { q: 'Bruit : quelle est la valeur limite d’exposition en niveau de crête ?', choix: ['140 dB(C)', '120 dB(A)', '135 dB(A)'], explication: '135 dB(C) et 137 dB(C) sont les valeurs d’action. La limite (protections comprises) est 140 dB(C).' },
      { q: 'Port manuel de charges : la limite habituelle pour un homme adulte (sans avis médical) est…', choix: ['55 kg', '25 kg', '105 kg'], explication: 'Article R4541-9. 105 kg avec un avis d’aptitude du médecin du travail ; pour une femme, 25 kg.' },
      { q: 'Une maladie hors tableau peut être reconnue si l’incapacité atteint au moins…', choix: ['25 %, après avis du CRRMP', '10 %, sans condition', '50 %, après un procès'], explication: 'Le comité régional de reconnaissance des maladies professionnelles doit établir un lien direct et essentiel avec le travail.' },
      { q: 'Les arrêts « amiante » de la Cour de cassation, qui définissent la faute inexcusable, datent de…', choix: ['2002', '1976', '2017'], explication: '28 février 2002 : l’employeur a une obligation de sécurité « de résultat », formule qui a évolué depuis.' },
      { q: 'Quel article du Code du travail donne au représentant du personnel au CSE un droit d’alerte en cas de danger grave et imminent ?', choix: ['L4131-2', 'L4131-1', 'L1152-1'], explication: 'L4131-1 : le droit de retrait du salarié. L1152-1 : le harcèlement moral.' }
    ],
    'pse:acteurs': [
      { recto: 'Qui donne un avis sur les maladies professionnelles hors tableau ?', verso: 'Le CRRMP : comité régional de reconnaissance des maladies professionnelles.', choix: ['Le CRRMP', 'Le CSE', 'L’INRS', 'L’ANACT'] },
      { recto: 'Quel organisme régional a remplacé la DIRECCTE en 2021 ?', verso: 'La DREETS : direction régionale de l’économie, de l’emploi, du travail et des solidarités.', choix: ['La DREETS', 'La CARSAT', 'L’ARS', 'La DDPP'] },
      { recto: 'Quelle agence fait l’expertise scientifique pour fixer les VLEP ?', verso: 'L’ANSES.', choix: ['L’ANSES', 'L’INRS', 'Santé publique France', 'La HAS'] },
      { recto: 'Où siège l’Agence européenne pour la sécurité et la santé au travail (EU-OSHA) ?', verso: 'À Bilbao, en Espagne.', choix: ['À Bilbao', 'À Bruxelles', 'À Genève', 'À Strasbourg'] },
      { recto: 'Quelle agence surveille l’état de santé de la population, y compris au travail ?', verso: 'Santé publique France.', choix: ['Santé publique France', 'L’ANSES', 'La CARSAT', 'L’OPPBTP'] }
    ],
    'pse:arbre': [
      { q: 'Dans l’arbre des causes, on distingue les faits permanents et…', choix: ['Les faits inhabituels, appelés « variations »', 'Les faits graves', 'Les faits contestés'], explication: 'Les variations par rapport au travail habituel sont souvent le point de départ de l’accident.' },
      { q: 'Qui doit participer à la construction de l’arbre ?', choix: ['Un groupe : la victime si possible, des témoins, l’encadrement, le CSE…', 'L’employeur seul', 'L’assureur'], explication: 'Le travail en groupe évite les interprétations et rapproche des faits réels.' },
      { q: 'Les « facteurs potentiels d’accidents » servent à…', choix: ['Généraliser : repérer les mêmes causes ailleurs avant qu’un accident n’arrive', 'Calculer l’indemnité', 'Désigner un responsable'], explication: 'On passe de l’analyse d’un accident à la prévention de beaucoup d’autres.' },
      { q: 'Quelle méthode l’INRS a-t-elle développée dans les années 1970 ?', choix: ['La méthode de l’arbre des causes', 'La méthode HACCP', 'La méthode des 5 pourquoi'], explication: 'HACCP vient de l’agroalimentaire ; les 5 pourquoi, de l’industrie japonaise.' }
    ],
    'pse:sante': [
      { q: 'Quelle bactérie se développe même au réfrigérateur ?', choix: ['Listeria monocytogenes', 'Salmonella', 'Aucune'], explication: 'Elle supporte le froid : c’est pour ça qu’on respecte les DLC et qu’on nettoie le réfrigérateur.' },
      { q: 'Le « paquet hygiène » européen s’applique depuis…', choix: ['Le 1er janvier 2006', 'Le 1er janvier 1993', 'Le 1er janvier 2015'], explication: 'Il rend obligatoire une démarche fondée sur les principes HACCP.' },
      { q: 'Combien de principes compte la méthode HACCP ?', choix: ['Sept', 'Cinq', 'Dix'], explication: 'Du premier, « analyser les dangers », au septième, « tenir des documents ».' },
      { q: 'Quelle hormone du sommeil est freinée par la lumière, en particulier la lumière bleue ?', choix: ['La mélatonine', 'L’adrénaline', 'L’insuline'], explication: 'Les écrans le soir retardent l’endormissement.' },
      { q: 'Dans le cerveau, les drogues agissent sur le circuit de la récompense en libérant surtout…', choix: ['De la dopamine', 'De l’insuline', 'Du cortisol seulement'], explication: 'Le noyau accumbens est au centre de ce circuit.' },
      { q: 'Quelle vaccination est obligatoire pour certains professionnels de santé exposés ?', choix: ['L’hépatite B', 'La grippe', 'La rage'], explication: 'Article L3111-4 du Code de la santé publique.' }
    ],
    'pse:indicateurs': [
      { q: 'Indice de fréquence : 12 accidents avec arrêt pour 400 salariés. Quel est l’indice ?', reponse: 30,
        aide: 'IF = accidents avec arrêt × 1 000 ÷ effectif.', solution: '12 × 1 000 ÷ 400 = 30 accidents pour 1 000 salariés.' },
        { q: 'Deux machines font chacune 80 dB(A). Quel niveau sonore quand elles tournent ensemble ?', reponse: 83, unite: 'dB(A)',
        aide: 'Les décibels ne s’additionnent pas : deux sources égales, c’est + 3 dB.', solution: '80 + 3 = 83 dB(A), et non 160.' },
      { q: 'Et quatre machines de 80 dB(A) ?', reponse: 86, unite: 'dB(A)',
        aide: 'Doubler encore : + 3 dB de plus.', solution: '2 machines : 83 dB(A) ; 4 machines : 86 dB(A).' }
    ],
    'cuisine:gluten': [
      { q: 'La maladie cœliaque est…', choix: ['Une maladie auto-immune déclenchée par le gluten', 'Une allergie passagère', 'Une simple intolérance digestive sans lésion'], explication: 'Elle abîme les villosités de l’intestin grêle.' },
      { q: 'Quel examen sanguin sert en premier pour la dépister ?', choix: ['Les anticorps anti-transglutaminase (IgA)', 'La glycémie', 'Le cholestérol'], explication: 'Le diagnostic est ensuite confirmé par une biopsie de l’intestin.' },
      { q: 'Quels gènes sont presque toujours présents chez les personnes cœliaques ?', choix: ['HLA-DQ2 ou HLA-DQ8', 'BRCA1', 'Aucun gène connu'], explication: 'Mais beaucoup de personnes porteuses ne seront jamais malades.' },
      { q: 'Quelle part de la population est cœliaque, environ ?', choix: ['1 %', '10 %', '0,01 %'], explication: 'Beaucoup ne sont pas diagnostiquées.' },
      { q: 'Dans le pain sans gluten, quel ingrédient remplace souvent l’élasticité du gluten ?', choix: ['Le psyllium ou la gomme xanthane', 'Le sel', 'Le sucre'], explication: 'Ils retiennent l’eau et donnent de la tenue à la pâte.' },
      { q: 'L’épeautre et le kamut sont…', choix: ['Des espèces de blé', 'Des céréales sans gluten', 'Des légumineuses'], explication: 'Ce sont des Triticum, comme le blé tendre : ils contiennent du gluten.' }
    ],
    'cuisine:farines': [['Teff', 'L’injera éthiopienne'], ['Riz gluant', 'Le mochi japonais'], ['Maïs nixtamalisé (masa)', 'La tortilla de maïs'], ['Semoule de manioc fermentée', 'L’attiéké ivoirien'], ['Farine de pois chiche', 'La panisse marseillaise'], ['Riz et lentilles noires (urad dal)', 'L’idli d’Inde du Sud']],
    'cuisine:airfryer': [
      { q: 'L’acrylamide se forme à partir…', choix: ['D’un acide aminé, l’asparagine, et de sucres', 'Des graisses de l’huile', 'Du sel'], explication: 'C’est une réaction voisine de celle de Maillard.' },
      { q: 'Que se passe-t-il quand on « blanchit » les frites avant de les dorer ?', choix: ['L’amidon cuit (il se gélatinise) : le cœur devient fondant', 'Les frites deviennent blanches', 'Le gluten disparaît'], explication: 'Puis la seconde cuisson, plus chaude, fait la croûte.' },
      { q: 'Pourquoi la surface doit-elle être sèche pour bien dorer ?', choix: ['Tant qu’il reste de l’eau, la surface ne dépasse pas 100 °C', 'L’eau fait gonfler les frites', 'Pour des raisons d’hygiène'], explication: 'Il faut d’abord évaporer l’eau pour atteindre la température de la réaction de Maillard.' }
    ],
    'cuisine:recettes': [
      ['Chauffer le lait, l’huile et le sel jusqu’à frémissement', 'Verser sur la fécule de manioc et mélanger', 'Laisser tiédir', 'Ajouter l’œuf, puis le fromage râpé', 'Former des petites boules', 'Cuire à 170 °C environ 15 minutes']
    ],
    'cuisine:proportions': [
      { q: 'Une pâte sans gluten : 300 g de farine, hydratation à 75 %. Combien d’eau ?', reponse: 225, unite: 'g',
        aide: '75 % de 300.', solution: '300 × 0,75 = 225 g d’eau.' },
      { q: 'Une recette au four dure 25 minutes. À l’air fryer, tu réduis le temps de 20 %. Combien de minutes ?', reponse: 20, unite: 'min',
        aide: '20 % de 25 = 5.', solution: '25 − 5 = 20 minutes.' },
      { q: 'Une cuillère à soupe d’huile fait environ 15 ml. Combien de ml pour 3 cuillères ?', reponse: 45, unite: 'ml',
        aide: '3 × 15.', solution: '45 ml.' }
    ],
    'cuisine:epices': [
      { recto: 'L’advieh est un mélange d’épices…', verso: 'D’Iran.', choix: ['D’Iran', 'Du Japon', 'Du Mexique', 'D’Éthiopie'] },
      { recto: 'Le panch phoron (cinq graines) vient…', verso: 'Du Bengale (Inde et Bangladesh).', choix: ['Du Bengale', 'Du Maroc', 'De Chine', 'Du Liban'] },
      { recto: 'Le shichimi tōgarashi (sept épices) vient…', verso: 'Du Japon.', choix: ['Du Japon', 'De Corée', 'D’Inde', 'De Turquie'] },
      { recto: 'La chermoula est…', verso: 'Une marinade du Maghreb (coriandre, persil, ail, cumin, citron).', choix: ['Une marinade du Maghreb', 'Un dessert turc', 'Une sauce japonaise', 'Un pain éthiopien'] },
      { recto: 'Le baharat (« épices », en arabe) est un mélange…', verso: 'Du Proche et du Moyen-Orient.', choix: ['Du Proche et du Moyen-Orient', 'D’Amérique du Sud', 'D’Asie du Sud-Est', 'D’Europe du Nord'] }
    ],
    'escale:lieux': [
      { q: 'Où se trouve le tombeau de Hâfez, la Hâfezieh ?', choix: ['À Shiraz', 'À Ispahan', 'À Tabriz'], explication: 'On y vient réciter ses poèmes, et parfois ouvrir son Divan au hasard.' },
      { q: 'Où se trouve le mausolée de Khoja Ahmad Yasawî, bâti sous Tamerlan ?', choix: ['À Turkestan, au Kazakhstan', 'À Samarcande', 'À Boukhara'], explication: 'Il est inscrit au patrimoine mondial de l’UNESCO depuis 2003.' },
      { q: 'Où repose Bahâ’ al-Dîn Naqshband ?', choix: ['Près de Boukhara, en Ouzbékistan', 'À Konya', 'À Delhi'], explication: 'Un grand lieu de pèlerinage d’Asie centrale.' },
      { q: 'Où se trouve le tombeau de Sîdî Bû Madyan (Abû Madyan) ?', choix: ['À Tlemcen, en Algérie (El Eubbad)', 'À Fès', 'À Tunis'], explication: 'Le maître andalou est mort près de Tlemcen en 1198.' },
      { q: 'Où repose Shâh Ni‘matullâh Walî ?', choix: ['À Mâhân, près de Kerman, en Iran', 'À Shiraz', 'À Mashhad'], explication: 'Fondateur de la Ni‘matullâhiyya, l’une des grandes voies iraniennes.' },
      { q: 'Où repose Farîd al-Dîn ‘Attâr ?', choix: ['À Nishapur, en Iran', 'À Bagdad', 'À Konya'], explication: 'Dans la même ville qu’Omar Khayyâm.' }
    ],
    'escale:battuta': [
      { q: 'Quel est le titre complet de la Rihla, en résumé ?', choix: ['« Présent à ceux qui contemplent les curiosités des villes et les merveilles des voyages »', '« Le Livre des rois »', '« Les Prairies d’or »'], explication: 'Tuhfat al-nuzzâr fî gharâ’ib al-amsâr wa ‘ajâ’ib al-asfâr. « Les Prairies d’or » sont d’al-Mas‘ûdî.' },
      { q: 'Quel grand port chinois Ibn Battûta appelle-t-il « Zaytûn » ?', choix: ['Quanzhou', 'Shanghai', 'Canton'], explication: 'C’était l’un des plus grands ports du monde au XIVe siècle.' },
      { q: 'Les chercheurs ont montré que certains passages de la Rihla…', choix: ['Reprennent le récit de voyage d’Ibn Jubayr, un siècle plus tôt', 'Ont été ajoutés au XIXe siècle', 'Sont traduits du chinois'], explication: 'C’est probablement le travail du rédacteur, Ibn Juzayy.' },
      { q: 'En quelle année Ibn Battûta revient-il pour de bon au Maroc, avant de dicter son récit ?', choix: ['Vers 1354', 'Vers 1325', 'Vers 1400'], explication: 'Après un dernier voyage au Mali. La dictée se fait à Fès en 1355-1356.' }
    ],
    'escale:musique': [
      { q: 'Combien de parties (selâm) compte la cérémonie du samâ‘ mevlevi ?', choix: ['Quatre', 'Deux', 'Sept'], explication: 'Chaque selâm a son sens, jusqu’à la soumission complète.' },
      { q: 'Qui est considéré par la tradition comme le père du qawwali ?', choix: ['Amîr Khusraw, disciple de Nizâmuddîn Awliyâ’', 'Nusrat Fateh Ali Khan', 'Bulleh Shah'], explication: 'Poète et musicien de Delhi, aux XIIIe et XIVe siècles.' },
      { q: 'Dans quel livre de l’Ihyâ’ al-Ghazâlî traite-t-il de l’écoute de la musique ?', choix: ['Le livre des règles du samâ‘ et de l’extase (wajd)', 'Le livre de la prière', 'Le livre du mariage'], explication: 'Il y défend le samâ‘ sous conditions : le temps, le lieu, les compagnons.' },
      { q: 'Les petites timbales de la musique mevlevie s’appellent…', choix: ['Les kudüm', 'Les darbouka', 'Les tabla'], explication: 'Elles accompagnent le ney dans les ayin, les compositions de la cérémonie.' },
      { q: 'En quelle année Oum Kalthoum est-elle morte ?', choix: ['En 1975', 'En 1964', 'En 1990'], explication: 'Ses funérailles, au Caire, ont réuni une foule immense.' }
    ],
    'escale:lectures': [
      { recto: 'Qui a écrit « Le Jardin des roses » (Golestân, 1258) ?', verso: 'Saadi de Shiraz.', choix: ['Saadi', 'Hâfez', 'Omar Khayyâm', 'Ferdowsî'] },
      { recto: 'Qui a écrit « Layla et Majnûn » et « Les Sept Portraits » ?', verso: 'Nizâmî de Gandja, au XIIe siècle.', choix: ['Nizâmî', 'Jâmî', 'Rûmî', '‘Attâr'] },
      { recto: 'Qui a écrit « Hayy ibn Yaqzân », un roman philosophique d’al-Andalus ?', verso: 'Ibn Tufayl, au XIIe siècle.', choix: ['Ibn Tufayl', 'Ibn Hazm', 'Ibn Rushd', 'Ibn Battûta'] },
      { recto: 'Qui a écrit « Le Livre des avares » ?', verso: 'Al-Jâhiz, au IXe siècle, à Bassora.', choix: ['Al-Jâhiz', 'Ibn al-Muqaffa‘', 'Abû Nuwâs', 'Al-Tabarî'] },
      { recto: 'Que fait-on avec le Divan de Hâfez, en Iran ?', verso: 'On l’ouvre au hasard pour y lire un présage : le fâl-e Hâfez.', choix: ['On l’ouvre au hasard pour un présage', 'On le récite à l’envers', 'On le brûle au Nouvel An', 'On le traduit en arabe'] }
    ],
    'escale:restaurant': [
      { q: 'Quel texte rend obligatoire, en France, l’information sur les allergènes dans les plats non préemballés ?', choix: ['Le décret du 17 avril 2015', 'La loi Évin', 'Le règlement de 1993'], explication: 'Il applique le règlement européen INCO (n° 1169/2011).' },
      { q: 'La mention « peut contenir des traces de gluten »…', choix: ['Est volontaire : aucune règle ne l’encadre précisément', 'Est obligatoire et contrôlée', 'Garantit moins de 20 mg/kg'], explication: 'Elle signale un risque de contamination, sans seuil légal.' },
      { q: 'Les soba japonaises…', choix: ['Mêlent souvent sarrasin et farine de blé', 'Sont toujours 100 % sarrasin', 'Sont faites de riz'], explication: 'Les « ni-hachi soba » : 20 % de blé, 80 % de sarrasin. Il faut demander des « jûwari soba », 100 % sarrasin.' },
      { q: 'Les frites surgelées « extra-croustillantes »…', choix: ['Sont parfois enrobées d’une pâte à base de farine de blé', 'Sont toujours sans gluten', 'Ne contiennent que de la pomme de terre'], explication: 'On lit la liste des ingrédients. Ou on fait ses frites soi-même.' }
    ],
    'escale:ikea': [
      { q: 'Où a ouvert le premier magasin IKEA, en 1958 ?', choix: ['À Älmhult, en Suède', 'À Stockholm', 'À Oslo'], explication: 'Le musée IKEA y a ouvert en 2016.' },
      { q: 'D’où vient, selon l’histoire de l’entreprise, l’idée des meubles en kit ?', choix: ['Un employé a démonté les pieds d’une table pour la faire entrer dans une voiture', 'D’un concours d’architectes', 'D’une loi suédoise'], explication: 'C’est Gillis Lundgren, le même qui a dessiné BILLY.' },
      { q: 'En quelle année est mort Ingvar Kamprad ?', choix: ['En 2018', 'En 1999', 'En 2023'], explication: 'Il était né en 1926.' }
    ]
  };
  const FACILE = {
    'soufisme:notions': [0, 1, 2, 5, 6, 11], 'soufisme:lexique': [0, 1, 2, 3], 'soufisme:maitres': [0, 3, 4, 5, 6, 7], 'soufisme:oeuvres': [0, 1, 2, 7],
    'soufisme:textes': [0, 1, 2, 3], 'soufisme:voies': [0, 3, 6, 7], 'soufisme:histoire': [0, 1, 4], 'soufisme:haut-vol': [4, 5],
    'pse:programme': [0, 1, 2, 3], 'pse:notions-base': [0, 1, 3, 4], 'pse:processus': [0], 'pse:reglementation': [0, 1, 2, 3, 5], 'pse:acteurs': [0, 1, 2],
    'pse:arbre': [0, 1, 4], 'pse:sante': [0, 1, 6], 'pse:indicateurs': [0, 1],
    'cuisine:gluten': [0, 1, 2, 8], 'cuisine:farines': [0, 1, 4], 'cuisine:airfryer': [0, 1, 4, 5], 'cuisine:recettes': [0], 'cuisine:proportions': [0, 2], 'cuisine:epices': [0, 1, 2],
    'escale:lieux': [0, 2, 4], 'escale:battuta': [0, 2], 'escale:musique': [0, 1, 2], 'escale:lectures': [0, 2, 5], 'escale:restaurant': [0, 3], 'escale:ikea': [0, 2, 3]
  };
  const CLE = { qcm: 'questions', calcul: 'questions', paires: 'paires', ordre: 'series', cartes: 'cartes' };
  for (const rid in window.ZCONTENU) window.ZCONTENU[rid].forEach(a => {
    const k = rid + ':' + a.id, cle = CLE[a.type];
    if (!cle || !EXPERT[k]) return;
    const tout = a[cle], f = FACILE[k] || [];
    let facile = tout.filter((_, i) => f.includes(i)), moyen = a.type === 'paires' ? tout : tout.filter((_, i) => !f.includes(i));
    /* La frise : 5 dates au palier facile, les 8 au palier moyen */
    if (k === 'soufisme:frise') { facile = [tout[0].filter((_, i) => [0, 1, 3, 5, 6].includes(i))]; moyen = tout; }
    a.paliers = [{ [cle]: facile }, { [cle]: moyen }, { [cle]: EXPERT[k] }];
    delete a[cle];
  });

  /* ---------- Les activités à débloquer ---------- */
  window.ZCONTENU.soufisme.push({ id: 'sept-vallees', type: 'ordre', titre: 'Les sept vallées des oiseaux', notion: 'La Conférence des oiseaux', niveauMin: 3, icone: '🪶',
    consigne: 'La huppe annonce aux oiseaux sept vallées avant le Sîmorgh. Remets-les dans l’ordre.',
    rappel: 'D’après ‘Attâr : la quête, l’amour, la connaissance, le détachement, l’unité, la stupéfaction, et enfin le dénuement et l’anéantissement.',
    series: [['La quête', 'L’amour', 'La connaissance', 'Le détachement', 'L’unité', 'La stupéfaction', 'Le dénuement et l’anéantissement']] });
  window.ZCONTENU.pse.push({ id: 'cas-arbre', type: 'qcm', titre: 'Cas pratique : l’accident de l’atelier', notion: 'Arbre des causes', niveauMin: 5, icone: '🌳',
    consigne: 'Un cas inventé pour l’entraînement. Un apprenti se coupe la main en nettoyant une trancheuse en cuisine.',
    rappel: 'Les faits relevés : la trancheuse est restée branchée ; le carter de protection était démonté ; l’apprenti nettoyait seul ; le chef était en livraison ; c’était un jour de forte activité.',
    questions: [
      { q: 'Lequel est un fait, et non une interprétation ?', choix: ['Le carter de protection était démonté', 'L’apprenti n’a pas fait attention', 'Le chef est négligent'], explication: 'On note ce qu’on peut constater, sans jugement.' },
      { q: 'Quel fait est une « variation » (un fait inhabituel) ?', choix: ['Le chef était en livraison', 'La trancheuse coupe', 'On nettoie la trancheuse chaque soir'], explication: 'D’habitude, le chef est là : son absence change la situation.' },
      { q: '« La trancheuse branchée » et « le carter démonté » ont été tous les deux nécessaires. C’est…', choix: ['Une conjonction', 'Un enchaînement', 'Une disjonction'], explication: 'Plusieurs faits nécessaires ensemble pour en produire un autre : une conjonction.' },
      { q: 'Quelle mesure est la plus haute dans la hiérarchie de la prévention ?', choix: ['Une trancheuse qui ne peut pas fonctionner sans son carter (sécurité intégrée)', 'Des gants anti-coupure', 'Une affiche « Attention, ça coupe »'], explication: 'Agir sur la machine passe avant la protection individuelle et l’information.' },
      { q: 'Quel facteur potentiel d’accident peut-on généraliser à toute la cuisine ?', choix: ['Le nettoyage des machines sous tension', 'La couleur de la trancheuse', 'Le jour de la semaine'], explication: 'On vérifie la même chose pour le hachoir, le batteur, le mixeur…' }
    ] });
})();
