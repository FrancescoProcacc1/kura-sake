# Guida operativa: deploy, dominio, DNS e Search Console

> Documentazione completa delle procedure seguite per portare online il sito KURA (kurasake.it) dopo l'ottimizzazione SEO. Riferimento per ripetere il percorso su altri progetti o fare troubleshooting. Valori e IP sono aggiornati al 10/11/2026: prima di riutilizzarli, verifica che siano ancora validi (vedi sezione Troubleshooting).

## Indice

1. [Architettura complessiva](#1-architettura-complessiva)
2. [Preparazione del progetto per il deploy](#2-preparazione-del-progetto-per-il-deploy)
3. [Deploy su Netlify](#3-deploy-su-netlify)
4. [Acquisto del dominio](#4-acquisto-del-dominio)
5. [Collegare il dominio a Netlify (DNS + HTTPS)](#5-collegare-il-dominio-a-netlify-dns--https)
6. [Google Search Console](#6-google-search-console)
7. [Il flusso di aggiornamento del sito](#7-il-flusso-di-aggiornamento-del-sito)
8. [Troubleshooting: i problemi incontrati e le soluzioni](#8-troubleshooting)
9. [Checklist rapida per un nuovo sito cliente](#9-checklist-rapida-per-un-nuovo-sito-cliente)
10. [Manutenzione periodica](#10-manutenzione-periodica)

---

## 1. Architettura complessiva

```
[Tu]                     [GitHub]              [Netlify]                [Cliente]
lavori su dev  --push-->  repo privato  -->  auto-build + prerender  -->  sito live
                                                (branch main)              kurasake.it
```

- **Branch `dev`**: branch di lavoro. Ogni modifica parte da qui.
- **Branch `main`**: branch di produzione. Quello che Netlify pubblica. Si aggiorna solo via merge (no commit diretti).
- **Netlify**: hosting statico gratuito con build automatica a ogni push su `main`. Serve il sito pre-renderizzato con HTTPS e CDN globale.
- **IONOS (registrar)**: detiene il dominio, smista il traffico verso Netlify via DNS.
- **Google Search Console**: monitoraggio indicizzazione e invio sitemap.

Stack del progetto: Vite 8 + React 19 (SPA) + pre-rendering con Puppeteer (le 4 rotte vengono "fotografate" in HTML statico al build, così i crawler vedono i contenuti senza eseguire JavaScript).

File chiave del progetto:

| File | Ruolo |
|---|---|
| `netlify.toml` | Configurazione build Netlify (comando, cartella, Node 22, installazione Chrome) |
| `public/_redirects` | Fallback SPA: `/* /index.html 200` (usato solo se manca un file statico) |
| `src/seo/seoConfig.js` | Config SEO per rotta + URL del sito (fonte unica del dominio) |
| `src/seo/useSeo.js` | Hook che applica title/description/canonical/OG/JSON-LD per rotta |
| `vite.config.js` | Plugin pre-rendering con renderer Puppeteer custom |
| `docs/guida-acquisto-dominio-cliente.md` | Guida da inviare al cliente per l'acquisto del dominio |

---

## 2. Preparazione del progetto per il deploy

### 2.1 netlify.toml

```toml
[build]
  command = "npx puppeteer browsers install chrome && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

- **Perché il comando non è solo `npm run build`**: il pre-rendering usa Puppeteer, che a sua volta ha bisogno di un Chromium. Installandolo esplicitamente a ogni build, il build non dipende più dalla cache (vedi Troubleshooting 8.1). Idempotente: se Chrome è già presente dura 1 secondo.
- **NODE_VERSION = "22"**: fissa la versione di Node (Vite 8 la richiede >= 20.19).

### 2.2 public/_redirects

```
/*    /index.html    200
```

Fallback SPA di sicurezza: se Netlify non trova un file, serve `index.html`. Netlify serve comunque PRIMA i file statici esistenti (inclusi quelli pre-renderizzati), quindi la regola interviene solo per percorsi sconosciuti.

### 2.3 netlify.toml e script npm bloccati (solo ambiente locale)

L'npm locale di questo PC ha una policy `allowScripts` che blocca i post-install. Puppeteer ne ha uno (scarica il browser). Percorso seguito:

1. `npm install-scripts approve puppeteer@25.16.0` (approva la versione root)
2. `npm install-scripts deny puppeteer@1.20.0` (versione annidata e inutile del renderer originale — non serve, usiamo un renderer custom)
3. Download manuale del browser: `npx puppeteer browsers install chrome` (scarica in `%USERPROFILE%\.cache\puppeteer`, aggira completamente la questione script)

Nota: approvare una seconda versione dello stesso pacchetto **sostituisce** la prima approvazione; `deny` per nome naked blocca tutte le versioni. Se ti impappini, scarica il browser con il comando del punto 3 e ignora gli avvisi.

---

## 3. Deploy su Netlify

### 3.1 Account e import

1. Account GitHub con il repo del progetto (remoto `origin` già configurato)
2. **app.netlify.com** → Sign up con GitHub
3. **Add new site → Import an existing project → Deploy with GitHub** → autorizza (si può limitare al solo repo) → seleziona il repo
4. Configurazione: **Branch to deploy: `main`** — build command e publish directory li legge da `netlify.toml`
5. Il primo deploy è completo (npm install + download Chrome): 1-3 minuti

### 3.2 Rinominare il sito

Site configuration → Site details → Change site name → es. `kura-sake` → l'URL diventa `https://kura-sake.netlify.app`. Il vecchio URL random va in 404.

### 3.3 Deploy Protection (fondamentale!)

I progetti nuovi nascono con **Visitor access → Private**: il sito risponde **401 Unauthorized** a chiunque non sia loggato su Netlify. Per un sito pubblico:

**Project configuration → Visitor access → Visibility: Public → Applies to: "Previews only" → Save**

Così la produzione è aperta a tutti e i deploy preview restano protetti.

### 3.4 Verifica post-deploy

- Apri l'URL `*.netlify.app` e controlla le rotte
- Controlla nel deploy log: `[vite-plugin-prerender] All routes rendered successfully!` e `All done`
- Verifica che il body dell'HTML servito abbia contenuto (non `#root` vuoto):

```powershell
# PowerShell locale (bypassa eventuale proxy AV con -Proxy $null se serve)
$r = Invoke-WebRequest "https://kura-sake.netlify.app" -UseBasicParsing
$html = [Text.Encoding]::UTF8.GetString($r.RawContentStream.ToArray())
$html.Length        # shell vuota ~2.5 kB, prerenderizzato ~19-30 kB
```

Oppure da fuori rete locale: smartphone in 4G/5G, oppure `https://api.hackertarget.com/httpheaders/?q=https://kurasake.it` (verifica lato server).

---

## 4. Acquisto del dominio

La guida completa per il cliente è in `docs/guida-acquisto-dominio-cliente.md`. Sintesi operativa per lo sviluppatore:

1. **Registrar**: IONOS va bene per il `.it` (5-10 euro primo anno, ~10-12 di rinnovo). Esiste anche la registrazione domini direttamente dentro Netlify (DNS auto-configurato, prezzi leggermente più alti)
2. **Intestatario**: idealmente il cliente (account a suo nome). Se compri nel tuo account, il dominio è legalmente tuo; il cambio intestatario successivo è possibile ma a pagamento
3. **Solo il dominio**: rifiutare SSL (Netlify lo dà gratis), hosting, pacchetti SEO, pacchetti multi-TLD. Email opzionale se il cliente vuole `info@dominio.it`
4. **Codice fiscale** obbligatorio nel campo "Numero di identificazione"
5. I domini non accettano accenti/caratteri non ASCII (`kurasakè.it` è invalido)
6. Un dominio basti: niente acquisti "difensivi" multipli per siti piccoli

Nel progetto KURA: `kurasake.it` comprato su IONOS nel 10/11/2026, scadenza 10/11/2027.

---

## 5. Collegare il dominio a Netlify (DNS + HTTPS)

### 5.1 Aggiungere i domini in Netlify

**Project configuration → Domain management → Add a domain** → aggiungi `kurasake.it` → accetta l'alias **`www.kurasake.it`** (reindirizza automaticamente al dominio principale, che diventa "Primary domain"). Finché i DNS non puntano a Netlify lo stato resta "Pending DNS verification": normale.

### 5.2 Record DNS su IONOS

**Domini & SSL → clicca il dominio → tab DNS → Modifica record.** Configurazione:

| Tipo | Nome host | Valore | Note |
|---|---|---|---|
| A | `@` | IP edge Netlify (vedi 5.3) | Sostituisce il record di parcheggio IONOS |
| A (secondo, opzionale) | `@` | secondo IP edge | Ridondanza; IONOS la accetta |
| CNAME | `www` | `kura-sake.netlify.app` | Alias verso il sito Netlify |

Da rimuovere se presenti: record **AAAA** sulla radice (conflitto con l'A). Da lasciare: tutti i record Mail (MX, SPF, DKIM, dmarc, autodiscover) — non interferiscono col web e servono per eventuali email future. Stesso discorso per `_domainconnect`.

Attenzione al wizard di IONOS: quando aggiungi un record A su `@`, propone di "specchiare" il record anche su `www` (sostituendo il CNAME). Clicca **"Non aggiungere record DNS per www"** prima di salvare. Gli avvisi "Il servizio viene disattivato" vanno letti: se elencano solo la pagina parcheggio/Default Site, conferma; se elencano i record Mail, annulla.

### 5.3 Trovare gli IP edge Netlify attuali (punto critico!)

Gli IP consigliati nelle guide cambiano quando Netlify migra infrastruttura. Al 10/11/2026 gli IP corretti sono `63.176.8.218` e `35.157.26.135`; il vecchio `75.2.60.117` (presente in mille tutorial) **non risponde più** — usarlo produce timeout e "DNS verification failed".

Per trovare gli IP validi di un dominio qualsiasi:

```powershell
# 1) Risolvi il sottodominio netlify del sito: quegli IP sono gli edge attuali
Resolve-DnsName kura-sake.netlify.app -Type A

# 2) Prova la risposta dell'edge con Host header del dominio custom
$req = [System.Net.WebRequest]::Create("http://63.176.8.218/")
$req.Host = "kurasake.it"          # simula la richiesta del dominio
$req.AllowAutoRedirect = $false
$req.Timeout = 10000
$resp = $req.GetResponse()          # atteso: 301/200 con Server: Netlify
$resp.Headers["Location"]
```

In alternativa, la pagina "Pending DNS verification" di Netlify mostra i valori ufficiali correnti: in caso di dubbio usa quelli.

### 5.4 Verifica propagazione ed HTTPS

```powershell
# DNS su resolver pubblici (locale può essere "inquinato" dall'antivirus)
Resolve-DnsName kurasake.it -Type A -Server 8.8.8.8
Resolve-DnsName www.kurasake.it -Type CNAME -Server 8.8.8.8
```

Quando i record sono propagati: **Netlify → Domain management → "Retry DNS verification"** → "DNS verification was successful" → il certificato **Let's Encrypt viene emesso automaticamente** (minuti, max 24h). Apex e www ricevono certificazioni indipendenti: il www può essere pronto prima dell'apex.

Verifiche finali: `https://kurasake.it` (200), `https://www.kurasake.it` (301 verso l'apex), canonical/OG corretti nell'HTML, robots.txt e sitemap.xml raggiungibili sul dominio nuovo.

---

## 6. Google Search Console

### 6.1 Creazione e verifica della proprietà

1. **search.google.com/search-console** → Aggiungi proprietà → tipo **"Dominio"** → `kurasake.it` (copre http/https, www, sottodomini)
2. Google propone la verifica automatica **Domain Connect** se riconosce il registrar

**Trappola IONOS + Domain Connect**: il flusso automatico richiede di "collegare" il dominio e IONOS avvisa che **disattiverà il servizio Mail** (i record MX/SPF/DKIM) per applicare le impostazioni. **Cliccare "No"**: non serve disattivare nulla per una verifica.

3. Verifica manuale: nella finestra di verifica, menu a tendina "Istruzioni per: 1and1.com" → seleziona **"Qualsiasi provider DNS"** → appare il record TXT con il token (`google-site-verification=...`) e il pulsante COPIA
4. Aggiungi su IONOS: DNS → Aggiungi un record → **TXT**, nome host `@`, valore = il token → Salva (coesiste con l'SPF, nessun conflitto)
5. Verifica propagazione prima di riprovare:

```powershell
Resolve-DnsName kurasake.it -Type TXT -Server 8.8.8.8
```

6. Torna su GSC → **VERIFICA** → "Proprietà verificata"

Nota: il token `google-site-verification` è fisso per account Google: una volta nei DNS, può verificare anche le altre proprietà dello stesso account.

### 6.2 Sitemap

**Menu → Sitemap → inserisci l'URL** → INVIA.

- Sulla proprietà "Dominio" il percorso relativo (`sitemap.xml`) a volte dà "Indirizzo Sitemap non valido": usa l'**URL completo** `https://kurasake.it/sitemap.xml`
- Stato **"Impossibile recuperare"** subito dopo l'invio è normale (soprattutto su domini registrati da poche ore): Google riprova da solo e di norma passa a "Riuscito" entro ore/un giorno. Il lato sito va comunque verificato a parte (200 + `Content-Type: application/xml`)

### 6.3 Indicizzazione rapida

**Controllo URL** → incolla l'URL → "Richiedi indicizzazione" (funziona indipendentemente dallo stato della sitemap). "L'URL non si trova su Google" è normale per un sito nuovo; la richiesta mette l'URL in coda di scansione prioritaria.

---

## 7. Il flusso di aggiornamento del sito

Ogni modifica segue questo ciclo:

```powershell
# 1) Lavori su dev, poi commit e push
git add <file>
git commit -m "descrizione"
git push origin dev

# 2) Pull request dev -> main su GitHub (o merge locale)
git checkout main
git pull origin main
git merge dev          # di solito fast-forward
git push origin main
git checkout dev
```

3. Netlify builda automaticamente entrambi i branch: **Deploy Preview** per `dev`, **Production** per `main`
4. Verifica il deploy log: `Rendering routes [...] with puppeteer...` → `All routes rendered successfully!` → `All done`
5. Verifica il sito: contenuto nel body, meta aggiornati

Risposta "sì, sono partiti due deploy" a chi chiede: è normale — uno per branch (preview + produzione).

---

## 8. Troubleshooting

### 8.1 Pre-rendering fallito in silenzio (il problema più insidioso)

**Sintomo**: il sito funziona nel browser ma l'HTML servito ha il body vuoto (`<div id="root"></div>` senza contenuto) e tutte le rotte mostrano il canonical della home (effetto del fallback `_redirects`).

**Causa**: `vite-plugin-prerender` **non fa fallire il build** in caso di errore (`console.error` + il build va a buon fine). Se Puppeteer non trova Chromium nell'ambiente di build, il prerender salta e Netlify pubblica la shell SPA. Nel caso KURA: build con cache di Netlify → `npm install` "up to date in 658ms" → postinstall di Puppeteer mai rieseguito → Chrome assente (~/.cache non persistente nel cache di Netlify).

**Diagnosi**:

```text
Deploy log:
  [vite-plugin-prerender] Unable to prerender all routes!   ← fallimento
  (e manca la riga "Rendering routes [...] with puppeteer...")  ← fallito prima dell'avvio
```

**Fix definitivo** (già applicato nel progetto): build command con installazione esplicita del browser:

```toml
command = "npx puppeteer browsers install chrome && npm run build"
```

Nel log del build corretto devi vedere:

```text
$ npx puppeteer browsers install chrome && npm run build
  chrome@156.0.8078.47 /opt/buildhome/.cache/puppeteer/chrome/.../chrome
  [vite-plugin-prerender] Rendering routes [...] with puppeteer...
  [vite-plugin-prerender] All routes rendered successfully!
  [vite-plugin-prerender] All done
  4 new file(s) to upload
```

**Regola di verifica**: dopo ogni deploy, controlla che l'HTML servito abbia il body pieno (dimensione > 10 kB oppure presenza dell'h1 nel sorgente). Mai fidarsi del solo "Site is live".

**Quick fix di emergenza** (senza modificare nulla): Trigger deploy → "Deploy project without cache" → installazione completa → postinstall scarica Chrome. È però non deterministico: il fix al `netlify.toml` è la soluzione stabile.

### 8.2 IP edge Netlify obsoleto

**Sintomo**: "DNS verification failed — doesn't appear to be served by Netlify" persistente, `http://dominio` in timeout, nonostante i DNS siano propagati.

**Causa**: il dominio punta a un IP di load balancer non più attivo (Netlify migra infrastruttura; `75.2.60.117` è morto a novembre 2026).

**Diagnosi**:

```powershell
Resolve-DnsName <sito>.netlify.app -Type A          # IP attuali degli edge
# poi sonda ogni IP con Host header (vedi 5.3): deve rispondere "Server: Netlify"
```

**Fix**: aggiorna i record A del dominio con gli IP che rispondono, poi "Retry DNS verification" su Netlify.

### 8.3 IONOS Domain Connect vuole disattivare il servizio Mail

**Sintomo**: durante la verifica GSC automatica, IONOS chiede di "collegare" il dominio e avverte che disattiverà i record Mail.

**Fix**: cliccare **No** e fare la verifica manuale con il record TXT (vedi 6.1, punto 3-4). Non accettare mai la disattivazione Mail per una verifica.

### 8.4 "Indirizzo Sitemap non valido" / "Impossibile recuperare"

- "Non valido" su proprietà Dominio: inserisci l'URL completo (`https://dominio/sitemap.xml`)
- "Impossibile recuperare" subito dopo l'invio: quasi sempre transitorio; verifica che il file risponda 200 con `application/xml` da un checker esterno e attendi (Google riprova da solo). Controlla di nuovo dopo 24h
- Verifica sempre prima il lato sito: se il file risponde correttamente da un osservatore esterno, il problema è solo GSC

### 8.5 401 Unauthorized su tutto il sito

Deploy Protection attiva (default sui progetti Netlify nuovi). Fix: Project configuration → Visitor access → Public + "Previews only".

### 8.6 Falsi errori SSL in locale (antivirus)

Un antivirus con analisi HTTPS (Kaspersky, ecc.) intercetta le connessioni TLS e le ri-firma con una propria radice. Se quella radice è **scaduta**, il browser/PowerShell vedono errori di trust su siti perfettamente sani. Conseguenze pratiche:

- `Invoke-WebRequest` verso il sito da quel PC fallisce con "relazione di trust SSL/TLS"
- Il certificato mostrato ha Issuer "Kaspersky..." invece di Let's Encrypt

**Non è un problema del sito.** Per diagnosticare TLS usa vantage point neutri: smartphone in 4G/5G, `api.hackertarget.com/httpheaders`, checker SSL online. Per sistemare il PC: aggiornare l'antivirus o disattivare l'analisi delle connessioni cifrate (Kaspersky: Impostazioni → Impostazioni di rete → Scansione delle connessioni cifrate → "Non analizzare").

### 8.7 Due deploy partono insieme

Normale: Netlify builda ogni branch spinto. Deploy Preview (dev) + Production (main). Per risparmiare build minutes: Project configuration → Build & deploy → Deploy previews → None.

### 8.8 Plugin pre-rendering e Node ESM

`vite-plugin-prerender` ha due insidie note (già aggirate nel progetto, note per futuri upgrade):

1. Il suo `dist/index.mjs` usa `require()` bare (rotto se importato come ESM nativo): va caricato da `vite.config.js` tramite `createRequire(import.meta.url)('vite-plugin-prerender')`, che forza il build CJS
2. Il suo `PuppeteerRenderer` ufficiale dipende da `puppeteer@^1.7.0` (2018). Nel progetto si usa un **renderer custom** definito in `vite.config.js` (interfaccia `initialize/renderRoutes/destroy`) che usa il Puppeteer moderno di root — vedere i commenti del file per i dettagli

---

## 9. Checklist rapida per un nuovo sito cliente

1. [ ] `netlify.toml` (build command con install Chrome, publish, NODE_VERSION)
2. [ ] `public/_redirects` (fallback SPA)
3. [ ] `src/seo/seoConfig.js` con il dominio reale + hook SEO nelle pagine
4. [ ] Build locale: prerendering OK, dist con body pieno, canonical corretti
5. [ ] Repo su GitHub (privato), remote `origin`
6. [ ] Netlify: import, branch `main`, rinomina sito, Visitor access → Public
7. [ ] Primo deploy: log con "All routes rendered successfully", body servito verificato
8. [ ] Dominio acquistato dal cliente (guida in `docs/`)
9. [ ] Netlify: add domain + www alias; DNS al registrar (A su IP edge correnti + CNAME www)
10. [ ] HTTPS attivo, redirect www→apex, noindex sulle pagine legali
11. [ ] Search Console: proprietà Dominio, verifica TXT manuale, sitemap, richiesta indicizzazione
12. [ ] Lighthouse (SEO, Performance, Best Practices, Accessibility)
13. [ ] Test social preview (metatags.io)
14. [ ] Promemoria rinnovo dominio + gestione annuale fatturata

## 10. Manutenzione periodica

| Frequenza | Attività |
|---|---|
| A ogni push | Verifica deploy log (prerender OK) + body servito |
| Mensile | GSC → Pagine: controlla errori di indicizzazione; Core Web Vitals |
| Annuale | Rinnovo dominio (avvisare il cliente); verifica scadenze; aggiornamento dipendenze (`npm outdated`) |
| Quando Netlify annuncia cambi | Controllare che gli IP edge documentati siano ancora validi (vedi 5.3 e 8.2) |
| Occasionale | Lighthouse dopo modifiche significative; test preview social |

---

*Documento creato il 10/11/2026 sulla base dell'esperienza concreta di pubblicazione di kurasake.it. Aggiornare i valori tecnici (IP edge, versioni, prezzi) quando vengono riutilizzati.*
