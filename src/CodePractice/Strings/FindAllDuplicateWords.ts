export {};

const sentence = "this is a test and this is useful";

type Words = string[];
function withFor(text: string): Words {
  const counts: Record<string, number> = {};
  const words = text.toLowerCase().split(/\s+/);
  for (let index = 0; index < words.length; index++)
    counts[words[index]] = (counts[words[index]] ?? 0) + 1;
  return Object.keys(counts).filter((word) => counts[word] > 1);
}
function withForOf(text: string): Words {
  const counts = new Map<string, number>();
  for (const word of text.toLowerCase().split(/\s+/))
    counts.set(word, (counts.get(word) ?? 0) + 1);
  const result: string[] = [];
  for (const [word, count] of counts) if (count > 1) result.push(word);
  return result;
}
function withoutLoop(text: string): Words {
  const words = text.toLowerCase().split(/\s+/);
  return [
    ...new Set(
      words.filter((word) => words.indexOf(word) !== words.lastIndexOf(word)),
    ),
  ];
}
function withWhile(text: string): Words {
  const words = text.toLowerCase().split(/\s+/),
    counts: Record<string, number> = {};
  let index = 0;
  while (index < words.length)
    counts[words[index]] = (counts[words[index++]] ?? 0) + 1;
  return Object.keys(counts).filter((word) => counts[word] > 1);
}

console.log(
  withFor(sentence),
  withForOf(sentence),
  withoutLoop(sentence),
  withWhile(sentence),
);
