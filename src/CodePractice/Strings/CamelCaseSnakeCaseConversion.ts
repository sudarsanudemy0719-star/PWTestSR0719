export {};

const camel = "helloWorldExample",
  snake = "hello_world_example";

function withFor(text: string): string {
  let result = "";
  for (let index = 0; index < text.length; index++)
    result +=
      text[index] === text[index].toUpperCase() && /[A-Z]/.test(text[index])
        ? `_${text[index].toLowerCase()}`
        : text[index];
  return result;
}
function withForOf(text: string): string {
  let result = "",
    previous = "";
  for (const character of text) {
    result +=
      /[A-Z]/.test(character) && previous
        ? `_${character.toLowerCase()}`
        : character;
    previous = character;
  }
  return result;
}
function withoutLoop(text: string): string {
  return text.replace(/[A-Z]/g, (character) => `_${character.toLowerCase()}`);
}
function withWhile(text: string): string {
  let result = "",
    index = 0;
  while (index < text.length) {
    const character = text[index++];
    result +=
      /[A-Z]/.test(character) && index > 1
        ? `_${character.toLowerCase()}`
        : character;
  }
  return result;
}
function snakeToCamel(text: string): string {
  return text.replace(/_([a-z])/g, (_, character: string) =>
    character.toUpperCase(),
  );
}

console.log(
  withFor(camel),
  withForOf(camel),
  withoutLoop(camel),
  withWhile(camel),
  snakeToCamel(snake),
);
