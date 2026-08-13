export {};

const value = "banana";

type Counts = Record<string, number>;
function withFor(text: string): Counts {
  const result: Counts = {};
  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    result[char] = (result[char] ?? 0) + 1;
  }
  return result;
}
function withForOf(text: string): Counts {
  const result: Counts = {};
  for (const character of text)
    result[character] = (result[character] ?? 0) + 1;
  return result;
}
function withoutLoop(text: string): Counts {
  return [...text].reduce<Counts>(
    (result, character) => ({
      ...result,
      [character]: (result[character] ?? 0) + 1,
    }),
    {},
  );
}
function withWhile(text: string): Counts {
  const result: Counts = {};
  let index = 0;
  while (index < text.length)
    result[text[index]] = (result[text[index++]] ?? 0) + 1;
  return result;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
