import { getLocale } from './content/locale.js';

const SHEET_ENDPOINT = import.meta.env.VITE_SHEET_ENDPOINT;

export const postToSheet = (payload) => {
  if (!SHEET_ENDPOINT) return;

  fetch(SHEET_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ ...payload, lang: getLocale() }),
  }).catch(() => {});
};
