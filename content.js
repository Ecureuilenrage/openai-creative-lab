// ──────────────────────────────────────────────────────────
// content.js ─ Source unique de tout le contenu bilingue
// Structuré par page, puis par section.
// Pour modifier du texte sur le site ─  modifier ce fichier uniquement.
// ──────────────────────────────────────────────────────────
const content = {

  // ────── Meta ──────────────────────────────────────────────────────────────────────────────────────────────
  meta: {
    siteName: "Creative Lab",
    siteTitle: "Creative Lab ─ OpenAI",
    author: "Léon Klein",
    handle: "@ex0niq",
    portfolioUrl: "https://exoniq.io",
  },

  shared: {
    a11y: {
      skipToContent: { fr: "Aller au contenu", en: "Skip to content" },
      openMenu: { fr: "Ouvrir le menu", en: "Open menu" },
      closeMenu: { fr: "Fermer le menu", en: "Close menu" },
      homeLink: { fr: "Accueil Creative Lab", en: "Creative Lab home" },
      siteNavigation: { fr: "Navigation du site", en: "Site navigation" },
      projectSections: { fr: "Sections du projet", en: "Project sections" },
      language: { fr: "Langue", en: "Language" },
      languageFrench: { fr: "Français", en: "French" },
      languageEnglish: { fr: "Anglais", en: "English" },
      socialX: { fr: "Twitter/X", en: "Twitter/X" },
      socialInstagram: { fr: "Instagram", en: "Instagram" },
      socialGithub: { fr: "GitHub", en: "GitHub" },
      socialLinkedIn: { fr: "LinkedIn", en: "LinkedIn" },
    },
  },

  // ────── Sidebar (persistent ─ toutes les pages) ──────────────────────
  sidebar: {
    logo: "CL",
    nav: {
      home:     { fr: "Accueil",  en: "Home" },
      soulborn: { fr: "Soulborn", en: "Soulborn" },
      tarot:    { fr: "Tarot",    en: "Tarot" },
      tools:    { fr: "Outils",   en: "Toolchain" },
      archive:  { fr: "Archives", en: "Archive" },
    },
    langToggle: { fr: "FR", en: "EN" },
    social: [
      { label: "X",  url: "https://x.com/ex0niq" },
      { label: "IG", url: "https://instagram.com/ex0niq" },
      { label: "GH", url: "https://github.com/ex0niq" },
      { label: "LI", url: "https://linkedin.com/in/leon-klein" },
    ],
    credit: { fr: "Léon K.", en: "Léon K." },
  },

  // ────── Labels partagés ────────────────────────────────────────────────────────────────────
  status: {
    available:   { fr: "Disponible localement", en: "Available locally" },
    curated:     { fr: "Narration cadrée",      en: "Curated narrative" },
    placeholder: { fr: "Placeholder prêt",      en: "Placeholder ready" },
    prompt:      { fr: "Prompt documenté",       en: "Documented prompt" },
  },

  statusClasses: {
    available:   "live",
    curated:     "note",
    placeholder: "placeholder",
    prompt:      "note",
  },

  labels: {
    openLink:  { fr: "Ouvrir",       en: "Open" },
    localPath: { fr: "Chemin local", en: "Local path" },
  },

  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  //  PAGE 1 ─ HOMEPAGE
  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  homepage: {
    metaTitle: {
      fr: "Creative Lab — OpenAI",
      en: "Creative Lab — OpenAI",
    },
    metaDescription: {
      fr: "Deux explorations créatives en IA : Soulborn (création de mondes avec Sora) et Tarot (application IA interactive). Un rendu Creative Lab honnête et documenté.",
      en: "Two creative AI explorations: Soulborn (AI world creation with Sora) and Tarot (interactive AI application). A Creative Lab experience report.",
    },

    // ──── Hero (above fold) ────────────────────────────────────────────────────────────────
    hero: {
      eyebrow: {
        fr: "OpenAI Creative Lab ─ Final Render",
        en: "OpenAI Creative Lab ─ Final Render",
      },
      title: {
        fr: "Deux explorations créatives, un journal de recherche honnête.",
        en: "Two creative explorations, one honest research journal.",
      },
      primaryCta:   { fr: "Entrer dans Soulborn", en: "Enter Soulborn" },
      secondaryCta: { fr: "Entrer dans Tarot",    en: "Enter Tarot" },
      meta: [
        { fr: "Journal honnête",           en: "Honest journal" },
        { fr: "FR / EN intégral",          en: "Full FR / EN" },
        { fr: "Résultat d'abord",          en: "Result first" },
        { fr: "Médias locaux branchés",    en: "Local media wired in" },
      ],
    },

    // ──── Portails projet ────────────────────────────────────────────────────────────────────
    portals: {
      soulborn: {
        label: { fr: "Chapitre 01", en: "Chapter 01" },
        title: { fr: "Soulborn",    en: "Soulborn" },
        alt: {
          fr: "Soulborn - monde animé généré par IA",
          en: "Soulborn - AI-generated animated world",
        },
        copy: {
          fr: "Voyageur, monolithe, mondes successifs, sept soleils, puis soleil unique. Le trailer reste le c─ur du rendu.",
          en: "Traveler, monolith, successive worlds, seven suns, then one sun. The trailer remains the core of the submission.",
        },
        thumbnail: "assets/images/soulborn-thumb.svg",
      },
      tarot: {
        label: { fr: "Chapitre 02", en: "Chapter 02" },
        title: { fr: "Tarot",       en: "Tarot" },
        alt: {
          fr: "Tarot - application IA interactive",
          en: "Tarot - Interactive AI application",
        },
        copy: {
          fr: "─0volution de Lapin Interactive, expérimentations vitrail puis pivot vers un deck vidéo minimaliste et une expérience plus lisible.",
          en: "Evolution of Lapin Interactive, stained-glass experiments, then a pivot toward a minimalist video deck and a clearer interactive experience.",
        },
        thumbnail: "assets/images/tarot-thumb.svg",
      },
    },

    // ──── Intro (below fold ─ ~500 chars) ────────────────────────────────────
    intro: {
      fr: "Ce site documente deux explorations créatives menées dans le cadre de l'OpenAI Creative Lab. De la génération de mondes impossibles avec Sora à la construction d'une expérience de tarot interactive en partant de zéro, chaque projet a repoussé les limites de ce que l'IA générative peut accomplir. Ce qui suit n'est pas seulement le résultat final ─ c'est le parcours créatif complet. Les itérations, les pivots, les outils et les décisions qui ont façonné chaque projet, du premier concept à la livraison finale.",
      en: "This site documents two creative explorations conducted during the OpenAI Creative Lab. From generating impossible worlds with Sora to building an interactive tarot experience from scratch, each project pushed the boundaries of what generative AI can achieve. What follows is not just the final results ─ it is the full creative journey. The iterations, the pivots, the tools, and the decisions that shaped each project from first concept to final delivery.",
    },

    // ──── Overview (cadre éditorial) ──────────────────────────────────────────────
    overview: {
      eyebrow: { fr: "Cadre éditorial",               en: "Editorial frame" },
      title:   { fr: "Ce que cette page doit montrer", en: "What this page needs to show" },
      items: [
        {
          title: { fr: "Commencer par le résultat", en: "Start from the final result" },
          copy: {
            fr: "Ouvrir la page sur le trailer Soulborn donne tout de suite l'ambition visuelle, puis le scroll explique comment on y arrive.",
            en: "Opening the page on the Soulborn trailer gives the visual ambition immediately, then the scroll explains how it was built.",
          },
        },
        {
          title: { fr: "Assumer le journal de recherche", en: "Lean into the research journal" },
          copy: {
            fr: "Le récit ne cache ni la panne créative ni les détours : tests Sora, variations d'images, décisions de montage et pivots assumés.",
            en: "The story does not hide the creative block or the detours: Sora tests, image variations, editing decisions, and deliberate pivots.",
          },
        },
        {
          title: { fr: "Montrer deux projets en miroir", en: "Show two mirrored projects" },
          copy: {
            fr: "Soulborn porte le trailer cinématographique, Tarot montre l'évolution d'une expérience interactive et la sélection d'une direction plus claire.",
            en: "Soulborn carries the cinematic trailer, while Tarot shows the evolution of an interactive experience and the selection of a clearer direction.",
          },
        },
        {
          title: { fr: "Laisser des traces exploitables", en: "Leave usable evidence behind" },
          copy: {
            fr: "Les placeholders existent déjà pour les captures restantes, le graphe Obsidian et les dossiers d'archives afin de compléter sans refaire la structure.",
            en: "Placeholders are already there for the remaining captures, the Obsidian graph, and archive folders so the page can be completed without rebuilding the structure.",
          },
        },
      ],
    },

    // ──── Preview cards (sous l'intro) ──────────────────────────────────────────
    previews: {
      tools: {
        title: { fr: "Outils",              en: "Tools" },
        stat:  { fr: "11 outils documentés",   en: "11 tools documented" },
        cta:   { fr: "Voir",                en: "See" },
      },
      archive: {
        title: { fr: "Archives",             en: "Archive" },
        stat:  { fr: "47 fichiers archivés", en: "47 files archived" },
        cta:   { fr: "Voir",                 en: "See" },
      },
      about: {
        title: { fr: "À propos",        en: "About" },
        stat:  { fr: "Contexte du lab", en: "Lab context" },
        cta:   { fr: "Voir",        en: "See" },
      },
    },
  },

  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  //  PAGE 2 ─ SOULBORN
  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  soulborn: {
    metaTitle: {
      fr: "Soulborn — Creative Lab OpenAI",
      en: "Soulborn — Creative Lab OpenAI",
    },
    metaDescription: {
      fr: "Création de monde IA avec Sora — exploration des limites de la génération vidéo pour construire un univers animé original.",
      en: "AI world creation with Sora — exploring the limits of video generation to create an original animated universe.",
    },
    eyebrow: { fr: "Soulborn", en: "Soulborn" },
    title: {
      fr: "Le trailer officiel : voyageur, monolithe, mondes successifs",
      en: "The official trailer: traveler, monolith, successive worlds",
    },
    subtitle: {
      fr: "Création de monde IA avec Sora",
      en: "AI world creation with Sora",
    },
    lead: {
      fr: "La narration reste honnête : inspiration littéraire, panne de créativité, tests de natures mortes et d'autres capacités de Sora, puis retour vers une scène qui venait directement de la lecture en cours.",
      en: "The narrative stays honest: literary inspiration, creative block, still-life tests and other Sora capabilities, then a return to a scene directly inspired by the book currently being read.",
    },

    // ──── Dashboard (above fold) ──────────────────────────────────────────────────────
    trailer: {
      embed: "https://www.youtube.com/embed/wB7MNWWW6IA?si=vDXkGldH7O6xbrFR",
      href: "https://youtu.be/wB7MNWWW6IA",
      note: "YouTube ─ Soulborn Trailer V1",
      iframeTitle: {
        fr: "Soulborn - trailer final",
        en: "Soulborn - Final Trailer",
      },
    },
    tags: ["Sora", "CapCut", "ChatGPT", "Suno", "NanoBanana", "Obsidian"],

    // ──── Liste des 14 mondes ────────────────────────────────────────────────────────────
    worlds: [
      { fr: "─0veil dans les blés",      en: "Awakening in the wheat fields" },
      { fr: "Jungle primitive",          en: "Primitive jungle" },
      { fr: "Traversée océanique",       en: "Ocean crossing" },
      { fr: "Ruines et portail",         en: "Ruins and portal" },
      { fr: "─0preuve du désert",         en: "Desert trial" },
      { fr: "Archipel suspendu",         en: "Suspended archipelago" },
      { fr: "Médina ancienne",           en: "Ancient medina" },
      { fr: "Monde gelé",               en: "Frozen world" },
      { fr: "Terre brûlée",             en: "Burned earth" },
      { fr: "Jardin d'─0den",            en: "Garden of Eden" },
      { fr: "Savane ancestrale",         en: "Ancestral savannah" },
      { fr: "Vallée des fleurs",         en: "Valley of flowers" },
      { fr: "Retour au monde ordinaire", en: "Return to the ordinary world" },
      { fr: "Fin du voyage",             en: "End of the journey" },
    ],

    // ──── Sections process (scroll ─ chronologique) ────────────────
    sections: {

      // 1. Concept & Vision
      concept: {
        heading: { fr: "Concept & Vision", en: "Concept & Vision" },
        tag:    { fr: "Axe de récit",           en: "Story frame" },
        title:  { fr: "Angle éditorial retenu", en: "Chosen editorial angle" },
        status: "curated",
        points: [
          {
            fr: "Partir de l'inspiration littéraire, puis expliquer la panne de créativité et le besoin de tester Sora sur plusieurs terrains avant de trouver la bonne forme.",
            en: "Start with the literary inspiration, then explain the creative block and the need to test Sora across multiple directions before finding the right form.",
          },
          {
            fr: "Dire clairement que le monde couvert d'eau et les sept soleils posaient un problème visuel difficile parce que ces combinaisons existent peu dans les références vues par les modèles.",
            en: "Say clearly that a water-filled world with seven suns was visually difficult because those combinations barely exist in the references seen by the models.",
          },
          {
            fr: "Montrer le pivot comme une décision productive : ajouter un objet ou une présence animée rend la scène plus lisible et plus vivante.",
            en: "Present the pivot as a productive decision: adding an animated object or presence makes the scene clearer and more alive.",
          },
        ],
      },

      // 2. Iterations ─ Sora experiments
      iterations: {
        heading: { fr: "Itérations", en: "Iterations" },
        tag: { fr: "Sora Web App", en: "Sora Web App" },
        title: {
          fr: "Capture vidéo de la Sora web app",
          en: "Screen capture of the Sora web app",
        },
        copy: {
          fr: "ì montrer comme preuve de recherche visuelle : exploration des possibilités, tests d'ambiances, puis recentrage sur le voyageur et le monolithe.",
          en: "To show as visual research evidence: exploration of possibilities, atmosphere tests, then a refocus on the traveler and the monolith.",
        },
        status: "available",
        media: {
          embed: "https://www.youtube.com/embed/8qwdrzuAX5A?si=B_bdb8q3cRLYIu0g",
          href:  "https://youtu.be/mSoq4g7SNvQ",
          note:  "YouTube ─ mSoq4g7SNvQ",
        },
        placeholders: [
          {
            tag:   { fr: "Int Bulk Generation", en: "Int Bulk Generation" },
            title: {
              fr: "Galerie de variantes d'images Soulborn",
              en: "Gallery of Soulborn image variants",
            },
            copy: {
              fr: "Emplacement pour les captures qui montrent comment une même idée donne plusieurs images proches avec de petites différences utiles.",
              en: "Slot for captures showing how the same idea yields many close images with small useful variations.",
            },
            art: {
              fr: "Placeholder ─ screenshots of bulk image variants",
              en: "Placeholder ─ screenshots of bulk image variants",
            },
          },
          {
            tag:   { fr: "Obsidian", en: "Obsidian" },
            title: {
              fr: "Graphe de recherche et profondeur de préparation",
              en: "Research graph and depth of preparation",
            },
            copy: {
              fr: "Le graphe Obsidian sert ici de preuve de la durée du brainstorming, de la documentation et des croisements entre idées.",
              en: "The Obsidian graph works here as proof of the duration of the brainstorming, documentation, and cross-links between ideas.",
            },
            art: {
              fr: "Placeholder ─ Obsidian graph screenshot",
              en: "Placeholder ─ Obsidian graph screenshot",
            },
            alt: {
              fr: "Graphe de recherche Obsidian montrant la documentation du brainstorming et les liens entre idées",
              en: "Obsidian research graph showing brainstorming documentation and cross-links between ideas",
            },
            image:  "assets/images/obsidian.webp",
            status: "available",
          },
        ],
      },

      // 2b. Pivots
      pivots: {
        heading: { fr: "Pivots", en: "Pivots" },
        tag: { fr: "Pivots", en: "Pivots" },
        copy: {
          fr: "Un monde couvert d'eau et sept soleils posaient un problème visuel difficile parce que ces combinaisons existent peu dans les références vues par les modèles. Le tournant est venu d'une décision productive : ajouter un objet ou une présence animée — le requin, la créature — rendait la scène plus lisible et plus vivante. Ce qui avait commencé comme une contrainte est devenu une force narrative, donnant à chaque monde un ancrage vivant qui guide le spectateur à travers le voyage.",
          en: "A water-filled world with seven suns was visually difficult because those combinations barely exist in the references seen by the models. The turning point came from a productive decision: adding an animated object or presence — the shark, the creature — made the scene clearer and more alive. What started as a constraint became a narrative strength, giving each world a living anchor that guides the viewer through the journey.",
        },
      },

      // 3. Production ─ CapCut editing
      production: {
        heading: { fr: "Production", en: "Production" },
        tag: { fr: "CapCut", en: "CapCut" },
        title: {
          fr: "Montage écran du trailer dans CapCut",
          en: "Screen recording of the trailer edit in CapCut",
        },
        copy: {
          fr: "Cette capture soutient le passage entre matière générée et composition finale : rythme, choix des coupes et lecture plus cinématographique.",
          en: "This capture supports the bridge between generated material and final composition: pacing, cut choices, and a more cinematic reading.",
        },
        status: "available",
        media: {
          src:  "Capcut.mp4",
          note: "Capcut.mp4",
        },
      },

      // 4. Music & Sound
      music: {
        heading: { fr: "Musique & Son", en: "Music & Sound" },
        tag: { fr: "Musique", en: "Music" },
        title: {
          fr: "Direction musicale retenue",
          en: "Selected music direction",
        },
        copy: {
          fr: "Le trailer s'appuie sur la piste choisie dans le document de travail Suno, avec un rythme pensé pour les transitions rapides entre mondes.",
          en: "The trailer uses the track selected in the Suno working document, with a rhythm designed for fast transitions between worlds.",
        },
        status: "prompt",
        promptTitle: {
          fr: "4 ─ Traversée des mondes (transitions rapides)",
          en: "4 ─ Crossing worlds (rapid transitions)",
        },
        prompt: "Hybrid orchestral electronic, glitchy synth textures layered with full orchestra, rapid percussive hits, whooshes between sections, each section shifts genre slightly, cinematic trailer music, intense, 110 BPM",
      },

      // 5. Final Result
      result: {
        heading: { fr: "Résultat Final", en: "Final Result" },
        tag:   { fr: "Trailer final", en: "Final trailer" },
        title: { fr: "V1 trailer Soulborn", en: "V1 Soulborn trailer" },
        copy: {
          fr: "Ouverture sur le résultat final actuel avant de revenir au making-of, aux itérations d'images et au montage.",
          en: "The page opens on the current final result before returning to the making-of, image iterations, and editing process.",
        },
        status: "available",
      },
    },
  },

  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  //  PAGE 3 ─ TAROT
  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  tarot: {
    metaTitle: {
      fr: "Tarot — Creative Lab OpenAI",
      en: "Tarot — Creative Lab OpenAI",
    },
    metaDescription: {
      fr: "Expérience de tarot interactive générée par IA — de l'exploration visuelle à l'application web en ligne sur tarot.exoniq.io.",
      en: "Interactive AI-generated tarot card experience — from visual exploration to a live web application at tarot.exoniq.io.",
    },
    eyebrow: { fr: "Tarot", en: "Tarot" },
    title: {
      fr: "Lapin Interactive : de l'expérimentation vitrail au deck minimaliste",
      en: "Lapin Interactive: from stained-glass experiments to a minimalist deck",
    },
    subtitle: {
      fr: "Application IA interactive",
      en: "Interactive AI application",
    },
    lead: {
      fr: "Le chapitre Tarot montre moins un seul climax final qu'une évolution de direction : une série d'essais visuels, un recul sur ce qui marchait vraiment, puis un deck vidéo plus cohérent pour l'expérience interactive.",
      en: "The Tarot chapter shows less of a single final climax and more of a directional evolution: a series of visual tests, a step back on what truly worked, then a more coherent video deck for the interactive experience.",
    },

    // ──── Dashboard (above fold) ──────────────────────────────────────────────────────
    liveCta:  { fr: "Ouvrir l'expérience tarot", en: "Open the tarot experience" },
    liveNote: { fr: "Lien live : tarot.exoniq.io",    en: "Live link: tarot.exoniq.io" },
    liveUrl:  "https://tarot.exoniq.io",
    tags: ["ChatGPT", "Codex", "Int Bulk", "VS Code", "Claude Code"],

    // ──── 6 cartes d'exemple ──────────────────────────────────────────────────────────────
    cards: [
      { fr: "La Papesse",     en: "The High Priestess" },
      { fr: "Le Mat",         en: "The Fool" },
      { fr: "La Lune",        en: "The Moon" },
      { fr: "Le Soleil",      en: "The Sun" },
      { fr: "La Justice",     en: "Justice" },
      { fr: "La Maison Dieu", en: "The Tower" },
    ],

    // ──── Sections process (scroll ─ chronologique) ────────────────
    sections: {

      // 1. Exploration & arc narratif
      exploration: {
        heading: { fr: "Exploration Visuelle", en: "Visual Exploration" },
        introCopy: {
          fr: "L'arc narratif choisi pour ce projet est de montrer l'évolution de Lapin Interactive comme processus créatif — plutôt que de présenter une simple galerie de cartes de tarot finies. Chaque section ci-dessous retrace une étape clé de ce parcours.",
          en: "The chosen narrative arc for this project is to show the evolution of Lapin Interactive as a creative process — rather than presenting a simple gallery of finished tarot cards. Each section below traces a key stage of that journey.",
        },
        tag:    { fr: "Cadre du process", en: "Process frame" },
        title:  { fr: "Arc narratif retenu", en: "Chosen narrative arc" },
        status: "curated",
        points: [
          {
            fr: "Montrer l'évolution de Lapin Interactive plutôt qu'un simple catalogue de cartes.",
            en: "Show the evolution of Lapin Interactive rather than a simple gallery of cards.",
          },
          {
            fr: "Expliquer que les premières tentatives vidéo en vitrail ont été conservées comme images dans le projet, mais pas comme direction finale pour les clips.",
            en: "Explain that the early stained-glass video attempts were kept as still images inside the project, but not as the final direction for the clips.",
          },
          {
            fr: "Mettre en avant le deck minimaliste comme décision de lisibilité, de cohérence et d'efficacité pour l'expérience finale.",
            en: "Highlight the minimalist deck as a choice for readability, coherence, and efficiency in the final experience.",
          },
        ],
      },

      // 2. Bulk generation media
      // 1b. Style Evolution
      styleEvolution: {
        heading: { fr: "Évolution du Style", en: "Style Evolution" },
        tag: { fr: "Évolution du Style", en: "Style Evolution" },
        copy: {
          fr: "La transition des styles vitrail ornés vers un deck minimaliste a été guidée par trois priorités : lisibilité, cohérence et efficacité. Les premières expériences produisaient des cartes visuellement riches mais lourdes qui se concurrençaient — la direction finale embrasse la retenue pour que le deck fonctionne comme un système unifié.",
          en: "The transition from ornate stained-glass styles to a minimalist deck was driven by three priorities: readability, coherence, and efficiency. Early experiments produced visually rich but heavy cards that competed with each other — the final direction embraces restraint so the deck works as a unified system.",
        },
      },

      // 2. Bulk generation media
      bulkGeneration: {
        heading: { fr: "Génération en Lot", en: "Bulk Generation" },
        copy: {
          fr: "La variation contrôlée était essentielle pour produire un deck complet de 78 cartes. Le pipeline de génération en lot combinait l'ingénierie de prompts avec une itération systématique — chaque passe affinant le cadrage, la cohérence et la lisibilité sur l'ensemble.",
          en: "Controlled variation was essential to producing a full 78-card deck. The bulk generation pipeline combined prompt engineering with systematic iteration — each pass refining framing, coherence, and readability across the entire set.",
        },
        media: [
          {
            tag: { fr: "Int Bulk Iterations v1", en: "Int Bulk Iterations v1" },
            title: {
              fr: "Capture vidéo des premières bulk iterations",
              en: "Screen capture of the first bulk iterations",
            },
            copy: {
              fr: "ì utiliser pour montrer la logique de variation contrôlée autour des cartes, sans transformer la page en archive exhaustive.",
              en: "Use this to show the logic of controlled variation around the cards, without turning the page into an exhaustive archive.",
            },
            src:    "int-bulk-iteration 1.mp4",
            note:   "int-bulk-iteration 1.mp4",
            status: "available",
          },
          {
            tag: { fr: "Int Bulk Iterations v2", en: "Int Bulk Iterations v2" },
            title: {
              fr: "Deuxième passe d'itérations pour le tarot",
              en: "Second iteration pass for the tarot",
            },
            copy: {
              fr: "Ce second clip sert à montrer l'évolution des choix plus que leur volume : meilleurs cadrages, meilleure cohérence, meilleure lisibilité.",
              en: "This second clip is meant to show the evolution of choices more than their volume: better framing, better coherence, and better readability.",
            },
            src:    "int-bulk-iteration 2.mp4",
            note:   "int-bulk-iteration 2.mp4",
            status: "available",
          },
        ],
      },

      // 3. Mini-exemples
      samples: {
        tag: { fr: "Mini-exemples", en: "Mini examples" },
        title: {
          fr: "Mini-exemples répartis sur plusieurs cartes",
          en: "Mini examples spread across several cards",
        },
        copy: {
          fr: "La page est pensée pour montrer plusieurs points du projet plutôt qu'un seul bloc massif : cartes, prompts, évolution de l'interface, bulk iterations et captures d'outils.",
          en: "The page is designed to show multiple points of the project instead of one massive block: cards, prompts, interface evolution, bulk iterations, and tool captures.",
        },
      },

      // 3b. Interactive App
      app: {
        heading: { fr: "Application Interactive", en: "Interactive App" },
        tag: { fr: "Application Interactive", en: "Interactive App" },
        copy: {
          fr: "La construction de l'expérience tarot interactive a évolué à travers plusieurs versions — des premiers prototypes dans VS Code à l'application web finalisée. Chaque itération a affiné la mécanique de tirage, les animations de révélation des cartes et la logique de lecture pour créer une expérience cohérente, proche d'un rituel.",
          en: "Building the interactive tarot experience evolved across multiple versions — from early prototypes inside VS Code to the polished web application. Each iteration refined the draw mechanic, card reveal animations, and reading logic to create a cohesive ritual-like experience.",
        },
      },

      // 4. Expérience finale
      finalExperience: {
        heading: { fr: "Expérience Finale", en: "Final Experience" },
        tag: { fr: "Expérience finale", en: "Final experience" },
        bodyCopy: {
          fr: "Des expérimentations vitrail à un deck minimaliste de 78 cartes, des prototypes VS Code à une expérience de tirage en direct — le projet Tarot retrace un parcours créatif complet à travers le design et le développement assistés par l'IA.",
          en: "From stained-glass experiments to a minimalist 78-card deck, from VS Code prototypes to a live ritual-like draw experience — the Tarot project traces a complete creative journey through AI-assisted design and development.",
        },
        title: {
          fr: "Vidéo ou capture finale du tarot à ajouter",
          en: "Final tarot video or capture to add",
        },
        copy: {
          fr: "Emplacement dédié pour la vidéo finale de l'expérience de tirage, ou pour une capture d'écran naviguée de la version retenue.",
          en: "Dedicated slot for the final draw experience video, or for a navigated screen capture of the selected version.",
        },
        status: "placeholder",
        placeholder: {
          fr: "Placeholder ─ final tarot video / experience",
          en: "Placeholder ─ final tarot video / experience",
        },
      },

      // 5. Placeholders restants
      placeholders: [
        {
          tag:   { fr: "Prompts", en: "Prompts" },
          title: {
            fr: "Liste de prompts ChatGPT + Codex",
            en: "Prompt list from ChatGPT + Codex",
          },
          copy: {
            fr: "Bloc prévu pour la recette éditoriale : prompts de cartes, ajustements de style et formulations qui ont guidé les itérations.",
            en: "Planned block for the editorial recipe: card prompts, style adjustments, and formulations that guided the iterations.",
          },
          art: {
            fr: "Placeholder ─ prompt list / workflow recipe",
            en: "Placeholder ─ prompt list / workflow recipe",
          },
        },
        {
          tag:   { fr: "Lapin Interactive", en: "Lapin Interactive" },
          title: {
            fr: "─0volution de l'app interactive dans VS Code",
            en: "Evolution of the interactive app inside VS Code",
          },
          copy: {
            fr: "Emplacement pour les captures des versions précédentes, afin de montrer la progression de l'interface et non seulement les images finales.",
            en: "Slot for captures of earlier versions, so the page shows the interface progression and not only the final images.",
          },
          art: {
            fr: "Placeholder ─ VS Code app versions",
            en: "Placeholder ─ VS Code app versions",
          },
        },
        {
          tag:   { fr: "Vitraux", en: "Stained glass" },
          title: {
            fr: "Tentatives vidéo vitrail gardées comme images",
            en: "Stained-glass video attempts kept as still images",
          },
          copy: {
            fr: "Cette section doit expliquer que certaines pistes ont été conservées dans le projet, mais relues comme banque d'images plutôt que comme direction finale.",
            en: "This section should explain that some directions were kept inside the project, but re-read as an image bank rather than the final video direction.",
          },
          art: {
            fr: "Placeholder ─ stained-glass image attempts",
            en: "Placeholder ─ stained-glass image attempts",
          },
        },
        {
          tag:   { fr: "Int Bulk Generation", en: "Int Bulk Generation" },
          title: {
            fr: "Captures supplémentaires de génération en lot",
            en: "Additional bulk generation captures",
          },
          copy: {
            fr: "Zone prévue pour compléter les mini-exemples carte par carte sans noyer le lecteur sous trop d'assets.",
            en: "Planned area for adding card-by-card mini examples without drowning the reader in too many assets.",
          },
          art: {
            fr: "Placeholder ─ extra bulk generation screenshots",
            en: "Placeholder ─ extra bulk generation screenshots",
          },
        },
      ],
    },
  },

  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  //  PAGE 4 ─ TOOLS
  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  tools: {
    metaTitle: {
      fr: "Outils — Creative Lab OpenAI",
      en: "Tools — Creative Lab OpenAI",
    },
    metaDescription: {
      fr: "La boîte à outils créative — spécifications pour chaque outil utilisé sur Soulborn et Tarot : Sora, CapCut, ChatGPT, Claude Code, Suno, NanoBanana, et plus.",
      en: "The creative toolkit — specifications for every tool used across both projects: Sora, CapCut, ChatGPT, Claude Code, Suno, NanoBanana, and more.",
    },
    eyebrow: { fr: "Toolchain", en: "Toolchain" },
    title: {
      fr: "OUTILS",
      en: "TOOLS",
    },
    subtitle: {
      fr: "La boîte à outils créative",
      en: "The creative toolkit",
    },
    lead: {
      fr: "Chaque outil est présenté selon le même angle : rôle, input, output, raison du choix, limites et résultat concret dans le rendu.",
      en: "Each tool is presented through the same lens: role, input, output, why it was chosen, limits, and a concrete result inside the final submission.",
    },
    sectionHeading: {
      fr: "Spécifications des outils",
      en: "Tool Specifications",
    },

    fieldLabels: {
      role:   { fr: "Rôle",            en: "Role" },
      input:  { fr: "Input",           en: "Input" },
      output: { fr: "Output",          en: "Output" },
      why:    { fr: "Pourquoi",        en: "Why" },
      limits: { fr: "Limites",         en: "Limits" },
      result: { fr: "Résultat concret", en: "Concrete result" },
    },

    items: [
      {
        status: "available",
        tag:   { fr: "Vidéo", en: "Video" },
        title: { fr: "Sora Web App", en: "Sora Web App" },
        copy: {
          fr: "Outil central pour tester des ambiances, des mondes et des hypothèses de mise en scène avant la sélection finale.",
          en: "Central tool for testing atmospheres, worlds, and staging hypotheses before the final selection.",
        },
        fields: {
          role: {
            fr: "Explorer des scènes cinématographiques et comparer plusieurs directions visuelles.",
            en: "Explore cinematic scenes and compare multiple visual directions.",
          },
          input: {
            fr: "Prompts, reformulations, références de monde, voyageur, monolithe, soleils.",
            en: "Prompts, reframings, world references, traveler, monolith, suns.",
          },
          output: {
            fr: "Prévisualisations, clips candidats et matière de démonstration.",
            en: "Previews, candidate clips, and demonstration material.",
          },
          why: {
            fr: "Le moyen le plus rapide pour tester un monde impossible et son langage de caméra.",
            en: "The fastest way to test an impossible world and its camera language.",
          },
          limits: {
            fr: "Les mondes rares restent instables ; la cohérence du mouvement varie.",
            en: "Rare worlds remain unstable; motion coherence varies.",
          },
          result: {
            fr: "Base directe du trailer Soulborn et des captures de process.",
            en: "Direct basis for the Soulborn trailer and process captures.",
          },
        },
      },
      {
        status: "available",
        tag:   { fr: "Variations", en: "Variations" },
        title: { fr: "Int Bulk Iterations", en: "Int Bulk Iterations" },
        copy: {
          fr: "Permet de générer rapidement des familles de variantes pour comparer des micro-différences utiles.",
          en: "Lets you generate families of variants quickly in order to compare useful micro-differences.",
        },
        fields: {
          role: {
            fr: "Multiplier les itérations sans repartir de zéro à chaque fois.",
            en: "Multiply iterations without restarting from scratch every time.",
          },
          input: {
            fr: "Prompt ou base existante, paramètres d'itération, direction visuelle ciblée.",
            en: "Prompt or existing base, iteration parameters, targeted visual direction.",
          },
          output: {
            fr: "Séries de variantes vidéo ou image à trier.",
            en: "Series of video or image variants to sort through.",
          },
          why: {
            fr: "Idéal pour montrer le process sans noyer la page dans trop de médias finaux.",
            en: "Ideal for showing process without drowning the page in too many final assets.",
          },
          limits: {
            fr: "Il faut ensuite éditorialiser et sélectionner, sinon tout se ressemble.",
            en: "It still needs editorial selection, otherwise everything starts to look alike.",
          },
          result: {
            fr: "Mini-exemples concrets pour Tarot et preuve d'itération contrôlée.",
            en: "Concrete mini examples for Tarot and proof of controlled iteration.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "Génération", en: "Generation" },
        title: { fr: "Int Bulk Generation", en: "Int Bulk Generation" },
        copy: {
          fr: "Section pensée pour montrer comment une même intention produit plusieurs images proches avec de petites variations lisibles.",
          en: "Designed to show how one intention can produce several close images with readable small variations.",
        },
        fields: {
          role: {
            fr: "Produire des lots d'images à partir d'une direction donnée.",
            en: "Produce image batches from a chosen direction.",
          },
          input: {
            fr: "Prompt, références éventuelles et logique de génération en série.",
            en: "Prompt, optional references, and a batch-generation logic.",
          },
          output: {
            fr: "Grilles de variantes à documenter par captures d'écran.",
            en: "Variant grids to document through screenshots.",
          },
          why: {
            fr: "Très parlant pour expliquer le passage d'une idée à une sélection.",
            en: "Very effective for explaining the path from one idea to a selection.",
          },
          limits: {
            fr: "Sans tri, la masse devient vite opaque pour un jury.",
            en: "Without selection, the volume quickly becomes opaque for a jury.",
          },
          result: {
            fr: "Placeholder déjà prévu pour les captures Soulborn et Tarot.",
            en: "Placeholder already planned for both Soulborn and Tarot captures.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "Pipeline", en: "Pipeline" },
        title: { fr: "NanoBanana / bulk-editing", en: "NanoBanana / bulk-editing" },
        copy: {
          fr: "Pipeline Python local pour extraire un JSON, le fusionner avec deux références, régénérer une image et nettoyer le watermark Gemini.",
          en: "Local Python pipeline to extract JSON, merge it with two references, regenerate an image, and remove the Gemini watermark.",
        },
        fields: {
          role: {
            fr: "Industrialiser un workflow d'édition visuelle basé sur références.",
            en: "Industrialize a reference-based visual editing workflow.",
          },
          input: {
            fr: "Image source, deux références JSON + image, job YAML, modèles Gemini.",
            en: "Source image, two JSON + image references, YAML job, Gemini models.",
          },
          output: {
            fr: "Artéfacts de run, images nettoyées, manifestes et événements.",
            en: "Run artifacts, cleaned images, manifests, and event logs.",
          },
          why: {
            fr: "Utile pour expliquer la profondeur technique derrière certaines séries d'images.",
            en: "Useful for explaining the technical depth behind some image series.",
          },
          limits: {
            fr: "Workflow plus technique, moins immédiat à lire sans contextualisation.",
            en: "A more technical workflow, less immediate to read without context.",
          },
          result: {
            fr: "Preuve de pipeline dans le dossier bulk-editing et ses runs datés.",
            en: "Pipeline evidence in the bulk-editing folder and its timestamped runs.",
          },
        },
      },
      {
        status: "available",
        tag:   { fr: "Montage", en: "Editing" },
        title: { fr: "CapCut", en: "CapCut" },
        copy: {
          fr: "Le montage transforme des sorties disparates en un trailer lisible, rythmé et montrable.",
          en: "Editing turns disparate outputs into a readable, paced, presentable trailer.",
        },
        fields: {
          role: {
            fr: "Assembler, couper, rythmer et hiérarchiser la matière visuelle.",
            en: "Assemble, trim, pace, and prioritize the visual material.",
          },
          input: {
            fr: "Clips retenus, musique Suno, logique de trailer, transitions.",
            en: "Selected clips, Suno music, trailer logic, transitions.",
          },
          output: {
            fr: "Version finale du trailer et capture écran du montage.",
            en: "Final trailer version and a screen recording of the edit.",
          },
          why: {
            fr: "C'est là que le projet devient narration plutôt qu'accumulation.",
            en: "This is where the project becomes narrative rather than accumulation.",
          },
          limits: {
            fr: "Le montage ne sauve pas une matière confuse ; il révèle les vrais choix.",
            en: "Editing does not save confused material; it reveals the real choices.",
          },
          result: {
            fr: "Trailer Soulborn V1 et capture CapCut déjà branchés sur la page.",
            en: "Soulborn trailer V1 and the CapCut capture are already wired into the page.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "App", en: "App" },
        title: { fr: "VS Code / Lapin Interactive", en: "VS Code / Lapin Interactive" },
        copy: {
          fr: "Support du développement de l'expérience tarot, avec plusieurs versions à comparer pour montrer l'évolution.",
          en: "Workspace for developing the tarot experience, with several versions to compare in order to show evolution.",
        },
        fields: {
          role: {
            fr: "Construire et faire évoluer l'expérience interactive du tarot.",
            en: "Build and evolve the interactive tarot experience.",
          },
          input: {
            fr: "Prompting, décisions UX, versions précédentes, logique de tirage.",
            en: "Prompting, UX decisions, previous versions, draw logic.",
          },
          output: {
            fr: "App interactive, captures VS Code et historique de progression.",
            en: "Interactive app, VS Code captures, and a visible progression history.",
          },
          why: {
            fr: "Montre que le projet n'est pas seulement une galerie d'images.",
            en: "Shows that the project is not only an image gallery.",
          },
          limits: {
            fr: "Il faut choisir quelques jalons lisibles, pas tout montrer.",
            en: "You need a few readable milestones, not everything.",
          },
          result: {
            fr: "Section placeholder prévue pour les versions précédentes de Lapin Interactive.",
            en: "Placeholder section planned for earlier Lapin Interactive versions.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "Recherche", en: "Research" },
        title: { fr: "Obsidian", en: "Obsidian" },
        copy: {
          fr: "Obsidian sert de mémoire de recherche, de journal d'idées et de preuve de profondeur documentaire.",
          en: "Obsidian acts as a research memory, idea journal, and proof of documentary depth.",
        },
        fields: {
          role: {
            fr: "Structurer notes, références, pistes et documentation de process.",
            en: "Structure notes, references, tracks, and process documentation.",
          },
          input: {
            fr: "Brainstorming, documentation technique, inspirations, liens entre projets.",
            en: "Brainstorming, technical documentation, inspirations, project links.",
          },
          output: {
            fr: "Notes datées, graphes, traces de préparation et de pipeline.",
            en: "Dated notes, graphs, preparation traces, and pipeline notes.",
          },
          why: {
            fr: "Le graphe montre immédiatement l'ampleur de la recherche.",
            en: "The graph immediately shows the scale of the research.",
          },
          limits: {
            fr: "Il faut ensuite scénariser le contenu pour qu'il soit lisible en rendu.",
            en: "The content still needs to be staged so it reads clearly in the final render.",
          },
          result: {
            fr: "Capture du graphe à ajouter et note NanoBanana déjà identifiée.",
            en: "Graph capture still to add, and the NanoBanana note is already identified.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "LLM", en: "LLM" },
        title: { fr: "ChatGPT", en: "ChatGPT" },
        copy: {
          fr: "Utilisé pour formuler des prompts, clarifier des intentions et aider à la rédaction de certaines parties du process.",
          en: "Used to formulate prompts, clarify intentions, and help write parts of the process.",
        },
        fields: {
          role: {
            fr: "Co-écrire, reformuler et élargir les pistes créatives.",
            en: "Co-write, reframe, and expand creative directions.",
          },
          input: {
            fr: "Intentions narratives, styles, contraintes, demandes de formulation.",
            en: "Narrative intentions, styles, constraints, and phrasing requests.",
          },
          output: {
            fr: "Prompts, variantes de formulation et matériaux de rédaction.",
            en: "Prompts, wording variants, and writing material.",
          },
          why: {
            fr: "Rapide pour ouvrir des options et préciser une voix.",
            en: "Fast for opening options and sharpening a voice.",
          },
          limits: {
            fr: "Nécessite une forte sélection pour rester fidèle au projet.",
            en: "Needs strong selection in order to stay faithful to the project.",
          },
          result: {
            fr: "Présent dans la recette et dans la liste d'outils mentionnés.",
            en: "Included in the recipe and in the list of mentioned tools.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "LLM", en: "LLM" },
        title: { fr: "Codex", en: "Codex" },
        copy: {
          fr: "Utilisé ici pour structurer la page de rendu, synthétiser les éléments du projet et préparer une présentation montrable.",
          en: "Used here to structure the render page, synthesize project material, and prepare a presentation that can actually be shown.",
        },
        fields: {
          role: {
            fr: "Lire les sources, structurer le récit et produire le site HTML/CSS/JS.",
            en: "Read source material, structure the story, and build the HTML/CSS/JS site.",
          },
          input: {
            fr: "Notes, chemins locaux, assets disponibles, décisions éditoriales utilisateur.",
            en: "Notes, local paths, available assets, and the user's editorial decisions.",
          },
          output: {
            fr: "Page bilingue, placeholders et organisation du rendu final.",
            en: "Bilingual page, placeholders, and final-render organization.",
          },
          why: {
            fr: "Permet de transformer un brainstorming diffus en structure concrète.",
            en: "Helps turn diffuse brainstorming into a concrete structure.",
          },
          limits: {
            fr: "Dépend de la qualité des assets réellement triés et déposés.",
            en: "Depends on the quality of the assets that are actually sorted and placed.",
          },
          result: {
            fr: "Le site de rendu actuel dans ce dossier.",
            en: "The current render site in this folder.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "LLM", en: "LLM" },
        title: { fr: "Claude Code", en: "Claude Code" },
        copy: {
          fr: "Mentionné comme autre assistant utilisé sur le même projet, en particulier côté Vault Obsidian.",
          en: "Mentioned as another assistant used on the same project, especially around the Obsidian vault.",
        },
        fields: {
          role: {
            fr: "Aider sur certaines branches du projet et la matière documentaire.",
            en: "Help on some branches of the project and on documentary material.",
          },
          input: {
            fr: "Contexte Vault Obsidian, réflexion, organisation documentaire.",
            en: "Obsidian vault context, reflection, and documentary organization.",
          },
          output: {
            fr: "Compléments de documentation et d'itération textuelle.",
            en: "Documentation complements and textual iteration.",
          },
          why: {
            fr: "Permet de montrer une écologie d'outils plutôt qu'un outil unique.",
            en: "Helps show an ecosystem of tools rather than a single tool.",
          },
          limits: {
            fr: "Il faut rester clair sur le rôle exact de chaque assistant.",
            en: "You still need to stay clear about the exact role of each assistant.",
          },
          result: {
            fr: "ì citer dans la documentation créative et la fiche outils.",
            en: "To be cited in the creative documentation and the tool sheet.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "Musique", en: "Music" },
        title: { fr: "Suno", en: "Suno" },
        copy: {
          fr: "Source de la musique du trailer, documentée par un prompt précis déjà conservé dans le dossier.",
          en: "Source of the trailer music, documented through a specific prompt already kept in the folder.",
        },
        fields: {
          role: {
            fr: "Donner un rythme et une cohérence sonore au montage final.",
            en: "Give rhythm and sonic coherence to the final edit.",
          },
          input: {
            fr: "Directions musicales, références d'intensité et d'atmosphère.",
            en: "Music directions, intensity references, and atmosphere cues.",
          },
          output: {
            fr: "Piste retenue pour les transitions du trailer Soulborn.",
            en: "Selected track for the Soulborn trailer transitions.",
          },
          why: {
            fr: "La musique fait tenir ensemble les mondes successifs.",
            en: "The music helps hold the successive worlds together.",
          },
          limits: {
            fr: "Elle doit rester au service du montage et non l'inverse.",
            en: "It must stay in service of the edit, not the other way around.",
          },
          result: {
            fr: "Prompt musical déjà intégré dans la section Soulborn.",
            en: "Music prompt already integrated into the Soulborn section.",
          },
        },
      },
    ],
  },

  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  //  PAGE 5 ─ ARCHIVE
  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  archive: {
    metaTitle: {
      fr: "Archives — Creative Lab OpenAI",
      en: "Archive — Creative Lab OpenAI",
    },
    metaDescription: {
      fr: "Matériaux bruts et documentation — prompts, captures, anciennes versions, graphe Obsidian et assets téléchargeables du projet.",
      en: "Raw materials and documentation - prompts, screenshots, legacy versions, Obsidian research graph, and downloadable project assets.",
    },
    eyebrow: { fr: "Archives & Recherche", en: "Archive & Research" },
    title: {
      fr: "Preuves de recherche, dossiers et emplacements encore à compléter",
      en: "Research evidence, folders, and slots still to complete",
    },
    lead: {
      fr: "Cette dernière partie regroupe le graphe Obsidian, l'archive Drive, le pipeline NanoBanana, et les placeholders déjà posés pour les captures pas encore rangées.",
      en: "This final section gathers the Obsidian graph, the Drive archive, the NanoBanana pipeline, and the placeholders already created for captures that are not sorted yet.",
    },

    items: [
      {
        status: "available",
        tag:   { fr: "Drive", en: "Drive" },
        title: {
          fr: "Archive Drive des projets et scripts",
          en: "Drive archive of projects and scripts",
        },
        copy: {
          fr: "Lien principal à montrer pour retrouver les zips de projets, scripts et autres sources à partager.",
          en: "Main link to show for finding the project ZIPs, scripts, and other shareable sources.",
        },
        note: {
          fr: "Contient les zips des projets et scripts mentionnés.",
          en: "Contains the ZIPs of the mentioned projects and scripts.",
        },
        href:   "https://drive.google.com/drive/folders/1yjO7AlCOGarD3IdYty0DhSxgMllCjm78?usp=sharing",
        button: { fr: "Ouvrir le Drive", en: "Open Drive" },
      },
      {
        status: "curated",
        tag:   { fr: "Pipeline", en: "Pipeline" },
        title: {
          fr: "Dossier NanoBanana / bulk-editing",
          en: "NanoBanana / bulk-editing folder",
        },
        copy: {
          fr: "Le pipeline local Python sert de preuve technique pour le workflow d'édition basé sur références et JSON fusionnés.",
          en: "The local Python pipeline works as technical evidence for the reference-based editing workflow using merged JSON.",
        },
        note: {
          fr: "C:\\Dev\\PRJET\\nanobanana-projet\\bulk-editing",
          en: "C:\\Dev\\PRJET\\nanobanana-projet\\bulk-editing",
        },
      },
      {
        status: "available",
        tag:   { fr: "Obsidian", en: "Obsidian" },
        title: {
          fr: "Capture du graphe Obsidian",
          en: "Obsidian graph capture",
        },
        copy: {
          fr: "ì insérer ici comme preuve de profondeur de recherche, de brainstorming et de documentation.",
          en: "To insert here as proof of research depth, brainstorming, and documentation.",
        },
        note: {
          fr: "Source note clé : C:\\Users\\darkl\\Documents\\important\\obsidian\\Brain\\brain\\2026-03-19.md",
          en: "Key source note: C:\\Users\\darkl\\Documents\\important\\obsidian\\Brain\\brain\\2026-03-19.md",
        },
        image: "assets/images/obsidian.webp",
      },
      {
        status: "available",
        tag:   { fr: "Workspace", en: "Workspace" },
        title: {
          fr: "Médias locaux déjà branchés",
          en: "Local media already wired in",
        },
        copy: {
          fr: "Le dossier de rendu contient déjà le trailer Soulborn, la capture CapCut, la capture Sora et deux vidéos d'itérations en lot.",
          en: "The render folder already contains the Soulborn trailer, the CapCut capture, the Sora capture, and two bulk-iteration videos.",
        },
        note: {
          fr: "Workspace actuel : openai-creative-lab",
          en: "Current workspace: openai-creative-lab",
        },
      },
    ],

    subtitle: { fr: "Matériel brut & documentation", en: "Raw materials & documentation" },

    sections: {
      prompts: {
        title: { fr: "Prompts", en: "Prompts" },
        intro: {
          fr: "Prompts clés et directions éditoriales utilisés sur les deux projets — les formulations brutes qui ont guidé la génération d'images, la production musicale et le cadrage narratif.",
          en: "Key prompts and editorial directions used across both projects — the raw formulations that guided image generation, music production, and narrative framing.",
        },
        items: [
          {
            tag: { fr: "Soulborn", en: "Soulborn" },
            title: { fr: "Prompt Musical Suno", en: "Suno Music Prompt" },
            copy: {
              fr: "Direction musicale sélectionnée pour le trailer Soulborn — rythme conçu pour les transitions rapides entre mondes.",
              en: "Music direction selected for the Soulborn trailer — rhythm designed for fast transitions between worlds.",
            },
          },
          {
            tag: { fr: "Soulborn", en: "Soulborn" },
            title: { fr: "Direction Éditoriale", en: "Editorial Direction" },
          },
          {
            tag: { fr: "Tarot", en: "Tarot" },
            title: { fr: "Prompts ChatGPT + Codex", en: "ChatGPT + Codex Prompts" },
            copy: {
              fr: "Bloc prévu pour la recette éditoriale : prompts de cartes, ajustements de style et formulations qui ont guidé les itérations du deck minimaliste.",
              en: "Planned block for the editorial recipe: card prompts, style adjustments, and formulations that guided the iterations of the minimalist deck.",
            },
            placeholder: { fr: "Placeholder · liste de prompts / recette workflow", en: "Placeholder · prompt list / workflow recipe" },
          },
          {
            tag: { fr: "Tarot", en: "Tarot" },
            title: { fr: "Arc Narratif", en: "Narrative Arc" },
          },
        ],
      },
      screenshots: {
        title: { fr: "Captures d'écran", en: "Screenshots" },
        intro: {
          fr: "Galerie d'itérations — résultats de génération en lot et captures d'expériences Sora montrant la progression des premiers tests aux sélections finales.",
          en: "Iteration gallery — bulk generation results and Sora experiment captures showing the progression from early tests to curated selections.",
        },
        items: [
          {
            tag: { fr: "Soulborn", en: "Soulborn" },
            title: { fr: "Génération en Lot Sora", en: "Sora Bulk Generation" },
            copy: {
              fr: "Captures montrant comment la même idée donne plusieurs images proches avec de petites variations utiles — recherche visuelle à travers ambiances, mondes et hypothèses de mise en scène.",
              en: "Captures showing how the same idea yields many close images with small useful variations — visual research across atmospheres, worlds, and staging hypotheses.",
            },
            alt: {
              fr: "Capture d'archive représentant les variantes Soulborn en génération par lot et les tests d'ambiance",
              en: "Archive capture representing Soulborn bulk generation variants and atmosphere tests",
            },
            placeholder: { fr: "Placeholder · captures de variantes d'images en lot", en: "Placeholder · screenshots of bulk image variants" },
          },
          {
            tag: { fr: "Tarot", en: "Tarot" },
            title: { fr: "Bulk Iterations v1", en: "Bulk Iterations v1" },
            copy: {
              fr: "Capture des premières bulk iterations — variation contrôlée autour des cartes, sans transformer la page en archive exhaustive.",
              en: "Screen capture of the first bulk iterations — controlled variation around the cards, without turning the page into an exhaustive archive.",
            },
            alt: {
              fr: "Capture d'archive représentant la première passe d'itérations en lot Tarot",
              en: "Archive capture representing the first Tarot bulk iteration pass",
            },
            placeholder: { fr: "Placeholder · captures bulk iteration v1", en: "Placeholder · bulk iteration captures v1" },
          },
          {
            tag: { fr: "Tarot", en: "Tarot" },
            title: { fr: "Bulk Iterations v2", en: "Bulk Iterations v2" },
            copy: {
              fr: "Deuxième passe d'itérations montrant l'évolution des choix : meilleurs cadrages, meilleure cohérence, meilleure lisibilité.",
              en: "Second iteration pass showing the evolution of choices: better framing, better coherence, and better readability.",
            },
            alt: {
              fr: "Capture d'archive représentant la deuxième passe d'itérations en lot Tarot",
              en: "Archive capture representing the second Tarot bulk iteration pass",
            },
            placeholder: { fr: "Placeholder · captures bulk iteration v2", en: "Placeholder · bulk iteration captures v2" },
          },
          {
            tag: { fr: "Tarot", en: "Tarot" },
            title: { fr: "Bulk Generation", en: "Bulk Generation" },
            copy: {
              fr: "Conçu pour montrer comment une même intention produit plusieurs images proches avec de petites variations lisibles — grilles de variantes à documenter.",
              en: "Designed to show how one intention can produce several close images with readable small variations — variant grids to document through screenshots.",
            },
            alt: {
              fr: "Capture d'archive représentant les grilles de génération en lot Tarot et les lots de cartes",
              en: "Archive capture representing Tarot bulk generation grids and card batches",
            },
            placeholder: { fr: "Placeholder · captures de grilles de génération en lot", en: "Placeholder · bulk generation grid captures" },
          },
        ],
      },
      legacy: {
        title: { fr: "Versions Précédentes", en: "Legacy Versions" },
        intro: {
          fr: "Évolution de l'application de tarot Lapin Interactive — des premières expérimentations vitrail au deck minimaliste final, montrant la progression de l'interface à travers les versions.",
          en: "Evolution of the Lapin Interactive tarot application — from early stained-glass experiments to the final minimalist deck, showing the interface progression across versions.",
        },
        items: [
          {
            tag: { fr: "v1", en: "v1" },
            title: { fr: "Tarot v1 — Vitrail", en: "Tarot v1 — Stained Glass" },
            copy: {
              fr: "Premières tentatives vidéo vitrail — conservées comme images dans le projet, mais pas comme direction finale pour les clips.",
              en: "Early stained-glass video attempts — kept as still images inside the project, but not as the final direction for the clips.",
            },
            alt: {
              fr: "Planche d'archive représentant la direction d'interface Tarot v1 vitrail",
              en: "Archive plate representing the Tarot v1 stained-glass interface direction",
            },
            placeholder: { fr: "Placeholder · interface tarot v1 vitrail", en: "Placeholder · tarot v1 stained-glass interface" },
          },
          {
            tag: { fr: "v2", en: "v2" },
            title: { fr: "Tarot v2 — Itération", en: "Tarot v2 — Iteration" },
            copy: {
              fr: "Version intermédiaire montrant la transition vers un langage visuel plus cohérent et des patterns d'interaction simplifiés.",
              en: "Intermediate version showing the shift toward a more coherent visual language and simplified interaction patterns.",
            },
            alt: {
              fr: "Planche d'archive représentant la direction intermédiaire de l'interface Tarot",
              en: "Archive plate representing the intermediate Tarot interface direction",
            },
            placeholder: { fr: "Placeholder · interface tarot v2 intermédiaire", en: "Placeholder · tarot v2 intermediate interface" },
          },
          {
            tag: { fr: "v3", en: "v3" },
            title: { fr: "Tarot v3 — Deck Minimaliste", en: "Tarot v3 — Minimalist Deck" },
            copy: {
              fr: "Version actuelle — le deck minimaliste choisi pour la lisibilité, la cohérence et l'efficacité dans l'expérience interactive finale.",
              en: "Current version — the minimalist deck chosen for readability, coherence, and efficiency in the final interactive experience.",
            },
            alt: {
              fr: "Planche d'archive représentant l'interface Tarot minimaliste actuelle",
              en: "Archive plate representing the current minimalist Tarot interface",
            },
            placeholder: { fr: "Placeholder · interface tarot v3 minimaliste", en: "Placeholder · tarot v3 minimalist interface" },
          },
        ],
      },
      research: {
        title: { fr: "Recherche", en: "Research" },
        intro: {
          fr: "Documentation du processus de recherche — le graphe de connaissances Obsidian capture la profondeur du brainstorming, les références croisées entre idées et la prise de décision itérative sur les deux projets.",
          en: "Documentation of the research process — the Obsidian knowledge graph captures the depth of brainstorming, cross-references between ideas, and iterative decision-making across both projects.",
        },
        alt: {
          fr: "Graphe de connaissances Obsidian montrant les connexions de recherche, les nœuds de brainstorming et les liens croisés entre Soulborn et Tarot",
          en: "Obsidian knowledge graph showing research connections, brainstorming nodes, and cross-references across Soulborn and Tarot projects",
        },
      },
      downloads: {
        title: { fr: "Téléchargements", en: "Downloads" },
        intro: {
          fr: "Assets téléchargeables et dépôts externes — ZIPs de projets, scripts et sources partageables.",
          en: "Downloadable assets and external repositories — project ZIPs, scripts, and shareable sources.",
        },
        github: {
          tag: { fr: "GitHub", en: "GitHub" },
          title: { fr: "Dépôts Sources", en: "Source Repositories" },
          copy: {
            fr: "Dépôts publics pour le projet Creative Lab et les outils associés.",
            en: "Public repositories for the Creative Lab project and related tools.",
          },
          tarotRepo: { fr: "Repo App Tarot ↗", en: "Tarot App Repo ↗" },
          creativeLabRepo: { fr: "Repo Creative Lab ↗", en: "Creative Lab Repo ↗" },
          button: { fr: "Profil GitHub", en: "GitHub Profile" },
        },
      },
    },
  },

  // Navigation cross-page
  navigation: {
    nextTarot: { fr: "Suivant : Tarot", en: "Next: Tarot" },
    nextTools: { fr: "Suivant : Outils", en: "Next: Tools" },
  },

  // ────── Footer ──────────────────────────────────────────────────────────────────────────────────────────
  footer: {
    credit: {
      fr: "Autorisation de partage de mon travail avec crédits @ex0niq",
      en: "Authorized to share my work with credits @ex0niq",
    },
    madeBy: {
      fr: "Réalisé par Léon Klein",
      en: "Made by Léon Klein",
    },
  },
};
