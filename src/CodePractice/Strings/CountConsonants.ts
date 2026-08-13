export {};

const value = "TypeScript 2026";

function withFor(text: string): number {
  let count = 0;
  for (let index = 0; index < text.length; index++)
    if (/[a-z]/i.test(text[index]) && !/[aeiou]/i.test(text[index])) count++;
  return count;
}
function withForOf(text: string): number {
  let count = 0;
  for (const character of text)
    if (/[a-z]/i.test(character) && !/[aeiou]/i.test(character)) count++;
  return count;
}
function withoutLoop(text: string): number {
  return (text.match(/[b-df-hj-np-tv-z]/gi) ?? []).length;
}
function withWhile(text: string): number {
  let count = 0,
    index = 0;
  while (index < text.length) {
    const character = text[index++];
    if (/[a-z]/i.test(character) && !/[aeiou]/i.test(character)) count++;
  }
  return count;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
