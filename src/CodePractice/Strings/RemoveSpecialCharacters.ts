export {};

const value = "Hello, TypeScript! 2026";

function withFor(text: string): string {
  let result = "";
  for (let index = 0; index < text.length; index++)
    if (/[a-z0-9 ]/i.test(text[index])) 
        result += text[index];
  return result;
}
function withForOf(text: string): string {
  let result = "";
  for (const character of text)
    if (/[a-z0-9 ]/i.test(character)) 
        result += character;
  return result;
}
function withoutLoop(text: string): string {
  return text.replace(/[^a-z0-9 ]/gi, "");
}
function withWhile(text: string): string {
  let result = "",
    index = 0;
  while (index < text.length) {
    const character = text[index++];
    if (/[a-z0-9 ]/i.test(character)) 
        result += character;
  }
  return result;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
