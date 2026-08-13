export {};

const sentence = "TypeScript makes strings fun";

function withFor(text: string): string {
  const words = text.split(" ");
  for (let left = 0, right = words.length - 1; left < right; left++, right--)
    [words[left], words[right]] = [words[right], words[left]];
  return words.join(" ");
}
// reverse the string like "TypeScript makes strings fun" to ""fun strings makes TypeScript" using for loop
function withForReverseString(text: string): string {
  const words = text.split(" ");
  let result = "";
  for (let index = words.length - 1; index >= 0; index--) 
    result += `${index === words.length - 1 ? "" : " "}${words[index]}`;
  return result;
}
console.log(
  withForReverseString(sentence),
);

// Reverse every word while keeping the word order unchanged.
function withForReverseCharacters(text: string): string {
  const words = text.split(" ");
  let result = "";
  for (let index = 0; index < words.length; index++) {
    const word = words[index];
    for (let charIndex = word.length - 1; charIndex >= 0; charIndex--) 
      result += word[charIndex];
    if (index < words.length - 1) result += " ";
  }
  return result;
}
console.log(
  withForReverseCharacters(sentence),
);

// reverse the string like "TypeScript makes strings fun" to "nuf sgnirts skam tpircSepyT" using for loop
function withForReverse(text: string): string {
  let result = "";
  for (let index = text.length - 1; index >= 0; index--) 
    result += text[index];
  return result;
}
console.log(
  withForReverse(sentence),
);





function withForOf(text: string): string {
  let result = "";
  for (const word of text.split(" "))
    result = result ? `${word} ${result}` : word;
  return result;
}
function withoutLoop(text: string): string {
  return text.split(" ").reverse().join(" ");
}
function withWhile(text: string): string {
  const words = text.split(" ");
  let result = "";
  let index = words.length - 1;
  while (index >= 0)
    result += `${index === words.length - 1 ? "" : " "}${words[index--]}`;
  return result;
}

console.log(
  withFor(sentence),
  withForOf(sentence),
  withoutLoop(sentence),
  withWhile(sentence),
);
