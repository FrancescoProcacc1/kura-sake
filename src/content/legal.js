/*
 * Punto di ingresso dei testi legali (Privacy Policy e Cookie Policy):
 * risolve la lingua in base al percorso corrente (vedi ./locale.js).
 * L'API resta invariata per i consumatori (`import { LEGAL } from
 * '../content/legal.js'`).
 */

import { getLocale } from './locale.js';

import { LEGAL as LEGAL_IT } from './it/legal.js';
import { LEGAL as LEGAL_EN } from './en/legal.js';

export const LEGAL = getLocale() === 'en' ? LEGAL_EN : LEGAL_IT;
