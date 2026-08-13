export {};

const numbers = [1, 2, 3, 4, 5];
const size = 2;

function withFor(values: number[], chunkSize: number): number[][] {
  const result: number[][] = [];

  for (let index = 0; index < values.length; index += chunkSize) {
    const chunk = values.slice(index, index + chunkSize);
    result.push(chunk);
  }

  return result;
}

function withForOf(values: number[], chunkSize: number): number[][] {
  const result: number[][] = [];

  for (const value of values) {
    const lastChunk = result[result.length - 1];

    if (!lastChunk || lastChunk.length === chunkSize) {
      result.push([]);
    }

    result[result.length - 1].push(value);
  }

  return result;
}

function withoutLoop(values: number[], chunkSize: number): number[][] {
  return values.reduce<number[][]>((result, value, index) => {
    if (index % chunkSize === 0) {
      result.push([]);
    }

    result[result.length - 1].push(value);
    return result;
  }, []);
}

console.log(
  withFor(numbers, size),
  withForOf(numbers, size),
  withoutLoop(numbers, size),
);
