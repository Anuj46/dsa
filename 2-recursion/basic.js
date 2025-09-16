// Concept : A process (a function in our case) that calls itself
//           Invoke the same function with a different input until you reach your base case!
//           Two essential parts of a recursive function:-
//           1. Base Case - The condition when the recursion ends.
//           2. Different Input

const cowndown = (num) => {
  if (num <= 0) {
    return;
  }
  console.log(num);
  num--;
  cowndown(num);
};

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(0));

// HELPER METHOD RECURSION

const collectOdds = (arr) => {
  let result = [];

  const helper = (arr) => {
    if (arr.length === 0) return;
    if (arr[arr.length - 1] % 2 !== 0) {
      result.push(arr[arr.length - 1]);
    }
    arr.pop();
    helper(arr);
  };

  helper(arr);
  return result;
};

console.log("collectOdds", collectOdds([]));

// PURE RECURSION

const pureCollectOdds = (arr) => {
  let oddArr = [];

  if (arr.length === 0) {
    return oddArr;
  }
  if (arr[arr.length - 1] % 2 !== 0) {
    oddArr.push(arr[arr.length - 1]);
  }
  arr.pop();

  return oddArr.concat(pureCollectOdds(arr));
};

console.log("pureCollectOdds", pureCollectOdds([]));

// Pure Recursion Tips
// => For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
// => Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
// => To make copies of objects use Object.assign, or the spread operator.

// What about big O?
// => Measuring time complexity is relatively simple. You can measure the time complexity of a recursive function as then number of 
//    recursive calls you need to make relative to the input.
// => Measuring space complexity is a bit more challenging. You can measure the space complexity of a recursive function as the maximum 
//    number of functions on the call stack at a given time, since the call stack requires memory.
