# kura-sake

Progetto web **React + Vite + JavaScript** (nessun TypeScript), con **Tailwind CSS 4** e **oxlint** come linter.

Il progetto contiene la **landing monografica KURA**, tema culturale dedicato al sakè giapponese. Ricostruita da un prototipo HTML statico (Tailwind CDN v3): una sola pagina, sei sezioni, con il design system del prototipo tradotto in token CSS e tutti gli asset serviti in locale (`public/`), senza dipendenze esterne a runtime.

La landing è disponibile in **tre varianti di layout** (desktop, tablet, mobile), ognuna portata dal rispettivo prototipo: la variante desktop replica il rendering dell'originale verificato **pixel per pixel** (differenza residua **0,015%**, 1.087 px su 7,5M, dovuta al kerning di 0,32 px sulle 4 parole contenenti "ō"); le varianti tablet e mobile seguono i propri prototipi, con palette, tipografia e componenti dedicati.

## Stack

| Tool         | Versione |
| ------------ | -------- |
| React        | 19       |
| Vite         | 8        |
| Tailwind CSS | 4        |
| oxlint       | 1.x      |
| Prettier     | 3        |
| Node.js      | >= 20.19 |

## Requisiti

- Node.js `^20.19.0 || >=22.12.0`
- npm 10+

## Installazione

```bash
npm install
```

## Script

| Script            | Descrizione                                             |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Server di sviluppo Vite su `http://localhost:5173`      |
| `npm run build`   | Build di produzione in `dist/`                          |
| `npm run lint`    | Lint con oxlint (0 errori, 0 warning)                   |
| `npm run preview` | Serve la build di produzione su `http://localhost:4173` |
| `npm run format`  | Format con Prettier                                     |

## Struttura

```
kura-sake/
├── public/            # file statici serviti da Vite
│   ├── fonts/         # Manrope, Noto Serif (normale+corsivo, subset latin/latin-ext)
│   │                  # + Material Symbols Outlined (sottoinsieme 15 glifi)
│   └── images/        # fotografie delle sezioni + logo
├── src/
│   ├── components/    # componenti riutilizzabili (JSX + CSS affiancato)
│   │   ├── mobile/    # header, drawer, footer e questionario della variante mobile
│   │   └── tablet/    # footer, questionario e token della variante tablet
│   ├── content/       # copy e dati della landing, divisi per variante
│   ├── hooks/         # useMediaQuery (switch delle varianti)
│   ├── pages/         # pagine/route (JSX + CSS affiancato)
│   │   └── home/      # DesktopHome, TabletHome, MobileHome
│   ├── assets/        # riservata, attualmente vuota
│   ├── common.css     # primitive condivise dalle sezioni desktop
│   ├── App.jsx        # mappa delle rotte
│   ├── index.css      # @font-face + token di design + base
│   └── main.jsx       # entry point
├── .vscode/           # raccomandazioni estensioni e settings di workspace
├── .oxlintrc.json
├── .prettierrc
├── index.html
├── jsconfig.json
└── vite.config.js
```

### Le tre varianti di layout

La landing esiste in tre design distinti, ognuno pensato per un intervallo di
larghezza. Lo switch avviene **a runtime** con `matchMedia`
(`src/hooks/useMediaQuery.js`): nel DOM è presente una sola variante, quindi i
testi non vengono duplicati per screen reader e crawler, e la scelta è già
definita al primo render (nessun flash di layout).

| Larghezza    | Variante      | Sorgente                       |
| ------------ | ------------- | ------------------------------ |
| `< 768px`    | `MobileHome`  | colonna 390px + drawer         |
| `768–1279px` | `TabletHome`  | colonna 840px, token M3        |
| `>= 1280px`  | `DesktopHome` | shell 1440px, token editoriali |

`src/pages/Home.jsx` è il dispatcher: sceglie la variante e la monta. Il
contenuto (copy, etichette, dati) sta in `src/content/landing.js`, diviso per
variante: i dati restano condivisi, i testi divergono come nei prototipi.

| Contenuto           | Desktop             | Tablet                      | Mobile                        |
| ------------------- | ------------------- | --------------------------- | ----------------------------- |
| Palette             | `--color-*`         | `--t-*` (Material 3)        | `--color-*`                   |
| Card elementi       | 4 in fila           | 2×2 con kanji               | 2×2 con icone                 |
| Timeline produzione | 5 colonne           | 5 card                      | verticale con termine tecnico |
| Punti chiave        | 3 colonne           | 3 card con kanji            | lista con divisori e numeri   |
| Quiz                | radio con dot       | bottoni con marker quadrato | radio native                  |
| Concetti finali     | 3 colonne con icona | pill chips                  | 3 card con icona              |
| Footer              | 7 link              | 4 colonne                   | 6 link in griglia 2 col       |
| Navigazione         | nav in header       | header del desktop          | drawer "Indice"               |

La variante tablet riusa l'header del desktop (`components/SiteHeader.jsx`):
stesso componente, stesso scrollspy e stessi colori. Per questo il tagline
"Cultura, tradizione e territorio giapponese" e il suo separatore compaiono
solo da 1280px: sotto quella soglia il menu li comprimerebbe su più righe
dentro l'header alto 80px. Header e footer tablet usano inoltre lo stesso
gutter dello shell (24px / 40px / 64px), quindi non toccano mai il bordo.

Il drawer mobile è accessibile: si chiude con il bottone, il backdrop, la
chiave Escape o il click su una voce, blocca lo scroll della pagina, tiene il
focus dentro il pannello e restituisce il focus al bottone che lo ha aperto.

### Routing

React Router (`react-router-dom` v7), con `BrowserRouter` in `src/main.jsx`:

| Rotta              | Pagina                    | Note                                            |
| ------------------ | ------------------------- | ----------------------------------------------- |
| `/`                | `pages/Home.jsx`          | dispatcher delle tre varianti di layout         |
| `/storia-del-sake` | `pages/StoriaDelSake.jsx` | pagina segnaposto, solo header, footer e titolo |

`components/SiteLayout.jsx` racchiude header, `<main>` e footer della variante
desktop. `components/ScrollManager.jsx` riporta in alto a ogni cambio di rotta
e, se l'URL ha un'ancora, raggiunge la sezione corrispondente (le ancorie del
menu diventano `/#id` sulle pagine diverse dalla home). Per risolvere le
ancore il manager cerca l'elemento `[data-route="<pathname>"]`: **ogni
variante deve esporre `data-route` sul proprio `<main>`**, altrimenti il click
su una voce del menu ripartirebbe dall'inizio della pagina.

### CSS

Ogni componente ha il proprio file CSS **affiancato**, importato dal componente stesso
(`import './Hero.css'`). Gli stili sono CSS puro che referenzia i token del design
system tramite `var(--...)`; nessuna classe utility Tailwind nel markup.

```
src/
├── common.css                 # primitive condivise (shell, section-intro, eyebrow,
│                              #   section-title, section-lead, card, btn, figure-caption)
├── components/
│   ├── SiteHeader.jsx + .css  ├── Progetto.jsx     + .css
│   ├── Hero.jsx       + .css  ├── Questionario.jsx + .css
│   ├── Scopri.jsx     + .css  ├── SiteFooter.jsx  + .css
│   ├── Production.jsx + .css  ├── Icon.jsx         + .css
│   ├── Giappone.jsx   + .css  ├── RichText.jsx         # segmenti inline e titoli su più righe
│   ├── SiteLayout.jsx        # header + main + footer (desktop)
│   ├── ScrollManager.jsx     # scroll/ancore a cambio rotta
│   ├── mobile/                # MobileHeader, MobileMenu, MobileFooter, MobileSurvey
│   └── tablet/                # TabletHeader, TabletFooter, TabletSurvey, TabletTheme
├── content/
│   └── landing.js             # copy e dati della landing, per variante
├── hooks/
│   └── useMediaQuery.js       # matchMedia + useSyncExternalStore
└── pages/
    ├── Home.jsx               # dispatcher delle varianti
    ├── home/                  # DesktopHome, TabletHome, MobileHome (+ CSS)
    └── StoriaDelSake.jsx + StoriaDelSake.css
```

Convenzione di naming: BEM con blocco = nome del componente (`hero__title`,
`questionario__option`, `site-header__link--active`). I modifier `--active`,
`--muted`, `--relaxed`, `--spaced`, `--selected` coprono le varianti.

### Componenti

| Componente     | Sezione         | Note                                                                            |
| -------------- | --------------- | ------------------------------------------------------------------------------- |
| `SiteHeader`   | header sticky   | wordmark KURA 酒, 4 link, CTA "Questionario", underline rosso sulla voce attiva |
| `Hero`         | hero            | griglia 5/7, due CTA ("La sua storia" → `/storia-del-sake`)                     |
| `Scopri`       | `#scopri`       | immagine 4/5 + 3 punti chiave                                                   |
| `Production`   | `#produzione`   | 4 card elementi + timeline orizzontale a 5 step                                 |
| `Giappone`     | `#giappone`     | griglia 7/5, foto + 3 box editoriali                                            |
| `Questionario` | `#questionario` | wizard 3 step con progress bar, Avanti/Indietro/Salta                           |
| `Progetto`     | `#progetto`     | manifesto + form newsletter integrato                                           |
| `SiteFooter`   | footer scuro    | wordmark, 7 link + note legali                                                  |
| `Icon`         | —               | icone Material Symbols in forma di ligatura                                     |
| `RichText`     | —               | segmenti inline (`<em>`, link) e titoli su più righe                            |
| `MobileMenu`   | —               | drawer "Indice" della variante mobile (accessibile)                             |
| `TabletTheme`  | —               | token e scala tipografica Material 3 della variante tablet                      |

## Configurazioni

- **Tailwind CSS 4**: abilitato tramite il plugin `@tailwindcss/vite` in `vite.config.js`. Gli stili si importano con `@import 'tailwindcss';` in `src/index.css`; non serve alcun file `tailwind.config.js`.
- **oxlint**: config in `.oxlintrc.json` (plugin `react`, `oxc`, `unicorn`, `import`). Non è usato ESLint.
- **Prettier**: config in `.prettierrc` (single quote, 2 spazi, 80 caratteri).
- **JavaScript path alias**: nessun alias: gli import sono tutti relativi. `jsconfig.json` imposta `baseUrl: "src"` e `jsx: "react-jsx"` per l'editor e il completamento dei path.

## Design system

La palette e i token del prototipo (config inline del Tailwind CDN) sono tradotti in un blocco `@theme static` in `src/index.css`. Restano la **sola sorgente dei valori**: i CSS di sezione li consumano come custom property (`var(--color-accent)`, `var(--color-border)`), quindi nel markup non servono classi utility.

| Token                   | Namespace Tailwind 4 | Esempio di uso        |
| ----------------------- | -------------------- | --------------------- |
| 8 colori + 4 del footer | `--color-<nome>`     | `var(--color-accent)` |
| 2 famiglie di font      | `--font-serif/sans`  | `var(--font-serif)`   |

Note operative:

- `@theme static` è usato al posto di `@theme` per emettere **tutti** i token: senza, Tailwind 4 li pota e le custom property non sarebbero disponibili nei CSS di sezione.
- Le misure tipografiche sono scritte direttamente nei CSS di sezione (il prototipo usa valori arbitrari: `text-[42px]`, `text-[11px]`), non token del tema.
- I **breakpoint** nei media query dei CSS riprendono quelli del tema: `40rem` (sm), `48rem` (md), `64rem` (lg), `80rem` (xl).
- **Font self-hosted**: Manrope e Noto Serif (normale + corsivo) con i subset `latin` e `latin-ext` di Google, ciascuno con il proprio `unicode-range`. Il subset `latin-ext` serve per i caratteri come "ō" (U+014D) e "Ō" (U+014C).
- **Icone Material Symbols**: sottoinsieme self-hosted di 15 KB con i 15 glifi usati (`arrow_outward`, `auto_stories`, `bubble_chart`, `check`, `check_circle`, `close`, `explore`, `grain`, `handyman`, `mark_email_read`, `menu`, `menu_book`, `person`, `spa`, `water_drop`). Il sottoinsieme usa le **ligature**: `src/components/Icon.jsx` rende il nome dell'icona come testo e la feature OpenType `liga` (attiva in `Icon.css`) lo trasforma nel glifo.
- **Logo**: `public/images/logo.svg` (kanji 蔵, rosso `#840f16`) è il favicon del sito. Il wordmark testuale "KURA 酒" è quello usato in header e footer di tutte e tre le varianti.
- **Token**: la variante desktop e quella mobile condividono i token `--color-*`; la variante tablet ha i propri token Material 3 `--t-*` (palette, spaziature, scala tipografica) definiti in `components/tablet/TabletTheme.css`, così non entra in conflitto con gli altri due design.
- **Meta viewport**: `width=device-width, initial-scale=1.0, viewport-fit=cover`. Lo zoom **non** viene disabilitato (`user-scalable=no` violerebbe WCAG 1.4.4); `viewport-fit=cover` permette di usare le safe area sui dispositivi con notch.
- Il CSS di `Icon.css` è dentro `@layer components` perché le dimensioni delle icone arrivano da classi utility: in un layer le utility restano vincenti.
- La scrollbar **non** viene nascosta: il prototipo del CDN non lo fa, e la sua larghezza (15 px) influisce sul layout della pagina.
- Il menu è **scrollspy**: la voce della sezione in vista riceve un underline rosso (`--color-accent`) che cresce da sinistra. Al click la voce viene attivata subito e lo scrollspy resta "bloccato" finché lo smooth-scroll non arriva a destinazione, così l'underline non scorre sulle sezioni intermedie.
- L'anno nei footer è calcolato una volta a livello di modulo (regola `react/purity` di React Compiler: `new Date()` non va chiamato durante il render).

## VS Code

`.vscode/extensions.json` raccomanda le estensioni utili (oxc, Prettier, Tailwind IntelliSense, React snippets, Auto Rename Tag, Path Intellisense, GitLens, JS Snippets, Italian Language Pack, Material Palenight).
`.vscode/settings.json` imposta il format on save con Prettier come formatter predefinito.

Il profilo VS Code "React" (tema Material Palenight, estensioni dedicate) è gestito manualmente: per usarlo apri la cartella con il profilo attivo.
