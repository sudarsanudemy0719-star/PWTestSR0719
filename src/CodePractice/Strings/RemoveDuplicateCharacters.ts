export {};

const value = "programming";

function withFor(text: string): string {
  let result = "";
  for (let index = 0; index < text.length; index++)
    if (!result.includes(text[index])) result += text[index];
  return result;
}
function withForOf(text: string): string {
  const seen = new Set<string>();
  for (const character of text) seen.add(character);
  return [...seen].join("");
}
function withoutLoop(text: string): string {
  return [...new Set(text)].join("");
}
function withWhile(text: string): string {
  let result = "",
    index = 0;
  while (index < text.length) {
    if (!result.includes(text[index])) result += text[index];
    index++;
  }
  return result;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
