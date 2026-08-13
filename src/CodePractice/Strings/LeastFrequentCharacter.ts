export {};

const value = "swiss";

type Character = string | null;
function withFor(text: string): Character {
  const counts: Record<string, number> = {};
  for (let index = 0; index < text.length; index++)
    counts[text[index]] = (counts[text[index]] ?? 0) + 1;
  let best: Character = null;
  for (const character in counts)
    if (!best || counts[character] < counts[best]) best = character;
  return best;
}
function withForOf(text: string): Character {
  const counts = new Map<string, number>();
  for (const character of text)
    counts.set(character, (counts.get(character) ?? 0) + 1);
  let best: Character = null;
  for (const [character, count] of counts)
    if (!best || count < counts.get(best)!) best = character;
  return best;
}
function withoutLoop(text: string): Character {
  return (
    [...text].sort(
      (a, b) =>
        [...text].filter((character) => character === a).length -
        [...text].filter((character) => character === b).length,
    )[0] ?? null
  );
}
function withWhile(text: string): Character {
  const counts: Record<string, number> = {};
  let index = 0;
  while (index < text.length)
    counts[text[index]] = (counts[text[index++]] ?? 0) + 1;
  let best: Character = null;
  for (const character in counts)
    if (!best || counts[character] < counts[best]) best = character;
  return best;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
