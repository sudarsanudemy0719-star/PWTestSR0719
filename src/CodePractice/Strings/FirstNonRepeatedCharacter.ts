export {};

const value = "swiss";

type Character = string | null;
function withFor(text: string): Character {
  for (let index = 0; index < text.length; index++)
    if (text.indexOf(text[index]) === text.lastIndexOf(text[index]))
      return text[index];
  return null;
}

function withForOf(text: string): Character {
  const counts = new Map<string, number>();
  for (const character of text)
    counts.set(character, (counts.get(character) ?? 0) + 1);
  for (const character of text)
    if (counts.get(character) === 1) return character;
  return null;
}
function withoutLoop(text: string): Character {
  return (
    [...text].find(
      (character) => text.indexOf(character) === text.lastIndexOf(character),
    ) ?? null
  );
}
function withWhile(text: string): Character {
  let index = 0;
  while (index < text.length) {
    if (text.indexOf(text[index]) === text.lastIndexOf(text[index]))
      return text[index];
    index++;
  }
  return null;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
