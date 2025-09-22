// It's a combination of two things - merging and sorting!
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// Merging Arrays
// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

const merge = (arr1, arr2) => {
  const mergedArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    for (let k = i; k < arr1.length; k++) {
      mergedArr.push(arr1[k]);
    }
  }

  if (j < arr2.length) {
    for (let k = j; k < arr2.length; k++) {
      mergedArr.push(arr2[k]);
    }
  }

  return mergedArr;
};

console.log(merge([1, 2, 3, 3, 3], [2, 3]));

// mergeSort Pseudocode
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([2, 9, 1, 0, 6, 8, 4, 5]));
