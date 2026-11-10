import './Icon.css';

/*
 * Il subset self-hosted contiene i glifi in forma di ligatura: il nome
 * dell'icona viene renderizzato come testo e la feature OpenType 'liga'
 * (attiva in Icon.css) lo trasforma nel glifo corrispondente.
 */
const ICON_NAMES = new Set([
  'arrow_outward',
  'auto_stories',
  'bubble_chart',
  'check',
  'check_circle',
  'close',
  'explore',
  'grain',
  'handyman',
  'mark_email_read',
  'menu',
  'menu_book',
  'person',
  'spa',
  'water_drop',
]);

function Icon({ name, className = '' }) {
  if (!ICON_NAMES.has(name)) return null;

  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`}
    >
      {name}
    </span>
  );
}

export default Icon;
