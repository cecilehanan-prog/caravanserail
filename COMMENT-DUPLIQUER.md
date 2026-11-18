# Faire une appli sur mesure pour un élève

Ce dossier `modele-eleve` est un **canevas**. Il sert pour tous les niveaux, du primaire au lycée. Il te permet de fabriquer vite une appli adaptée aux difficultés de chaque élève.

Ce qui est **toujours là** :
- les rubriques **Français, Maths, Géométrie, Histoire-Géo, SVT** ;
- les **Devoirs** ;
- les récompenses : éclairs, boutique, album, coffre du jour ;
- l'**espace parents** (appui long sur ⚙️).

À l'intérieur de chaque rubrique, **tu mets les activités que tu veux**.

Deux fichiers changent d'un élève à l'autre :

| Fichier | Ce qu'il contient |
|---|---|
| `js/profil.js` | **Qui** est l'élève : pseudo, niveau, aides dys, rubriques, passions, animaux guides, couleurs |
| `js/contenu.js` | **Ce qu'on travaille** : les activités de chaque rubrique |

Les autres fichiers font tourner l'appli. On n'y touche pas.

L'exemple déjà rempli : « Kiwi », en 4e. Il aime le foot, le karaté et les chiens. Il y a au moins une activité par matière, dont le **champ lexical** et le **théorème de Pythagore**.

---

## 1. Copier le dossier

1. Dans le Finder, fais un clic droit sur **`modele-eleve`** puis **Dupliquer**.
2. Renomme la copie avec le pseudo de l'élève, par exemple `appli-tigre`.
3. Garde `modele-eleve` intact : c'est ta base pour les prochains élèves.

---

## 2. Le plus rapide : envoie les difficultés de l'élève à Claude

Ouvre Claude Code dans ce dossier et décris l'élève, en toutes lettres. Par exemple :

> Pour `appli-tigre` : c'est une fille de 5e, pseudo « Tigre ». Elle est dyslexique et dyspraxique. En français, elle ne sait pas définir un champ lexical et elle a du mal à rédiger un récit. En maths, elle confond périmètre et aire. En histoire, elle mélange les dates du Moyen Âge. Elle adore les chevaux et la danse. Remplis `profil.js` et écris `contenu.js` avec des activités pour chaque matière.

Claude remplit les deux fichiers pour toi. **Il s'appuie sur la bibliothèque des programmes** (le dossier `bibliotheque-programmes`, à côté de `modele-eleve`) : un fichier par classe, du CP à la terminale, avec ce que l'élève doit savoir faire en fin d'année dans chaque matière, et des fiches méthode pour les examens (brevet, dissertation, commentaire, oral de français, épreuve anticipée de maths, philosophie, Grand oral). Donne-lui donc toujours **la classe** de l'élève, et au lycée **la voie, les spécialités et les œuvres étudiées en français**. Par exemple :

> Pour `appli-sacha` : 1re générale, spécialités SES, HGGSP, anglais. Il n'arrive pas à faire une dissertation en français, et il panique pour l'épreuve anticipée de maths. Œuvres étudiées : (la liste donnée par le professeur).

Tu peux ensuite lui demander des changements :
- « ajoute une activité sur les fractions en maths » ;
- « enlève la rubrique SVT » ;
- « ajoute une rubrique Anglais avec le vocabulaire de la maison ».

---

## 3. Le profil (`js/profil.js`)

Tu peux aussi le modifier toi-même avec TextEdit (format texte brut). Change seulement ce qui est entre guillemets ou après les deux-points. Ne supprime ni les virgules ni les accolades `{ }`.

| Ce que tu veux régler | La ligne à modifier |
|---|---|
| Le pseudo | `pseudo: 'Kiwi'` |
| Garçon ou fille (pour les accords) | `genre: 'garçon'` ou `'fille'` |
| Le niveau | `niveau: 'cycle4'` : `'cycle2'` (CP-CE2), `'cycle3'` (CM1-6e), `'cycle4'` (5e-3e) ou `'lycee'` |
| Lecture automatique des consignes | `lectureAuto: true` ou `false` (dans ce cas, l'élève touche 🔊 quand il veut) |
| La police | `police: 'andika'`, `'lexend'` ou `'arial'` |
| La taille du texte | `taille: 1.0` (`1.2` = plus gros) |
| Les syllabes en couleur | `syllabes: true` ou `false` |
| Avec ou sans animaux guides | `style: { guides: true }` ou `false` (une appli sobre, souvent mieux au lycée) |
| Les rubriques affichées | `actives: ['francais', 'maths', 'geometrie', 'histoire', 'svt']` |
| Une rubrique en plus | dans `enPlus`, par ex. `{ id: 'anglais', titre: 'Anglais', icone: '🇬🇧', couleur: '#be123c' }` |
| L'objet à décorer dans la boutique | `univers: 'foot'` : `'foot'`, `'karate'`, `'trottinette'`, `'dinosaures'`, `'trail'` ou `'moto'` |
| Les animaux guides | la liste `animaux` : `'chat'`, `'chien'`, `'lapin'`, `'cheval'`, `'tortue'` ou `'oiseau'` |
| Qui aide l'élève | `adulte: 'l\'adulte'` (ex. `'Papa'`, `'l\'AESH'`) |
| L'appli et sa couleur | `nom: 'Le Club de Rex'` et `principale: '#16a34a'` |

**Le niveau change le ton.** Au collège et au lycée, l'appli est plus sobre : boutons moins arrondis, petit décor, voix naturelle.

**Les aides restent réglables** dans l'espace parents (appui long sur ⚙️) : lecture à voix haute, police, taille, espacement, syllabes.

**Les rôles des animaux** : chaque animal peut s'occuper d'une ou plusieurs rubriques. Par exemple `roles: ['maths', 'geometrie']`. S'il manque un rôle, c'est l'animal d'accueil qui s'en charge.

**Deux réglages techniques :**
- `id: 'kiwi'` : un mot court, différent pour chaque élève, sans espace ni accent. Il empêche les sauvegardes de se mélanger.
- `manifest.webmanifest` : recopie le nom de l'appli dans `name` et `short_name`. C'est le nom affiché sous l'icône du téléphone.

---

## 4. Ajouter une activité dans une rubrique (`js/contenu.js`)

Chaque rubrique est une liste d'activités entre crochets `[ ]`. Pour en ajouter une :
1. copie un des modèles ci-dessous ;
2. colle-le dans la bonne rubrique ;
3. change les textes.

Mets bien une **virgule** entre deux activités. L'`id` doit être un mot court sans espace, différent pour chaque activité de la rubrique.

Champs facultatifs pour toutes les activités :
- `notion` : la notion travaillée, affichée sous le titre ;
- `consigne` : lue au début de l'activité ;
- `rappel` : la leçon à retenir, affichée avant de commencer.

### QCM (questions à choix) : la première réponse est la bonne
```js
{ id: 'figures-style', type: 'qcm', titre: 'Les figures de style',
  rappel: 'Une comparaison rapproche deux choses avec un mot comme « comme ».',
  questions: [
    { q: '« Il court comme le vent » : quelle figure ?', choix: ['Une comparaison', 'Une métaphore', 'Une rime'],
      aide: 'Cherche le petit mot qui relie.', explication: 'Le mot « comme » montre une comparaison.' }
  ] },
```

### Texte à trous : `{bonne|fausse|fausse}`
```js
{ id: 'homophones', type: 'trous', titre: 'a ou à ?',
  phrases: [
    { t: 'Il {a|à} un chien.', aide: 'Remplace par « avait ».' },
    'Je vais {à|a} la piscine.'
  ] },
```

### Relier deux colonnes
```js
{ id: 'capitales', type: 'paires', titre: 'Pays et capitales',
  paires: [['France', 'Paris'], ['Espagne', 'Madrid'], ['Italie', 'Rome']] },
```

### Remettre dans l'ordre (frise, étapes d'une méthode…)
```js
{ id: 'moyen-age', type: 'ordre', titre: 'La frise du Moyen Âge',
  series: [['Clovis (496)', 'Charlemagne empereur (800)', 'Hugues Capet (987)']] },
```

### Cartes mémoire : elles reviennent au bon moment (répétition espacée)
```js
{ id: 'vocabulaire-svt', type: 'cartes', titre: 'Les mots de la digestion',
  cartes: [ { recto: 'Où commence la digestion ?', verso: 'Dans la bouche.' } ] },
```

### Calcul : réponse en nombre, avec figure facultative
```js
{ id: 'aires', type: 'calcul', titre: 'Aire du rectangle',
  questions: [
    { q: 'Calcule l\'aire de ce rectangle.', reponse: 40, unite: 'cm²',
      figure: { type: 'rectangle', longueur: '8 cm', largeur: '5 cm' },
      aide: 'Aire = longueur × largeur.', solution: '8 × 5 = 40 cm².' }
  ] },
```

Les figures disponibles :
- `triangle-rectangle`, avec `a`, `b` et `c` (l'hypoténuse) ;
- `rectangle` ;
- `cercle`, avec `rayon`.

Pour une réponse arrondie, ajoute `tolerance: 0.05`.

### Orthographe : écrire des mots
Les mots s'écrivent coupés en syllabes, avec des signes :
- `[ ]` entoure la partie piège ;
- `( )` entoure une lettre muette.
```js
{ id: 'mots-semaine', type: 'orthographe', titre: 'Les mots de la semaine',
  mots: [ { id: 'beaucoup', s: 'b[eau]-cou(p)', e: '🍬', ph: 'J\'ai beaucoup de devoirs.', hint: 'E A U, et un P muet.' } ] },
```

### Rédaction guidée : étape par étape, puis validée par l'adulte
```js
{ id: 'portrait', type: 'redaction', titre: 'Faire le portrait de mon animal',
  etapes: [
    { titre: 'Son physique', consigne: 'Décris sa taille, son pelage, ses yeux.', mots: ['pelage', 'museau', 'robuste'],
      aide: 'Exemple : Mon chien a un pelage roux et doux.' },
    { titre: 'Son caractère', consigne: 'Est-il joueur, calme, peureux ?' }
  ],
  checklist: ['Des majuscules et des points', 'Au moins 3 adjectifs', 'J\'ai écouté mon texte'] },
```

Pendant la rédaction, l'élève peut :
- écrire au clavier ou dicter avec le micro du clavier ;
- écouter son texte pour le relire.

À la fin, **l'adulte valide**. Il n'y a pas d'intelligence artificielle dans l'appli : c'est voulu, puisque le site est public.

### Schéma à légender
```js
{ id: 'plante', type: 'schema', titre: 'Les parties d\'une plante', fond: 'plante',
  points: [{ x: 150, y: 48, bonne: 'Fleur' }, { x: 150, y: 232, bonne: 'Racines' }], intrus: ['Graine'] },
```

Les dessins fournis :
- `plante` ;
- `cellule` ;
- `roseDesVents`.

Pour un autre schéma, demande à Claude de dessiner le fond.

### Un des jeux intégrés
```js
{ id: 'tables', type: 'jeu', jeu: 'tables' },
```
Les jeux intégrés :
- `tables` : les tables de multiplication ;
- `problemes` : les problèmes « détective » ;
- `mots` : les mots invariables ;
- `route` : le permis de la route.

---

## 5. Les devoirs

`js/devoirs-data.js` contient un **exemple**. Pour les vrais devoirs, envoie une photo de l'agenda à Claude :

> Transforme ces devoirs en exercices pour `appli-tigre/js/devoirs-data.js`.

---

## 6. Essayer, puis publier sur GitHub Pages (gratuit)

**Essayer :** demande à Claude « Ouvre l'aperçu de `appli-tigre` ».

**Publier :** chaque élève a son propre dépôt, donc sa propre adresse.
1. Sur **https://github.com** : **+** puis **New repository**. Nom : `appli-tigre`. Coche **Public** et **Add a README file**. Clique sur **Create repository**.
2. **Add file** puis **Upload files**. Glisse tout le contenu du dossier de l'élève : les dossiers `css`, `icons`, `js` et les fichiers. Clique sur **Commit changes**.
3. **Settings** puis **Pages**. Choisis **main** et **/ (root)**, puis **Save**.
4. Une à deux minutes plus tard, l'appli est en ligne : `https://TON-NOM-GITHUB.github.io/appli-tigre/`

**Installer sur le téléphone :**
- Android : ouvre l'adresse dans Chrome, menu ⋮, puis **Installer l'application**.
- iPhone : ouvre l'adresse dans Safari, bouton **Partager**, puis **Sur l'écran d'accueil**.

**Mettre à jour :** **Add file** puis **Upload files**, glisse les fichiers modifiés (souvent seulement `contenu.js`), puis **Commit changes**. La progression de l'élève est gardée.

---

## 7. Confidentialité : le site est public ⚠️

N'importe qui ayant l'adresse peut ouvrir l'appli. Donc :
- ✅ un **pseudo** ;
- ❌ jamais le prénom avec le **nom de famille** ;
- ❌ jamais de **photo** de l'élève (les personnages sont dessinés par le code) ;
- ❌ ni le nom de l'école, ni la ville, ni d'adresse ;
- ❌ pas de diagnostic ni de mot comme « dyslexique » dans les textes de l'appli. Tu peux le dire à Claude dans la conversation, mais il ne doit pas l'écrire dans les fichiers ;
- pour l'entourage, des surnoms : « Mamie », « le coach ».

La progression (scores, mots, textes écrits) reste **sur le téléphone de l'élève**. Elle n'est envoyée nulle part.

---

## En cas de souci

- **Page blanche :** il manque sans doute une virgule ou un guillemet dans `profil.js` ou `contenu.js`. Demande à Claude : « vérifie les fichiers de `appli-tigre` ».
- **Le téléphone garde l'ancienne version :** ferme complètement l'appli et rouvre-la (deux fois si besoin).
- **Changer de téléphone :** espace parents, puis **Transférer la progression**.
