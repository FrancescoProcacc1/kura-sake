/*
 * Contenuti della landing KURA, divisi per variante di layout.
 *
 * I testi sono identici in tutte le varianti (fonte: LANDING.desktop);
 * restano divergenti solo struttura dei dati, icone/kanji/numeri e
 * elementi di layout (footer a gruppi in tablet, menu indicizzato
 * in mobile, ecc.). Se modifichi un testo desktop, riportalo anche
 * nelle varianti tablet e mobile.
 */

export const LANDING = {
  desktop: {
    nav: [
      { id: 'scopri', label: 'Scopri il sakè' },
      { id: 'produzione', label: 'Produzione' },
      { id: 'giappone', label: 'Giappone' },
      { id: 'progetto', label: 'Il progetto' },
    ],

    hero: {
      badge: 'UN VIAGGIO NELLA CULTURA GIAPPONESE',
      title: ['Conosci davvero il sakè giapponese?'],
      lead: [
        'Scopri un mondo fatto di tradizioni, artigiani, territori e conoscenze tramandate nel tempo. Un viaggio attraverso una delle espressioni più affascinanti della cultura giapponese.',
      ],
      ctaPrimary: 'Inizia a scoprire →',
      ctaSecondary: 'La sua storia',
      image: '/images/cantina-kura.jpg',
      imageAlt: 'Antica cantina tradizionale con sfera sugidama in cedro',
      captionLabel: 'FIG. 01 — KURA',
      captionNote: 'Antica cantina tradizionale con sfera sugidama in cedro',
    },

    scopri: {
      eyebrow: 'ALLA SCOPERTA DEL SAKÈ',
      title: ['Molto più di una bevanda. Una storia millenaria.'],
      lead: [
        'Il sakè, conosciuto in Giappone come ',
        { em: 'nihonshu' },
        ', è una bevanda alcolica fermentata a base di riso e acqua, prodotta grazie all’azione del kōji e dei lieviti.',
      ],
      leadAfterBreak: [
        'La sua storia è profondamente intrecciata con quella del Giappone: dalle tradizioni religiose alle conoscenze artigianali tramandate attraverso le generazioni.',
      ],
      image: '/images/hero-utsuwa.jpg',
      imageAlt: 'Tokkuri e Ochoko in ceramica artigianale su legno naturale',
      captionLabel: 'FIG. 02 — 器 UTSUWA',
      captionNote: 'Caraffa tokkuri e coppe ochoko su legno d’epoca',
      facts: [
        {
          title: 'Storia',
          text: 'Un patrimonio culturale sviluppatosi attraverso oltre mille anni di storia.',
        },
        {
          title: 'Artigianato',
          text: 'Conoscenze, precisione ed esperienza tramandate attraverso le generazioni.',
        },
        {
          title: 'Territorio',
          text: 'Un rapporto profondo tra ambiente, materie prime e tradizioni locali.',
        },
      ],
    },

    production: {
      eyebrow: 'L’ARTE DELLA PRODUZIONE',
      title: ['Quattro elementi. Un sapere straordinario.'],
      lead: [
        'Ingredienti essenziali, tecniche precise e conoscenze tramandate nel tempo danno vita a una delle tradizioni produttive più interessanti del Giappone.',
      ],
      elements: [
        {
          number: '01',
          kanji: '米',
          title: 'Riso',
          text: 'La materia prima, selezionata e lavorata con cura.',
          label: 'Sakamai',
          foot: '酒米',
        },
        {
          number: '02',
          kanji: '水',
          title: 'Acqua',
          text: 'Un elemento fondamentale che contribuisce alle caratteristiche del sakè.',
          label: 'Mizu',
          foot: '水',
        },
        {
          number: '03',
          kanji: '麹',
          title: 'Kōji',
          text: 'Un fungo coltivato sul riso, fondamentale per trasformarne l’amido in zuccheri.',
          label: 'Kōji-kin',
          foot: '麹',
        },
        {
          number: '04',
          kanji: '酵',
          title: 'Lieviti',
          text: 'Microrganismi che trasformano gli zuccheri in alcol durante la fermentazione.',
          label: 'Kōbo',
          foot: '酵母',
        },
      ],
      processTitle: 'Le principali fasi della produzione',
      processNote: 'Heiko Fukuhakkō — Fermentazione Parallela',
      steps: [
        {
          label: 'Passo 01',
          title: 'Preparazione del riso',
          text: 'Selezione, levigatura e lavaggio.',
        },
        {
          label: 'Passo 02',
          title: 'Cottura',
          text: 'Il riso viene cotto a vapore.',
        },
        {
          label: 'Passo 03',
          title: 'Preparazione del kōji',
          text: 'Una parte del riso viene utilizzata per sviluppare il kōji.',
        },
        {
          label: 'Passo 04',
          title: 'Fermentazione',
          text: 'Il lavoro di enzimi e lieviti permette la trasformazione degli amidi e degli zuccheri.',
        },
        {
          label: 'Passo 05',
          title: 'Finitura',
          text: 'Il sakè viene sottoposto alle lavorazioni finali, che possono includere pressatura, filtrazione, pastorizzazione e confezionamento.',
        },
      ],
      footnote:
        '* Schema introduttivo e semplificato. Le tecniche e i passaggi possono variare in base ai metodi produttivi.',
      sourcesLabel: 'Fonti e approfondimenti',
      sourcesLead:
        'I contenuti culturali di KURA si basano su documentazione di istituzioni giapponesi e pubblicazioni specializzate.',
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
      eyebrow: 'CULTURA E TERRITORIO',
      title: ['Ogni territorio racconta una storia.'],
      lead: [
        'Dal nord al sud del Giappone, le tradizioni produttive riflettono il rapporto tra ambiente, materie prime e conoscenze artigianali.',
      ],
      leadAfterBreak: [
        'Ogni regione custodisce storie di persone, comunità e tecniche sviluppate nel corso delle generazioni.',
      ],
      image: '/images/toji.jpg',
      imageAlt: 'Maestro Tōji che esamina il riso fumante nei tini in legno',
      captionLabel: 'FIG. 03 — 杜氏 TŌJI',
      captionNote: 'Il maestro birraio esamina a mano la consistenza del riso',
      boxes: [
        {
          label: '01 / Le sorgenti e il riso locale',
          title: 'Territorio e materie prime',
          text: 'Le caratteristiche dell’acqua e le varietà di riso utilizzate contribuiscono alle scelte e alle tradizioni produttive delle diverse cantine.',
        },
        {
          label: '02 / Il ciclo delle stagioni',
          title: 'Clima e ritmi produttivi',
          text: 'Le condizioni climatiche e il susseguirsi delle stagioni hanno storicamente influenzato l’organizzazione della produzione.',
        },
        {
          label: '03 / L’esperienza tramandata',
          title: 'Comunità e maestranze',
          text: 'Le conoscenze artigianali vengono conservate, condivise e reinterpretate attraverso il lavoro delle persone e delle nuove generazioni.',
        },
      ],
    },

    survey: {
      eyebrow: 'PARTECIPA AL PROGETTO',
      title: ['Quanto conosci il mondo del sakè?'],
      lead: [
        'Stiamo esplorando quanto sia conosciuta in Italia la cultura del sakè giapponese. Rispondi a quattro semplici domande e aiutaci a capire quali aspetti suscitano maggiore curiosità.',
      ],
      questions: [
        {
          id: 'q1',
          title: 'Hai mai sentito parlare del sakè giapponese?',
          options: [
            { label: 'No, è la prima volta.', value: 'mai' },
            { label: 'Sì, ma ne so pochissimo.', value: 'poco', strong: true },
            { label: 'Sì, conosciamo già questo mondo.', value: 'conosci' },
          ],
        },
        {
          id: 'q2',
          title: 'Quale aspetto ti incuriosisce maggiormente?',
          options: [
            { label: 'La storia e le tradizioni.', value: 'storia' },
            { label: 'Come viene prodotto.', value: 'produzione' },
            { label: 'Le regioni e i produttori.', value: 'regioni' },
            {
              label: 'Le caratteristiche e le classificazioni.',
              value: 'classificazioni',
            },
          ],
        },
        {
          id: 'q3',
          title:
            'Ti piacerebbe scoprire altri contenuti sulla cultura giapponese del sakè?',
          options: [
            { label: 'Sì, molto.', value: 'si' },
            { label: 'Forse.', value: 'forse' },
            { label: 'Non particolarmente.', value: 'no' },
          ],
        },
        {
          id: 'q4',
          title: 'Ti piacerebbe provare il vero sakè giapponese un giorno?',
          options: [
            { label: 'Sì, sicuramente.', value: 'sicuramente' },
            { label: 'Forse, sono curioso/a.', value: 'forse' },
            { label: 'No, non per ora.', value: 'no' },
          ],
        },
      ],
      skip: 'Salta questionario',
      back: '← Indietro',
      next: 'Avanti →',
      submit: 'Invia risposte →',
      completionTitle: 'Grazie per aver partecipato!',
      completionText:
        'Il tuo contributo ci aiuta a capire quali storie e approfondimenti raccontare attraverso KURA.',
      restart: 'Ricomincia questionario',
    },

    progetto: {
      eyebrow: 'IL PROGETTO KURA',
      title: ['Raccontare il Giappone, una storia alla volta.'],
      lead: [
        'KURA nasce dalla curiosità di esplorare e raccontare un patrimonio culturale ancora poco conosciuto in Italia. Progetto indipendente e privo di fini commerciali, KURA si impegna a rendere accessibile la straordinaria ricchezza della tradizione del sakè attraverso la voce degli artigiani, le memorie dei luoghi e la purezza delle materie prime.',
      ],
      pillars: [
        {
          icon: 'auto_stories',
          title: 'Cultura',
          text: 'Conoscere la storia e le tradizioni millenarie del sakè.',
        },
        {
          icon: 'handyman',
          title: 'Tradizione',
          text: 'Raccontare il sapere tramandato dei maestri artigiani.',
        },
        {
          icon: 'explore',
          title: 'Scoperta',
          text: 'Esplorare territori, sorgenti e storie del Giappone.',
        },
      ],
      newsletterLabel: 'COMMUNITY & NEWSLETTER',
      newsletterTitle: 'Il viaggio continua.',
      newsletterText:
        'Ricevi approfondimenti editoriali, nuove storie e contenuti dedicati alla cultura giapponese. Nessuna promozione commerciale, solo cultura e documentazione.',
      newsletterPlaceholder: 'La tua email',
      newsletterSubmit: 'Resta aggiornato →',
      newsletterConsent: [
        'Accetto di ricevere comunicazioni editoriali e confermo di aver letto la ',
        { link: 'Privacy Policy', href: '/privacy-policy' },
        '.',
      ],
      newsletterFeedback:
        'Grazie! Ti abbiamo inviato una conferma alla tua email.',
    },

    footer: {
      tagline:
        'Cultura, tradizione e territorio giapponese. Un progetto documentaristico ed editoriale dedicato all’arte del nihonshu.',
      links: [
        { id: 'scopri', label: 'Scopri il sakè', href: '#scopri' },
        { id: 'produzione', label: 'Produzione', href: '#produzione' },
        { id: 'giappone', label: 'Giappone', href: '#giappone' },
        { id: 'progetto', label: 'Il progetto', href: '#progetto' },
        { id: 'storia', label: 'Storia del sakè', href: '/storia-del-sake' },
        { id: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
        { id: 'cookie', label: 'Cookie Policy', href: '/cookie-policy' },
      ],
      note: 'Progetto culturale indipendente. Nessun fine commerciale o vendita di prodotti.',
      copyright: 'KURA. Tutti i diritti riservati.',
    },
  },

  tablet: {
    nav: [
      { id: 'scopri', label: 'Scopri il sakè' },
      { id: 'produzione', label: 'Produzione' },
      { id: 'giappone', label: 'Giappone' },
      { id: 'progetto', label: 'Il progetto' },
    ],

    hero: {
      eyebrow: 'UN VIAGGIO NELLA CULTURA GIAPPONESE',
      titleSegments: ['Conosci davvero il ', { em: 'sakè' }, ' giapponese?'],
      lead: [
        'Scopri un mondo fatto di tradizioni, artigiani, territori e conoscenze tramandate nel tempo. Un viaggio attraverso una delle espressioni più affascinanti della cultura giapponese.',
      ],
      ctaPrimary: 'Inizia a scoprire →',
      ctaSecondary: 'La sua storia',
      image: '/images/cantina-kura.jpg',
      imageAlt: 'Antica cantina tradizionale con sfera sugidama in cedro',
      captionTitle: 'FIG. 01 — KURA',
      captionText: 'Antica cantina tradizionale con sfera sugidama in cedro',
    },

    scopri: {
      eyebrow: 'ALLA SCOPERTA DEL SAKÈ',
      title: ['Molto più di una bevanda. Una storia millenaria.'],
      lead: [
        'Il sakè, conosciuto in Giappone come ',
        { em: 'nihonshu' },
        ', è una bevanda alcolica fermentata a base di riso e acqua, prodotta grazie all’azione del kōji e dei lieviti.',
      ],
      leadSecondary: [
        'La sua storia è profondamente intrecciata con quella del Giappone: dalle tradizioni religiose alle conoscenze artigianali tramandate attraverso le generazioni.',
      ],
      leadTag: 'Nihonshu • 日本酒',
      image: '/images/hero-utsuwa.jpg',
      imageAlt: 'Tokkuri e Ochoko in ceramica artigianale su legno naturale',
      blocks: [
        {
          label: '01 / HISTORIA',
          kanji: '歴',
          title: 'Storia',
          text: 'Un patrimonio culturale sviluppatosi attraverso oltre mille anni di storia.',
        },
        {
          label: '02 / ARTISAN',
          kanji: '技',
          title: 'Artigianato',
          text: 'Conoscenze, precisione ed esperienza tramandate attraverso le generazioni.',
        },
        {
          label: '03 / TERROIR',
          kanji: '土',
          title: 'Territorio',
          text: 'Un rapporto profondo tra ambiente, materie prime e tradizioni locali.',
        },
      ],
    },

    production: {
      eyebrow: 'L’ARTE DELLA PRODUZIONE',
      title: ['Quattro elementi.', 'Un sapere straordinario.'],
      lead: [
        'Ingredienti essenziali, tecniche precise e conoscenze tramandate nel tempo danno vita a una delle tradizioni produttive più interessanti del Giappone.',
      ],
      elements: [
        {
          number: '01',
          kanji: '米',
          title: 'Riso',
          text: 'La materia prima, selezionata e lavorata con cura.',
        },
        {
          number: '02',
          kanji: '水',
          title: 'Acqua',
          text: 'Un elemento fondamentale che contribuisce alle caratteristiche del sakè.',
        },
        {
          number: '03',
          kanji: '麹',
          title: 'Kōji',
          text: 'Un fungo coltivato sul riso, fondamentale per trasformarne l’amido in zuccheri.',
        },
        {
          number: '04',
          kanji: '酵',
          title: 'Lieviti',
          text: 'Microrganismi che trasformano gli zuccheri in alcol durante la fermentazione.',
        },
      ],
      processTitle: 'Le principali fasi della produzione',
      processNote: 'Heiko Fukuhakkō — Fermentazione Parallela',
      steps: [
        {
          number: '01',
          title: 'Preparazione del riso',
          text: 'Selezione, levigatura e lavaggio.',
        },
        {
          number: '02',
          title: 'Cottura',
          text: 'Il riso viene cotto a vapore.',
        },
        {
          number: '03',
          title: 'Preparazione del kōji',
          text: 'Una parte del riso viene utilizzata per sviluppare il kōji.',
        },
        {
          number: '04',
          title: 'Fermentazione',
          text: 'Il lavoro di enzimi e lieviti permette la trasformazione degli amidi e degli zuccheri.',
        },
        {
          number: '05',
          title: 'Finitura',
          text: 'Il sakè viene sottoposto alle lavorazioni finali, che possono includere pressatura, filtrazione, pastorizzazione e confezionamento.',
        },
      ],
      footnote:
        '* Schema introduttivo e semplificato. Le tecniche e i passaggi possono variare in base ai metodi produttivi.',
      sourcesLabel: 'Fonti e approfondimenti',
      sources: [
        'Japan Sake and Shochu Makers Association',
        'National Research Institute of Brewing',
      ],
    },

    giappone: {
      eyebrow: 'CULTURA E TERRITORIO',
      title: ['Ogni territorio racconta una storia.'],
      lead: [
        'Dal nord al sud del Giappone, le tradizioni produttive riflettono il rapporto tra ambiente, materie prime e conoscenze artigianali.',
      ],
      image: '/images/toji.jpg',
      imageAlt: 'Maestro Tōji che esamina il riso fumante nei tini in legno',
      captionTitle: 'FIG. 03 — 杜氏 TŌJI',
      captionText: 'Il maestro birraio esamina a mano la consistenza del riso',
      boxes: [
        {
          title: 'Territorio e materie prime',
          text: 'Le caratteristiche dell’acqua e le varietà di riso utilizzate contribuiscono alle scelte e alle tradizioni produttive delle diverse cantine.',
        },
        {
          title: 'Clima e ritmi produttivi',
          text: 'Le condizioni climatiche e il susseguirsi delle stagioni hanno storicamente influenzato l’organizzazione della produzione.',
        },
        {
          title: 'Comunità e maestranze',
          text: 'Le conoscenze artigianali vengono conservate, condivise e reinterpretate attraverso il lavoro delle persone e delle nuove generazioni.',
        },
      ],
    },

    survey: {
      title: ['Quanto conosci il mondo del sakè?'],
      questions: [
        {
          title: 'Hai mai sentito parlare del sakè giapponese?',
          options: [
            { label: 'No, è la prima volta.', value: 'mai' },
            { label: 'Sì, ma ne so pochissimo.', value: 'poco' },
            { label: 'Sì, conosciamo già questo mondo.', value: 'conosci' },
          ],
        },
        {
          title: 'Quale aspetto ti incuriosisce maggiormente?',
          options: [
            { label: 'La storia e le tradizioni.', value: 'storia' },
            { label: 'Come viene prodotto.', value: 'produzione' },
            { label: 'Le regioni e i produttori.', value: 'regioni' },
            {
              label: 'Le caratteristiche e le classificazioni.',
              value: 'classificazioni',
            },
          ],
        },
        {
          title:
            'Ti piacerebbe scoprire altri contenuti sulla cultura giapponese del sakè?',
          options: [
            { label: 'Sì, molto.', value: 'si' },
            { label: 'Forse.', value: 'forse' },
            { label: 'Non particolarmente.', value: 'no' },
          ],
        },
        {
          title: 'Ti piacerebbe provare il vero sakè giapponese un giorno?',
          options: [
            { label: 'Sì, sicuramente.', value: 'sicuramente' },
            { label: 'Forse, sono curioso/a.', value: 'forse' },
            { label: 'No, non per ora.', value: 'no' },
          ],
        },
      ],
      skip: 'Salta questionario',
      next: 'Avanti',
      completionTitle: 'Grazie per aver partecipato!',
      completionText:
        'Il tuo contributo ci aiuta a capire quali storie e approfondimenti raccontare attraverso KURA.',
      restart: 'Ricomincia questionario',
    },

    progetto: {
      eyebrow: 'IL PROGETTO KURA',
      title: ['Raccontare il Giappone,', 'una storia alla volta.'],
      lead: [
        'KURA nasce dalla curiosità di esplorare e raccontare un patrimonio culturale ancora poco conosciuto in Italia. Progetto indipendente e privo di fini commerciali, KURA si impegna a rendere accessibile la straordinaria ricchezza della tradizione del sakè attraverso la voce degli artigiani, le memorie dei luoghi e la purezza delle materie prime.',
      ],
      pills: ['Cultura', 'Tradizione', 'Scoperta'],
      newsletterTitle: 'Il viaggio continua.',
      newsletterText:
        'Ricevi approfondimenti editoriali, nuove storie e contenuti dedicati alla cultura giapponese. Nessuna promozione commerciale, solo cultura e documentazione.',
      newsletterPlaceholder: 'La tua email',
      newsletterSubmit: 'Resta aggiornato →',
      newsletterConsent: [
        'Accetto di ricevere comunicazioni editoriali e confermo di aver letto la ',
        { link: 'Privacy Policy', href: '/privacy-policy' },
        '.',
      ],
      newsletterFeedback:
        'Grazie! Ti abbiamo inviato una conferma alla tua email.',
    },

    footer: {
      tagline:
        'Cultura, tradizione e territorio giapponese. Un progetto documentaristico ed editoriale dedicato all’arte del nihonshu.',
      groups: [
        {
          title: 'Archivio',
          links: [
            { label: 'Scopri il sakè', href: '#scopri' },
            { label: 'Produzione', href: '#produzione' },
            { label: 'Giappone', href: '#giappone' },
          ],
        },
        {
          title: 'Esperienza',
          links: [
            { label: 'Il progetto', href: '#progetto' },
            { label: 'Storia del sakè', href: '/storia-del-sake' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Cookie Policy', href: '/cookie-policy' },
          ],
        },
        {
          title: 'Note legali',
          text: 'Progetto culturale indipendente. Nessun fine commerciale o vendita di prodotti.',
          place: 'Kyoto / Tokyo / Milano',
        },
      ],
      copyright: 'KURA. Tutti i diritti riservati.',
    },
  },

  mobile: {
    menu: [
      { id: 'scopri', label: 'Scopri il sakè', number: '01' },
      { id: 'produzione', label: 'Produzione', number: '02' },
      { id: 'giappone', label: 'Giappone', number: '03' },
      { id: 'questionario', label: 'Questionario', number: '04' },
      { id: 'progetto', label: 'Il progetto', number: '05' },
    ],

    hero: {
      badge: 'UN VIAGGIO NELLA CULTURA GIAPPONESE',
      title: ['Conosci davvero il sakè giapponese?'],
      lead: [
        'Scopri un mondo fatto di tradizioni, artigiani, territori e conoscenze tramandate nel tempo. Un viaggio attraverso una delle espressioni più affascinanti della cultura giapponese.',
      ],
      ctaPrimary: 'Inizia a scoprire',
      ctaSecondary: 'La sua storia',
      image: '/images/cantina-kura.jpg',
      imageAlt: 'Antica cantina tradizionale con sfera sugidama in cedro',
      captionLabel: 'FIG. 01 — KURA',
      captionNote: 'Antica cantina tradizionale con sfera sugidama in cedro',
    },

    scopri: {
      eyebrow: 'ALLA SCOPERTA DEL SAKÈ',
      title: ['Molto più di una bevanda. Una storia millenaria.'],
      lead: [
        'Il sakè, conosciuto in Giappone come ',
        { em: 'nihonshu' },
        ', è una bevanda alcolica fermentata a base di riso e acqua, prodotta grazie all’azione del kōji e dei lieviti.',
      ],
      leadSecondary: [
        'La sua storia è profondamente intrecciata con quella del Giappone: dalle tradizioni religiose alle conoscenze artigianali tramandate attraverso le generazioni.',
      ],
      image: '/images/hero-utsuwa.jpg',
      imageAlt: 'Tokkuri e Ochoko in ceramica artigianale su legno naturale',
      captionLabel: 'FIG. 02 — 器 UTSUWA',
      captionNote: 'Caraffa tokkuri e coppe ochoko su legno d’epoca',
      facts: [
        {
          title: 'Storia',
          text: 'Un patrimonio culturale sviluppatosi attraverso oltre mille anni di storia.',
        },
        {
          title: 'Artigianato',
          text: 'Conoscenze, precisione ed esperienza tramandate attraverso le generazioni.',
        },
        {
          title: 'Territorio',
          text: 'Un rapporto profondo tra ambiente, materie prime e tradizioni locali.',
        },
      ],
    },

    production: {
      eyebrow: 'L’ARTE DELLA PRODUZIONE',
      title: ['Quattro elementi. Un sapere straordinario.'],
      lead: [
        'Ingredienti essenziali, tecniche precise e conoscenze tramandate nel tempo danno vita a una delle tradizioni produttive più interessanti del Giappone.',
      ],
      elements: [
        {
          number: '01',
          icon: 'grain',
          title: 'Riso',
          text: 'La materia prima, selezionata e lavorata con cura.',
        },
        {
          number: '02',
          icon: 'water_drop',
          title: 'Acqua',
          text: 'Un elemento fondamentale che contribuisce alle caratteristiche del sakè.',
        },
        {
          number: '03',
          icon: 'spa',
          title: 'Kōji',
          text: 'Un fungo coltivato sul riso, fondamentale per trasformarne l’amido in zuccheri.',
        },
        {
          number: '04',
          icon: 'bubble_chart',
          title: 'Lieviti',
          text: 'Microrganismi che trasformano gli zuccheri in alcol durante la fermentazione.',
        },
      ],
      processTitle: 'Le principali fasi della produzione',
      processNote: 'Heiko Fukuhakkō — Fermentazione Parallela',
      steps: [
        {
          number: '1',
          title: 'Preparazione del riso',
          term: 'Seimai',
          text: 'Selezione, levigatura e lavaggio.',
        },
        {
          number: '2',
          title: 'Cottura',
          term: 'Koshiki',
          text: 'Il riso viene cotto a vapore.',
        },
        {
          number: '3',
          title: 'Preparazione del kōji',
          term: 'Kōjimuro',
          text: 'Una parte del riso viene utilizzata per sviluppare il kōji.',
        },
        {
          number: '4',
          title: 'Fermentazione',
          term: 'Moromi',
          text: 'Il lavoro di enzimi e lieviti permette la trasformazione degli amidi e degli zuccheri.',
        },
        {
          number: '5',
          title: 'Finitura',
          term: 'Jōsō',
          text: 'Il sakè viene sottoposto alle lavorazioni finali, che possono includere pressatura, filtrazione, pastorizzazione e confezionamento.',
        },
      ],
      footnote:
        '* Schema introduttivo e semplificato. Le tecniche e i passaggi possono variare in base ai metodi produttivi.',
    },

    giappone: {
      eyebrow: 'CULTURA E TERRITORIO',
      title: ['Ogni territorio racconta una storia.'],
      lead: [
        'Dal nord al sud del Giappone, le tradizioni produttive riflettono il rapporto tra ambiente, materie prime e conoscenze artigianali.',
      ],
      leadSecondary: [
        'Ogni regione custodisce storie di persone, comunità e tecniche sviluppate nel corso delle generazioni.',
      ],
      image: '/images/toji.jpg',
      imageAlt: 'Maestro Tōji che esamina il riso fumante nei tini in legno',
      captionLabel: 'FIG. 03 — 杜氏 TŌJI',
      captionNote: 'Il maestro birraio esamina a mano la consistenza del riso',
      boxes: [
        {
          title: 'Territorio e materie prime',
          text: 'Le caratteristiche dell’acqua e le varietà di riso utilizzate contribuiscono alle scelte e alle tradizioni produttive delle diverse cantine.',
        },
        {
          title: 'Clima e ritmi produttivi',
          text: 'Le condizioni climatiche e il susseguirsi delle stagioni hanno storicamente influenzato l’organizzazione della produzione.',
        },
        {
          title: 'Comunità e maestranze',
          text: 'Le conoscenze artigianali vengono conservate, condivise e reinterpretate attraverso il lavoro delle persone e delle nuove generazioni.',
        },
      ],
    },

    survey: {
      eyebrow: 'PARTECIPA AL PROGETTO',
      title: ['Quanto conosci il mondo del sakè?'],
      lead: [
        'Stiamo esplorando quanto sia conosciuta in Italia la cultura del sakè giapponese. Rispondi a quattro semplici domande e aiutaci a capire quali aspetti suscitano maggiore curiosità.',
      ],
      questions: [
        {
          id: 'q1',
          title: 'Hai mai sentito parlare del sakè giapponese?',
          options: [
            { label: 'No, è la prima volta.', value: 'mai' },
            { label: 'Sì, ma ne so pochissimo.', value: 'poco', strong: true },
            { label: 'Sì, conosciamo già questo mondo.', value: 'conosci' },
          ],
        },
        {
          id: 'q2',
          title: 'Quale aspetto ti incuriosisce maggiormente?',
          options: [
            { label: 'La storia e le tradizioni.', value: 'storia' },
            { label: 'Come viene prodotto.', value: 'produzione' },
            { label: 'Le regioni e i produttori.', value: 'regioni' },
            {
              label: 'Le caratteristiche e le classificazioni.',
              value: 'classificazioni',
            },
          ],
        },
        {
          id: 'q3',
          title:
            'Ti piacerebbe scoprire altri contenuti sulla cultura giapponese del sakè?',
          options: [
            { label: 'Sì, molto.', value: 'si' },
            { label: 'Forse.', value: 'forse' },
            { label: 'Non particolarmente.', value: 'no' },
          ],
        },
        {
          id: 'q4',
          title: 'Ti piacerebbe provare il vero sakè giapponese un giorno?',
          options: [
            { label: 'Sì, sicuramente.', value: 'sicuramente' },
            { label: 'Forse, sono curioso/a.', value: 'forse' },
            { label: 'No, non per ora.', value: 'no' },
          ],
        },
      ],
      skip: 'Salta questionario',
      back: '← Indietro',
      next: 'Avanti',
      submit: 'Invia risposte',
      completionTitle: 'Grazie per aver partecipato!',
      completionText:
        'Il tuo contributo ci aiuta a capire quali storie e approfondimenti raccontare attraverso KURA.',
      restart: 'Ricomincia questionario',
    },

    progetto: {
      eyebrow: 'IL PROGETTO KURA',
      title: ['Raccontare il Giappone, una storia alla volta.'],
      lead: [
        'KURA nasce dalla curiosità di esplorare e raccontare un patrimonio culturale ancora poco conosciuto in Italia. Progetto indipendente e privo di fini commerciali, KURA si impegna a rendere accessibile la straordinaria ricchezza della tradizione del sakè attraverso la voce degli artigiani, le memorie dei luoghi e la purezza delle materie prime.',
      ],
      pillars: [
        {
          icon: 'auto_stories',
          title: 'Cultura',
          text: 'Conoscere la storia e le tradizioni millenarie del sakè.',
        },
        {
          icon: 'handyman',
          title: 'Tradizione',
          text: 'Raccontare il sapere tramandato dei maestri artigiani.',
        },
        {
          icon: 'explore',
          title: 'Scoperta',
          text: 'Esplorare territori, sorgenti e storie del Giappone.',
        },
      ],
      newsletterLabel: 'COMMUNITY & NEWSLETTER',
      newsletterTitle: 'Il viaggio continua.',
      newsletterText:
        'Ricevi approfondimenti editoriali, nuove storie e contenuti dedicati alla cultura giapponese. Nessuna promozione commerciale, solo cultura e documentazione.',
      newsletterPlaceholder: 'La tua email',
      newsletterSubmit: 'Resta aggiornato →',
      newsletterConsent: [
        'Accetto di ricevere comunicazioni editoriali e confermo di aver letto la ',
        { link: 'Privacy Policy', href: '/privacy-policy' },
        '.',
      ],
      newsletterFeedback:
        'Grazie! Ti abbiamo inviato una conferma alla tua email.',
    },

    sources: {
      title: 'Fonti e approfondimenti',
      lead: 'I contenuti culturali di KURA si basano su documentazione di istituzioni giapponesi e pubblicazioni specializzate.',
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
        'Cultura, tradizione e territorio giapponese. Un progetto documentaristico ed editoriale dedicato all’arte del nihonshu.',
      links: [
        { id: 'scopri', label: 'Scopri il sakè', href: '#scopri' },
        { id: 'produzione', label: 'Produzione', href: '#produzione' },
        { id: 'giappone', label: 'Giappone', href: '#giappone' },
        { id: 'progetto', label: 'Il progetto', href: '#progetto' },
        { id: 'storia', label: 'Storia del sakè', href: '/storia-del-sake' },
        { id: 'privacy', label: 'Privacy Policy', href: '/privacy-policy' },
        { id: 'cookie', label: 'Cookie Policy', href: '/cookie-policy' },
      ],
      copyright: 'KURA. Tutti i diritti riservati.',
      note: 'Progetto culturale indipendente. Nessun fine commerciale o vendita di prodotti.',
    },
  },
};
