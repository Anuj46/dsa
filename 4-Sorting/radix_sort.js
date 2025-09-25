// Radix sort is a special sorting algorithm that works on lists of numbers
// It never makes comparisons between elements!
// It exploits the fact that information about the size of a number is encoded in the number of digits.
// More digits means a bigger number!
// Its also known as bucket sort.

const getDigit = (num, digit) => {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return String(Math.abs(num)).length;
};

const mostDigits = (arr) => {
  if (arr.length === 0) return 0;

  let c = 0;
  for (let digit of arr) {
    if (digitCount(digit) > c) c = digitCount(digit);
  }

  return c;
};

const radixSort = (arr) => {
  if (arr.length < 2) return arr;

  let k = mostDigits(arr);
  for (let i = 0; i < k; i++) {
    const digitBucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      digitBucket[digit].push(arr[j]);
    }
    arr = [].concat(...digitBucket);
  }

  return arr;
};

console.log(radixSort([1223, 554, 655, 987, 45, 452, 54, 35]));
