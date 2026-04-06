# Rapport d'Audit de Contenu - Creative Lab OpenAI

**Date :** 29 mars 2026
**Auteur :** Audit automatisé
**Scope :** Contenu uniquement (texte, structure narrative, cohérence, complétude). Le style visuel est exclu.

---

## Table des matières

1. [Vue d'ensemble du site](#1-vue-densemble-du-site)
2. [Ce qui fonctionne bien](#2-ce-qui-fonctionne-bien)
3. [Problemes identifies](#3-problemes-identifies)
4. [Audit page par page](#4-audit-page-par-page)
5. [Audit du systeme bilingue](#5-audit-du-systeme-bilingue)
6. [Contenu manquant et placeholders](#6-contenu-manquant-et-placeholders)
7. [Incoherences et doublons](#7-incoherences-et-doublons)
8. [SEO et metadonnees](#8-seo-et-metadonnees)
9. [Axes d'amelioration](#9-axes-damelioration)
10. [Matrice de priorite](#10-matrice-de-priorite)

---

## 1. Vue d'ensemble du site

| Element | Detail |
|---------|--------|
| Pages | 5 (Accueil, Soulborn, Tarot, Outils, Archives) |
| Langue | Bilingue FR/EN via `content.js` |
| Sujet | Documentation de 2 projets creatifs IA pour l'OpenAI Creative Lab |
| Projet 1 | **Soulborn** - Trailer cinematographique genere par Sora |
| Projet 2 | **Tarot** - Application interactive de tirage de tarot |
| Outils documentes | 11 (Sora, Int Bulk Gen, Int Bulk Iter, NanoBanana, CapCut, VS Code, Obsidian, ChatGPT, Codex, Claude Code, Suno) |
| Medias embarques | 5 videos YouTube, 1 image Obsidian, 7 SVG placeholders |

---

## 2. Ce qui fonctionne bien

### 2.1 Narration honnete et authentique
Le positionnement editorial est le point fort majeur du site. Le contenu assume ouvertement :
- Les pannes creatives et les impasses
- Les pivots et changements de direction
- Les limites des outils utilises
- Le fait que certaines pistes n'ont pas abouti

Cette approche "journal de recherche" est rare et credible. Elle distingue ce travail d'un simple portfolio de resultats polished.

### 2.2 Structure de contenu coherente
- La progression **Concept > Iterations > Pivots > Production > Resultat** sur chaque page projet est logique et facile a suivre
- Les sections sont numerotees (01, 02, 03...) ce qui donne un fil de lecture clair
- La navigation intra-page (dashboard-nav) permet de sauter aux sections pertinentes

### 2.3 Documentation des outils exceptionnelle
Chaque outil est presente selon une grille identique :
- **Role** / **Input** / **Output** / **Pourquoi** / **Limites** / **Resultat concret**

C'est un format tres efficace qui montre une vraie reflexion methodologique. Les descriptions sont detaillees et specifiques (pas de contenu generique).

### 2.4 Systeme bilingue complet
- Tout le contenu textuel existe en FR et EN
- Les meta descriptions, les alt texts, les aria-labels sont tous bilingues
- Le `content.js` est bien structure par page puis par section
- Le basculement de langue est persistant (localStorage)

### 2.5 Architecture de l'information
- Le parcours Homepage > Projet > Outils > Archives suit une logique de "zoom" : du resultat global vers les details
- Les pages projet ouvrent sur le resultat final avant d'expliquer le processus ("Result first")
- Les liens de navigation croisee (Next: Tarot, Next: Tools) guident le parcours

### 2.6 Transparence des sources
- Lien Google Drive avec les ZIPs des projets
- Repos GitHub publics
- Prompts documentes (Suno, directions editoriales)
- Capture du graphe Obsidian comme preuve de recherche

---

## 3. Problemes identifies

### 3.1 CRITIQUE - Contenu meta au lieu de contenu reel

**Le probleme le plus important du site.** Plusieurs sections decrivent ce que le contenu *devrait* etre au lieu de *l'etre*.

#### Exemples concrets :

**Homepage - Section "Overview" (`homepage.overview`)** :
Le titre est "Ce que cette page doit montrer" et les items disent des choses comme :
> "Ouvrir la page sur le trailer Soulborn donne tout de suite l'ambition visuelle, puis le scroll explique comment on y arrive."

C'est une note editoriale interne, pas du contenu destine au visiteur. Le visiteur n'a pas besoin qu'on lui explique la logique de la page.

**Soulborn - Section "Final Result"** :
> "Ouverture sur le resultat final actuel avant de revenir au making-of, aux iterations d'images et au montage."

Cette phrase decrit la structure de la page au lieu de commenter le resultat final. Il n'y a aucun contenu sur le trailer lui-meme (duree, reception, ce qu'il montre, liens).

**Archive - Titre principal** :
> "Preuves de recherche, dossiers et emplacements encore a completer"

Le "encore a completer" est un statut de travail interne, pas un titre de page viable.

**Archive - Obsidian item (`archive.items[2]`)** :
> "A inserer ici comme preuve de profondeur de recherche, de brainstorming et de documentation."

C'est une instruction de production, pas une description de contenu.

### 3.2 CRITIQUE - Volume important de placeholders non remplaces

| Placeholder | Page | Impact |
|-------------|------|--------|
| Screenshots bulk image variants Soulborn | Soulborn, Archive | Le visiteur voit un SVG gris |
| Obsidian graph placeholder (section iterations) | Soulborn | Alors que l'image existe et est utilisee ailleurs |
| Prompts ChatGPT + Codex Tarot | Archive | Bloc "prevu" mais vide |
| Tarot v1 Stained Glass screenshot | Archive | SVG placeholder |
| Tarot v2 Iteration screenshot | Archive | SVG placeholder |
| Tarot v3 Minimalist screenshot | Archive | SVG placeholder |
| Sora Bulk Generation screenshot | Archive | SVG placeholder |
| Bulk Iterations v1 screenshot | Archive | SVG placeholder |
| Bulk Iterations v2 screenshot | Archive | SVG placeholder |
| Bulk Generation grid screenshot | Archive | SVG placeholder |
| VS Code app versions captures | Tarot (content.js) | Placeholder defini mais non affiche |
| Stained-glass image attempts | Tarot (content.js) | Placeholder defini mais non affiche |
| Extra bulk generation screenshots | Tarot (content.js) | Placeholder defini mais non affiche |
| Final tarot video/experience | Tarot (content.js) | Placeholder defini mais non affiche |

**Bilan : 14 placeholders non remplaces.** Le contenu visuel repose sur des SVG generiques pour la majorite des captures d'archives.

### 3.3 MAJEUR - Repetitions et doublons de contenu

Certains textes apparaissent a l'identique ou quasi-identique sur plusieurs pages :

1. **Le prompt Suno** apparait 3 fois :
   - `soulborn.sections.music.prompt` (page Soulborn)
   - `archive.sections.prompts.items[0]` (page Archive)
   - Directement en dur dans `archive.html` via `data-i18n="soulborn.sections.music.prompt"`

2. **Les points editoriaux Soulborn** apparaissent 2 fois :
   - `soulborn.sections.concept.points` (page Soulborn)
   - `archive.sections.prompts.items[1]` (page Archive, reference les memes cles i18n)

3. **Les points narratifs Tarot** apparaissent 2 fois :
   - `tarot.sections.exploration.points` (page Tarot)
   - `archive.sections.prompts.items[3]` (page Archive, reference les memes cles i18n)

4. **La description des pivots Soulborn** est tres proche du point concept 2 :
   - Point concept : "un monde couvert d'eau et les sept soleils posaient un probleme visuel difficile..."
   - Section pivots : "Un monde couvert d'eau et sept soleils posaient un probleme visuel difficile..."

5. **L'image Obsidian** apparait 2 fois avec le meme contenu :
   - Page Tools (carte Obsidian)
   - Page Archive (section Research)

### 3.4 MAJEUR - Page "A propos" inexistante

La homepage affiche une carte "A propos" / "Lab context" avec un bouton "Voir" qui pointe vers `#about`. Ce lien ancre vers un simple paragraphe d'introduction de ~80 mots. Il n'y a pas :
- De page dediee "A propos"
- D'explication du contexte OpenAI Creative Lab
- De presentation de l'auteur
- De timeline du projet
- D'explication de ce qu'est le Lab, ses contraintes, sa duree

C'est une promesse de contenu non tenue. Le visiteur qui clique "Voir" ne trouve qu'un paragraphe deja visible au scroll.

### 3.5 MAJEUR - Donnees structurees non affichees

Plusieurs blocs de donnees existent dans `content.js` mais ne sont jamais rendus dans le HTML :

1. **Liste des 14 mondes Soulborn** (`soulborn.worlds`) : Reveil dans les bles, Jungle primitive, Traversee oceanique, etc.
   - Donnee riche et narrative, invisible sur le site

2. **Liste des 6 cartes Tarot exemple** (`tarot.cards`) : La Papesse, Le Mat, La Lune, etc.
   - Jamais affichee

3. **Section "samples" Tarot** (`tarot.sections.samples`) : "Mini-exemples repartis sur plusieurs cartes"
   - Definie dans content.js, absente du HTML

4. **Placeholders Tarot** (`tarot.sections.placeholders`) : 4 placeholders definis
   - Structures dans content.js, aucun container correspondant dans tarot.html

5. **Section overview de la homepage** (`homepage.overview`) :
   - 4 items definis dans content.js
   - Le container `#overview-grid` est reference dans `app.js > renderOverview()` mais absent de `index.html`

### 3.6 MOYEN - Liens GitHub desactives

3 outils sur 11 affichent un lien "GitHub (bientot)" avec `aria-disabled="true"` et `href="#"` :
- Int Bulk Generation
- Int Bulk Iterations
- NanoBanana / bulk-editing

Cela donne une impression d'incompletude. Si les repos ne sont pas publics, mieux vaut ne pas afficher le lien.

### 3.7 MOYEN - Artefacts d'encodage dans le contenu

Plusieurs textes dans `content.js` contiennent des caracteres corrompus :
- `─0volution` au lieu de "Evolution" (ligne ~131 homepage portals tarot copy FR)
- `─0veil dans les bles` au lieu de "Eveil dans les bles" (ligne ~240 soulborn worlds)
- `─0preuve du desert` au lieu de "Epreuve du desert" (ligne ~244 soulborn worlds)
- `─0den` au lieu de "Eden" (ligne ~249 soulborn worlds)
- `ì montrer` au lieu de "A montrer" (ligne ~291 soulborn iterations copy FR)
- `ì utiliser` au lieu de "A utiliser" (ligne ~499 tarot bulk generation media copy FR)

Ces erreurs apparaissent en production pour les visiteurs francophones.

### 3.8 MINEUR - Incoherence des URLs YouTube

Dans `content.js`, la section `soulborn.sections.iterations.media` :
- `embed` pointe vers `8qwdrzuAX5A` (capture Sora web app)
- `href` pointe vers `mSoq4g7SNvQ` (video differente)

Le lien "Ouvrir" et la video embarquee montrent deux contenus differents.

### 3.9 MINEUR - Absence de contenu "resultat" pour certains outils

Certains outils n'ont pas tous les champs renseignes :
- **VS Code** : pas de champs `limits` ni `result`
- **ChatGPT** : pas de champs `limits` ni `result`
- **Obsidian** : pas de champs `limits` ni `result`
- **Claude Code** : pas de champs `limits` ni `result`

La grille d'analyse (role/input/output/why/limits/result) n'est donc pas uniforme.

---

## 4. Audit page par page

### 4.1 Homepage (`index.html`)

| Critere | Evaluation | Detail |
|---------|------------|--------|
| Titre/accroche | Bon | "Deux explorations creatives, un journal de recherche honnete" - clair et positionne |
| Meta description | Bon | Descriptive, mentionne les deux projets |
| Portails projets | Bon | Thumbnails, labels, descriptions courtes |
| Introduction | Correct | Paragraphe solide mais un peu long (~80 mots) |
| Preview cards | Moyen | "A propos" pointe vers un ancre faible |
| Footer | Bon | Liens sociaux, credits |
| Contenu non rendu | Probleme | overview.items et le #overview-grid absent du HTML |
| Densite de contenu | Faible | La page est tres courte apres le fold - 3 petites cartes et c'est tout |

**Verdict :** La homepage remplit sa fonction de portail mais manque de substance below-the-fold. Le visiteur n'a pas de raison de scroller apres les portails projets.

### 4.2 Soulborn (`soulborn.html`)

| Critere | Evaluation | Detail |
|---------|------------|--------|
| Hero / Trailer | Excellent | Video YouTube embedded, immediatement visible |
| Dashboard nav | Bon | 6 sections cliquables |
| Concept & Vision | Correct | Points editoriaux clairs mais formules comme des instructions internes |
| Iterations | Faible | 1 placeholder SVG, pas de captures reelles |
| Pivots | Bon | Texte narratif fort, bien ecrit |
| Production | Excellent | Video CapCut embedded, contexte clair |
| Music & Sound | Bon | Prompt documente, blockquote efficace |
| Final Result | Faible | Texte meta ("la page s'ouvre sur...") sans contenu reel |
| Liste des mondes | Absente | 14 mondes definis mais jamais affiches |
| Navigation inter-page | Bon | Bouton "Next: Tarot" en bas |

**Verdict :** La meilleure page du site grace au trailer et a la video CapCut. Mais la section "Iterations" est vide visuellement et "Final Result" ne dit rien du resultat.

### 4.3 Tarot (`tarot.html`)

| Critere | Evaluation | Detail |
|---------|------------|--------|
| Hero | Correct | Titre descriptif mais pas de media hero (contrairement a Soulborn) |
| CTA Live | Excellent | Lien direct vers tarot.exoniq.io, bien mis en avant |
| Dashboard nav | Bon | 5 sections cliquables |
| Visual Exploration | Moyen | Points editoriaux, pas de visuels |
| Style Evolution | Moyen | Texte seul, aucune illustration de l'evolution |
| Bulk Generation | Bon | 2 videos YouTube embedded |
| Interactive App | Faible | Texte seul, pas de capture de l'app |
| Final Experience | Moyen | Texte de synthese + CTA, mais placeholder non affiche |
| Cartes exemple | Absentes | 6 cartes definies, jamais rendues |
| Placeholders contenu | Non rendus | 4 placeholders definis dans content.js, absents du HTML |
| Navigation inter-page | Bon | Bouton "Next: Tools" |

**Verdict :** Page desequilibree - beaucoup de texte descriptif mais peu de preuves visuelles. Le contraste avec Soulborn (qui a 2 videos) est notable. La section "Style Evolution" devrait etre la plus riche visuellement mais n'a aucune image.

### 4.4 Tools (`tools.html`)

| Critere | Evaluation | Detail |
|---------|------------|--------|
| Presentation | Excellent | Grille uniforme, labels clairs |
| Completude | Bon | 11 outils documentes |
| Fiches individuelles | Bon a Moyen | Certaines fiches incompletes (voir 3.9) |
| Medias | Correct | 4 outils avec video, 1 avec image, 6 sans media |
| Liens externes | Moyen | 3 liens GitHub desactives |
| Tags projets | Bon | Indication de quel projet utilise quel outil |
| Navigation sortante | Absente | Pas de bouton "Next" vers Archive |

**Verdict :** Page la plus complete et la plus utile du site. Le format fiche technique est tres efficace. Les lacunes sont principalement les champs manquants et les liens morts.

### 4.5 Archive (`archive.html`)

| Critere | Evaluation | Detail |
|---------|------------|--------|
| Structure | Bon | 5 sections (Prompts, Screenshots, Legacy, Research, Downloads) |
| Prompts | Moyen | 2 prompts reels + 2 blocs references, dont 1 placeholder |
| Screenshots | Faible | 4 items, tous avec SVG placeholders |
| Legacy Versions | Faible | 3 items, tous avec SVG placeholders |
| Research | Bon | Image Obsidian reelle |
| Downloads | Bon | Liens Drive + 2 repos GitHub fonctionnels |
| Titre page | Probleme | "emplacements encore a completer" - langage interne |
| Double structure | Confusion | `archive.items` (content.js) ET `archive.sections` coexistent |

**Verdict :** La page souffre le plus du manque de medias reels. Sur 10 emplacements d'images, seul 1 (Obsidian) affiche un vrai contenu. L'intention archivistique est bonne mais l'execution est incomplete.

---

## 5. Audit du systeme bilingue

### Points positifs
- Couverture complete : tout le contenu visible a une version FR et EN
- Les meta descriptions sont traduites
- Les alt texts des images sont bilingues
- Les aria-labels d'accessibilite sont bilingues
- Le prompt musical Suno n'est pas traduit (choix correct car c'est un prompt technique en anglais)

### Problemes
1. **Le HTML utilise `lang="en"` par defaut** sur toutes les pages, meme si le public cible principal semble francophone. Cela peut impacter le SEO pour les visiteurs francophones.

2. **Certaines traductions sont des adaptations, pas des traductions fideles.** Exemples :
   - FR: "Voyageur, monolithe, mondes successifs, sept soleils, puis soleil unique"
   - EN: "Traveler, monolith, successive worlds, seven suns, then one sun"
   - -> OK, traduction fidele

   - FR: "Evolution de Lapin Interactive, experimentations vitrail puis pivot..."
   - EN: "Evolution of Lapin Interactive, stained-glass experiments, then a pivot..."
   - -> OK, adaptation naturelle

3. **Artefacts d'encodage uniquement en FR** (voir section 3.7). Les textes EN sont corrects.

4. **Le contenu statique dans `archive.html` reference des cles i18n d'autres pages** (ex: `data-i18n="soulborn.sections.music.prompt"`). Ca fonctionne mais cree un couplage fragile.

---

## 6. Contenu manquant et placeholders

### Inventaire complet des contenus manquants

#### Medias absents (impact visuel direct)
| ID | Description | Localisation | Gravite |
|----|-------------|--------------|---------|
| M1 | Captures de variantes bulk Soulborn | soulborn.html #iterations | Haute |
| M2 | Captures Tarot v1 (vitrail) | archive.html #legacy | Haute |
| M3 | Captures Tarot v2 (iteration) | archive.html #legacy | Haute |
| M4 | Captures Tarot v3 (minimaliste) | archive.html #legacy | Haute |
| M5 | Captures bulk generation Sora | archive.html #screenshots | Haute |
| M6 | Captures bulk iterations v1 Tarot | archive.html #screenshots | Haute |
| M7 | Captures bulk iterations v2 Tarot | archive.html #screenshots | Haute |
| M8 | Captures bulk generation grids Tarot | archive.html #screenshots | Haute |
| M9 | Video/capture finale Tarot experience | content.js (non rendu) | Moyenne |
| M10 | Captures VS Code app versions | content.js (non rendu) | Moyenne |
| M11 | Captures tentatives vitrail | content.js (non rendu) | Basse |

#### Textes absents ou incomplets
| ID | Description | Localisation | Gravite |
|----|-------------|--------------|---------|
| T1 | Prompts ChatGPT + Codex pour Tarot | archive.html #prompts | Haute |
| T2 | Contenu reel section "Final Result" Soulborn | soulborn.html #result | Moyenne |
| T3 | Contenu page/section "A propos" | index.html | Moyenne |
| T4 | Champs manquants fiches outils (limits/result) | tools.html | Basse |

---

## 7. Incoherences et doublons

### 7.1 Doublons textuels exacts

| Contenu | Occurrence 1 | Occurrence 2 | Occurrence 3 |
|---------|-------------|-------------|-------------|
| Prompt Suno | soulborn.html #music | archive.html #prompts | - |
| Points editoriaux Soulborn (3 points) | soulborn.html #concept | archive.html #prompts | - |
| Points narratifs Tarot (3 points) | tarot.html #exploration | archive.html #prompts | - |
| Image Obsidian | tools.html (carte Obsidian) | archive.html #research | - |
| Description pivot "monde d'eau / sept soleils" | soulborn.html #concept (point 2) | soulborn.html #pivots | - |
| Lead Soulborn | soulborn.html header | soulborn.html #concept body | - |

### 7.2 Incoherences structurelles

1. **`content.js` vs `archive.html`** : Le fichier `content.js` definit `archive.items[]` (4 items avec status/tag/copy), et `archive.sections` (prompts, screenshots, legacy, research, downloads). Mais `archive.html` utilise directement les sections HTML avec `data-i18n`, pas le rendu dynamique de `app.js > renderArchiveGrid()`. Les deux structures coexistent sans que l'une serve a l'autre.

2. **`content.js` vs `tools.html`** : Meme situation. `content.js` definit `tools.items[]` avec un format detaille (status, fields, media), et `app.js > renderToolGrid()` sait les rendre. Mais `tools.html` contient le HTML en dur avec `data-i18n`. Les descriptions dans le HTML (courtes) et dans content.js (longues) different significativement pour la plupart des outils.

   Exemples de divergences :
   - **Sora Web App** - HTML: "Central tool for testing atmospheres..." / content.js: "Custom-built application created to work around the lack of access to Sora 2's web interface..."
   - **CapCut** - HTML: "Editing turns disparate outputs into a readable trailer" / content.js: "Free video editing software used to assemble the Soulborn trailer..."

   Les descriptions de content.js sont plus detaillees et plus precises.

3. **`homepage.overview`** : 4 items definis dans content.js, fonction `renderOverview()` dans app.js, mais le container `#overview-grid` est absent de index.html. Contenu orphelin.

### 7.3 Incoherence de tonalite

La page Soulborn parle au visiteur comme a un jury ("A montrer comme preuve de recherche visuelle"), tandis que la page Tarot est plus descriptive et neutre ("L'arc narratif choisi pour ce projet est de montrer..."). L'archive melange les deux registres.

---

## 8. SEO et metadonnees

### Ce qui est present
- Balise `<title>` sur chaque page (bilingue)
- Meta description sur chaque page (bilingue)
- Open Graph title et description
- `og:type` = "website"
- Referrer policy "strict-origin-when-cross-origin"

### Ce qui manque
| Element | Impact | Recommandation |
|---------|--------|----------------|
| `og:image` | Haute | Pas d'image OG = pas de preview sur les reseaux sociaux |
| `og:url` | Moyenne | URL canonique absente |
| Favicon | Moyenne | Pas de `<link rel="icon">` |
| Twitter Card meta | Basse | Pas de `twitter:card`, `twitter:image` |
| Structured data (JSON-LD) | Basse | Pas de schema.org pour les projets ou la personne |
| Sitemap | Basse | Pas de sitemap.xml |
| Canonical URL | Moyenne | Pas de `<link rel="canonical">` - risque de duplicate content pour FR/EN |
| `hreflang` | Moyenne | Pas de balise `hreflang` pour indiquer les versions linguistiques au moteur de recherche |

---

## 9. Axes d'amelioration

### Axe 1 : Remplacer le contenu meta par du contenu reel (Priorite haute)

**Probleme :** Plusieurs sections "parlent de ce qu'elles devraient montrer" au lieu de montrer.

**Actions :**
- Reecrire `homepage.overview` pour en faire une vraie section de contexte (qu'est-ce que le Creative Lab, quand, comment, pourquoi)
- Reecrire `soulborn.sections.result.copy` pour decrire le trailer final (duree, mondes presents, impression visuelle)
- Retirer le "encore a completer" du titre de la page archive
- Remplacer les instructions internes ("A inserer ici comme preuve de...") par des descriptions reelles

### Axe 2 : Combler les placeholders visuels (Priorite haute)

**Probleme :** 10+ emplacements d'images n'affichent que des SVG gris.

**Actions :**
- Prendre des captures d'ecran des 3 versions de l'app Tarot
- Prendre des captures des resultats bulk generation (grilles de variantes)
- Capturer les iterations Sora en tant qu'images fixes
- Remplacer les SVG par les vraies images

**Note :** Les videos locales existent deja dans le dossier (int-bulk-iteration 1.mp4, int-bulk-iteration 2.mp4) et sont deja sur YouTube. C'est principalement un travail de captures d'ecran.

### Axe 3 : Ajouter une vraie section "A propos" (Priorite haute)

**Probleme :** Le visiteur n'a aucun contexte sur le Creative Lab ni sur l'auteur.

**Contenu suggere :**
- Qu'est-ce que l'OpenAI Creative Lab (programme, duree, objectifs)
- Qui est Leon Klein (parcours bref, lien avec le Lab)
- Quel etait le brief / les contraintes
- Timeline du projet (debut, milestones, fin)
- Ce qui a ete soumis vs. ce qui est documente ici

### Axe 4 : Afficher les donnees structurees deja definies (Priorite moyenne)

**Probleme :** Du contenu riche existe dans content.js mais n'est jamais rendu.

**Actions :**
- Ajouter un container `#soulborn-worlds` dans soulborn.html pour afficher les 14 mondes
- Ajouter un container `#tarot-cards` dans tarot.html pour afficher les 6 cartes
- Soit integrer le container `#overview-grid` dans index.html, soit supprimer le contenu orphelin
- Integrer les 4 placeholders Tarot dans tarot.html (ou les supprimer de content.js)

### Axe 5 : Harmoniser content.js et le HTML (Priorite moyenne)

**Probleme :** Deux systemes de contenu coexistent - le HTML statique avec data-i18n et le rendu dynamique via app.js - avec des textes differents pour les memes elements.

**Actions :**
- Decider d'une source unique : soit tout en data-i18n statique, soit tout en rendu dynamique
- Mettre a jour les descriptions outils dans le systeme retenu (les versions content.js sont meilleures)
- Nettoyer le code mort dans app.js (renderToolGrid, renderArchiveGrid) si le choix est le statique

### Axe 6 : Corriger les artefacts d'encodage (Priorite moyenne)

**Probleme :** Des caracteres corrompus apparaissent dans les textes FR.

**Corrections a faire dans content.js :**
| Texte actuel | Correction |
|-------------|------------|
| `─0volution` | `Évolution` |
| `─0veil dans les bles` | `Éveil dans les blés` |
| `─0preuve du desert` | `Épreuve du désert` |
| `─0den` | `Éden` |
| `ì montrer` | `À montrer` |
| `ì utiliser` | `À utiliser` |

### Axe 7 : Deduplication du contenu (Priorite basse)

**Probleme :** Le meme contenu apparait sur plusieurs pages.

**Approche suggeree :**
- Sur la page archive, remplacer les doublons par des liens "Voir dans Soulborn >" / "Voir dans Tarot >"
- Ou reformuler les textes archive pour qu'ils apportent un angle different (contexte d'archivage plutot que repetition du process)

### Axe 8 : Ajouter les meta OG et le favicon (Priorite basse)

**Actions :**
- Creer une image OG (1200x630px) avec le titre "Creative Lab - OpenAI"
- Ajouter `og:image` et `og:url` sur chaque page
- Ajouter un favicon
- Optionnel : ajouter les balises twitter:card

### Axe 9 : Enrichir le contenu Tarot (Priorite moyenne)

**Probleme :** La page Tarot est significativement moins riche que Soulborn en medias et en contenu narratif.

**Actions suggerees :**
- Ajouter une capture d'ecran ou video de l'app tarot dans le hero (equivalent du trailer Soulborn)
- Documenter l'evolution visuelle avec des images avant/apres (vitrail > iteration > minimaliste)
- Ajouter des captures de l'interface VS Code montrant les prototypes
- Mentionner les metriques de l'experience (nombre de cartes, interactions possibles, etc.)

### Axe 10 : Ameliorer la navigation (Priorite basse)

**Actions suggerees :**
- Ajouter un bouton "Next: Archive" en bas de tools.html (la seule page sans lien "Next")
- Ajouter un lien retour "Tous les projets" en bas de archive.html pour boucler le parcours
- Considerer l'ajout d'un fil d'Ariane sur les pages internes

---

## 10. Matrice de priorite

| # | Action | Effort | Impact | Priorite |
|---|--------|--------|--------|----------|
| 1 | Corriger les artefacts d'encodage (Axe 6) | Faible | Haute | **P0** |
| 2 | Remplacer le contenu meta par du reel (Axe 1) | Moyen | Haute | **P1** |
| 3 | Combler les placeholders visuels (Axe 2) | Moyen | Haute | **P1** |
| 4 | Creer la section "A propos" (Axe 3) | Moyen | Haute | **P1** |
| 5 | Afficher les donnees orphelines (Axe 4) | Faible | Moyenne | **P2** |
| 6 | Enrichir le contenu Tarot (Axe 9) | Moyen | Moyenne | **P2** |
| 7 | Harmoniser content.js vs HTML (Axe 5) | Eleve | Moyenne | **P2** |
| 8 | Dedupliquer le contenu (Axe 7) | Faible | Basse | **P3** |
| 9 | Ajouter les meta OG/favicon (Axe 8) | Faible | Basse | **P3** |
| 10 | Ameliorer la navigation (Axe 10) | Faible | Basse | **P3** |

---

## Annexe : Statistiques de contenu

### Volume textuel par page (mots approximatifs, version EN)

| Page | Mots (texte visible) | Medias reels | Placeholders |
|------|---------------------|-------------|-------------|
| Homepage | ~120 | 0 | 0 |
| Soulborn | ~350 | 2 videos | 1 SVG |
| Tarot | ~300 | 2 videos | 0 (mais 4 dans content.js) |
| Tools | ~1200 | 4 videos + 1 image | 0 |
| Archive | ~400 | 1 image | 7 SVG |
| **Total** | **~2370** | **9** | **8+** |

### Ratio contenu reel vs placeholders par page

```
Homepage   [================] 100% reel (mais contenu orphelin dans content.js)
Soulborn   [==========------]  70% reel
Tarot      [============----]  80% reel (texte OK, medias manquants)
Tools      [===============-]  90% reel (liens morts)
Archive    [====------------]  30% reel (SVG partout)
```

---

*Fin du rapport. Ce document se concentre exclusivement sur le contenu. Pour un audit de style, d'accessibilite ou de performance, un rapport distinct serait necessaire.*
