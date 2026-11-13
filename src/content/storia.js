/*
 * Punto di ingresso dei contenuti della pagina "La storia del sakè":
 * risolve la lingua in base al percorso corrente (vedi ./locale.js).
 * L'API resta invariata per i consumatori (`import { STORIA } from
 * '../content/storia.js'`).
 */

import { getLocale } from './locale.js';

import { STORIA as STORIA_IT } from './it/storia.js';
import { STORIA as STORIA_EN } from './en/storia.js';

export const STORIA = getLocale() === 'en' ? STORIA_EN : STORIA_IT;
