export {};

const sentence = "hello from typescript";

function withFor(text: string): string {
  let result = "";
  let start = true;
  for (let index = 0; index < text.length; index++) {
    const character = text[index];
    result += start ? character.toUpperCase() : character;
    start = character === " ";
  }
  return result;
}
function withForOf(text: string): string {
  let result = "",
    start = true;
  for (const character of text) {
    result += start ? character.toUpperCase() : character;
    start = character === " ";
  }
  return result;
}
function withoutLoop(text: string): string {
  return text.replace(/(^|\s)\S/g, (character) => character.toUpperCase());
}
function withWhile(text: string): string {
  let result = "",
    index = 0,
    start = true;
  while (index < text.length) {
    const character = text[index++];
    result += start ? character.toUpperCase() : character;
    start = character === " ";
  }
  return result;
}

console.log(
  withFor(sentence),
  withForOf(sentence),
  withoutLoop(sentence),
  withWhile(sentence),
);
