const MARKED_WORD = /\*([^*]+)\*/;

/** Renders copy with one `*word*` set in accent italic. */
export function Emphasis({ text }: { text: string }) {
  const match = MARKED_WORD.exec(text);
  if (!match) return <>{text}</>;

  const before = text.slice(0, match.index);
  const after = text.slice(match.index + match[0].length);

  return (
    <>
      {before}
      <em className="font-normal italic text-accent">{match[1]}</em>
      {after}
    </>
  );
}
