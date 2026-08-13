export {};

const value = "TypeScript";
const vowels = "aeiou";

function withFor(text: string): number {
  let count = 0;
  for (let index = 0; index < text.length; index++)
    if (vowels.includes(text[index].toLowerCase())) count++;
  return count;
}
function withForOf(text: string): number {
  let count = 0;
  for (const character of text.toLowerCase())
    if (vowels.includes(character)) count++;
  return count;
}
function withoutLoop(text: string): number {
  return (text.match(/[aeiou]/gi) ?? []).length;
}
function withWhile(text: string): number {
  let count = 0,
    index = 0;
  while (index < text.length)
    if (vowels.includes(text[index++].toLowerCase())) count++;
  return count;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
