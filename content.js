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
      about:    { fr: "À propos", en: "About" },
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
        fr: "Deux explorations créatives, un journal de mes expérimentations.",
        en: "Two creative explorations, a journal of my experiments.",
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
          fr: "Voyageur, monolithe, mondes successifs, sept soleils, puis soleil unique. Le trailer reste le cœur du rendu.",
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
          fr: "Évolution de l'expérimentation vitrail puis pivot vers un deck vidéo minimaliste et une expérience plus lisible.",
          en: "Stained-glass experiments, then a pivot toward a minimalist video deck and a clearer interactive experience.",
        },
        thumbnail: "assets/images/tarot-thumb.svg",
      },
    },

    // ──── Intro (below fold ─ ~500 chars) ────────────────────────────────────
    intro: {
      fr: "Ce site retrace mes deux explorations créatives menées dans le cadre de l'OpenAI Creative Lab. De la génération de mondes impossibles avec Sora à la création d'une application de tarot interactive, chaque projet a été un terrain d'expérimentation. Ce que je documente ici n'est pas seulement le résultat final ─ c'est le parcours complet : les itérations, les pivots, les impasses et les décisions qui ont façonné chaque projet.",
      en: "This site documents my two creative explorations during the OpenAI Creative Lab. From generating impossible worlds with Sora to building an interactive tarot application, each project was a testing ground. What I document here is not just the outcome ─ it's the full journey: the iterations, the pivots, the dead ends, and the decisions that shaped each project.",
    },

    // ──── Contexte Lab ──────────────────────────────────────────────────────────
    labContext: {
      fr: "L'OpenAI Creative Lab est un programme de recherche créative en partenariat entre OpenAI et l'Université Paris 8, du 30 janvier au 27 mars 2026. Dirigé par Everardo Reyes et Rosa Cinelli (Paris 8) et Souki Mansoor (OpenAI, Artist Programs & Creative Community Lead).",
      en: "The OpenAI Creative Lab is a creative research program in partnership between OpenAI and Université Paris 8, from January 30 to March 27, 2026. Directed by Everardo Reyes and Rosa Cinelli (Paris 8) and Souki Mansoor (OpenAI, Artist Programs & Creative Community Lead).",
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
        stat:  { fr: "{count} fichiers archivés", en: "{count} files archived" },
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
      fr: "L'inspiration vient de Shadow Slave, volume 7 — Le Tombeau d'Ariel. Après une panne créative et des tests explorant les capacités de Sora (natures mortes, ambiances variées), le projet est revenu à cette scène de lecture : un voyageur solitaire traversant des mondes impossibles, accompagné d'un monolithe.",
      en: "The inspiration comes from Shadow Slave, Volume 7 — The Tomb of Ariel. After a creative block and tests exploring Sora's capabilities (still lifes, varied atmospheres), the project returned to this scene from the book: a lone traveler crossing impossible worlds, accompanied by a monolith.",
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
      { fr: "Éveil dans les blés",      en: "Awakening in the wheat fields" },
      { fr: "Jungle primitive",          en: "Primitive jungle" },
      { fr: "Traversée océanique",       en: "Ocean crossing" },
      { fr: "Ruines et portail",         en: "Ruins and portal" },
      { fr: "Épreuve du désert",         en: "Desert trial" },
      { fr: "Archipel suspendu",         en: "Suspended archipelago" },
      { fr: "Médina ancienne",           en: "Ancient medina" },
      { fr: "Monde gelé",               en: "Frozen world" },
      { fr: "Terre brûlée",             en: "Burned earth" },
      { fr: "Jardin d'Éden",            en: "Garden of Eden" },
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
        synopsis: {
          fr: "Un voyageur solitaire et son monolithe traversent plusieurs mondes : champs de blé, jungle, océan, ruines et portail, désert, archipel suspendu, médina, monde gelé, terre brûlée, jardin d'Éden, savane, vallée de fleurs — parfois sous sept soleils, parfois sous un seul — jusqu'au retour au monde ordinaire.",
          en: "A lone traveler and their monolith cross multiple worlds: wheat fields, jungle, ocean, ruins and portal, desert, suspended archipelago, medina, frozen world, burned earth, Garden of Eden, savannah, valley of flowers — sometimes under seven suns, sometimes under one — until the return to the ordinary world.",
        },
        points: [
          {
            fr: "Le projet est né d'une lecture — Shadow Slave — puis a traversé une phase de tests exploratoires avec Sora avant de trouver sa forme définitive.",
            en: "The project was born from reading Shadow Slave, then went through an exploratory testing phase with Sora before finding its final form.",
          },
          {
            fr: "Certaines scènes (monde d'eau, sept soleils) posaient un vrai défi visuel : ces combinaisons existent peu dans les références connues des modèles.",
            en: "Some scenes (water world, seven suns) were a real visual challenge: these combinations barely exist in the references known to the models.",
          },
          {
            fr: "Le tournant a été d'ajouter une présence animée — le voyageur, le monolithe — rendant chaque monde plus lisible et ancré dans un récit.",
            en: "The turning point was adding an animated presence — the traveler, the monolith — making each world more readable and grounded in a narrative.",
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
          fr: "Avant d'arriver au trailer final, des dizaines de générations ont été testées dans la Sora web app : variations d'ambiance, essais de cadrages, exploration de styles visuels. Le processus a fini par se recentrer sur le voyageur et le monolithe comme fil conducteur.",
          en: "Before reaching the final trailer, dozens of generations were tested in the Sora web app: atmosphere variations, framing experiments, visual style exploration. The process eventually refocused on the traveler and the monolith as a narrative thread.",
        },
        status: "available",
        media: {
          embed: "https://www.youtube.com/embed/8qwdrzuAX5A?si=B_bdb8q3cRLYIu0g",
          href:  "https://youtu.be/mSoq4g7SNvQ",
          note:  "YouTube ─ embed: génération (8qwdrzuAX5A) / lien: itérations (mSoq4g7SNvQ)",
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
          fr: "Le trailer rassemble plusieurs mondes en une traversée continue : chaque scène a été générée avec Sora, assemblée dans CapCut et accompagnée d'une bande-son composée via Suno. Le voyageur et le monolithe servent de fil conducteur visuel d'un monde à l'autre.",
          en: "The trailer brings together some of the worlds in a continuous crossing: each scene was generated with Sora, assembled in CapCut, and accompanied by a soundtrack composed via Suno. The traveler and the monolith serve as a visual thread from one world to the next.",
        },
        status: "available",
      },

      // 6. Conclusion & Leçons
      conclusion: {
        heading: { fr: "Conclusion", en: "Conclusion" },
        tag: { fr: "Leçon", en: "Lesson" },
        title: {
          fr: "Ce que Soulborn m'a appris",
          en: "What Soulborn taught me",
        },
        copy: {
          fr: "L'un des apprentissages clés a été l'intérêt de générer plusieurs vidéos à partir d'images similaires mais légèrement différentes. En variant les angles, les détails ou la lumière d'une même scène, on obtient des résultats plus riches et plus nuancés. La pipeline NanoBanana a permis d'automatiser cette logique : modifier les images itérées par lot pour y ajouter systématiquement le voyageur et le monolithe, puis générer les vidéos à partir de ces variantes.",
          en: "One of the key takeaways was the value of generating multiple videos from similar but slightly different images. By varying angles, details, or lighting of the same scene, the results become richer and more nuanced. The NanoBanana pipeline automated this approach: batch-editing iterated images to systematically add the traveler and the monolith, then generating videos from those variants.",
        },
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
      fr: "De l'expérimentation vitrail au deck minimaliste",
      en: "From stained-glass experiments to a minimalist deck",
    },
    subtitle: {
      fr: "Application IA interactive",
      en: "Interactive AI application",
    },
    lead: {
      fr: "Le projet Tarot est une application web interactive de tirage de cartes, disponible sur tarot.exoniq.io. L'utilisateur pose une question, choisit un deck (vitrail ou minimaliste) et un tirage (1 ou 3 cartes), puis découvre ses cartes à travers une animation de distribution et de retournement. Chaque lecture est interprétée par l'IA, accompagnée d'une image générée selon le style du deck choisi.",
      en: "The Tarot project is an interactive card-reading web application, available at tarot.exoniq.io. The user asks a question, chooses a deck (stained-glass or minimalist) and a spread (1 or 3 cards), then discovers their cards through a dealing and flipping animation. Each reading is interpreted by AI, accompanied by an image generated in the chosen deck's style.",
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
          fr: "Ce chapitre retrace l'évolution du projet Tarot comme processus créatif — plutôt qu'une simple galerie de cartes finies. Chaque section ci-dessous correspond à une étape clé de ce parcours.",
          en: "This chapter traces the evolution of the Tarot project as a creative process — rather than a simple gallery of finished cards. Each section below corresponds to a key stage of that journey.",
        },
        tag:    { fr: "Cadre du process", en: "Process frame" },
        title:  { fr: "Arc narratif retenu", en: "Chosen narrative arc" },
        status: "curated",
        points: [
          {
            fr: "Suivre l'évolution du projet plutôt qu'un simple catalogue de cartes.",
            en: "Follow the project's evolution rather than a simple gallery of cards.",
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
          fr: "La variation contrôlée était essentielle pour produire les 22 arcanes majeurs. Le pipeline de génération en lot combinait l'ingénierie de prompts avec une itération systématique — chaque passe affinant le cadrage, la cohérence et la lisibilité sur l'ensemble.",
          en: "Controlled variation was essential to producing the 22 major arcana. The bulk generation pipeline combined prompt engineering with systematic iteration — each pass refining framing, coherence, and readability across the entire set.",
        },
        media: [
          {
            tag: { fr: "Int Bulk Iterations v1", en: "Int Bulk Iterations v1" },
            title: {
              fr: "Capture vidéo des premières bulk iterations",
              en: "Screen capture of the first bulk iterations",
            },
            copy: {
              fr: "À utiliser pour montrer la logique de variation contrôlée autour des cartes, sans transformer la page en archive exhaustive.",
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

      // 3. Interactive App
      app: {
        heading: { fr: "Application Interactive", en: "Interactive App" },
        tag: { fr: "Application Interactive", en: "Interactive App" },
        copy: {
          fr: "L'application a traversé plusieurs versions avant d'arriver au résultat actuel. Le parcours utilisateur : une zone de texte pour poser sa question (avec trois suggestions pré-écrites), un écran de configuration pour choisir le deck (vitrail ou minimaliste) et le nombre de cartes (1 ou 3), une animation où le deck pulse puis distribue les cartes face cachée, un clic pour retourner chaque carte en vidéo (endroit ou envers), et enfin une page de résultats avec la lecture IA, une synthèse et une image générée selon les cartes tirées et le style du deck.",
          en: "The app went through several versions before reaching its current form. The user journey: a text box to ask a question (with three pre-written suggestions), a configuration screen to choose the deck (stained-glass or minimalist) and card count (1 or 3), an animation where the deck pulses then deals cards face down, a click to flip each card as a video (upright or reversed), and finally a results page with the AI reading, a synthesis, and an image generated based on the drawn cards and deck style.",
        },
      },

      // 4. Expérience finale
      finalExperience: {
        heading: { fr: "Expérience Finale", en: "Final Experience" },
        tag: { fr: "Expérience finale", en: "Final experience" },
        bodyCopy: {
          fr: "Des expérimentations vitrail à un deck minimaliste de 22 arcanes majeurs, l'application traverse plusieurs versions pour aboutir à l'expérience de tirage disponible sur tarot.exoniq.io. Deux decks (vitrail et minimaliste), des animations de distribution et retournement, et une lecture interprétée par l'IA.",
          en: "From stained-glass experiments to a minimalist 22 major arcana deck, the app went through several versions to reach the reading experience available at tarot.exoniq.io. Two decks (stained-glass and minimalist), dealing and flipping animations, and an AI-interpreted reading.",
        },
        title: {
          fr: "Démo vidéo de l'expérience de tirage",
          en: "Demo video of the reading experience",
        },
        copy: {
          fr: "Une démo vidéo de l'expérience complète est en cours de préparation.",
          en: "A demo video of the full experience is being prepared.",
        },
        status: "placeholder",
        placeholder: {
          fr: "Placeholder ─ démo vidéo tarot à venir",
          en: "Placeholder ─ tarot demo video coming soon",
        },
      },

      // 5. Conclusion & Leçons
      conclusion: {
        heading: { fr: "Conclusion", en: "Conclusion" },
        tag: { fr: "Leçon", en: "Lesson" },
        title: {
          fr: "Ce que le projet Tarot m'a appris",
          en: "What the Tarot project taught me",
        },
        copy: {
          fr: "Travailler à partir d'images de référence s'est avéré bien plus efficace pour maintenir une cohérence visuelle à grande échelle, puis itérer sur Sora. Le volume de travail a été considérable : entre 40 et 150 générations pour chacun des 22 arcanes majeurs. Certaines cartes ont posé des problèmes inattendus — Le Pendu en particulier, dont l'imagerie du « hanged man » déclenchait systématiquement les filtres de modération de contenu.",
          en: "Working from reference images proved far more effective for maintaining visual coherence at scale, then iterating on Sora. The volume of work was substantial: between 40 and 150 generations for each of the 22 major arcana. Some cards posed unexpected challenges — The Hanged Man in particular, whose imagery systematically triggered content moderation filters.",
        },
      },

      // 6. Placeholders restants
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
          tag:   { fr: "Vitraux", en: "Stained glass" },
          title: {
            fr: "Vidéos vitrail ratées — La Force et autres",
            en: "Failed stained-glass videos — Strength and others",
          },
          copy: {
            fr: "Certaines tentatives de vidéo en style vitrail ont été conservées comme archives. La Force, notamment, illustre les limites du style orné en animation : riche visuellement mais trop lourd pour un deck cohérent.",
            en: "Some stained-glass style video attempts were kept as archives. Strength, in particular, illustrates the limits of the ornate style in animation: visually rich but too heavy for a coherent deck.",
          },
          art: {
            fr: "Placeholder ─ vidéos vitrail ratées",
            en: "Placeholder ─ failed stained-glass videos",
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
          fr: "Application sur mesure construite pour pallier l'absence d'accès à l'interface web de Sora 2. Elle centralise la rédaction de prompts, la génération vidéo, le suivi des itérations et l'organisation des résultats en un seul espace.",
          en: "Custom-built application created to work around the lack of access to Sora 2's web interface. It centralizes prompt writing, video generation, iteration tracking, and result organization in one place.",
        },
        fields: {
          role: {
            fr: "Générer des vidéos à partir de prompts textuels, organiser les générations par sessions et tags, et piloter le processus créatif grâce à un journal et une roadmap intégrés.",
            en: "Generate videos from text prompts, organize generations by sessions and tags, and steer the creative process with a built-in journal and roadmap.",
          },
          input: {
            fr: "Prompts textuels, prévisualisations d'images via l'API ImageGen d'OpenAI, notes de journal par session et tags personnalisés.",
            en: "Text prompts, image previews via OpenAI's ImageGen API, per-session journal notes, and custom tags.",
          },
          output: {
            fr: "Clips vidéo générés avec cartes de métadonnées JSON, galeries filtrables par session, jour ou tag, et trois modes de réutilisation : variation, remix et continuation frame par frame.",
            en: "Generated video clips with JSON metadata cards, galleries filterable by session, day, or tag, and three reuse modes: variation, remix, and frame-by-frame continuation.",
          },
          why: {
            fr: "La boucle variation / remix / continuation permet d'itérer très vite sans repartir de zéro. La continuation enchaîne les vidéos en prenant la dernière frame comme point de départ de la suivante.",
            en: "The variation / remix / continuation loop enables rapid iteration without starting from scratch. Continuation chains videos by using the last frame as the starting point of the next one.",
          },
          limits: {
            fr: "Le mode structuré (templates de prompts pré-rédigés) s'est révélé peu flexible en pratique. La prédiction de résultat reste approximative.",
            en: "Structured mode (pre-written prompt templates) proved inflexible in practice. Result prediction remains approximate.",
          },
          result: {
            fr: "Toutes les vidéos sont stockées localement avec leurs métadonnées JSON, ce qui permet de retracer chaque étape du processus créatif et de filtrer les résultats par notation (à garder, bon, portfolio).",
            en: "All videos are stored locally with their JSON metadata, enabling every step of the creative process to be traced and results to be filtered by rating (keep, good, portfolio).",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "Génération", en: "Generation" },
        title: { fr: "Int Bulk Generation", en: "Int Bulk Generation" },
        copy: {
          fr: "Outil de génération en lot qui produit des séries d'images à partir d'un même prompt. Il rend visible le passage d'une intention unique à un éventail de variantes proches, chacune avec de petites différences exploitables pour affiner la direction artistique.",
          en: "Batch generation tool that produces image series from a single prompt. It makes visible the path from one intention to a range of close variants, each with small exploitable differences used to refine the artistic direction.",
        },
        fields: {
          role: {
            fr: "Produire des lots d'images à partir d'une direction donnée, puis les comparer côte à côte pour identifier les micro-variations les plus pertinentes avant de passer à l'étape suivante.",
            en: "Produce image batches from a chosen direction, then compare them side by side to identify the most relevant micro-variations before moving to the next step.",
          },
          input: {
            fr: "Prompt structuré, références visuelles optionnelles, paramètres de génération en série et direction artistique ciblée pour chaque lot.",
            en: "Structured prompt, optional visual references, batch generation parameters, and a targeted artistic direction for each lot.",
          },
          output: {
            fr: "Grilles de variantes documentées par captures d'écran, organisées en séries comparables pour montrer l'étendue des résultats à partir d'une seule idée.",
            en: "Variant grids documented through screenshots, organized into comparable series to show the range of results from a single idea.",
          },
          why: {
            fr: "Très parlant pour expliquer le passage d'une idée à une sélection. La grille visuelle permet au jury de comprendre immédiatement la logique de choix derrière chaque direction retenue.",
            en: "Very effective for explaining the path from one idea to a selection. The visual grid lets the jury immediately understand the selection logic behind each chosen direction.",
          },
          limits: {
            fr: "Sans tri éditorial, la masse de variantes devient vite opaque. Il faut un travail de curation en aval pour que la quantité reste lisible et démonstrative.",
            en: "Without editorial selection, the sheer volume of variants quickly becomes opaque. Downstream curation work is needed to keep the quantity readable and demonstrative.",
          },
          result: {
            fr: "Séries de variantes utilisées comme preuve de recherche visuelle, avec des captures qui documentent chaque passe de génération et les choix retenus.",
            en: "Variant series used as visual research evidence, with captures documenting each generation pass and the choices that were kept.",
          },
        },
        media: {
          embed: "https://www.youtube.com/embed/JEqVGvyrjsI?si=LwN3oP0E4cvZCkM9",
          note:  "Int Bulk Iterations v1",
        },
      },
      {
        status: "available",
        tag:   { fr: "Variations", en: "Variations" },
        title: { fr: "Int Bulk Iterations", en: "Int Bulk Iterations" },
        copy: {
          fr: "Outil d'itération contrôlée qui reprend une base existante pour en dériver des familles de variantes. Chaque passe affine le cadrage, la cohérence et la lisibilité sans repartir de zéro, ce qui accélère la convergence vers un résultat exploitable.",
          en: "Controlled iteration tool that takes an existing base and derives families of variants from it. Each pass refines framing, coherence, and readability without starting from scratch, accelerating convergence toward a usable result.",
        },
        fields: {
          role: {
            fr: "Multiplier les itérations à partir d'une génération précédente, en ajustant progressivement les paramètres pour explorer des directions proches sans perdre la cohérence de départ.",
            en: "Multiply iterations from a previous generation, progressively adjusting parameters to explore nearby directions without losing the initial coherence.",
          },
          input: {
            fr: "Prompt ou base existante issue d'une génération antérieure, paramètres d'itération ajustés et direction visuelle ciblée pour chaque nouvelle passe.",
            en: "Prompt or existing base from a prior generation, adjusted iteration parameters, and a targeted visual direction for each new pass.",
          },
          output: {
            fr: "Séries de variantes vidéo ou image classées par passe, permettant de visualiser l'évolution des choix d'une version à l'autre plutôt que leur simple volume.",
            en: "Series of video or image variants sorted by pass, making it possible to visualize the evolution of choices from one version to the next rather than just their volume.",
          },
          why: {
            fr: "Idéal pour montrer le processus d'affinement sans noyer la page dans trop de médias. La comparaison entre passes rend la progression lisible et démonstrative.",
            en: "Ideal for showing the refinement process without drowning the page in too many assets. Comparing passes makes the progression readable and demonstrative.",
          },
          limits: {
            fr: "Il faut un travail éditorial entre chaque passe pour sélectionner les bonnes variantes, sinon les résultats finissent par se ressembler et la progression devient invisible.",
            en: "Editorial work is needed between each pass to select the right variants, otherwise results end up looking alike and the progression becomes invisible.",
          },
          result: {
            fr: "Deux passes documentées (v1 et v2) qui montrent concrètement l'évolution des choix : meilleurs cadrages, meilleure cohérence, meilleure lisibilité d'une itération à l'autre.",
            en: "Two documented passes (v1 and v2) that concretely show the evolution of choices: better framing, better coherence, and better readability from one iteration to the next.",
          },
        },
        media: {
          embed: "https://www.youtube.com/embed/J8OFkF3Ft-g?si=NMat_FWL-uT77lIl",
          note:  "Int Bulk Iterations v2",
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
          fr: "Logiciel de montage vidéo gratuit qui a permis d'assembler le trailer Soulborn. Interface intuitive et suffisamment puissante pour du montage créatif, même si la version gratuite atteint vite ses limites sur les exports et effets avancés.",
          en: "Free video editing software used to assemble the Soulborn trailer. Intuitive interface and powerful enough for creative editing, though the free tier quickly hits its limits on exports and advanced effects.",
        },
        fields: {
          role: {
            fr: "Monter les clips Sora retenus en un trailer cohérent avec rythme, transitions et musique Suno synchronisée.",
            en: "Edit the selected Sora clips into a coherent trailer with pacing, transitions, and synchronized Suno music.",
          },
          input: {
            fr: "Clips vidéo générés par Sora, musique Suno, logique narrative du trailer.",
            en: "Video clips generated by Sora, Suno music, trailer narrative logic.",
          },
          output: {
            fr: "Trailer Soulborn V1 et capture écran du processus de montage.",
            en: "Soulborn trailer V1 and a screen recording of the editing process.",
          },
          why: {
            fr: "Bon compromis gratuit pour du montage créatif rapide. C'est l'étape où les clips bruts deviennent une narration visuelle.",
            en: "Good free option for quick creative editing. This is the step where raw clips become a visual narrative.",
          },
          limits: {
            fr: "CapCut Premium est vite nécessaire pour débloquer certains exports et effets. La version gratuite reste suffisante pour un premier trailer.",
            en: "CapCut Premium quickly becomes necessary to unlock certain exports and effects. The free version remains sufficient for a first trailer.",
          },
        },
      },
      {
        status: "available",
        tag:   { fr: "IDE", en: "IDE" },
        title: { fr: "VS Code", en: "VS Code" },
        copy: {
          fr: "IDE principal utilisé pour développer toutes les applications du projet : OraApp, Int Bulk Generation, Int Bulk Iterations, NanoBanana, l'expérience tarot interactive et ce site de rendu.",
          en: "Main IDE used to develop every application in the project: OraApp, Int Bulk Generation, Int Bulk Iterations, NanoBanana, the interactive tarot experience, and this render site.",
        },
        fields: {
          role: {
            fr: "Environnement de développement central pour l'écriture, le debug et le versioning de tout le code produit.",
            en: "Central development environment for writing, debugging, and versioning all the code produced.",
          },
          input: {
            fr: "Code source, extensions, terminaux intégrés, assistants IA (Claude Code, Codex).",
            en: "Source code, extensions, integrated terminals, AI assistants (Claude Code, Codex).",
          },
          output: {
            fr: "Applications fonctionnelles, pipelines, sites web et historique Git de chaque projet.",
            en: "Working applications, pipelines, websites, and Git history for each project.",
          },
          why: {
            fr: "Unifie le workflow : chaque outil custom a été codé, testé et versionné au même endroit.",
            en: "Unifies the workflow: every custom tool was coded, tested, and versioned in one place.",
          },
        },
      },
      {
        status: "curated",
        tag:   { fr: "Recherche", en: "Research" },
        title: { fr: "Obsidian", en: "Obsidian" },
        copy: {
          fr: "Obsidian sert de mémoire de recherche, de journal d'idées et de preuve de profondeur documentaire. Sur la capture du graphe, la zone en rouge correspond à l'ensemble des idées et pistes de brainstorming — chaque point est une idée que je voulais tenter avec Sora, et je n'ai pas eu le temps de tout explorer.",
          en: "Obsidian acts as a research memory, idea journal, and proof of documentary depth. On the graph capture, the red zone represents the entire brainstorming area — each node is an idea I wanted to try with Sora, and I didn't have time to explore them all.",
        },
        fields: {
          role: {
            fr: "Structurer notes, références, pistes créatives et documentation technique dans un vault interconnecté.",
            en: "Structure notes, references, creative leads, and technical documentation in an interconnected vault.",
          },
          input: {
            fr: "Brainstorming, documentation technique, inspirations, liens entre projets et notes datées par session.",
            en: "Brainstorming, technical documentation, inspirations, project links, and dated session notes.",
          },
          output: {
            fr: "Notes datées, graphe de connexions entre idées, traces de préparation et documentation pipeline (dont NanoBanana).",
            en: "Dated notes, connection graph between ideas, preparation traces, and pipeline documentation (including NanoBanana).",
          },
          why: {
            fr: "Le graphe montre immédiatement l'ampleur de la recherche et le nombre de pistes explorées ou laissées de côté.",
            en: "The graph immediately shows the scale of the research and the number of leads explored or left aside.",
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
        },
      },
      {
        status: "available",
        tag:   { fr: "LLM", en: "LLM" },
        title: { fr: "Codex", en: "Codex" },
        copy: {
          fr: "Assistant de code agentique d'OpenAI. Les modèles Codex 5.3, et GPT-5.4 sont sortis au fil du Lab et ont permis de construire la majorité des pipelines et applications du projet.",
          en: "OpenAI's agentic coding assistant. The Codex 5.3, and GPT-5.4 models were released throughout the Lab and enabled building most of the project's pipelines and applications.",
        },
        fields: {
          role: {
            fr: "Générer, itérer et debugger le code des pipelines, des outils internes et de ce site de rendu.",
            en: "Generate, iterate on, and debug the code for pipelines, internal tools, and this render site.",
          },
          input: {
            fr: "Notes, chemins locaux, assets disponibles, décisions éditoriales et accès aux modèles successifs (o3, o4-mini, GPT-4.1).",
            en: "Notes, local paths, available assets, editorial decisions, and access to successive models (o3, o4-mini, GPT-4.1).",
          },
          output: {
            fr: "Code fonctionnel pour les pipelines, le site bilingue et l'organisation du rendu final.",
            en: "Working code for pipelines, the bilingual site, and the final render organization.",
          },
          why: {
            fr: "L'accès anticipé aux nouveaux modèles via le Lab a permis d'itérer très vite sur des tâches de code complexes.",
            en: "Early access to new models through the Lab enabled very fast iteration on complex coding tasks.",
          },
        },
      },
      {
        status: "available",
        tag:   { fr: "LLM", en: "LLM" },
        title: { fr: "Claude Code", en: "Claude Code" },
        copy: {
          fr: "Assistant de code agentique d'Anthropic, utilisé en complément sur le même projet — en particulier côté Vault Obsidian et sur ce site de rendu.",
          en: "Anthropic's agentic coding assistant, used alongside the other tools on this project — especially on the Obsidian vault side and on this render site.",
        },
        fields: {
          role: {
            fr: "Assister sur certaines branches du projet, la matière documentaire et le développement du site.",
            en: "Assist on specific branches of the project, documentary material, and site development.",
          },
          input: {
            fr: "Contexte Vault Obsidian, réflexion, organisation documentaire et code source du site.",
            en: "Obsidian vault context, reflection, documentary organization, and site source code.",
          },
          output: {
            fr: "Compléments de documentation, itération textuelle et code du site de rendu.",
            en: "Documentation complements, textual iteration, and render site code.",
          },
          why: {
            fr: "Permet de montrer une écologie d'outils et d'assistants plutôt qu'un outil unique.",
            en: "Shows an ecosystem of tools and assistants rather than reliance on a single one.",
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
      fr: "Prompts, graphe de recherche Obsidian, dépôts GitHub et fichiers téléchargeables liés aux projets Soulborn et Tarot.",
      en: "Prompts, Obsidian research graph, GitHub repositories, and downloadable files related to the Soulborn and Tarot projects.",
    },
    eyebrow: { fr: "Archives", en: "Archive" },
    title: {
      fr: "Archives & Documentation",
      en: "Archives & Documentation",
    },
    lead: {
      fr: "Cette section rassemble les prompts, le graphe de recherche Obsidian, les dépôts GitHub et les fichiers téléchargeables liés aux deux projets.",
      en: "This section gathers prompts, the Obsidian research graph, GitHub repositories, and downloadable files related to both projects.",
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
        status: "available",
        tag:   { fr: "Obsidian", en: "Obsidian" },
        title: {
          fr: "Graphe de recherche Obsidian",
          en: "Obsidian research graph",
        },
        copy: {
          fr: "Le graphe Obsidian montre les connexions entre idées, les phases de brainstorming et la documentation croisée entre Soulborn et Tarot tout au long du projet.",
          en: "The Obsidian graph shows the connections between ideas, brainstorming phases, and cross-documentation between Soulborn and Tarot throughout the project.",
        },
        image: "assets/images/obsidian.webp",
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
        aiNote: {
          fr: "La majorité des prompts ont été écrits avec l'aide de Claude, Gemini et ChatGPT. Tous les prompts utilisés pour les images et les vidéos sont archivés dans les fichiers et dossiers du Drive du projet. Pour explorer les images et les vidéos générées, naviguez dans les sections Soulborn ou Tarot.",
          en: "Most prompts were written with the help of Claude, Gemini, and ChatGPT. All prompts used for images and videos are archived in the files and folders of the project's Drive. To browse the generated images and videos, navigate to the Soulborn or Tarot sections.",
        },
        driveButton: { fr: "Ouvrir le Drive ↗", en: "Open Drive ↗" },
        items: [
          {
            tag: { fr: "Soulborn", en: "Soulborn" },
            title: { fr: "Prompt Musical Suno", en: "Suno Music Prompt" },
            copy: {
              fr: "Direction musicale sélectionnée pour le trailer Soulborn — rythme conçu pour les transitions rapides entre mondes.",
              en: "Music direction selected for the Soulborn trailer — rhythm designed for fast transitions between worlds.",
            },
            href: "https://drive.google.com/drive/folders/1E_YAy8NFj75yHSAtr7sOr7QqDgYw4XCW?usp=sharing",
            button: { fr: "Télécharger ↗", en: "Download ↗" },
          },
          {
            tag: { fr: "Soulborn", en: "Soulborn" },
            title: { fr: "Direction Éditoriale", en: "Editorial Direction" },
          },
          {
            tag: { fr: "Tarot", en: "Tarot" },
            title: { fr: "Prompts ChatGPT + Codex", en: "ChatGPT + Codex Prompts" },
            copy: {
              fr: "Les prompts de génération des cartes, ajustements de style et formulations sont archivés au format JSON dans le Drive du projet.",
              en: "Card generation prompts, style adjustments, and formulations are archived as JSON files in the project's Drive.",
            },
          },
          {
            tag: { fr: "Tarot", en: "Tarot" },
            title: { fr: "Arc Narratif", en: "Narrative Arc" },
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
      editorial: {
        title: { fr: "Direction éditoriale & Récit", en: "Editorial & Narrative" },
        intro: {
          fr: "Notes éditoriales et arcs narratifs qui ont structuré les deux projets — les angles retenus, les pivots et les choix de cadrage.",
          en: "Editorial notes and narrative arcs that shaped both projects — chosen angles, pivots, and framing decisions.",
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

  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  //  PAGE 6 ─ ABOUT
  // ─"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"──"─
  about: {
    metaTitle: {
      fr: "À propos — Creative Lab OpenAI",
      en: "About — Creative Lab OpenAI",
    },
    metaDescription: {
      fr: "Présentation du projet, contexte de l'OpenAI Creative Lab, timeline et crédits.",
      en: "Project presentation, OpenAI Creative Lab context, timeline, and credits.",
    },
    eyebrow: { fr: "À propos", en: "About" },
    title: {
      fr: "À propos de ce projet",
      en: "About this project",
    },

    presentation: {
      heading: { fr: "Qui suis-je", en: "Who am I" },
      copy: {
        fr: "Je m'appelle Léon Klein (@ex0niq). Ce site documente mon travail réalisé dans le cadre de l'OpenAI Creative Lab, en tant qu'étudiant à l'Université Paris 8.",
        en: "I'm Léon Klein (@ex0niq). This site documents my work during the OpenAI Creative Lab as a student at Université Paris 8.",
      },
      portfolioLabel: { fr: "Portfolio", en: "Portfolio" },
    },

    labContext: {
      heading: { fr: "Le Creative Lab", en: "The Creative Lab" },
      copy: {
        fr: "L'OpenAI Creative Lab est un programme de recherche créative en partenariat entre OpenAI et l'Université Paris 8, du 30 janvier au 27 mars 2026. Dirigé par Everardo Reyes et Rosa Cinelli (Paris 8) et Souki Mansoor (OpenAI, Artist Programs & Creative Community Lead).",
        en: "The OpenAI Creative Lab is a creative research program in partnership between OpenAI and Université Paris 8, from January 30 to March 27, 2026. Directed by Everardo Reyes and Rosa Cinelli (Paris 8) and Souki Mansoor (OpenAI, Artist Programs & Creative Community Lead).",
      },
    },

    timeline: {
      heading: { fr: "Timeline", en: "Timeline" },
      start: { date: "30/01/2026", label: { fr: "Début du programme", en: "Program start" } },
      end:   { date: "27/03/2026", label: { fr: "Fin du programme", en: "Program end" } },
    },

    scope: {
      heading: { fr: "Soumis vs documenté", en: "Submitted vs documented" },
      copy: {
        fr: "Ce site va au-delà du rendu soumis au Creative Lab. Il documente l'intégralité du parcours créatif : les itérations, les impasses, les outils et les décisions — pas seulement le résultat final.",
        en: "This site goes beyond what was submitted to the Creative Lab. It documents the entire creative journey: the iterations, the dead ends, the tools, and the decisions — not just the final result.",
      },
    },

    credits: {
      heading: { fr: "Crédits & Remerciements", en: "Credits & Acknowledgments" },
      copy: {
        fr: "Remerciements à Everardo Reyes, Rosa Cinelli et Souki Mansoor pour l'encadrement du programme, ainsi qu'à OpenAI pour l'accès aux outils.",
        en: "Thanks to Everardo Reyes, Rosa Cinelli, and Souki Mansoor for directing the program, and to OpenAI for providing access to the tools.",
      },
    },
  },

  // Navigation cross-page
  navigation: {
    nextTarot: { fr: "Suivant : Tarot", en: "Next: Tarot" },
    nextTools:   { fr: "Suivant : Outils",   en: "Next: Tools" },
    nextArchive: { fr: "Suivant : Archives", en: "Next: Archive" },
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
