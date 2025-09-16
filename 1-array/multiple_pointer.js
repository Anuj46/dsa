// Concept :-
// Creating pointers or values that correspond to an index or position and move towards the beginning,
// end or middle based on a certain condition.
// Very efficient for solving problems with minimal space complexity as well

// Question - Write a function called sumZero which accepts a sorted array of integers.
//            The function should find the first pair where the sum is 0. Return an array
//            that includes both values that sum to zero or undefined if a pair does not exist

// This has time complexity of O(n^2)
const sumZero = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }

  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
};

// This has time complexity of O(n)
const sumZero2 = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
};

const arr = [-4, -3, -2, 0, 1, 5];

console.log(sumZero2(arr));
