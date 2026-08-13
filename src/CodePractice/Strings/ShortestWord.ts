export {};

const sentence = "Code every single day";

function withFor(text: string): string {
  const words = text.split(/\s+/);
  let shortest = words[0] ?? "";
  for (let index = 1; index < words.length; index++)
    if (words[index].length < shortest.length) shortest = words[index];
  return shortest;
}
// write a program to find longest word in a sentence using for loop
function withForLongest(text: string): string {
  const words = text.split(/\s+/);
  let longest = words[0] ?? "";
  for (let index = 1; index < words.length; index++)
    if (words[index].length > longest.length) longest = words[index];
  return longest;
}

function withForOf(text: string): string {
  let shortest = "";
  for (const word of text.split(/\s+/))
    if (!shortest || word.length < shortest.length) shortest = word;
  return shortest;
}
function withoutLoop(text: string): string {
  return text
    .split(/\s+/)
    .reduce(
      (shortest, word) =>
        !shortest || word.length < shortest.length ? word : shortest,
      "",
    );
}
function withWhile(text: string): string {
  const words = text.split(/\s+/);
  let shortest = words[0] ?? "",
    index = 1;
  while (index < words.length)
    if (words[index++].length < shortest.length) shortest = words[index - 1];
  return shortest;
}

console.log(
  withFor(sentence),
  withForOf(sentence),
  withoutLoop(sentence),
  withWhile(sentence),
);
