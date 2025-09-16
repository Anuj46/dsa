// Concept :-
// This pattern involves creating a window which can either be an array or number from one position to another
// Depending on a certain condition, the window either increases or closes (and a new window is created)
// Very useful for keeping track of a subset of data in an array/string etc.

// Question - Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//            The function should calculate the maximum sum of n consecutive elements in the array.

// Time Complexity O(n^2)
const maxSubarraySum = (arr, num) => {
  if (arr.length < num) {
    return null;
  }

  let sum = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let newSum = 0;

    for (let j = i; j < num + i; j++) {
      newSum += arr[j];
    }

    if (newSum > sum) {
      sum = newSum;
    }
  }

  return sum;
};

// Time Complexity O(n)
const maxSubarraySum2 = (arr, num) => {
  if (arr.length < num) {
    return null;
  }

  let sum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  tempSum = sum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - num];
    sum = Math.max(tempSum, sum);
  }

  return sum;
};

const arr = [4,2,1,6,2];

console.log(maxSubarraySum(arr, 2));
