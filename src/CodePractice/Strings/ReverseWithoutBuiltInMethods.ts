export {};

const value = "without methods";

function withFor(text: string): string {
  let result = "";
  for (let index = text.length - 1; index >= 0; index--) 
    result += text[index];
  return result;
}

function withForOf(text: string): string {
  let result = "";
  for (const character of text) result = character + result;
  return result;
}
function withoutLoop(text: string): string {
  return text.split("").reduce((result, character) => character + result, "");
}
function withWhile(text: string): string {
  let result = "",
    index = text.length - 1;
  while (index >= 0) result += text[index--];
  return result;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
