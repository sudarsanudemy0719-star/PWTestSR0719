export {};

const numbers = [5, 1, 4, 2, 3];

function withFor(values: number[]): number[] {
  const result = [...values];
  for (let index = 0; index < result.length; index++) {
    let smallest = index;
    for (let scan = index + 1; scan < result.length; scan++)
      if (result[scan] < result[smallest]) smallest = scan;
    [result[index], result[smallest]] = [result[smallest], result[index]];
  }
  return result;
}

function withForOf(values: number[]): number[] {
  const result = [...values];
  let position = 0;
  for (const value of result) {
    const smallest = result
      .slice(position)
      .reduce((current, item) => (item < current ? item : current), value);
    const index = result.indexOf(smallest, position);
    [result[position], result[index]] = [result[index], result[position]];
    position++;
  }
  return result;
}

function withoutLoop(values: number[]): number[] {
  return [...values].sort((a, b) => a - b);
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));
