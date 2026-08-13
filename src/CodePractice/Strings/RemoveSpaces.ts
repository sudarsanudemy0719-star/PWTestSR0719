export {};

const value = "remove all spaces";

function withFor(text: string): string {
  let result = "";
  for (let index = 0; index < text.length; index++)
    if (text[index] !== " ") result += text[index];
  return result;
}
function withForOf(text: string): string {
  let result = "";
  for (const character of text) if (!/\s/.test(character)) result += character;
  return result;
}
function withoutLoop(text: string): string {
  return text.replace(/\s/g, "");
}
function withWhile(text: string): string {
  let result = "",
    index = 0;
  while (index < text.length)
    if (!/\s/.test(text[index++])) result += text[index - 1];
  return result;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
