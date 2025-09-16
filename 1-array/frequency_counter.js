// Concept :-
// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations with arrays / strings

// Question - Write a function called same, which accepts two arrays.
//            The function should return true if every value in the array has
//            it's corresponding value squared in the second array.
//            The frequency of values must be the same.

// This has time complexity of O(n^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let element of arr1) {
    const sqrIndex = arr2.indexOf(element ** 2);

    console.log(element, sqrIndex);
    if (sqrIndex === -1) {
      return false;
    }
    arr2.splice(sqrIndex, 1);
  }

  return true;
};

// This has time complexity of O(n)
const same2 = (arr1, arr2) => {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

const arr1 = [1, 1, 5];
const arr2 = [1, 1, 1, 25];

console.log("first", same2(arr1, arr2));


