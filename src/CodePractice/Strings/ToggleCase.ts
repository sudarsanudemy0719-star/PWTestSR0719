export {};

const value = "TypeScript 2026!";

function withFor(text: string): string {
  let result = "";
  for (let index = 0; index < text.length; index++)
    result +=
      text[index] === text[index].toUpperCase()
        ? text[index].toLowerCase()
        : text[index].toUpperCase();
  return result;
}
function withForOf(text: string): string {
  let result = "";
  for (const character of text)
    result +=
      character === character.toUpperCase()
        ? character.toLowerCase()
        : character.toUpperCase();
  return result;
}
function withoutLoop(text: string): string {
  return text.replace(/[a-z]/gi, (character) =>
    character === character.toUpperCase()
      ? character.toLowerCase()
      : character.toUpperCase(),
  );
}
function withWhile(text: string): string {
  let result = "",
    index = 0;
  while (index < text.length) {
    const character = text[index++];
    result +=
      character === character.toUpperCase()
        ? character.toLowerCase()
        : character.toUpperCase();
  }
  return result;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
