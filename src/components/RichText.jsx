/*
 * Testi con marcatura inline: ogni segmento è una stringa semplice, un
 * oggetto { em: 'testo' } per l'italic o { link: 'testo', href } per un link.
 */
function RichText({ segments }) {
  return segments.map((segment, index) => {
    if (typeof segment === 'string') return segment;
    if (segment.em) return <em key={index}>{segment.em}</em>;
    return (
      <a key={index} href={segment.href}>
        {segment.link}
      </a>
    );
  });
}

/*
 * Titoli composti da più righe: ogni riga è resa su una riga propria,
 * con un'interruzione di riga fra una riga e l'altra.
 */
export function Lines({ lines }) {
  return lines.map((line, index) => (
    <span key={index}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

export default RichText;
