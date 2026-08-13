export {};

const sentence = "Count the words in this sentence";

function withFor(text: string): number {
  let count = 0,
    inWord = false;
  for (let index = 0; index < text.length; index++) {
    if (/\S/.test(text[index]) && !inWord) count++;
    inWord = /\S/.test(text[index]);
  }
  return count;
}
function withForOf(text: string): number {
  let count = 0,
    inWord = false;
  for (const character of text) {
    if (/\S/.test(character) && !inWord) count++;
    inWord = /\S/.test(character);
  }
  return count;
}
function withoutLoop(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}
function withWhile(text: string): number {
  let count = 0,
    index = 0,
    inWord = false;
  while (index < text.length) {
    if (/\S/.test(text[index]) && !inWord) count++;
    inWord = /\S/.test(text[index++]);
  }
  return count;
}

console.log(
  withFor(sentence),
  withForOf(sentence),
  withoutLoop(sentence),
  withWhile(sentence),
);
