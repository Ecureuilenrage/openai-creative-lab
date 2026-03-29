 Rapport de résolution de bug — YouTube Erreur 153 + Layout Dashboard
                                                                                                         
  Bug 1 : Erreur 153 du lecteur YouTube embarqué

  Symptôme : Toutes les vidéos YouTube intégrées au site affichent "Erreur de configuration du lecteur   
  vidéo — Erreur 153".

  Cause racine : Le navigateur n'envoyait pas toujours l'en-tête Referer lors des requêtes cross-origin  
  vers YouTube. L'API YouTube Embedded Player exige une identité client exploitable pour identifier le    
  domaine appelant. Si la page est ouverte directement en file://, la balise <meta name="referrer"> ne   
  suffit pas : il n'y a pas de véritable origine HTTP à transmettre, donc YouTube peut continuer à       
  renvoyer l'erreur 153.

  Corrections appliquées :

  ┌───────────────┬───────────────────────────────────────────────────────────────────────────────────┐  
  │    Fichier    │                                   Modification                                    │  
  ├───────────────┼───────────────────────────────────────────────────────────────────────────────────┤  
  │ index.html    │ Ajout <meta name="referrer" content="strict-origin-when-cross-origin"> dans       │  
  │               │ <head>                                                                            │  
  ├───────────────┼───────────────────────────────────────────────────────────────────────────────────┤  
  │ soulborn.html │ Idem + referrerpolicy="strict-origin-when-cross-origin" sur les iframes +         │  
  │               │ web-share dans allow                                                              │  
  ├───────────────┼───────────────────────────────────────────────────────────────────────────────────┤  
  │ tarot.html    │ Ajout meta referrer                                                               │  
  ├───────────────┼───────────────────────────────────────────────────────────────────────────────────┤  
  │ tools.html    │ Ajout meta referrer                                                               │  
  ├───────────────┼───────────────────────────────────────────────────────────────────────────────────┤  
  │ archive.html  │ Ajout meta referrer                                                               │  
  ├───────────────┼───────────────────────────────────────────────────────────────────────────────────┤  
  │ app.js        │ Ajout referrerpolicy="strict-origin-when-cross-origin" sur les iframes générées   │  
  │               │ dynamiquement par renderMediaGrid()                                               │  
  ├───────────────┼───────────────────────────────────────────────────────────────────────────────────┤  
  │ content.js    │ URLs embed mises à jour avec paramètre ?si=                                       │  
  └───────────────┴───────────────────────────────────────────────────────────────────────────────────┘  

  Correction clé — La balise <meta> au niveau <head> améliore le cas HTTP(S), et le referrerpolicy sur   
  chaque iframe est une sécurité supplémentaire. Mais pour supprimer durablement l'erreur 153, il faut   
  aussi servir le site via un serveur local ou distant, pas ouvrir les pages directement depuis le disque.

  ---
  Bug 2 : Vidéo trop grande dans le dashboard Soulborn

  Symptôme : En arrivant sur soulborn.html, la vidéo du trailer occupe 100% de la largeur, repoussant les
   6 boutons de navigation sous la fold.

  Corrections appliquées :

  ┌─────────────────┬─────────────────────────────────────────────────────────────────────────────────┐  
  │     Fichier     │                                  Modification                                   │  
  ├─────────────────┼─────────────────────────────────────────────────────────────────────────────────┤  
  │ soulborn.html   │ Nouveau conteneur .dashboard-hero englobant vidéo + nav. Boutons passent de     │  
  │                 │ grid grid-3 à dashboard-nav--col (colonne)                                      │  
  ├─────────────────┼─────────────────────────────────────────────────────────────────────────────────┤  
  │ css/project.css │ .dashboard-hero : grille 2fr 1fr (vidéo 2/3, boutons 1/3). .dashboard-nav--col  │  
  │                 │ : flexbox colonne. Responsive : 1 colonne sous 767px                            │  
  └─────────────────┴─────────────────────────────────────────────────────────────────────────────────┘  

  Avant :
  [Vidéo ──────────────────── 100% ──────────────────────]
  [Tags]
  [Bouton] [Bouton] [Bouton]
  [Bouton] [Bouton] [Bouton]

  Après :
  [Vidéo ──────── 2/3 ────────] [Bouton ]
                                 [Bouton ]
                                 [Bouton ]
                                 [Bouton ]
                                 [Bouton ]
                                 [Bouton ]
  [Tags]

  ---
  Mise à jour des IDs vidéo

  ┌───────────────────────────────┬─────────────┬─────────────────────────────────┐
  │          Emplacement          │  Ancien ID  │           Nouveau ID            │
  ├───────────────────────────────┼─────────────┼─────────────────────────────────┤
  │ Dashboard trailer             │ wB7MNWWW6IA │ wB7MNWWW6IA?si=vDXkGldH7O6xbrFR │
  ├───────────────────────────────┼─────────────┼─────────────────────────────────┤
  │ Section Iterations (Sora App) │ mSoq4g7SNvQ │ 8qwdrzuAX5A?si=B_bdb8q3cRLYIu0g │
  └───────────────────────────────┴─────────────┴─────────────────────────────────┘

  ---
  Vérification post-fix

  - Vider le cache navigateur
  - Vérifier que l'en-tête Referrer-Policy est bien envoyé dans la réponse (onglet Network des DevTools) 
  - Vérifier que la page est ouverte en http://localhost:8000 (ou sur un vrai domaine), pas en file://
  - Lancer au besoin .\serve-local.ps1 puis ouvrir http://localhost:8000/soulborn.html
  - Si hébergé sur un serveur (Nginx/Apache), ajouter aussi l'en-tête côté serveur pour une couverture   
  maximale
