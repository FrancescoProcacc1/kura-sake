/*
 * Testi legali segnaposto per le pagine Privacy Policy e Cookie Policy.
 * Da revisionare prima della pubblicazione definitiva.
 */

export const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'novembre 2026',
    intro: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR), fornita a chi interagisce con il sito KURA.',
    sections: [
      {
        title: 'Premessa',
        paragraphs: [
          'KURA è un progetto culturale indipendente, senza fini commerciali. Il sito contiene esclusivamente contenuti editoriali e divulgativi dedicati alla cultura giapponese.',
          'Non vengono effettuate vendite di prodotti, né attività di profilazione a scopo pubblicitario.',
        ],
      },
      {
        title: 'Dati raccolti',
        paragraphs: [
          'La navigazione del sito non comporta la raccolta di dati personali da parte di KURA: non sono attivate statistiche di audience né strumenti di tracciamento di terze parti.',
          'Se decidi di iscriverti alla newsletter, l’indirizzo email indicato viene utilizzato esclusivamente per l’invio delle comunicazioni editoriali del progetto ed è conservato solo per il tempo necessario a questa finalità. Puoi chiedere in ogni momento la cancellazione della tua casella dalla lista.',
        ],
      },
      {
        title: 'Comunicazione a terzi',
        paragraphs: [
          'I dati, quando presenti, non sono venduti, ceduti o comunicati a terzi per finalità di marketing. Qualora vengano in futuro utilizzati servizi esterni (per esempio per la gestione della newsletter), questa informativa verrà aggiornata con i riferimenti dei responsabili del trattamento.',
        ],
      },
      {
        title: 'Diritti dell’interessato',
        paragraphs: [
          'In qualità di interessato puoi esercitare in ogni momento i diritti previsti dal GDPR: accesso, rettifica, cancellazione, limitazione e opposizione al trattamento, scrivendo ai contatti indicati nel sito.',
          'Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.',
        ],
      },
    ],
  },

  cookie: {
    title: 'Cookie Policy',
    updated: 'novembre 2026',
    intro: 'Questa pagina descrive l’uso dei cookie e delle tecnologie simili sul sito KURA.',
    sections: [
      {
        title: 'Cookie tecnici',
        paragraphs: [
          'Il sito non utilizza cookie di profilazione, né cookie analitici di terze parti. Le informazioni salvate durante la navigazione si limitano a preferenze locali necessarie al corretto funzionamento delle pagine e non permettono di identificare l’utente.',
        ],
      },
      {
        title: 'Risorse ospitate localmente',
        paragraphs: [
          'Font e icone sono ospitati direttamente sul sito: ciò significa che durante la navigazione non vengono inviati dati a server terzi (Google Fonts o servizi analoghi), al di là della connessione tecnica necessaria per consultare le pagine.',
        ],
      },
      {
        title: 'Gestione delle preferenze',
        paragraphs: [
          'Puoi cancellare o bloccare i cookie comunque presenti dalle impostazioni del tuo browser: procedura descritta nelle guide ufficiali di ciascun browser. Il sito resta pienamente navigabile anche senza cookie.',
        ],
      },
      {
        title: 'Aggiornamenti',
        paragraphs: [
          'Qualora in futuro venissero attivati servizi di misurazione o strumenti di terze parti, questa informativa verrà aggiornata e, se necessario, verrà richiesto il consenso preventivo.',
        ],
      },
    ],
  },
};
