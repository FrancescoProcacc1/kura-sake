# kura-sake

Progetto vuoto con lo scaffolding iniziale pronto per lo sviluppo.

## Stack

| Tecnologia   | Versione | Note                                         |
| ------------ | -------- | -------------------------------------------- |
| React        | 19       | `react` + `react-dom`                        |
| Vite         | 8        | Build e dev server                           |
| JavaScript   | —        | Nessun TypeScript                            |
| Tailwind CSS | 4        | Plugin `@tailwindcss/vite`, senza CSS config |
| oxlint       | 1.x      | Linter, al posto di ESLint                   |
| Prettier     | 3.x      | Formatter                                    |

## Requisiti

- Node.js `^20.19 || >=22.12`
- npm 10 o superiore

## Installazione

```bash
npm install
```

## Script

| Script            | Descrizione                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Avvia il dev server su `http://localhost:5173` |
| `npm run build`   | Genera la build di produzione in `dist/`       |
| `npm run lint`    | Esegue oxlint (`--deny-warnings`)              |
| `npm run preview` | Serve la build su `http://localhost:4173`      |
| `npm run format`  | Formatta il progetto con Prettier              |

## Struttura

```text
.
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── public/
│   └── .gitkeep
├── src/
│   ├── assets/
│   │   └── .gitkeep
│   ├── components/
│   │   └── .gitkeep
│   ├── pages/
│   │   └── .gitkeep
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── .prettierignore
├── .prettierrc
├── index.html
├── jsconfig.json
├── package.json
├── vite.config.js
└── README.md
```

## Note di configurazione

- **Tailwind CSS 4**: si importa in `src/index.css` con `@import 'tailwindcss';`.
  Non esiste un `tailwind.config.js`: la configurazione avviene tramite il
  plugin `@tailwindcss/vite` registrato in `vite.config.js`.
- **oxlint**: la configurazione è in `.oxlintrc.json`. Le regole
  `react/react-in-jsx-scope` e `import/no-unassigned-import` sono disattivate
  perché non supportate rispettivamente dal runtime JSX automatico e
  dall'import CSS di Vite.
- **Prettier**: la configurazione è in `.prettierrc` (single quote, tabWidth 2,
  printWidth 80, trailing comma `all`).
- **Dev server**: porta `5173` con `strictPort: true`, per fallire se la porta
  è già occupata.
- **Editor**: `.vscode/settings.json` imposta Prettier come formatter predefinito
  e il tema Material Palenight. I profili VS Code sono gestiti manualmente.
