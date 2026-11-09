/* Contenuti della pagina "La storia del sakè", per variante di layout. */

export const STORIA = {
  desktop: {
    meta: {
      title: 'La storia del sakè giapponese: origini e tradizioni | KURA',
      description:
        'Scopri la storia del sakè giapponese: dalle origini alle cantine tradizionali, attraverso i secoli, la cultura e il patrimonio UNESCO.',
    },

    hero: {
      eyebrow: 'STORIA E TRADIZIONE',
      title: 'Una storia lunga oltre mille anni.',
      lead: 'Dalle antiche testimonianze del Giappone alle cantine contemporanee, la storia del sakè attraversa secoli di trasformazioni culturali, innovazioni e conoscenze tramandate tra generazioni. Non è soltanto la storia di una bevanda fermentata a base di riso. È anche il racconto di un rapporto profondo tra le comunità giapponesi, il territorio, la spiritualità e il sapere artigianale. Scopriamo come questa tradizione si è evoluta nel tempo.',
      image: '/images/cantina-kura.jpg',
      imageAlt:
        'Facciata storica di una kura tradizionale con sugidama in legno di cedro',
      badge: 'Hida Takayama — Antica Kura con Sugidama',
      caption:
        'Ingresso di una storica manifattura artigianale a Takayama con sugidama (sfera di aghi di cedro) a indicare la maturazione della nuova annata.',
      captionLabel: 'Archivio Monografico Kura',
    },

    origini: {
      id: 'origini',
      eyebrow: '01 / LE ORIGINI',
      title: 'Le prime tracce di una tradizione millenaria',
      image: '/images/storia-origini.jpg',
      imageAlt:
        'Risaie terrazzate ancestrali nel Giappone montano alle prime luci',
      tag: 'Origini · 弥生時代',
      caption:
        "Coltivazione del riso e paesaggi d'acqua: il contesto agrario primigenio in cui nacquero le prime forme di fermentazione cerimoniale.",
      paragraphs: [
        "Le origini esatte del sakè non sono conosciute con certezza. Le prime forme di bevande fermentate a base di riso risalgono all'antichità e si svilupparono in un contesto strettamente legato alla diffusione della risicoltura nell'arcipelago giapponese. Le testimonianze scritte più antiche risalgono al III secolo d.C., quando alcune cronache cinesi descrivevano pratiche sociali legate al consumo di bevande alcoliche tra le popolazioni dell'arcipelago.",
        "Le tecniche utilizzate allora erano differenti da quelle attuali. Solo attraverso una lunga evoluzione delle conoscenze sulla fermentazione e sull'impiego del kōji si sarebbero sviluppati i metodi che caratterizzano la produzione del sakè contemporaneo. Durante il VII e l'VIII secolo, questa attività acquisì un'organizzazione sempre più strutturata presso la corte imperiale. Un passaggio significativo risale al 689, quando le fonti documentano un'organizzazione di corte dedicata alla produzione del sakè.",
        "Nel periodo Nara (710–794) compaiono numerose testimonianze relative alle bevande fermentate, alle loro caratteristiche e agli impieghi cerimoniali. La storia del sakè non può essere ricondotta a una singola data di invenzione: è il risultato di un processo culturale e tecnico sviluppatosi nell'arco di molti secoli.",
      ],
      didYouKnow: {
        title: 'Lo sapevi?',
        text: "Nel 927, durante il periodo Heian, fu completata la compilazione dell'Engishiki, un importante testo amministrativo che documenta anche metodi e organizzazione della produzione del sakè presso la corte imperiale.",
        em: 'Engishiki',
      },
    },

    evoluzione: {
      id: 'produzione',
      eyebrow: "02 / L'EVOLUZIONE",
      title: 'Il sakè attraverso i secoli',
      lead: 'Dalle istituzioni imperiali alle cantine indipendenti, la produzione del sakè si è trasformata insieme alla società giapponese.',
      periods: [
        {
          kanji: '奈良',
          era: '710 – 794 d.C.',
          title: 'Periodo Nara | La produzione presso la corte imperiale',
          text: "Nel periodo Nara la produzione del sakè era legata alla corte imperiale e alle attività cerimoniali. I documenti dell'epoca testimoniano l'esistenza di differenti preparazioni e un'organizzazione dedicata alla produzione. Le bevande fermentate a base di riso erano parte della vita delle istituzioni e delle pratiche culturali del tempo.",
          more: {
            label: 'Dettaglio storico:',
            text: 'Il periodo Nara rappresenta un passaggio fondamentale per la documentazione storica del sakè. Le testimonianze scritte permettono di osservare una tradizione già articolata, sebbene ancora molto diversa dalle tecniche produttive contemporanee.',
          },
        },
        {
          kanji: '平安',
          era: '794 – 1185 d.C.',
          title: 'Periodo Heian | Dalla corte alle istituzioni religiose',
          text: "Durante il periodo Heian le conoscenze legate alla produzione continuarono a svilupparsi. La documentazione storica mostra il ruolo della corte, mentre templi e santuari acquisirono progressivamente importanza nella produzione e nella trasmissione delle conoscenze. Nel 927 l'Engishiki raccolse descrizioni di metodi produttivi e pratiche amministrative che oggi costituiscono una preziosa testimonianza storica.",
          more: {
            label: 'Dettaglio storico:',
            text: 'Le fonti di questo periodo aiutano a comprendere come la produzione fosse inserita in un sistema complesso di organizzazione politica, ritualità e vita sociale.',
          },
        },
        {
          kanji: '室町',
          era: '1185 – 1573 d.C.',
          title:
            'Periodi Kamakura e Muromachi | La crescita delle cantine e delle conoscenze artigianali',
          text: "Tra il XII e il XVI secolo la produzione si sviluppò presso templi, santuari e attività commerciali indipendenti. Le tecniche furono progressivamente perfezionate e la produzione iniziò ad assumere un ruolo economico sempre più significativo. Nel 1425 le fonti documentano la presenza di 342 attività legate al sakè a Kyoto. L'evoluzione delle lavorazioni e delle attrezzature contribuì alla crescita delle capacità produttive.",
          more: {
            label: 'Dettaglio storico:',
            text: "Durante questi secoli vennero sviluppati e perfezionati metodi che avrebbero influenzato profondamente la produzione successiva. Le testimonianze del XVI secolo documentano anche l'impiego del calore per la conservazione del sakè, una pratica storicamente precedente agli studi di Louis Pasteur.",
          },
        },
        {
          kanji: '江戸',
          era: '1603 – 1868 d.C.',
          title: 'Periodo Edo | La nascita di una grande attività produttiva',
          text: "Il periodo Edo rappresentò una fase di espansione e organizzazione commerciale. Centri produttivi come Itami e, successivamente, Nada acquisirono grande importanza. Il sakè veniva trasportato e distribuito attraverso reti commerciali sempre più sviluppate, raggiungendo anche la città di Edo, l'attuale Tokyo. La crescita delle attività favorì nuove forme di organizzazione, specializzazione e controllo della qualità.",
          more: {
            label: 'Dettaglio storico:',
            text: 'Nel periodo Edo si consolidarono metodi di produzione, tecniche di lavorazione del riso e pratiche commerciali che contribuirono a definire il settore moderno. La produzione divenne parte integrante della vita economica di numerose comunità giapponesi.',
          },
        },
        {
          kanji: '明治',
          era: '1868 – Metà Novecento',
          title:
            "Periodo Meiji e prima metà del Novecento | L'incontro tra tradizione e scienza",
          text: "Con la modernizzazione del Giappone, anche la produzione del sakè entrò in una nuova fase. Le conoscenze tradizionali iniziarono a essere affiancate da studi scientifici sulla fermentazione e dalla progressiva introduzione di nuove tecnologie. Nel 1878 comparve la commercializzazione del sakè in bottiglie di vetro. Nel 1904 fu fondato il National Research Institute of Brewing, un istituto destinato a contribuire allo studio e al miglioramento delle tecniche produttive.",
          more: {
            label: 'Dettaglio storico:',
            text: "La ricerca scientifica permise di approfondire il ruolo dei microrganismi e dei processi fermentativi, contribuendo all'evoluzione della qualità e della produzione.",
          },
        },
        {
          kanji: '現代',
          era: 'Dal 1945 a oggi',
          title:
            'Dal secondo dopoguerra a oggi | Una tradizione in continua evoluzione',
          text: "Nel secondo dopoguerra il settore conobbe importanti trasformazioni grazie all'industrializzazione e ai cambiamenti della società giapponese. Nel corso degli anni Ottanta crebbe l'interesse verso stili come il ginjō-shu, caratterizzati da particolari metodi produttivi. Nel 1990 entrò in vigore un sistema di classificazione basato sulle caratteristiche e sui metodi di produzione. Negli ultimi decenni, accanto alle tecnologie contemporanee, è cresciuta l'attenzione verso l'identità territoriale, le piccole realtà artigianali e la conservazione delle conoscenze tradizionali.",
          more: {
            label: 'Dettaglio storico:',
            text: 'La storia contemporanea del sakè mostra come innovazione e tradizione possano convivere. Le cantine continuano a interpretare un patrimonio comune attraverso approcci differenti, influenzati dal territorio, dalle conoscenze tecniche e dalle scelte dei produttori.',
          },
        },
      ],
    },

    cultura: {
      id: 'giappone',
      eyebrow: '03 / CULTURA E SPIRITUALITÀ',
      title: 'Tra spiritualità e tradizione',
      paragraphs: [
        "Il sakè occupa da secoli un posto significativo nelle pratiche culturali e religiose giapponesi. Nello shintoismo viene tradizionalmente utilizzato in offerte rituali e cerimonie, in un contesto in cui il rapporto tra esseri umani, natura e divinità riveste un ruolo centrale. La sua presenza si ritrova anche in festività, matrimoni e altre occasioni comunitarie.",
        "Il significato culturale del sakè va quindi oltre la sua produzione materiale: comprende simboli, rituali e forme di relazione sociale che si sono evoluti nel tempo. Anche templi buddhisti e santuari shintoisti hanno avuto un ruolo importante nella storia delle conoscenze produttive. Questa relazione tra spiritualità e artigianato contribuisce a spiegare perché la storia del sakè sia così profondamente intrecciata con quella del Giappone.",
      ],
      didYouKnow: {
        title: 'Lo sapevi? — Le Botti nei Santuari',
        text: "Presso alcuni santuari giapponesi si possono osservare grandi botti decorative di sakè, spesso offerte da produttori e associate alle tradizioni religiose locali. Sono una testimonianza visibile del legame tra il mondo della produzione e le istituzioni culturali e spirituali.",
      },
      image: '/images/hero-utsuwa.jpg',
      imageAlt: 'Botti decorative kazaridaru e ceramiche cerimoniali del sakè',
      tag: 'Rituale · お神酒',
      caption:
        'Ceramiche e botti tradizionali: la ritualità del nihonshu custodita nelle forme del culto e della festa.',
    },

    artigianale: {
      eyebrow: '04 / IL SAPERE ARTIGIANALE',
      title: 'Le kura, custodi di un sapere antico',
      lead: "Per comprendere la storia del sakè è necessario conoscere anche i luoghi e le persone che ne hanno tramandato le conoscenze. Le cantine giapponesi, spesso indicate con il termine sakagura, sono luoghi nei quali tradizione, esperienza e competenza tecnica si incontrano.",
      image: '/images/toji.jpg',
      imageAlt: "Maestro Toji all'opera con il riso al vapore",
      imageTag: 'Il gesto artigianale',
      imageTitle:
        'Il riso al vapore esaminato con rigore sensoriale: il momento in cui l\u2019esperienza guida la fermentazione.',
      imageCredit: 'Documentario KURA',
      narrative:
        "Nel corso dei secoli, le conoscenze produttive sono state trasmesse attraverso l'apprendimento pratico, la collaborazione e l'esperienza maturata nelle diverse fasi della lavorazione. La figura del tōji, tradizionalmente responsabile della produzione, ha avuto un ruolo fondamentale nella gestione del lavoro e nella trasmissione delle competenze. Accanto al tōji operano i kurabito, i lavoratori specializzati della cantina. L'evoluzione degli strumenti e delle tecnologie non ha cancellato il valore delle conoscenze artigianali. Ancora oggi, molte realtà produttive conservano e reinterpretano pratiche sviluppate attraverso le generazioni.",
      glossary: [
        {
          term: 'Kura — 蔵',
          label: 'I Luoghi',
          strong: ['kura', 'sakagura'],
          text: 'Nel contesto del sakè, il termine kura richiama gli edifici tradizionali destinati alla produzione o alla conservazione. La parola sakagura indica più precisamente una cantina di sakè.',
        },
        {
          term: 'Tōji — 杜氏',
          label: 'La Guida',
          strong: ['tōji'],
          text: "Il tōji è il responsabile della produzione, una figura legata alla competenza tecnica, all'organizzazione del lavoro e alla trasmissione delle conoscenze.",
        },
        {
          term: 'Kurabito — 蔵人',
          label: 'La Squadra',
          strong: ['kurabito'],
          text: 'I kurabito sono i lavoratori della cantina, che partecipano alle attività produttive e contribuiscono alla conservazione delle competenze artigianali.',
        },
      ],
    },

    contemporaneo: {
      eyebrow: '05 / IL SAKÈ CONTEMPORANEO',
      title: 'Una tradizione che continua a evolversi',
      paragraphs: [
        "La storia del sakè non appartiene soltanto al passato. Le cantine contemporanee convivono con cambiamenti tecnologici, nuove forme di organizzazione e una crescente attenzione internazionale verso la cultura giapponese. Alcuni produttori valorizzano metodi tradizionali, mentre altri affiancano al sapere artigianale strumenti scientifici e tecnologie moderne. Parallelamente, è cresciuto l'interesse per le caratteristiche dei territori e per la conservazione delle conoscenze locali.",
        "Un riconoscimento particolarmente significativo è arrivato nel dicembre 2024, quando l'UNESCO ha inserito le conoscenze e tecniche tradizionali giapponesi di produzione delle bevande alcoliche mediante kōji nella Lista rappresentativa del patrimonio culturale immateriale dell'umanità. Il riconoscimento non riguarda una singola bevanda, ma un patrimonio di conoscenze e competenze artigianali utilizzato, tra le altre cose, nella produzione di nihonshu, shōchū, awamori e mirin.",
        'È un riconoscimento del valore culturale delle persone, delle tradizioni e delle conoscenze che continuano a essere trasmesse. La storia del sakè è quindi una storia ancora aperta: un patrimonio che cambia nel tempo, senza perdere il legame con le proprie origini.',
      ],
      unesco: {
        icon: 'check_circle',
        title: 'Patrimonio culturale immateriale UNESCO — 2024',
        text: "Nel dicembre 2024 l'UNESCO ha riconosciuto le conoscenze e tecniche tradizionali giapponesi di produzione delle bevande alcoliche mediante kōji come patrimonio culturale immateriale dell'umanità. Il riconoscimento riguarda il sapere artigianale e la sua trasmissione, non il sakè come singolo prodotto.",
        linkLabel: 'Consulta la scheda ufficiale UNESCO',
        linkHref:
          'https://ich.unesco.org/en/RL/traditional-knowledge-and-skills-of-sake-making-with-koji-mold-in-japan-01977',
      },
    },

    cta: {
      eyebrow: 'APPROFONDIMENTO',
      kanji: '酒',
      title: 'La storia è soltanto l\u2019inizio.',
      lead: 'Dietro ogni cantina si incontrano secoli di conoscenze, persone e territori. Dopo aver scoperto come si è evoluta questa tradizione, il viaggio può continuare attraverso i luoghi e i processi che ancora oggi ne custodiscono l\u2019identità.',
      primary: { label: 'Scopri come nasce il sakè →', to: '/#produzione' },
      secondary: { label: 'Torna alla homepage', to: '/' },
    },

    fonti: {
      eyebrow: 'BIBLIOGRAFIA & ARCHIVIO',
      title: 'Le fonti della nostra ricerca',
      lead: 'Questo articolo è stato elaborato sulla base di documentazione storica e istituzionale giapponese.',
      items: [
        {
          title: 'Japan Sake and Shochu Makers Association (JSS) — The History of Japanese Sake',
          label: 'Consulta la fonte',
          href: 'https://japansake.or.jp/sake/en/basic/japanese-sake-history/',
        },
        {
          title: 'National Research Institute of Brewing (NRIB) — A Comprehensive Guide to Japanese Sake',
          label: 'Consulta PDF',
          href: 'https://www.nrib.go.jp/English/sake/pdf/guidesse01.pdf',
        },
        {
          title: 'National Research Institute of Brewing (NRIB) — The Story of Sake',
          label: 'Consulta PDF',
          href: 'https://www.nrib.go.jp/English/sake/pdf/SakeNo01_en.pdf',
        },
        {
          title: 'UNESCO — Traditional knowledge and skills of sake-making with koji mold in Japan',
          label: 'Consulta la fonte',
          href: 'https://ich.unesco.org/en/RL/traditional-knowledge-and-skills-of-sake-making-with-koji-mold-in-japan-01977',
        },
        {
          title: 'National Tax Agency of Japan — Traditional knowledge and skills of sake-making with koji mold in Japan',
          label: 'Consulta la fonte',
          href: 'https://www.nta.go.jp/traditional_sake_making/english/index.htm',
        },
        {
          title: 'Japan Sake and Shochu Makers Association — Glossary of Sake Terms',
          label: 'Consulta la fonte',
          href: 'https://japansake.or.jp/sake/en/basic/glossary/',
        },
      ],
    },
  },
};
