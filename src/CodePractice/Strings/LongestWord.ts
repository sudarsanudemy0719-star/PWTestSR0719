export {};

const sentence = "Learning TypeScript daily";

type WordResult = string;
function withFor(text: string): WordResult {
  const words = text.split(/\s+/);
  let longest = "";
  for (let index = 0; index < words.length; index++)
    if (words[index].length > longest.length) longest = words[index];
  return longest;
}
function withForOf(text: string): WordResult {
  let longest = "";
  for (const word of text.split(/\s+/))
    if (word.length > longest.length) longest = word;
  return longest;
}
function withoutLoop(text: string): WordResult {
  return text
    .split(/\s+/)
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      "",
    );
}
function withWhile(text: string): WordResult {
  const words = text.split(/\s+/);
  let longest = "",
    index = 0;
  while (index < words.length)
    if (words[index++].length > longest.length) longest = words[index - 1];
  return longest;
}

console.log(
  withFor(sentence),
  withForOf(sentence),
  withoutLoop(sentence),
  withWhile(sentence),
);
