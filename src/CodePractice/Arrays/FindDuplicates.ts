export {};

const numbers = [1, 2, 2, 3, 4, 4, 5];

function withFor(values: number[]): number[] {
  const seen = new Set<number>(),
    duplicates = new Set<number>();
  for (let index = 0; index < values.length; index++) {
    if (seen.has(values[index])) duplicates.add(values[index]);
    else seen.add(values[index]);
  }
  return [...duplicates];
}

function withForOf(values: number[]): number[] {
  const seen = new Set<number>(),
    duplicates = new Set<number>();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    else seen.add(value);
  }
  return [...duplicates];
}

function withoutLoop(values: number[]): number[] {
  return [
    ...new Set(
      values.filter((value, index) => values.indexOf(value) !== index),
    ),
  ];
}

console.log(withFor(numbers), withForOf(numbers), withoutLoop(numbers));

// write a program to find duplicates in an array of numbers using for loop
function findDuplicates(values: number[]): number[] {
  const duplicates: number[] = [];
  const seen = new Set<number>();

  for (let i = 0; i < values.length; i++) {
    if (seen.has(values[i])) {
      duplicates.push(values[i]);
    } else {
      seen.add(values[i]);
    }
  }

  return duplicates;
  return seen.size < values.length
    ? [...seen].filter((value, index) => values.indexOf(value) !== index)
    : [];
}

console.log(findDuplicates(numbers));
