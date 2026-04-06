# Plan de Refonte — content.js & Structure du site

## Contexte
Le site Creative Lab documente deux projets IA (Soulborn + Tarot) pour l'OpenAI Creative Lab (partenariat OpenAI / Université Paris 8). Deux rapports d'audit ont identifié des problèmes majeurs : contenu méta au lieu de contenu réel, placeholders non remplacés, données orphelines dans content.js, artefacts d'encodage, doublons, et absence de page À propos. Ce plan organise la refonte en phases indépendantes, exécutables une à une.

## Fichiers critiques
- `content.js` — source unique de tout le contenu bilingue
- `app.js` — rendu dynamique (grids, media, outils)
- `js/i18n.js` — traduction statique via data-i18n
- `index.html`, `soulborn.html`, `tarot.html`, `tools.html`, `archive.html` — pages HTML
- `css/` — tokens.css, components.css, sidebar.css, homepage.css, project.css, archive.css, animations.css
- `questions-redesign.md` — suivi des questions/réponses

---

## Phase 0 : Collecte de contenu (Questions → questions-redesign.md)

- [x] Questions Homepage (7 questions — réponses reçues)
- [x] Questions Soulborn (9 questions — réponses reçues)
- [x] Questions Tarot (10 questions — réponses reçues)
- [x] Questions Tools (4 questions — réponses reçues)
- [x] Questions Archive (6 questions — réponses reçues)
- [x] Questions Page À propos (2 questions — réponses reçues)

### Réponses collectées — Homepage
| # | Question | Réponse |
|---|----------|---------|
| Q1 | Titre hero | "Deux explorations créatives, un journal de mes expérimentations" |
| Q2 | Intro "repousser les limites" | Mix des 3 options proposées (factuelle + processus + personnelle) |
| Q3 | Qu'est-ce que le Creative Lab | Programme partenariat OpenAI + Université Paris 8. Dirigé par Everardo Reyes & Rosa Cinelli (Paris 8) + Souki Mansoor (OpenAI, Artist Programs & Creative Community Lead) |
| Q4 | Section overview (méta) | Supprimer complètement |
| Q5 | Page À propos | Oui, créer + ajouter dans la sidebar. Besoin de plus d'infos |
| Q6 | Artefacts d'encodage | Oui, corriger tous |
| Q7 | "47 fichiers archivés" | Compteur dynamique basé sur le nombre d'items archive |

### Réponses collectées — Soulborn
| # | Question | Réponse |
|---|----------|---------|
| Q8 | Source d'inspiration littéraire | Shadow Slave, volume 7 — Le Tombeau d'Ariel |
| Q9 | Reformuler concept.points | Oui, reformuler pour les visiteurs |
| Q10 | Afficher les 14 mondes | Oui, galerie d'images |
| Q11 | Micro-synopsis | Comme un jeu vidéo : voyageur + monolithe, traverse des contrées variées (champs de blé, monde d'eau avec île, forêt tropicale, portail mystique/arche cassée, glace, vallées fleuries...), parfois plusieurs soleils, parfois un seul. À retravailler. |
| Q12 | iterations.copy interne | Enlever le texte interne. Option : montrer des images de tentatives de génération via int bulk iterations |
| Q13 | URLs YouTube différentes | Les deux sont bonnes : embed = génération, href = itérations |
| Q14 | Dédupliquer pivots vs concept | Ne sait pas — à décider (je propose : garder le long dans pivots, résumer dans concept) |
| Q15 | result.copy méta | Ne sait pas où c'est — à réécrire avec du contenu réel sur le trailer |
| Q16 | Conclusion/leçon Soulborn | Intérêt de générer plusieurs vidéos à partir d'images similaires mais différentes. Pipeline NanoBanana utilisée pour modifier les images itérées (ajout voyageur + monolithe). Ref: nanobanana pipeline prod |

### Réponses collectées — Tarot
| # | Question | Réponse |
|---|----------|---------|
| Q17 | "Lapin Interactive" | HALLUCINATION LLM — supprimer toute mention. Changer le titre complètement. |
| Q18 | UX tarot.exoniq.io | Textbox + 3 questions pré-écrites → page config (choix deck vitrail/minimaliste + 1 ou 3 cartes) → page animation (deck pulse, clic pour distribuer, clic carte face cachée pour retourner en vidéo, endroit/envers) → page résultats (lecture IA des cartes + synthèse + image générée selon cartes et style deck) |
| Q19 | 78 cartes? | NON — seulement 22 arcanes majeurs. Corriger l'erreur factuelle. |
| Q20 | 3 versions app | Ne pas montrer les versions. Juste mentionner qu'il y a eu plusieurs versions, seule la finale est visible sur le site. |
| Q21 | Screenshots versions | Non, pas de screenshots de versions |
| Q22 | 6 cartes d'exemple | Peut mettre les 22 si nécessaire |
| Q23 | Section samples | Ne pas afficher, supprimer |
| Q24 | 4 placeholders | Prompts → archives (surtout des fichiers JSON). Pas d'évolution VS Code. 1-2 vidéos vitrail ratées (La Force) pour archives. |
| Q25 | Vidéo/capture finale | Démo vidéo à faire (pas encore disponible) |
| Q26 | Leçon Tarot | Plus facile de travailler à partir d'images de référence pour style cohérent à grande échelle, puis itérer sur Sora. Volume énorme : 40-150 générations pour 22 arcanes. Le Pendu très compliqué (modération de contenu flagge "hanged man"). |

### Corrections factuelles Tarot (CRITIQUE)
- `78 cartes` → `22 arcanes majeurs` partout dans content.js
- `Lapin Interactive` → supprimer partout (titre, lead, exploration, styleEvolution, legacy)
- Deux decks disponibles : vitrail ET minimaliste (pas seulement minimaliste)

### Réponses collectées — Tools
| # | Question | Réponse |
|---|----------|---------|
| Q27 | Champs limits/result manquants | Pas besoin pour VS Code, ChatGPT, Obsidian, Claude Code — ce sont des outils globaux |
| Q28 | Liens GitHub "bientôt" | A) Créer les repos et mettre les vrais liens |
| Q29 | Codex 5.3 / GPT-5.4 | Bons numéros et bons noms, confirmé |
| Q30 | CapCut result | Pas besoin d'ajouter |

### Réponses collectées — Archive
| # | Question | Réponse |
|---|----------|---------|
| Q31 | Titre archive | "Archives & Documentation" |
| Q32 | Lead archive | Accueillir le visiteur, enlever tout langage interne |
| Q33 | Section Prompts | Lier vers les JSON dans les Archives Drive |
| Q34 | Section Screenshots | Ne sait pas quoi mettre → peut-être supprimer |
| Q35 | Section Legacy Versions | Supprimer |
| Q36 | Items "Médias locaux" + "NanoBanana" | Retirer — pas utile pour le visiteur |

### Réponses collectées — Page À propos
| # | Question | Réponse |
|---|----------|---------|
| Q37 | Contenu page | Présentation (nom, parcours, portfolio) + Contexte Lab (programme, dates, directeurs) + Timeline + Soumis vs documenté + Remerciements/crédits |
| Q38 | Dates du Lab | Début : 30/01/2026 — Fin : 27/03/2026 |

---

## Phase 1 : Corrections rapides (content.js)
*Aucune question nécessaire, exécutable immédiatement*

- [x] **1.1** Corriger artefacts d'encodage FR dans content.js :
  - `─0volution` → `Évolution` (L131 portals.tarot.copy)
  - `─0veil dans les blés` → `Éveil dans les blés` (L240 worlds[0])
  - `─0preuve du désert` → `Épreuve du désert` (L244 worlds[4])
  - `─0den` → `Éden` (L249 worlds[9])
  - `ì montrer` → `À montrer` (L290 iterations.copy)
  - `ì utiliser` → `À utiliser` (L499 bulkGeneration.media[0].copy)
  - `─0volution` → `Évolution` (L589 placeholders[1].title)
  - `ì insérer` → `À insérer` (L1092 archive.items[2].copy)
  - `c─ur` → `cœur` (L118 portals.soulborn.copy) si présent

- [x] **1.2** Fixer incohérence URL YouTube section iterations :
  - embed = `8qwdrzuAX5A` (génération) — CORRECT
  - href = `mSoq4g7SNvQ` (itérations) — CORRECT mais la note dit "mSoq4g7SNvQ" alors que le embed est différent → clarifier la note

---

## Phase 2 : Mise à jour questions-redesign.md
*Mettre à jour le fichier avec toutes les Q&A collectées + questions restantes*

- [ ] **2.1** Réécrire questions-redesign.md avec les réponses Homepage + Soulborn
- [ ] **2.2** Ajouter les questions Tarot (à poser)
- [ ] **2.3** Ajouter les questions Tools (à poser)
- [ ] **2.4** Ajouter les questions Archive (à poser)

---

## Phase 3 : Réécriture Homepage (content.js)
*Dépend des réponses Phase 0*

- [ ] **3.1** Nouveau titre hero : "Deux explorations créatives, un journal de mes expérimentations"
- [ ] **3.2** Nouvelle intro (mix 3 options) — réécrire le bloc `homepage.intro`
- [ ] **3.3** Ajouter contexte Creative Lab (Paris 8 + OpenAI + directeurs) dans un nouveau bloc ou dans l'intro
- [ ] **3.4** Supprimer `homepage.overview` (section méta orpheline)
- [ ] **3.5** Supprimer `renderOverview()` dans app.js (code mort)
- [ ] **3.6** Remplacer "47 fichiers archivés" par compteur dynamique dans app.js

---

## Phase 4 : Réécriture Soulborn (content.js)
*Dépend des réponses Phase 0*

- [ ] **4.1** Nommer la source d'inspiration : Shadow Slave vol.7, Le Tombeau d'Ariel — dans `soulborn.lead` ou `concept`
- [ ] **4.2** Reformuler les 3 `concept.points` pour les visiteurs (plus de "Partir de...", "Dire clairement que...", "Montrer le pivot comme...")
- [ ] **4.3** Écrire micro-synopsis du voyage (2-3 phrases) — nouveau champ ou intégré dans lead/concept
- [ ] **4.4** Réécrire `iterations.copy` — enlever "À montrer comme preuve", mettre du contenu réel
- [ ] **4.5** Dédupliquer pivots vs concept.points[1] — garder le long dans pivots, résumer dans concept
- [ ] **4.6** Réécrire `result.copy` — contenu réel sur le trailer (durée, mondes visibles, impression)
- [ ] **4.7** Ajouter section conclusion/leçon apprise — pipeline NanoBanana, intérêt des variantes vidéo

---

## Phase 5 : Réécriture Tarot (content.js)

- [ ] **5.1** Supprimer TOUTE mention de "Lapin Interactive" (titre, lead, exploration, styleEvolution, legacy, bulkGeneration)
- [ ] **5.2** Nouveau titre page Tarot (remplacer "Lapin Interactive : de l'expérimentation vitrail au deck minimaliste")
- [ ] **5.3** Corriger 78 cartes → 22 arcanes majeurs partout
- [ ] **5.4** Réécrire lead et sections avec la vraie UX (textbox + config + animation + résultats)
- [ ] **5.5** Mentionner les 2 decks disponibles (vitrail ET minimaliste)
- [ ] **5.6** Supprimer section `samples`
- [ ] **5.7** Supprimer placeholders : évolution VS Code, captures bulk generation supplémentaires
- [ ] **5.8** Garder placeholder vitrail (1-2 vidéos ratées, La Force) pour archives
- [ ] **5.9** `finalExperience` : placeholder pour démo vidéo (à faire)
- [ ] **5.10** Ajouter conclusion/leçon : images de référence pour cohérence, volume de générations (40-150 pour 22 arcanes), Le Pendu et la modération de contenu

---

## Phase 6 : Réécriture Tools (content.js)

- [ ] **6.1** Ne PAS ajouter limits/result pour VS Code, ChatGPT, Obsidian, Claude Code (outils globaux)
- [ ] **6.2** Créer repos GitHub pour Int Bulk Gen, Int Bulk Iter, NanoBanana et mettre les vrais liens
- [ ] **6.3** Retirer les liens `aria-disabled` "GitHub (bientôt)" en attendant que les repos soient créés

---

## Phase 7 : Réécriture Archive (content.js + archive.html)

- [ ] **7.1** Nouveau titre : "Archives & Documentation"
- [ ] **7.2** Réécrire le lead — accueillir le visiteur, zéro langage interne
- [ ] **7.3** Section Prompts : lier vers les JSON dans Drive (pas d'affichage inline)
- [ ] **7.4** Supprimer section Screenshots (pas de captures réelles disponibles)
- [ ] **7.5** Supprimer section Legacy Versions (plus de versions app à montrer)
- [ ] **7.6** Retirer items "Médias locaux déjà branchés" et "Dossier NanoBanana" (langage interne)
- [ ] **7.7** Retirer item Obsidian "À insérer ici comme preuve de..." → réécrire en contenu visiteur
- [ ] **7.8** Mettre à jour archive.html pour refléter les suppressions

---

## Phase 8 : Changements structurels (HTML + JS + CSS)
*Plus gros chantier — à faire après le contenu*

- [ ] **8.1** Créer `about.html` (structure identique aux autres pages)
- [ ] **8.2** Ajouter "À propos" dans la sidebar de toutes les 6 pages HTML
- [ ] **8.3** Ajouter `sidebar.nav.about` et bloc `about` dans content.js
- [ ] **8.4** Implémenter compteur dynamique archives (app.js — compter les items dans la page archive)
- [ ] **8.5** Afficher les 14 mondes Soulborn (galerie) — ajouter container dans soulborn.html + rendu dans app.js
- [ ] **8.6** Afficher les 6 cartes Tarot — ajouter container dans tarot.html + rendu dans app.js
- [ ] **8.7** Ajouter bouton "Next: Archive" en bas de tools.html

---

## Phase 9 : Nettoyage & Déduplication
*Dernière passe*

- [ ] **9.1** Dédupliquer prompt Suno (3 occurrences → 1 source + liens)
- [ ] **9.2** Dédupliquer points éditoriaux Soulborn (page Soulborn + Archive)
- [ ] **9.3** Dédupliquer points narratifs Tarot (page Tarot + Archive)
- [ ] **9.4** Nettoyer code mort dans app.js (renderOverview, etc.)
- [ ] **9.5** Harmoniser les descriptions outils HTML vs content.js (utiliser les versions content.js, plus détaillées)

---

## Vérification
Après chaque phase :
1. Ouvrir le site localement dans un navigateur
2. Tester FR et EN (basculer la langue)
3. Vérifier que les data-i18n se résolvent correctement
4. Vérifier l'absence d'artefacts d'encodage
5. Vérifier la console pour erreurs JS
