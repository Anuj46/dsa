// Quick Sort

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let p = arr[start];
  let count = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < p) {
      count++;
      [arr[i], arr[count]] = [arr[count], arr[i]];
    }
  }

  [arr[start], arr[count]] = [arr[count], arr[start]];

  return count;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    //   left
    quickSort(arr, left, pivotIndex - 1);

    //   right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

console.log(quickSort([10, 5, 3, 9, 2, 1, -1, 9]));
