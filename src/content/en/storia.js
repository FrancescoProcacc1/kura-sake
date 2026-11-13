/* Content of the "The History of Sake" page, per layout variant. */

export const STORIA = {
  desktop: {
    meta: {
      title: 'The history of Japanese sake: origins and traditions | KURA',
      description:
        'Discover the history of Japanese sake: from its origins to traditional breweries, through centuries of culture, craftsmanship and UNESCO heritage.',
    },

    hero: {
      eyebrow: 'HISTORY AND TRADITION',
      title: 'A story more than a thousand years in the making.',
      lead: 'From the ancient testimony of Japan to contemporary breweries, the history of sake crosses centuries of cultural change, innovation and knowledge handed down between generations. It is not merely the story of a fermented rice beverage. It is also the account of a profound relationship between Japanese communities, the land, spirituality and craft knowledge. Let us discover how this tradition evolved over time.',
      image: '/images/kura-sugidama.jpg',
      imageAlt:
        'Historic facade of a traditional kura with a cedar sugidama',
      badge: 'Hida Takayama — Ancient Kura with Sugidama',
      caption:
        'Entrance of a historic artisanal brewery in Takayama with a sugidama (ball of cedar needles) signaling that the new season’s sake is ready.',
      captionLabel: 'Kura Monographic Archive',
    },

    origini: {
      id: 'origini',
      eyebrow: '01 / THE ORIGINS',
      title: 'The first traces of a millennia-old tradition',
      image: '/images/kura-origini.jpg',
      imageAlt:
        'Ancient terraced rice fields in mountainous Japan at first light',
      tag: 'Origins · 弥生時代',
      caption:
        'Rice cultivation and water landscapes: the primordial agrarian context in which the first forms of ceremonial fermentation were born.',
      paragraphs: [
        'The exact origins of sake are not known with certainty. The earliest forms of rice-based fermented beverages date back to antiquity and developed in a context closely tied to the spread of rice cultivation across the Japanese archipelago. The oldest written records date to the 3rd century AD, when Chinese chronicles described social practices connected to the consumption of alcoholic beverages among the peoples of the archipelago.',
        'The techniques used then differed from those of today. Only through a long evolution of knowledge about fermentation and the use of kōji would the methods that characterize contemporary sake production gradually take shape. During the 7th and 8th centuries, this activity acquired an increasingly structured organization at the imperial court. A significant milestone dates to 689, when sources document a court office dedicated to the production of sake.',
        'In the Nara period (710–794), numerous records appear concerning fermented beverages, their characteristics and their ceremonial uses. The history of sake cannot be traced back to a single date of invention: it is the outcome of a cultural and technical process that unfolded over many centuries.',
      ],
      didYouKnow: {
        title: 'Did you know?',
        text: 'In 927, during the Heian period, the compilation of the Engishiki was completed, an important administrative text that also documents the methods and organization of sake production at the imperial court.',
        em: 'Engishiki',
      },
    },

    evoluzione: {
      id: 'produzione',
      eyebrow: '02 / THE EVOLUTION',
      title: 'Sake through the centuries',
      lead: 'From imperial institutions to independent breweries, sake production transformed together with Japanese society.',
      periods: [
        {
          kanji: '奈良',
          era: '710 – 794 AD',
          title: 'Nara Period | Production at the imperial court',
          text: 'During the Nara period, sake production was tied to the imperial court and to ceremonial activities. Documents of the time attest to the existence of different preparations and of an organization dedicated to production. Rice-based fermented beverages were part of the life of institutions and of the cultural practices of the age.',
          more: {
            label: 'Historical detail:',
            text: 'The Nara period represents a key milestone in the historical documentation of sake. The written records reveal a tradition that was already articulated, though still very different from contemporary production techniques.',
          },
        },
        {
          kanji: '平安',
          era: '794 – 1185 AD',
          title: 'Heian Period | From the court to religious institutions',
          text: 'During the Heian period, production-related knowledge continued to develop. The historical record shows the role of the court, while temples and shrines gradually gained importance in production and in the transmission of knowledge. In 927, the Engishiki collected descriptions of production methods and administrative practices that today constitute a precious historical testimony.',
          more: {
            label: 'Historical detail:',
            text: 'The sources of this period help us understand how production was embedded in a complex system of political organization, ritual and social life.',
          },
        },
        {
          kanji: '室町',
          era: '1185 – 1573 AD',
          title:
            'Kamakura and Muromachi Periods | The growth of breweries and craft knowledge',
          text: 'Between the 12th and the 16th centuries, production developed at temples, shrines and independent commercial establishments. Techniques were progressively refined, and production began to take on an increasingly significant economic role. In 1425, sources document the presence of 342 sake-related businesses in Kyoto. The evolution of processing methods and equipment contributed to the growth of production capacity.',
          more: {
            label: 'Historical detail:',
            text: 'During these centuries, methods were developed and perfected that would profoundly shape later production. Records from the 16th century also document the use of heat to preserve sake, a practice that historically predates the studies of Louis Pasteur.',
          },
        },
        {
          kanji: '江戸',
          era: '1603 – 1868 AD',
          title: 'Edo Period | The birth of a great productive enterprise',
          text: 'The Edo period was a phase of expansion and commercial organization. Production centers such as Itami and, later, Nada rose to great prominence. Sake was transported and distributed through increasingly developed trade networks, reaching as far as the city of Edo, present-day Tokyo. This growth fostered new forms of organization, specialization and quality control.',
          more: {
            label: 'Historical detail:',
            text: 'In the Edo period, production methods, rice-processing techniques and trade practices took hold that would help define the modern industry. Production became an integral part of the economic life of many Japanese communities.',
          },
        },
        {
          kanji: '明治',
          era: '1868 – Mid-20th century',
          title:
            'Meiji Period and the first half of the 20th century | Tradition meets science',
          text: 'With the modernization of Japan, sake production too entered a new phase. Traditional knowledge began to be complemented by scientific studies of fermentation and by the gradual introduction of new technologies. In 1878, sake began to be sold in glass bottles. In 1904, the National Research Institute of Brewing was founded, an institute destined to contribute to the study and improvement of production techniques.',
          more: {
            label: 'Historical detail:',
            text: 'Scientific research made it possible to deepen the understanding of microorganisms and fermentation processes, contributing to the evolution of quality and production.',
          },
        },
        {
          kanji: '現代',
          era: 'From 1945 to the present day',
          title:
            'From the postwar years to today | A tradition in continuous evolution',
          text: 'In the postwar years, the industry underwent major transformations thanks to industrialization and the changes taking place in Japanese society. During the 1980s, interest grew in styles such as ginjō-shu, characterized by distinctive production methods. In 1990, a classification system based on characteristics and production methods came into force. In recent decades, alongside contemporary technologies, attention has grown toward territorial identity, small artisanal producers and the preservation of traditional knowledge.',
          more: {
            label: 'Historical detail:',
            text: 'The contemporary history of sake shows how innovation and tradition can coexist. Breweries continue to interpret a shared heritage through different approaches, shaped by the territory, by technical knowledge and by the choices of producers.',
          },
        },
      ],
    },

    cultura: {
      id: 'giappone',
      eyebrow: '03 / CULTURE AND SPIRITUALITY',
      title: 'Between spirituality and tradition',
      paragraphs: [
        'For centuries, sake has held a significant place in Japanese cultural and religious practices. In Shinto it has traditionally been used in ritual offerings and ceremonies, in a context where the relationship between human beings, nature and deities plays a central role. Its presence is also found in festivals, weddings and other communal occasions.',
        'The cultural meaning of sake therefore goes beyond its material production: it encompasses symbols, rituals and forms of social relationship that have evolved over time. Buddhist temples and Shinto shrines also played an important role in the history of production knowledge. This relationship between spirituality and craftsmanship helps explain why the history of sake is so deeply intertwined with that of Japan.',
      ],
      didYouKnow: {
        title: 'Did you know? — The Barrels at the Shrines',
        text: 'At some Japanese shrines you can observe large decorative sake barrels, often donated by producers and associated with local religious traditions. They are a visible testament to the bond between the world of production and cultural and spiritual institutions.',
      },
      image: '/images/kura-rituale.jpg',
      imageAlt: 'Decorative kazaridaru barrels and ceremonial sake ceramics',
      tag: 'Ritual · お神酒',
      caption:
        'Ceramics and traditional barrels: the ritual dimension of nihonshu preserved in the forms of worship and celebration.',
    },

    artigianale: {
      eyebrow: '04 / CRAFT KNOWLEDGE',
      title: 'The kura, keepers of an ancient knowledge',
      lead: 'To understand the history of sake, one must also know the places and the people who passed its knowledge down. Japanese breweries, often referred to by the term sakagura, are places where tradition, experience and technical expertise meet.',
      image: '/images/kura-toji.jpg',
      imageAlt: 'A tōji master at work with steamed rice',
      imageTag: 'The artisan’s gesture',
      imageTitle:
        'Steamed rice examined with rigor: the moment when experience guides the fermentation.',
      imageCredit: 'KURA Documentary',
      narrative:
        'Over the centuries, production knowledge has been transmitted through hands-on learning, collaboration and the experience gained across the different stages of the craft. The tōji, traditionally in charge of production, played a fundamental role in managing the work and passing on skills. Alongside the tōji work the kurabito, the brewery’s specialized workers. The evolution of tools and technologies has not erased the value of craft knowledge. Still today, many producers preserve and reinterpret practices developed across generations.',
      glossary: [
        {
          term: 'Kura — 蔵',
          label: 'The Places',
          strong: ['kura', 'sakagura'],
          text: 'In the context of sake, the term kura evokes the traditional buildings used for production or storage. The word sakagura more precisely indicates a sake brewery.',
        },
        {
          term: 'Tōji — 杜氏',
          label: 'The Guide',
          strong: ['tōji'],
          text: 'The tōji is the head of production, a figure associated with technical expertise, the organization of the work and the transmission of knowledge.',
        },
        {
          term: 'Kurabito — 蔵人',
          label: 'The Team',
          strong: ['kurabito'],
          text: 'The kurabito are the brewery workers, who take part in production activities and help preserve artisanal skills.',
        },
      ],
    },

    contemporaneo: {
      eyebrow: '05 / CONTEMPORARY SAKE',
      title: 'A tradition that keeps evolving',
      paragraphs: [
        'The history of sake does not belong to the past alone. Contemporary breweries live alongside technological change, new forms of organization and a growing international interest in Japanese culture. Some producers champion traditional methods, while others complement craft knowledge with scientific tools and modern technologies. At the same time, interest has grown in the character of individual territories and in the preservation of local knowledge.',
        'A particularly significant recognition came in December 2024, when UNESCO inscribed the traditional Japanese knowledge and techniques for producing alcoholic beverages through fermentation with kōji on the Representative List of the Intangible Cultural Heritage of Humanity. The recognition does not concern a single beverage, but a heritage of knowledge and craft skills used, among other things, in the production of nihonshu, shōchū, awamori and mirin.',
        'It is a recognition of the cultural value of the people, the traditions and the knowledge that continue to be passed down. The history of sake is therefore a story still being written: a heritage that changes over time without losing its bond with its origins.',
      ],
      unesco: {
        icon: 'check_circle',
        title: 'UNESCO Intangible Cultural Heritage — 2024',
        text: 'In December 2024, UNESCO recognized the traditional Japanese knowledge and techniques for producing alcoholic beverages through fermentation with kōji as intangible cultural heritage of humanity. The recognition concerns craft knowledge and its transmission, not sake as a single product.',
        linkLabel: 'Read the official UNESCO entry',
        linkHref:
          'https://ich.unesco.org/en/RL/traditional-knowledge-and-skills-of-sake-making-with-koji-mold-in-japan-01977',
      },
    },

    cta: {
      eyebrow: 'DEEP DIVE',
      kanji: '酒',
      title: 'The story is only the beginning.',
      lead: 'Behind every brewery lie centuries of knowledge, people and territories. Having discovered how this tradition evolved, the journey can continue through the places and processes that still preserve its identity today.',
      primary: { label: 'Discover how sake is made →', to: '/en/#produzione' },
      secondary: { label: 'Back to homepage', to: '/en' },
    },

    fonti: {
      eyebrow: 'BIBLIOGRAPHY & ARCHIVE',
      title: 'The sources behind our research',
      lead: 'This article was developed on the basis of Japanese historical and institutional documentation.',
      items: [
        {
          title:
            'Japan Sake and Shochu Makers Association (JSS) — The History of Japanese Sake',
          label: 'Read the source',
          href: 'https://japansake.or.jp/sake/en/basic/japanese-sake-history/',
        },
        {
          title:
            'National Research Institute of Brewing (NRIB) — A Comprehensive Guide to Japanese Sake',
          label: 'Read PDF',
          href: 'https://www.nrib.go.jp/English/sake/pdf/guidesse01.pdf',
        },
        {
          title:
            'National Research Institute of Brewing (NRIB) — The Story of Sake',
          label: 'Read PDF',
          href: 'https://www.nrib.go.jp/English/sake/pdf/SakeNo01_en.pdf',
        },
        {
          title:
            'UNESCO — Traditional knowledge and skills of sake-making with koji mold in Japan',
          label: 'Read the source',
          href: 'https://ich.unesco.org/en/RL/traditional-knowledge-and-skills-of-sake-making-with-koji-mold-in-japan-01977',
        },
        {
          title:
            'National Tax Agency of Japan — Traditional knowledge and skills of sake-making with koji mold in Japan',
          label: 'Read the source',
          href: 'https://www.nta.go.jp/traditional_sake_making/english/index.htm',
        },
        {
          title:
            'Japan Sake and Shochu Makers Association — Glossary of Sake Terms',
          label: 'Read the source',
          href: 'https://japansake.or.jp/sake/en/basic/glossary/',
        },
      ],
    },
  },
};
