/*
 * KURA landing content, split by layout variant.
 *
 * The copy is identical across all variants (source: LANDING.desktop);
 * only data structure, icons/kanji/numbers and layout elements differ
 * (grouped footer in tablet, indexed menu in mobile, etc.). If you change
 * a desktop string, mirror it in the tablet and mobile variants too.
 */

export const LANDING = {
  desktop: {
    nav: [
      { id: 'scopri', label: 'Discover sake' },
      { id: 'produzione', label: 'Production' },
      { id: 'giappone', label: 'Japan' },
      { id: 'progetto', label: 'The project' },
    ],

    hero: {
      badge: 'A JOURNEY INTO JAPANESE CULTURE',
      title: ['Do you really know Japanese sake?'],
      lead: [
        'Discover a world of traditions, artisans, regions and knowledge passed down through time. A journey through one of the most fascinating expressions of Japanese culture.',
      ],
      ctaPrimary: 'Start exploring →',
      ctaSecondary: 'Its story',
      image: '/images/cantina-kura.jpg',
      imageAlt: 'Traditional old brewery with a cedar sugidama sphere',
      captionLabel: 'FIG. 01 — KURA',
      captionNote: 'Traditional old brewery with a cedar sugidama sphere',
    },

    scopri: {
      eyebrow: 'DISCOVERING SAKE',
      title: ['Far more than a drink. A story spanning a thousand years.'],
      lead: [
        'Sake, known in Japan as ',
        { em: 'nihonshu' },
        ', is a fermented alcoholic beverage made from rice and water, produced through the action of kōji and yeasts.',
      ],
      leadAfterBreak: [
        'Its history is deeply intertwined with that of Japan: from religious traditions to craft knowledge handed down through the generations.',
      ],
      image: '/images/hero-utsuwa.jpg',
      imageAlt: 'Artisanal ceramic tokkuri and ochoko on natural wood',
      captionLabel: 'FIG. 02 — 器 UTSUWA',
      captionNote: 'A tokkuri carafe and ochoko cups on aged wood',
      facts: [
        {
          title: 'History',
          text: 'A cultural heritage shaped by over a thousand years of history.',
        },
        {
          title: 'Craftsmanship',
          text: 'Knowledge, precision and experience handed down through the generations.',
        },
        {
          title: 'Territory',
          text: 'A deep bond between environment, raw materials and local traditions.',
        },
      ],
    },

    production: {
      eyebrow: 'THE ART OF PRODUCTION',
      title: ['Four elements. Extraordinary expertise.'],
      lead: [
        'Essential ingredients, precise techniques and knowledge handed down over time give life to one of Japan’s most fascinating production traditions.',
      ],
      elements: [
        {
          number: '01',
          kanji: '米',
          title: 'Rice',
          text: 'The raw material, selected and polished with care.',
          label: 'Sakamai',
          foot: '酒米',
        },
        {
          number: '02',
          kanji: '水',
          title: 'Water',
          text: 'A fundamental element that shapes the character of sake.',
          label: 'Mizu',
          foot: '水',
        },
        {
          number: '03',
          kanji: '麹',
          title: 'Kōji',
          text: 'A fungus cultivated on rice, essential for converting its starch into sugars.',
          label: 'Kōji-kin',
          foot: '麹',
        },
        {
          number: '04',
          kanji: '酵',
          title: 'Yeasts',
          text: 'Microorganisms that convert sugars into alcohol during fermentation.',
          label: 'Kōbo',
          foot: '酵母',
        },
      ],
      processTitle: 'The main stages of production',
      processNote: 'Heiko Fukuhakkō — Parallel Fermentation',
      steps: [
        {
          label: 'Step 01',
          title: 'Rice preparation',
          text: 'Selection, polishing and washing.',
        },
        {
          label: 'Step 02',
          title: 'Steaming',
          text: 'The rice is steamed.',
        },
        {
          label: 'Step 03',
          title: 'Kōji preparation',
          text: 'A portion of the rice is used to cultivate kōji.',
        },
        {
          label: 'Step 04',
          title: 'Fermentation',
          text: 'The work of enzymes and yeasts transforms starches and sugars.',
        },
        {
          label: 'Step 05',
          title: 'Finishing',
          text: 'The sake undergoes the final processes, which may include pressing, filtration, pasteurization and packaging.',
        },
      ],
      footnote:
        '* An introductory, simplified outline. Techniques and steps may vary depending on production methods.',
      sourcesLabel: 'Sources and further reading',
      sourcesLead:
        'KURA’s cultural content draws on documentation from Japanese institutions and specialized publications.',
      sources: [
        {
          label: 'Japan Sake and Shochu Makers Association',
          href: 'https://japansake.or.jp/sake/en/basic/what-is-sake/',
        },
        {
          label: 'National Research Institute of Brewing',
          href: 'https://www.nrib.go.jp/English/sake/pdf/guidesse01.pdf',
        },
      ],
    },

    giappone: {
      eyebrow: 'CULTURE AND TERRITORY',
      title: ['Every region tells a story.'],
      lead: [
        'From the north to the south of Japan, production traditions reflect the relationship between environment, raw materials and craft knowledge.',
      ],
      leadAfterBreak: [
        'Every region holds stories of people, communities and techniques developed over the generations.',
      ],
      image: '/images/toji.jpg',
      imageAlt: 'A Tōji master examining steaming rice in wooden vats',
      captionLabel: 'FIG. 03 — 杜氏 TŌJI',
      captionNote: 'The master brewer checks the texture of the rice by hand',
      boxes: [
        {
          label: '01 / Springs and local rice',
          title: 'Territory and raw materials',
          text: 'The character of the water and the rice varieties used shape the choices and brewing traditions of the different breweries.',
        },
        {
          label: '02 / The cycle of the seasons',
          title: 'Climate and production rhythms',
          text: 'Climatic conditions and the succession of the seasons have historically shaped how production is organized.',
        },
        {
          label: '03 / Handed-down experience',
          title: 'Communities and craftspeople',
          text: 'Craft knowledge is preserved, shared and reinterpreted through the work of people and new generations.',
        },
      ],
    },

    survey: {
      eyebrow: 'JOIN THE PROJECT',
      title: ['How well do you know the world of sake?'],
      lead: [
        'We are exploring how well Japanese sake culture is known in Italy. Answer four simple questions and help us understand which aspects spark the most curiosity.',
      ],
      questions: [
        {
          id: 'q1',
          title: 'Have you ever heard of Japanese sake?',
          options: [
            { label: 'No, this is my first time.', value: 'mai' },
            { label: 'Yes, but I know very little about it.', value: 'poco', strong: true },
            { label: 'Yes, I already know this world.', value: 'conosci' },
          ],
        },
        {
          id: 'q2',
          title: 'Which aspect intrigues you the most?',
          options: [
            { label: 'History and traditions.', value: 'storia' },
            { label: 'How it is made.', value: 'produzione' },
            { label: 'Regions and producers.', value: 'regioni' },
            {
              label: 'Characteristics and classifications.',
              value: 'classificazioni',
            },
          ],
        },
        {
          id: 'q3',
          title:
            'Would you like to discover more content on Japanese sake culture?',
          options: [
            { label: 'Yes, very much.', value: 'si' },
            { label: 'Maybe.', value: 'forse' },
            { label: 'Not particularly.', value: 'no' },
          ],
        },
        {
          id: 'q4',
          title: 'Would you like to try authentic Japanese sake one day?',
          options: [
            { label: 'Yes, definitely.', value: 'sicuramente' },
            { label: 'Maybe, I’m curious.', value: 'forse' },
            { label: 'No, not for now.', value: 'no' },
          ],
        },
      ],
      skip: 'Skip questionnaire',
      back: '← Back',
      next: 'Next →',
      submit: 'Send answers →',
      completionTitle: 'Thank you for taking part!',
      completionText:
        'Your input helps us decide which stories and insights to tell through KURA.',
      restart: 'Restart questionnaire',
    },

    progetto: {
      eyebrow: 'THE KURA PROJECT',
      title: ['Telling the story of Japan, one story at a time.'],
      lead: [
        'KURA was born from the desire to explore and share a cultural heritage that is still little known in Italy. An independent, non-commercial project, KURA is committed to making the extraordinary richness of the sake tradition accessible through the voices of artisans, the memories of places and the purity of raw materials.',
      ],
      pillars: [
        {
          icon: 'auto_stories',
          title: 'Culture',
          text: 'Understanding the thousand-year history and traditions of sake.',
        },
        {
          icon: 'handyman',
          title: 'Tradition',
          text: 'Sharing the handed-down wisdom of master artisans.',
        },
        {
          icon: 'explore',
          title: 'Discovery',
          text: 'Exploring the lands, springs and stories of Japan.',
        },
      ],
      newsletterLabel: 'COMMUNITY & NEWSLETTER',
      newsletterTitle: 'The journey continues.',
      newsletterText:
        'Receive editorial insights, new stories and content devoted to Japanese culture. No commercial promotion, only culture and documentation.',
      newsletterPlaceholder: 'Your email',
      newsletterSubmit: 'Stay up to date →',
      newsletterConsent: [
        'I agree to receive editorial communications and confirm that I have read the ',
        { link: 'Privacy Policy', href: '/en/privacy-policy' },
        '.',
      ],
      newsletterFeedback:
        'Thank you! We have sent a confirmation to your email.',
    },

    footer: {
      tagline:
        'Japanese culture, tradition and territory. A documentary and editorial project devoted to the art of nihonshu.',
      links: [
        { id: 'scopri', label: 'Discover sake', href: '#scopri' },
        { id: 'produzione', label: 'Production', href: '#produzione' },
        { id: 'giappone', label: 'Japan', href: '#giappone' },
        { id: 'progetto', label: 'The project', href: '#progetto' },
        { id: 'storia', label: 'History of sake', href: '/en/storia-del-sake' },
        { id: 'privacy', label: 'Privacy Policy', href: '/en/privacy-policy' },
        { id: 'cookie', label: 'Cookie Policy', href: '/en/cookie-policy' },
      ],
      note: 'Independent cultural project. No commercial purpose or product sales.',
      copyright: 'KURA. All rights reserved.',
    },
  },

  tablet: {
    nav: [
      { id: 'scopri', label: 'Discover sake' },
      { id: 'produzione', label: 'Production' },
      { id: 'giappone', label: 'Japan' },
      { id: 'progetto', label: 'The project' },
    ],

    hero: {
      eyebrow: 'A JOURNEY INTO JAPANESE CULTURE',
      titleSegments: ['Do you really know Japanese ', { em: 'sake' }, '?'],
      lead: [
        'Discover a world of traditions, artisans, regions and knowledge passed down through time. A journey through one of the most fascinating expressions of Japanese culture.',
      ],
      ctaPrimary: 'Start exploring →',
      ctaSecondary: 'Its story',
      image: '/images/cantina-kura.jpg',
      imageAlt: 'Traditional old brewery with a cedar sugidama sphere',
      captionTitle: 'FIG. 01 — KURA',
      captionText: 'Traditional old brewery with a cedar sugidama sphere',
    },

    scopri: {
      eyebrow: 'DISCOVERING SAKE',
      title: ['Far more than a drink. A story spanning a thousand years.'],
      lead: [
        'Sake, known in Japan as ',
        { em: 'nihonshu' },
        ', is a fermented alcoholic beverage made from rice and water, produced through the action of kōji and yeasts.',
      ],
      leadSecondary: [
        'Its history is deeply intertwined with that of Japan: from religious traditions to craft knowledge handed down through the generations.',
      ],
      leadTag: 'Nihonshu • 日本酒',
      image: '/images/hero-utsuwa.jpg',
      imageAlt: 'Artisanal ceramic tokkuri and ochoko on natural wood',
      blocks: [
        {
          label: '01 / HISTORY',
          kanji: '歴',
          title: 'History',
          text: 'A cultural heritage shaped by over a thousand years of history.',
        },
        {
          label: '02 / ARTISAN',
          kanji: '技',
          title: 'Craftsmanship',
          text: 'Knowledge, precision and experience handed down through the generations.',
        },
        {
          label: '03 / TERROIR',
          kanji: '土',
          title: 'Territory',
          text: 'A deep bond between environment, raw materials and local traditions.',
        },
      ],
    },

    production: {
      eyebrow: 'THE ART OF PRODUCTION',
      title: ['Four elements.', 'Extraordinary expertise.'],
      lead: [
        'Essential ingredients, precise techniques and knowledge handed down over time give life to one of Japan’s most fascinating production traditions.',
      ],
      elements: [
        {
          number: '01',
          kanji: '米',
          title: 'Rice',
          text: 'The raw material, selected and polished with care.',
        },
        {
          number: '02',
          kanji: '水',
          title: 'Water',
          text: 'A fundamental element that shapes the character of sake.',
        },
        {
          number: '03',
          kanji: '麹',
          title: 'Kōji',
          text: 'A fungus cultivated on rice, essential for converting its starch into sugars.',
        },
        {
          number: '04',
          kanji: '酵',
          title: 'Yeasts',
          text: 'Microorganisms that convert sugars into alcohol during fermentation.',
        },
      ],
      processTitle: 'The main stages of production',
      processNote: 'Heiko Fukuhakkō — Parallel Fermentation',
      steps: [
        {
          number: '01',
          title: 'Rice preparation',
          text: 'Selection, polishing and washing.',
        },
        {
          number: '02',
          title: 'Steaming',
          text: 'The rice is steamed.',
        },
        {
          number: '03',
          title: 'Kōji preparation',
          text: 'A portion of the rice is used to cultivate kōji.',
        },
        {
          number: '04',
          title: 'Fermentation',
          text: 'The work of enzymes and yeasts transforms starches and sugars.',
        },
        {
          number: '05',
          title: 'Finishing',
          text: 'The sake undergoes the final processes, which may include pressing, filtration, pasteurization and packaging.',
        },
      ],
      footnote:
        '* An introductory, simplified outline. Techniques and steps may vary depending on production methods.',
      sourcesLabel: 'Sources and further reading',
      sources: [
        'Japan Sake and Shochu Makers Association',
        'National Research Institute of Brewing',
      ],
    },

    giappone: {
      eyebrow: 'CULTURE AND TERRITORY',
      title: ['Every region tells a story.'],
      lead: [
        'From the north to the south of Japan, production traditions reflect the relationship between environment, raw materials and craft knowledge.',
      ],
      image: '/images/toji.jpg',
      imageAlt: 'A Tōji master examining steaming rice in wooden vats',
      captionTitle: 'FIG. 03 — 杜氏 TŌJI',
      captionText: 'The master brewer checks the texture of the rice by hand',
      boxes: [
        {
          title: 'Territory and raw materials',
          text: 'The character of the water and the rice varieties used shape the choices and brewing traditions of the different breweries.',
        },
        {
          title: 'Climate and production rhythms',
          text: 'Climatic conditions and the succession of the seasons have historically shaped how production is organized.',
        },
        {
          title: 'Communities and craftspeople',
          text: 'Craft knowledge is preserved, shared and reinterpreted through the work of people and new generations.',
        },
      ],
    },

    survey: {
      title: ['How well do you know the world of sake?'],
      questions: [
        {
          title: 'Have you ever heard of Japanese sake?',
          options: [
            { label: 'No, this is my first time.', value: 'mai' },
            { label: 'Yes, but I know very little about it.', value: 'poco' },
            { label: 'Yes, I already know this world.', value: 'conosci' },
          ],
        },
        {
          title: 'Which aspect intrigues you the most?',
          options: [
            { label: 'History and traditions.', value: 'storia' },
            { label: 'How it is made.', value: 'produzione' },
            { label: 'Regions and producers.', value: 'regioni' },
            {
              label: 'Characteristics and classifications.',
              value: 'classificazioni',
            },
          ],
        },
        {
          title:
            'Would you like to discover more content on Japanese sake culture?',
          options: [
            { label: 'Yes, very much.', value: 'si' },
            { label: 'Maybe.', value: 'forse' },
            { label: 'Not particularly.', value: 'no' },
          ],
        },
        {
          title: 'Would you like to try authentic Japanese sake one day?',
          options: [
            { label: 'Yes, definitely.', value: 'sicuramente' },
            { label: 'Maybe, I’m curious.', value: 'forse' },
            { label: 'No, not for now.', value: 'no' },
          ],
        },
      ],
      skip: 'Skip questionnaire',
      next: 'Next',
      completionTitle: 'Thank you for taking part!',
      completionText:
        'Your input helps us decide which stories and insights to tell through KURA.',
      restart: 'Restart questionnaire',
    },

    progetto: {
      eyebrow: 'THE KURA PROJECT',
      title: ['Telling the story of Japan,', 'one story at a time.'],
      lead: [
        'KURA was born from the desire to explore and share a cultural heritage that is still little known in Italy. An independent, non-commercial project, KURA is committed to making the extraordinary richness of the sake tradition accessible through the voices of artisans, the memories of places and the purity of raw materials.',
      ],
      pills: ['Culture', 'Tradition', 'Discovery'],
      newsletterTitle: 'The journey continues.',
      newsletterText:
        'Receive editorial insights, new stories and content devoted to Japanese culture. No commercial promotion, only culture and documentation.',
      newsletterPlaceholder: 'Your email',
      newsletterSubmit: 'Stay up to date →',
      newsletterConsent: [
        'I agree to receive editorial communications and confirm that I have read the ',
        { link: 'Privacy Policy', href: '/en/privacy-policy' },
        '.',
      ],
      newsletterFeedback:
        'Thank you! We have sent a confirmation to your email.',
    },

    footer: {
      tagline:
        'Japanese culture, tradition and territory. A documentary and editorial project devoted to the art of nihonshu.',
      groups: [
        {
          title: 'Archive',
          links: [
            { label: 'Discover sake', href: '#scopri' },
            { label: 'Production', href: '#produzione' },
            { label: 'Japan', href: '#giappone' },
          ],
        },
        {
          title: 'Experience',
          links: [
            { label: 'The project', href: '#progetto' },
            { label: 'History of sake', href: '/en/storia-del-sake' },
            { label: 'Privacy Policy', href: '/en/privacy-policy' },
            { label: 'Cookie Policy', href: '/en/cookie-policy' },
          ],
        },
        {
          title: 'Legal notes',
          text: 'Independent cultural project. No commercial purpose or product sales.',
          place: 'Kyoto / Tokyo / Milan',
        },
      ],
      copyright: 'KURA. All rights reserved.',
    },
  },

  mobile: {
    menu: [
      { id: 'scopri', label: 'Discover sake', number: '01' },
      { id: 'produzione', label: 'Production', number: '02' },
      { id: 'giappone', label: 'Japan', number: '03' },
      { id: 'questionario', label: 'Questionnaire', number: '04' },
      { id: 'progetto', label: 'The project', number: '05' },
    ],

    hero: {
      badge: 'A JOURNEY INTO JAPANESE CULTURE',
      title: ['Do you really know Japanese sake?'],
      lead: [
        'Discover a world of traditions, artisans, regions and knowledge passed down through time. A journey through one of the most fascinating expressions of Japanese culture.',
      ],
      ctaPrimary: 'Start exploring',
      ctaSecondary: 'Its story',
      image: '/images/cantina-kura.jpg',
      imageAlt: 'Traditional old brewery with a cedar sugidama sphere',
      captionLabel: 'FIG. 01 — KURA',
      captionNote: 'Traditional old brewery with a cedar sugidama sphere',
    },

    scopri: {
      eyebrow: 'DISCOVERING SAKE',
      title: ['Far more than a drink. A story spanning a thousand years.'],
      lead: [
        'Sake, known in Japan as ',
        { em: 'nihonshu' },
        ', is a fermented alcoholic beverage made from rice and water, produced through the action of kōji and yeasts.',
      ],
      leadSecondary: [
        'Its history is deeply intertwined with that of Japan: from religious traditions to craft knowledge handed down through the generations.',
      ],
      image: '/images/hero-utsuwa.jpg',
      imageAlt: 'Artisanal ceramic tokkuri and ochoko on natural wood',
      captionLabel: 'FIG. 02 — 器 UTSUWA',
      captionNote: 'A tokkuri carafe and ochoko cups on aged wood',
      facts: [
        {
          title: 'History',
          text: 'A cultural heritage shaped by over a thousand years of history.',
        },
        {
          title: 'Craftsmanship',
          text: 'Knowledge, precision and experience handed down through the generations.',
        },
        {
          title: 'Territory',
          text: 'A deep bond between environment, raw materials and local traditions.',
        },
      ],
    },

    production: {
      eyebrow: 'THE ART OF PRODUCTION',
      title: ['Four elements. Extraordinary expertise.'],
      lead: [
        'Essential ingredients, precise techniques and knowledge handed down over time give life to one of Japan’s most fascinating production traditions.',
      ],
      elements: [
        {
          number: '01',
          icon: 'grain',
          title: 'Rice',
          text: 'The raw material, selected and polished with care.',
        },
        {
          number: '02',
          icon: 'water_drop',
          title: 'Water',
          text: 'A fundamental element that shapes the character of sake.',
        },
        {
          number: '03',
          icon: 'spa',
          title: 'Kōji',
          text: 'A fungus cultivated on rice, essential for converting its starch into sugars.',
        },
        {
          number: '04',
          icon: 'bubble_chart',
          title: 'Yeasts',
          text: 'Microorganisms that convert sugars into alcohol during fermentation.',
        },
      ],
      processTitle: 'The main stages of production',
      processNote: 'Heiko Fukuhakkō — Parallel Fermentation',
      steps: [
        {
          number: '1',
          title: 'Rice preparation',
          term: 'Seimai',
          text: 'Selection, polishing and washing.',
        },
        {
          number: '2',
          title: 'Steaming',
          term: 'Koshiki',
          text: 'The rice is steamed.',
        },
        {
          number: '3',
          title: 'Kōji preparation',
          term: 'Kōjimuro',
          text: 'A portion of the rice is used to cultivate kōji.',
        },
        {
          number: '4',
          title: 'Fermentation',
          term: 'Moromi',
          text: 'The work of enzymes and yeasts transforms starches and sugars.',
        },
        {
          number: '5',
          title: 'Finishing',
          term: 'Jōsō',
          text: 'The sake undergoes the final processes, which may include pressing, filtration, pasteurization and packaging.',
        },
      ],
      footnote:
        '* An introductory, simplified outline. Techniques and steps may vary depending on production methods.',
    },

    giappone: {
      eyebrow: 'CULTURE AND TERRITORY',
      title: ['Every region tells a story.'],
      lead: [
        'From the north to the south of Japan, production traditions reflect the relationship between environment, raw materials and craft knowledge.',
      ],
      leadSecondary: [
        'Every region holds stories of people, communities and techniques developed over the generations.',
      ],
      image: '/images/toji.jpg',
      imageAlt: 'A Tōji master examining steaming rice in wooden vats',
      captionLabel: 'FIG. 03 — 杜氏 TŌJI',
      captionNote: 'The master brewer checks the texture of the rice by hand',
      boxes: [
        {
          title: 'Territory and raw materials',
          text: 'The character of the water and the rice varieties used shape the choices and brewing traditions of the different breweries.',
        },
        {
          title: 'Climate and production rhythms',
          text: 'Climatic conditions and the succession of the seasons have historically shaped how production is organized.',
        },
        {
          title: 'Communities and craftspeople',
          text: 'Craft knowledge is preserved, shared and reinterpreted through the work of people and new generations.',
        },
      ],
    },

    survey: {
      eyebrow: 'JOIN THE PROJECT',
      title: ['How well do you know the world of sake?'],
      lead: [
        'We are exploring how well Japanese sake culture is known in Italy. Answer four simple questions and help us understand which aspects spark the most curiosity.',
      ],
      questions: [
        {
          id: 'q1',
          title: 'Have you ever heard of Japanese sake?',
          options: [
            { label: 'No, this is my first time.', value: 'mai' },
            { label: 'Yes, but I know very little about it.', value: 'poco', strong: true },
            { label: 'Yes, I already know this world.', value: 'conosci' },
          ],
        },
        {
          id: 'q2',
          title: 'Which aspect intrigues you the most?',
          options: [
            { label: 'History and traditions.', value: 'storia' },
            { label: 'How it is made.', value: 'produzione' },
            { label: 'Regions and producers.', value: 'regioni' },
            {
              label: 'Characteristics and classifications.',
              value: 'classificazioni',
            },
          ],
        },
        {
          id: 'q3',
          title:
            'Would you like to discover more content on Japanese sake culture?',
          options: [
            { label: 'Yes, very much.', value: 'si' },
            { label: 'Maybe.', value: 'forse' },
            { label: 'Not particularly.', value: 'no' },
          ],
        },
        {
          id: 'q4',
          title: 'Would you like to try authentic Japanese sake one day?',
          options: [
            { label: 'Yes, definitely.', value: 'sicuramente' },
            { label: 'Maybe, I’m curious.', value: 'forse' },
            { label: 'No, not for now.', value: 'no' },
          ],
        },
      ],
      skip: 'Skip questionnaire',
      back: '← Back',
      next: 'Next',
      submit: 'Send answers',
      completionTitle: 'Thank you for taking part!',
      completionText:
        'Your input helps us decide which stories and insights to tell through KURA.',
      restart: 'Restart questionnaire',
    },

    progetto: {
      eyebrow: 'THE KURA PROJECT',
      title: ['Telling the story of Japan, one story at a time.'],
      lead: [
        'KURA was born from the desire to explore and share a cultural heritage that is still little known in Italy. An independent, non-commercial project, KURA is committed to making the extraordinary richness of the sake tradition accessible through the voices of artisans, the memories of places and the purity of raw materials.',
      ],
      pillars: [
        {
          icon: 'auto_stories',
          title: 'Culture',
          text: 'Understanding the thousand-year history and traditions of sake.',
        },
        {
          icon: 'handyman',
          title: 'Tradition',
          text: 'Sharing the handed-down wisdom of master artisans.',
        },
        {
          icon: 'explore',
          title: 'Discovery',
          text: 'Exploring the lands, springs and stories of Japan.',
        },
      ],
      newsletterLabel: 'COMMUNITY & NEWSLETTER',
      newsletterTitle: 'The journey continues.',
      newsletterText:
        'Receive editorial insights, new stories and content devoted to Japanese culture. No commercial promotion, only culture and documentation.',
      newsletterPlaceholder: 'Your email',
      newsletterSubmit: 'Stay up to date →',
      newsletterConsent: [
        'I agree to receive editorial communications and confirm that I have read the ',
        { link: 'Privacy Policy', href: '/en/privacy-policy' },
        '.',
      ],
      newsletterFeedback:
        'Thank you! We have sent a confirmation to your email.',
    },

    sources: {
      title: 'Sources and further reading',
      lead: 'KURA’s cultural content draws on documentation from Japanese institutions and specialized publications.',
      links: [
        {
          label: 'Japan Sake and Shochu Makers Association',
          href: 'https://japansake.or.jp/sake/en/basic/what-is-sake/',
        },
        {
          label: 'National Research Institute of Brewing',
          href: 'https://www.nrib.go.jp/English/sake/pdf/guidesse01.pdf',
        },
      ],
    },

    footer: {
      tagline:
        'Japanese culture, tradition and territory. A documentary and editorial project devoted to the art of nihonshu.',
      links: [
        { id: 'scopri', label: 'Discover sake', href: '#scopri' },
        { id: 'produzione', label: 'Production', href: '#produzione' },
        { id: 'giappone', label: 'Japan', href: '#giappone' },
        { id: 'progetto', label: 'The project', href: '#progetto' },
        { id: 'storia', label: 'History of sake', href: '/en/storia-del-sake' },
        { id: 'privacy', label: 'Privacy Policy', href: '/en/privacy-policy' },
        { id: 'cookie', label: 'Cookie Policy', href: '/en/cookie-policy' },
      ],
      copyright: 'KURA. All rights reserved.',
      note: 'Independent cultural project. No commercial purpose or product sales.',
    },
  },
};
