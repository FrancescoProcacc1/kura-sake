/*
 * Contenuti della landing KURA, divisi per variante di layout.
 *
 * Ogni variante (desktop / tablet / mobile) ha copy, etichette e dati
 * propri: i testi restano divergenti come nei prototipi di partenza, mentre
 * la struttura dei dati (elementi, fasi, box, domande) è condivisa.
 *
 * I titoli sono array di righe: le varianti che vogliono un'interruzione
 * esplicita ne forniscono più di una, le altre una sola.
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
        'Stiamo esplorando quanto sia conosciuta in Italia la cultura del sakè giapponese. Rispondi a tre semplici domande e aiutaci a capire quali aspetti suscitano maggiore curiosità.',
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
        { link: 'Privacy Policy', href: '#privacy' },
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
        { id: 'contatti', label: 'Contatti', href: '#contatti' },
        { id: 'privacy', label: 'Privacy Policy', href: '#privacy' },
        { id: 'cookie', label: 'Cookie Policy', href: '#cookie' },
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
      eyebrow: 'Un viaggio nella cultura giapponese',
      titleSegments: ['Conosci davvero il ', { em: 'sakè' }, ' giapponese?'],
      lead: [
        'Scopri un mondo fatto di tradizioni, artigiani, territori e conoscenze tramandate nel tempo. Un viaggio attraverso una delle espressioni più affascinanti della cultura giapponese.',
      ],
      ctaPrimary: 'Inizia a scoprire →',
      ctaSecondary: 'La sua storia',
      image: '/images/cantina-kura.jpg',
      imageAlt:
        'Antica cantina tradizionale in legno con sfera sugidama, Takayama',
      captionTitle: '杉玉 (Sugidama)',
      captionText: 'Simbolo di fermentazione e nuovo raccolto',
      captionTag: 'KURA ARCHIVE 01',
    },

    scopri: {
      eyebrow: 'Alla scoperta del sakè',
      title: ['Molto più di una bevanda.', 'Una storia millenaria.'],
      lead: [
        'Il sakè, conosciuto in Giappone come ',
        { em: 'nihonshu' },
        ', è una bevanda alcolica fermentata a base di riso e acqua, prodotta grazie all’azione combinata del kōji e dei lieviti.',
      ],
      leadSecondary: [
        'La sua storia è profondamente intrecciata con quella della civiltà giapponese: dalle antiche cerimonie religiose Shintoiste alle conoscenze artigianali tramandate rigorosamente per via orale attraverso le generazioni di mastri birrai.',
      ],
      leadTag: 'Nihonshu • 日本酒',
      image: '/images/hero-utsuwa.jpg',
      imageAlt:
        'Tokkuri in ceramica artigianale e coppe ochoko su legno naturale',
      blocks: [
        {
          label: '01 / HISTORIA',
          kanji: '歴',
          title: 'Storia Sacra',
          text: 'Nato come offerta rituale (omiki) agli spiriti della natura, si è trasformato in patrimonio gastronomico condiviso tra imperatori e contadini.',
        },
        {
          label: '02 / ARTISAN',
          kanji: '技',
          title: 'Artigianato',
          text: 'La figura del Tōji coordina una micro-società all’interno della cantina, orchestrando fermentazioni invernali al millimetro di grado.',
        },
        {
          label: '03 / TERROIR',
          kanji: '土',
          title: 'Territorio',
          text: 'Dalle nevi del Tōhoku all’acqua calcarea di Nada: ogni fonte sorgiva conferisce una morbidezza e una limpidezza irripetibile.',
        },
      ],
    },

    production: {
      eyebrow: 'L’arte della produzione',
      title: ['Quattro elementi.', 'Un sapere straordinario.'],
      lead: [
        'Ingredienti essenziali, tecniche precise e conoscenze tramandate nel tempo danno vita a una delle tradizioni produttive più affascinanti del Giappone.',
      ],
      elements: [
        {
          number: '01',
          kanji: '米',
          title: 'Riso (Sakamai)',
          text: 'La materia prima, selezionata e lavorata con cura. Solo il cuore ricco di amido (shinpaku) viene preservato tramite la sbramatura (seimai).',
        },
        {
          number: '02',
          kanji: '水',
          title: 'Acqua (Mizu)',
          text: 'Un elemento fondamentale che compone oltre l’80% del sakè. Filtrata naturalmente da montagne sacre, definisce dolcezza minerale o secchezza tagliente.',
        },
        {
          number: '03',
          kanji: '麹',
          title: 'Kōji (Kōji-kin)',
          text: 'Un fungo microscopico inoculato sul riso cotto al vapore all’interno della camera calda (muro), vitale per convertire gli amidi in zuccheri fermentescibili.',
        },
        {
          number: '04',
          kanji: '酵',
          title: 'Lieviti (Kōbo)',
          text: 'Microrganismi nobili che trasformano gli zuccheri in alcol, donando il profilo aromatico: note floreali di mela (ginjō-ka) o sfumature terrose di umami.',
        },
      ],
      processTitle: 'Le principali fasi della produzione',
      processNote: 'Flusso canonico',
      steps: [
        {
          number: '01',
          title: 'Preparazione del riso',
          text: 'Lucidatura & lavaggio',
        },
        {
          number: '02',
          title: 'Cottura vapore',
          text: 'Nel tino Koshiki',
        },
        {
          number: '03',
          title: 'Kōji-zukuri',
          text: 'Coltura in legno',
        },
        {
          number: '04',
          title: 'Fermentazione',
          text: 'Mosto Moromi (30gg)',
        },
        {
          number: '05',
          title: 'Finitura',
          text: 'Spremitura & affinamento',
        },
      ],
      footnote:
        '* Schema introduttivo e semplificato. Le tecniche e i passaggi possono variare sensibilmente in base ai metodi produttivi (es. Kimoto, Yamahai, Sokujō).',
      sourcesLabel: 'Fonti & Istituzioni:',
      sources: [
        'Japan Sake and Shochu Makers Association',
        'National Research Institute of Brewing (NRIB)',
      ],
    },

    giappone: {
      eyebrow: 'Cultura e territorio',
      title: ['Ogni territorio racconta una storia.'],
      lead: [
        'Dal nord innevato al sud temperato del Giappone, le tradizioni produttive riflettono il rapporto armonico tra ambiente, purezza dell’acqua e l’intuito dell’uomo.',
      ],
      image: '/images/toji.jpg',
      imageAlt:
        'Maestro birraio tōji ispeziona il riso cotto a vapore in una kura giapponese',
      captionTitle: '杜氏 (Tōji)',
      captionText: 'Il maestro cantiniere custode dei segreti del lievito',
      boxes: [
        {
          title: 'Le sorgenti e il riso locale',
          text: 'Il concetto di jizake (sakè tipico locale) poggia sui terreni alluvionali e su varietà di riso autoctone nate per resistere al clima rigido delle montagne.',
        },
        {
          title: 'Il ciclo delle stagioni',
          text: 'La produzione classica avviene rigorosamente in inverno (kan-zukuri), quando l’aria pura e le temperature rigide preservano naturalmente il mosto dai batteri indesiderati.',
        },
        {
          title: 'L’esperienza tramandata',
          text: 'Le corporazioni storiche come la Gilda di Tanba o di Nambu mantengono una sensibilità tattile che nessun sensore digitale è ancora riuscito a replicare.',
        },
      ],
    },

    survey: {
      title: ['Quanto conosci il mondo del sakè?'],
      questions: [
        { title: 'Hai mai sentito parlare del sakè giapponese?' },
        {
          title: 'Quale profilo aromatico preferisci nelle bevande fermentate?',
        },
        {
          title:
            'Hai mai degustato un sakè a temperatura controllata (caldo o freddo)?',
        },
      ],
      options: [
        'No, è la prima volta',
        'Sì, ma ne so pochissimo',
        'Sì, conosco già questo mondo',
      ],
      skip: 'Salta questionario',
      next: 'Avanti',
      completionTitle: 'Grazie per aver completato la profilazione.',
      completionText:
        'Le tue risposte ci guideranno nella pubblicazione dei prossimi saggi e percorsi tematici.',
      restart: 'Rivedi o ricompila',
    },

    progetto: {
      eyebrow: 'Il progetto Kura',
      title: ['Raccontare il Giappone,', 'una storia alla volta.'],
      lead: [
        'Una piattaforma editoriale indipendente nata per diffondere la cultura della fermentazione e il rispetto per i maestri artigiani dell’arcipelago.',
      ],
      pills: ['Cultura', 'Tradizione', 'Scoperta'],
      newsletterTitle: 'Il viaggio continua.',
      newsletterText:
        'Ricevi saggi mensili, schede di degustazione e resoconti dai viaggi nelle prefetture.',
      newsletterPlaceholder: 'Inserisci il tuo indirizzo email',
      newsletterSubmit: 'Iscriviti',
      newsletterConsent: [
        'Ho letto e accetto l’informativa sulla privacy. Nessun invio commerciale superfluo, solo approfondimenti culturali.',
      ],
      newsletterFeedback:
        'Benvenuto nella community di KURA. Riceverai presto il nostro primo resoconto sulle prefetture storiche.',
    },

    footer: {
      tagline:
        'Monografia e archivio culturale sul Nihonshu giapponese. Tra artigianalità ancestrale e contemplazione sensoriale.',
      groups: [
        {
          title: 'Archivio',
          links: [
            { label: 'Guida alle Denominazioni', href: '#scopri' },
            { label: 'Metodo Tradizionale Kimoto', href: '#produzione' },
            { label: 'Mappa delle Prefetture', href: '#giappone' },
          ],
        },
        {
          title: 'Esperienza',
          links: [
            { label: 'Questionario Sommelier', href: '#questionario' },
            { label: 'Manifesto Curatoriale', href: '#progetto' },
            { label: 'Terminologia Nihonshu', href: '#scopri' },
          ],
        },
        {
          title: 'Colophon',
          text: 'Progetto culturale per sommelier e appassionati di cultura gastronomica giapponese.',
          place: 'Kyoto / Tokyo / Milano',
        },
      ],
      copyright: 'KURA Nihonshu Cultural Project. Tutti i diritti riservati.',
      signature: 'Shizukesa • Wabi • Artisanal Authority',
    },
  },

  mobile: {
    menu: [
      { id: 'scopri', label: 'Cos’è il sakè', number: '01' },
      { id: 'produzione', label: 'Produzione', number: '02' },
      { id: 'giappone', label: 'Territorio & Tōji', number: '03' },
      { id: 'questionario', label: 'Questionario', number: '04' },
      { id: 'progetto', label: 'Il Progetto', number: '05' },
    ],

    hero: {
      badge: 'UN VIAGGIO NELLA CULTURA GIAPPONESE',
      title: ['Conosci davvero il sakè giapponese?'],
      lead: [
        'Scopri un mondo fatto di tradizioni, artigiani, territori e conoscenze tramandate nel tempo. Un viaggio intimo attraverso una delle espressioni più autentiche dello spirito giapponese.',
      ],
      ctaPrimary: 'Inizia a scoprire',
      ctaSecondary: 'La sua storia',
      image: '/images/cantina-kura.jpg',
      imageAlt: 'Antica kura tradizionale in legno con sugidama',
      captionLabel: 'FIG. 01 — KURA',
      captionNote: 'Takayama, Gifu',
    },

    scopri: {
      eyebrow: 'Alla scoperta del sakè',
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
      imageAlt: 'Caraffa tokkuri e coppe ochoko artigianali su legno',
      captionLabel: 'FIG. 02 — VASSOIO DA SERVIZIO',
      captionNote: 'Tokkuri e Ochoko',
      facts: [
        {
          title: 'Storia e Radici Sacre',
          text: 'Un patrimonio culturale sviluppatosi attraverso oltre mille anni di storia.',
        },
        {
          title: 'Artigianato Millenario',
          text: 'Conoscenze, precisione ed esperienza tramandate attraverso le generazioni.',
        },
        {
          title: 'Territorio e Purezza',
          text: 'Un rapporto profondo tra ambiente, materie prime e tradizioni locali.',
        },
      ],
    },

    production: {
      eyebrow: 'L’arte della produzione',
      title: ['Quattro elementi. Un sapere straordinario.'],
      lead: [
        'La complessa limpidezza di gusto nasce dal dialogo armonico tra quattro ingredienti naturali elementari.',
      ],
      elements: [
        {
          number: '01',
          icon: 'grain',
          title: 'Riso (Sakamai)',
          text: 'La materia prima, selezionata e lavorata con cura.',
        },
        {
          number: '02',
          icon: 'water_drop',
          title: 'Acqua (Mizu)',
          text: 'Un elemento fondamentale che contribuisce alle caratteristiche del sakè.',
        },
        {
          number: '03',
          icon: 'spa',
          title: 'Kōji-kin',
          text: 'Un fungo coltivato sul riso, fondamentale per trasformarne l’amido in zuccheri.',
        },
        {
          number: '04',
          icon: 'bubble_chart',
          title: 'Lieviti (Kōbo)',
          text: 'Microrganismi che trasformano gli zuccheri in alcol durante la fermentazione.',
        },
      ],
      processTitle: 'Le principali fasi della produzione',
      processNote: '5 Fasi',
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
        'Schema introduttivo e semplificato. Le tecniche e i passaggi possono variare in base ai metodi produttivi.',
    },

    giappone: {
      eyebrow: 'Cultura e territorio',
      title: ['Ogni territorio racconta una storia.'],
      lead: [
        'Dal nord al sud del Giappone, le tradizioni produttive riflettono il rapporto tra ambiente, materie prime e conoscenze artigianali.',
      ],
      leadSecondary: [
        'Ogni regione custodisce storie di persone, comunità e tecniche sviluppate nel corso delle generazioni.',
      ],
      image: '/images/toji.jpg',
      imageAlt:
        'Il mastro Tōji che ispeziona il riso fumante nei tini di legno',
      captionLabel: 'FIG. 03 — IL MASTRO TŌJI',
      captionNote: '杜氏 (Tōji)',
      boxes: [
        {
          title: 'Le sorgenti e il riso locale',
          text: 'Le caratteristiche dell’acqua e le varietà di riso utilizzate contribuiscono alle scelte e alle tradizioni produttive delle diverse cantine.',
        },
        {
          title: 'Il ciclo delle stagioni',
          text: 'Le condizioni climatiche e il susseguirsi delle stagioni hanno storicamente influenzato l’organizzazione della produzione.',
        },
        {
          title: 'L’esperienza tramandata',
          text: 'Le conoscenze artigianali vengono conservate, condivise e reinterpretate attraverso il lavoro delle persone e delle nuove generazioni.',
        },
      ],
    },

    survey: {
      eyebrow: 'Partecipa al progetto',
      title: ['Quanto conosci il mondo del sakè?'],
      lead: [
        'Bastano tre semplici risposte per aiutarci a costruire percorsi di scoperta più vicini alle tue curiosità.',
      ],
      questions: [
        {
          id: 'q1',
          title: 'Hai mai sentito parlare del sakè giapponese?',
          options: [
            { label: 'No, è la prima volta.', value: 'mai' },
            { label: 'Sì, ma ne so pochissimo.', value: 'poco' },
            { label: 'Sì, conosco già questo mondo.', value: 'conosci' },
          ],
        },
        {
          id: 'q2',
          title: 'Quale aspetto ti incuriosisce maggiormente?',
          options: [
            { label: 'La storia e le tradizioni rituali.', value: 'storia' },
            { label: 'Come viene prodotto e fermentato.', value: 'produzione' },
            { label: 'Le regioni e le antiche cantine.', value: 'regioni' },
            {
              label: 'Abbinamenti gastronomici e calici.',
              value: 'abbinamenti',
            },
          ],
        },
        {
          id: 'q3',
          title:
            'Ti piacerebbe scoprire altri contenuti sulla cultura del sakè?',
          options: [
            { label: 'Sì, desidero approfondire.', value: 'molto' },
            { label: 'Forse, occasionalmente.', value: 'forse' },
            { label: 'Non particolarmente.', value: 'no' },
          ],
        },
      ],
      skip: 'Salta questionario',
      back: '← Indietro',
      next: 'Avanti',
      submit: 'Completa',
      completionTitle: 'Grazie per esserti unito al viaggio!',
      completionText:
        'Le tue risposte ci guideranno nella pubblicazione dei prossimi saggi e percorsi tematici.',
      restart: 'Rivedi o ricompila',
    },

    progetto: {
      eyebrow: 'Il progetto KURA',
      title: ['Raccontare il Giappone, una storia alla volta.'],
      lead: [
        'KURA nasce come iniziativa editoriale indipendente e no-profit per divulgare in Italia la vera cultura del sakè artigianale, superando i cliché occidentali per dare voce ai maestri e ai territori.',
      ],
      pillars: [
        {
          icon: 'auto_stories',
          title: 'Cultura',
          text: 'Approfondimenti storici, rituali shintoisti e saggi monografici senza filtri commerciali.',
        },
        {
          icon: 'handyman',
          title: 'Tradizione',
          text: 'Il rispetto rigoroso per il lavoro dei mastri Tōji e delle antiche cantine a conduzione familiare.',
        },
        {
          icon: 'explore',
          title: 'Scoperta',
          text: 'Mappe territoriali, guide alla degustazione consapevole e itinerari tra le prefetture meno note.',
        },
      ],
      newsletterLabel: 'La corrispondenza',
      newsletterTitle: 'Il viaggio continua.',
      newsletterText:
        'Iscriviti per ricevere quaderni culturali inediti, interviste ai produttori e anteprime delle nostre pubblicazioni.',
      newsletterPlaceholder: 'Il tuo indirizzo email',
      newsletterSubmit: 'Resta aggiornato →',
      newsletterConsent: [
        'Accetto l’informativa sulla privacy per la ricezione delle comunicazioni culturali.',
      ],
      newsletterFeedback: 'Grazie per esserti unito al viaggio!',
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
      tagline: 'Cultura, tradizione e territorio giapponese.',
      links: [
        { id: 'scopri', label: 'Cos’è il sakè', href: '#scopri' },
        { id: 'produzione', label: 'Produzione', href: '#produzione' },
        { id: 'giappone', label: 'Territorio', href: '#giappone' },
        { id: 'questionario', label: 'Questionario', href: '#questionario' },
        { id: 'progetto', label: 'Il Progetto', href: '#progetto' },
        { id: 'note', label: 'Note Legali', href: '#note-legali' },
      ],
      copyright: 'KURA Rivista Culturale.',
      note: 'Tutti i diritti riservati. Progetto editoriale no-profit.',
    },
  },
};
