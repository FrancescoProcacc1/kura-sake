/*
 * Punto di ingresso dei contenuti della landing: risolve la lingua in
 * base al percorso corrente (vedi ./locale.js).
 *
 * L'API resta invariata per i consumatori: `import { LANDING } from
 * '../content/landing.js'` continua a funzionare, con il contenuto
 * inglese servito automaticamente sulle pagine /en.
 * Il contenuto si valuta una volta per caricamento di pagina: il cambio
 * lingua avviene quindi con navigazione completa, non via router client.
 */

import { getLocale } from './locale.js';

import { LANDING as LANDING_IT } from './it/landing.js';
import { LANDING as LANDING_EN } from './en/landing.js';

export const LANDING = getLocale() === 'en' ? LANDING_EN : LANDING_IT;
