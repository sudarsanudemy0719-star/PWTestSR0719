export {};

const value = "character";

type Character = string | null;
function withFor(text: string): Character {
  const seen = new Set<string>();
  for (let index = 0; index < text.length; index++) {
    if (seen.has(text[index])) return text[index];
    seen.add(text[index]);
  }
  return null;
}
function withForOf(text: string): Character {
  const seen = new Set<string>();
  for (const character of text) {
    if (seen.has(character)) return character;
    seen.add(character);
  }
  return null;
}
function withoutLoop(text: string): Character {
  return (
    [...text].find((character, index) => text.indexOf(character) !== index) ??
    null
  );
}
function withWhile(text: string): Character {
  const seen = new Set<string>();
  let index = 0;
  while (index < text.length) {
    if (seen.has(text[index])) return text[index];
    seen.add(text[index++]);
  }
  return null;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
