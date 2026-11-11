# Guida: acquisto del dominio del tuo sito (kurasake.it)

> Questa guida ti accompagna nell'acquisto del dominio del tuo sito web. È un'operazione di 10 minuti e costa pochi euro l'anno. Se qualcosa non è chiaro, contatta il tuo sviluppatore **prima** di procedere all'acquisto.

## Cosa ti serve

- Il tuo **codice fiscale** (16 caratteri)
- Un indirizzo email a cui accedere
- Una carta di credito/debito o PayPal
- Circa 10 minuti

## Costo

- **Primo anno**: circa 5-10 euro (prezzo promozionale)
- **Anni successivi**: circa 10-12 euro/anno (rinnovo automatico, disattivabile)
- Tutto il resto del sito (spazio web, HTTPS, pubblicazione) è già incluso nel lavoro dello sviluppatore: **non serve comprare altro**

---

## Passo 1 — Crea il tuo account IONOS

1. Vai su **www.ionos.it**
2. Clicca su **"Accedi"** e poi **"Crea un account"** (oppure "Registrati")
3. Inserisci la **tua email** e scegli una password
4. Importante: usa i **tuoi dati personali** — sarà il documento che stabilisce chi è il proprietario del dominio

## Passo 2 — Cerca il dominio

1. Una volta effettuato l'accesso, nella barra di ricerca in alto scrivi: **`kurasake.it`**
2. Clicca sul risultato della ricerca dominio
3. Dovresti vedere il messaggio "il dominio è disponibile" con il prezzo (in promozione circa 4-6 euro il primo anno)

## Passo 3 — Aggiungi al carrello SOLO il dominio

**Leggi bene questa parte: prendi SOLO la prima opzione `kurasake.it`.**

Durante l'acquisto ti verranno proposte tante cose extra. Tutte, tranne il dominio, sono superflue — il tuo sviluppatore le ha già incluse nel progetto. Rifiuta:

| Cosa ti propongono | Perché rifiutare |
|---|---|
| "Pacchetto di domini" (.info, .srl, .eu...) | Un solo dominio basta e avanza |
| Certificato SSL | È già incluso, gratuito |
| Hosting / spazio web | Il sito è già pubblicato, non serve |
| Casella email | Facoltativa: accetta SOLO se vuoi un indirizzo tipo `info@kurasake.it` (costo extra di circa 1-2 euro/mese) |
| Pacchetti "SEO" o "Posizionamento" | L'ottimizzazione è già fatta |
| "Domain Guard" | Facoltativo: protezione extra per pochi euro, non necessaria |

## Passo 4 — I tuoi dati (intestatario del dominio)

Nel modulo "dati di contatto/intestatario":

1. Seleziona **"Privato"** (o "Azienda" se il dominio deve essere dell'azienda)
2. Compila nome, cognome e indirizzo con i **tuoi dati reali**
3. Nel campo **"Numero di identificazione"** inserisci il tuo **codice fiscale** (campo obbligatorio)
4. Usa la tua email e il tuo telefono: sono il contatto ufficiale del dominio

## Passo 5 — Pagamento

1. Verifica che il riepilogo contenga **solo `kurasake.it`** (1 articolo)
2. Seleziona il metodo di pagamento e conferma
3. Riceverai un'email di conferma da IONOS

## Passo 6 — Dopo l'acquisto (importante!)

1. **Non modificare nulla** nelle impostazioni DNS o dei nameserver: se ne occupa il tuo sviluppatore
2. **Comunica al tuo sviluppatore** che il dominio è stato acquistato
3. Fornisci al tuo sviluppatore l'**accesso all'area IONOS** (email account e password, oppure segui l'invito di condivisione accesso che ti invierà): servirà per collegare il dominio al sito. Puoi cambiare la password dopo la configurazione

## Domande frequenti

**Il dominio è mio?**
Sì: essendo intestato ai tuoi dati, sei tu il proprietario legale. Puoi portarlo dove vuoi in futuro.

**Devo rinnovarlo ogni anno?**
Sì, automaticamente (circa 10-12 euro/anno). Se il rinnovo scade, il sito smette di funzionare — lo sviluppatore ti avviserà comunque.

**Quanto tempo serve per metterlo online?**
Dopo la configurazione fatta dallo sviluppatore, il dominio diventa attivo in pochi minuti/ore (massimo 24 ore).

---

## Note interne (per lo sviluppatore — non inviare al cliente)

- La guida presuppone IONOS perché è tra i registrar più economici per il `.it` e familiare; per Aruba/Register la struttura resta identica
- Se il cliente compra nel **suo** account, la configurazione DNS post-acquisto si fa seguendo l'invito di accesso o a schermo con lui al telefono
- Record da configurare per collegare il dominio a Netlify (caso kurasake.it):
  - A `@` verso gli IP edge Netlify correnti (verificare su Netlify → Domain management → Pending DNS verification; al 10/11/2026: `63.176.8.218` e `35.157.26.135` — il vecchio `75.2.60.117` non risponde più)
  - CNAME `www` verso `<nome-sito>.netlify.app`
- Ricorda di aggiungere in Netlify sia il dominio sia il www (alias con redirect) e di disattivare la "Deploy Protection" sui progetti nuovi (Project configuration → Visitor access → Public)
- Promemoria rinnovo dominio: scadenza annuale, avvisare il cliente
