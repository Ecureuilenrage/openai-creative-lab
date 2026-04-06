# Audit du site Creative Lab

Date d'audit: 31 mars 2026

## Contexte

Ce rapport évalue le dépôt `openai-creative-lab` comme site vitrine / rapport de test pour l'OpenAI Creative Lab.

Objectif du site:
- présenter deux projets, `Soulborn` et `Tarot`
- montrer un récit honnête du process, des outils, des pivots et des résultats
- être lisible par un jury, un reviewer, un recruteur ou un visiteur externe sans contexte préalable

Périmètre vérifié:
- `content.js`
- `index.html`
- `soulborn.html`
- `tarot.html`
- `tools.html`
- `archive.html`
- `app.js`
- `js/i18n.js`
- `js/sidebar.js`
- `js/interactions.js`
- assets, médias, liens externes et tests présents dans le dépôt

## Verdict global

Le site est crédible sur le fond, mais pas encore complètement sur la finition.

Ce qui fonctionne déjà bien:
- l'angle du "journal de recherche honnête"
- le fait de raconter des pivots réels au lieu de vendre un résultat lisse
- la structure générale en cinq pages
- la page `Soulborn`, qui porte le récit le plus solide
- la page `Tools`, qui donne de la densité et de la méthode

Ce qui fragilise fortement la soumission:
- trop de traces visibles de work in progress
- plusieurs formulations qui parlent comme des notes internes ou des placeholders
- des caractères corrompus en français
- des preuves annoncées mais non réellement montrées
- des liens morts ou incohérents
- un écart important entre `content.js` et ce qui est effectivement rendu

Conclusion franche:
- le site paraît personnel et vécu sur plusieurs passages clés
- le niveau de finition n'est pas encore suffisant pour une soumission externe exigeante
- la priorité n'est pas une refonte, mais une fermeture éditoriale ferme

## Forces réelles

### 1. Une thèse claire et pertinente

`homepage.hero.title` pose une promesse juste: le site se présente comme un journal de recherche honnête, pas comme un portfolio décoratif.

Effet produit:
- le visiteur comprend qu'il va lire un processus
- le site se distingue d'une simple galerie d'images IA

### 2. Soulborn sonne vécu

Les passages `soulborn.lead`, `soulborn.sections.concept.points.*` et `soulborn.sections.pivots.copy` sont les plus convaincants du dépôt.

Pourquoi:
- ils parlent de blocage, de limites visuelles, de décisions concrètes
- ils montrent une contrainte puis un pivot

Effet produit:
- `Soulborn` paraît réellement traversé et non reconstitué

### 3. Le pivot Tarot est bien formulé

`tarot.sections.styleEvolution.copy` et `tarot.sections.exploration.points.*` donnent une vraie raison au passage du vitrail vers le deck minimaliste.

Pourquoi c'est fort:
- les critères sont concrets: lisibilité, cohérence, efficacité
- on comprend que le changement n'est pas un caprice visuel

### 4. La page Tools est la plus robuste méthodologiquement

La structure répétée `role / input / output / why / limits / result` est excellente pour un reviewer.

Effet produit:
- la lecture est rapide
- le travail paraît pensé et documenté

### 5. L'Obsidian graph apporte une vraie preuve

L'image `assets/images/obsidian.png` est une preuve réelle locale de profondeur de recherche.

Effet produit:
- le discours documentaire cesse d'être abstrait
- la recherche a une matérialité visible

### 6. Les fondamentaux accessibilité / i18n sont présents

Le site dispose de:
- skip link
- labels de navigation
- titres d'iframe
- alt text
- switch FR/EN
- structure de titres cohérente

Effet produit:
- le site paraît plus sérieux que beaucoup de portfolios de rendu

## Faiblesses majeures

### 1. L'archive se présente comme inachevée

Point critique:
- `archive.title` dit encore "slots still to complete"
- `archive.sections.prompts.items.2.placeholder` parle de "later bilingual wiring"

Pourquoi c'est un problème:
- la page censée prouver devient la page qui expose le plus le chantier

### 2. Le français contient de vrais défauts d'encodage

Exemples certains dans `content.js`:
- `c─ur`
- `─0volution`
- `─0veil`
- `─0preuve`
- `d'─0den`
- `ì montrer`
- `ì utiliser`
- `ì insérer ici`

Impact:
- impression immédiate de texte non relu
- baisse brutale de crédibilité

### 3. Plusieurs preuves visibles sont en fait des plaques SVG

Les fichiers:
- `assets/images/archive-soulborn-bulk.svg`
- `assets/images/archive-tarot-bulk-v1.svg`
- `assets/images/archive-tarot-bulk-v2.svg`
- `assets/images/archive-tarot-grid.svg`
- `assets/images/archive-tarot-v1.svg`
- `assets/images/archive-tarot-v2.svg`
- `assets/images/archive-tarot-v3.svg`

ne sont pas de vraies captures, mais des planches illustratives.

Pourquoi c'est gênant:
- les textes et alt suggèrent des preuves de process
- visuellement, on lit plutôt des substituts de présentation

### 4. Trop de formulations parlent comme un brief de production

Exemples:
- `What this page needs to show`
- `To show as visual research evidence`
- `Slot for captures`
- `Planned block`
- `prepared for later bilingual wiring`

Impact:
- le site parle de ce qu'il devrait montrer au lieu d'assumer ce qu'il montre

### 5. Tarot dépend trop du lien externe

La page `tarot.html` explique bien un changement de direction, mais explique encore mal:
- ce que l'utilisateur fait concrètement
- comment se déroule un tirage
- ce qui rend l'expérience finale convaincante

Conséquence:
- la page ne se suffit pas encore à elle-même

### 6. Une partie importante de `content.js` n'est pas rendue

Constat certain:
- aucune cible `#overview-grid`
- aucune cible `#soulborn-worlds`
- aucune cible `#tarot-cards`
- aucune cible `#soulborn-media`
- aucune cible `#soulborn-placeholders`
- aucune cible `#tarot-media`
- aucune cible `#tarot-placeholders`
- aucune cible `#tool-grid`
- aucune cible `#archive-grid`

Conséquence:
- `app.js` garde une logique de rendu dynamique qui ne sert plus vraiment
- le dépôt contient plus de contenu que le site visible

### 7. Le dépôt a deux états éditoriaux concurrents

J'ai comparé les fallbacks HTML et `content.js` sur les mêmes clés i18n.

Résultat:
- 86 divergences relevées sur les fallbacks EN

Conséquence:
- `content.js` n'est pas réellement la seule source éditoriale
- le dépôt garde des versions anciennes et des versions nouvelles en parallèle

## Audit page par page

### Homepage

Ce qui fonctionne:
- la promesse générale est claire
- la bipolarité `Soulborn / Tarot` est lisible immédiatement

Ce qui affaiblit:
- la homepage promet implicitement un "result first", mais ne montre pas de vrai résultat
- les thumbnails sont des SVG stylisés, pas des visuels probants
- le contexte exact du Lab n'est pas expliqué

Ce qui doit changer:
- ajouter une phrase concrète sur ce que le visiteur va trouver
- arrêter les promesses héritées d'une architecture de page unique

### Soulborn

Ce qui fonctionne:
- meilleure page du site
- récit clair
- bonne articulation du pivot

Ce qui manque:
- une vraie preuve dans `Iterations`
- une synthèse finale plus utile
- une meilleure articulation des 14 mondes si ce claim reste important

Ce qui doit changer:
- renforcer `Iterations`
- aligner embed, href et références médias

### Tarot

Ce qui fonctionne:
- bonne logique de transformation
- bon pivot éditorial
- live app réelle

Ce qui manque:
- description concrète de l'expérience
- preuve visible du deck complet
- démonstration éditoriale plus forte sur la page elle-même

Ce qui doit changer:
- faire exister l'expérience finale sans dépendre uniquement du lien externe

### Tools

Ce qui fonctionne:
- structure très lisible
- bonne densité
- bonnes limitations sur plusieurs outils

Ce qui fragilise:
- certains outils sont plus affirmés que prouvés
- `Sora Web App` est ambigu
- trois CTA `GitHub (bientôt)` avec `href="#"`

Ce qui doit changer:
- fiabiliser les liens
- clarifier le statut des outils non publiés

### Archive

Ce qui fonctionne:
- bonne intention documentaire
- bonne structure des sections
- vrai graphe Obsidian

Ce qui fragilise:
- titre inachevé
- langage de chantier
- confusion entre archives réelles et planches illustratives

Ce qui doit changer:
- faire de l'archive une sélection éditée et honnête

## Fidélité au vécu du Lab

### Ce qui semble solidement ancré

- le blocage créatif de `Soulborn`
- la difficulté visuelle du monde à sept soleils
- le pivot vers une présence animée comme solution narrative
- le passage vitrail -> deck minimaliste sur `Tarot`
- l'usage d'Obsidian comme mémoire de recherche

### Ce qui semble plausible mais insuffisamment prouvé

- l'existence montrable d'un deck complet de 78 cartes
- la profondeur réelle des archives annoncées
- certains claims techniques sur les outils internes

### Ce qui doit être validé manuellement

- le statut exact du "Creative Lab" tel qu'il doit être présenté
- le statut public/privé du repo `sora-app`
- l'identité GitHub publique à créditer
- les profils X et LinkedIn, qui ont répondu avec des protections anti-bot

## Vérifications externes

Contrôles réseau effectués le 31 mars 2026:

Liens répondant `200`:
- `https://tarot.exoniq.io`
- `https://exoniq.io`
- Drive archive
- `https://github.com/Ecureuilenrage/tarot-experience`
- `https://github.com/Ecureuilenrage/openai-creative-lab`
- `https://instagram.com/ex0niq`

Liens répondant `404`:
- `https://github.com/ex0niq`
- `https://github.com/Ecureuilenrage/sora-app`

À valider manuellement:
- `https://x.com/ex0niq`
- `https://linkedin.com/in/leon-klein`

## État technique proportionné au contexte

Le site n'a pas besoin d'une architecture complexe. Le problème n'est pas l'absence de framework.

Les vrais problèmes techniques qui comptent pour la soumission sont:
- la divergence entre HTML et `content.js`
- la logique morte dans `app.js`
- la duplication du système de langue
- les CTA morts
- les contenus définis mais non rendus

Point positif:
- les tests présents montrent un vrai effort de contrôle

Résultat du passage de tests:
- `node --test "tests/*.test.js"` -> 85 succès / 2 échecs

Les 2 échecs restants confirment surtout un dépôt en transition:
- attente obsolète autour du rendu Obsidian/Soulborn
- attente obsolète sur un hook i18n non présent dans `soulborn.html`

## Priorités avant soumission

### Priorité 0

- corriger l'encodage FR
- supprimer toutes les formulations visibles de type placeholder / slot / planned
- réparer ou neutraliser les liens morts

### Priorité 1

- rendre l'Archive honnête
- renforcer `Soulborn > Iterations`
- rendre `Tarot` plus concret sur la page
- assouplir les claims non prouvés

### Priorité 2

- réaligner `content.js`, HTML et scripts
- supprimer ou assumer le contenu mort

## Quick wins

1. Renommer la page Archive.
2. Retirer le blocquote "later bilingual wiring".
3. Corriger `c─ur`, `─0volution`, `ì`.
4. Supprimer les trois boutons `GitHub (bientôt)`.
5. Corriger le lien GitHub principal si `ex0niq` n'est pas le bon compte.
6. Clarifier le statut du `Sora Web App`.
7. Remplacer "pushed the boundaries..." par une formulation plus sobre.
8. Ajouter une phrase de contexte sur la homepage.
9. Relabel les SVG d'archive si de vraies captures ne sont pas prêtes.
10. Ajouter 2 ou 3 phrases concrètes sur le déroulé de l'expérience Tarot.

## Conclusion

Le site a une vraie matière, une vraie voix et une vraie valeur.

Son principal problème n'est pas le manque d'intelligence éditoriale.
Son principal problème est de montrer encore trop clairement ses coutures.

Avec une passe de fermeture éditoriale ciblée, le site peut devenir un rendu externe crédible, personnel, lisible et solide.
