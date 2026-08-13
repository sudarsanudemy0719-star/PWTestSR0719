export {};

const value = "banana";

type Character = string | null;
function withFor(text: string): Character {
  const counts: Record<string, number> = {};
  let best: Character = null;
  for (let index = 0; index < text.length; index++) {
    const character = text[index];
    counts[character] = (counts[character] ?? 0) + 1;
    if (!best || counts[character] > counts[best]) best = character;
  }
  return best;
}
function withForOf(text: string): Character {
  const counts = new Map<string, number>();
  for (const character of text)
    counts.set(character, (counts.get(character) ?? 0) + 1);
  let best: Character = null;
  for (const [character, count] of counts)
    if (!best || count > counts.get(best)!) best = character;
  return best;
}
function withoutLoop(text: string): Character {
  return (
    [...text].sort(
      (a, b) =>
        [...text].filter((character) => character === b).length -
        [...text].filter((character) => character === a).length,
    )[0] ?? null
  );
}
function withWhile(text: string): Character {
  const counts: Record<string, number> = {};
  let best: Character = null,
    index = 0;
  while (index < text.length) {
    const character = text[index++];
    counts[character] = (counts[character] ?? 0) + 1;
    if (!best || counts[character] > counts[best]) best = character;
  }
  return best;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
