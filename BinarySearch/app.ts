const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const binarySearch = (target: number, start: number, end: number): any => {
  let middle = Math.floor((start + end) / 2);

  if (numbers[middle] === target) {
    return `I found your character at the ${
      middle + 1
    }th index of the numbers.`;
  }

  if (numbers[middle] < target) {
    return binarySearch(target, start + 1, end);
  }

  if (numbers[middle] > target) {
    return binarySearch(target, start, middle - 1);
  }
};

console.log(binarySearch(2, 0, numbers.length));
