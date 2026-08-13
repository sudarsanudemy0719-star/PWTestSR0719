export {};

const value = "mississippi";

type Frequencies = Map<string, number>;
function withFor(text: string): Frequencies {
  const result = new Map<string, number>();
  for (let index = 0; index < text.length; index++)
    result.set(text[index], (result.get(text[index]) ?? 0) + 1);
  return result;
}
function withForOf(text: string): Frequencies {
  const result = new Map<string, number>();
  for (const character of text)
    result.set(character, (result.get(character) ?? 0) + 1);
  return result;
}
function withoutLoop(text: string): Frequencies {
  return [...text].reduce(
    (result, character) =>
      result.set(character, (result.get(character) ?? 0) + 1),
    new Map<string, number>(),
  );
}
function withWhile(text: string): Frequencies {
  const result = new Map<string, number>();
  let index = 0;
  while (index < text.length)
    result.set(text[index], (result.get(text[index++]) ?? 0) + 1);
  return result;
}

console.log(
  withFor(value),
  withForOf(value),
  withoutLoop(value),
  withWhile(value),
);
