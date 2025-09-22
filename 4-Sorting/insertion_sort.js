// Builds up the sort by gradually creating a larger left half which is always sorted

const insertion_sort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
};

console.log("zzzz", insertion_sort([42, 95, 712, 12, 14, 32, 285, 36]));

class InsertionSort {
  static iSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    for (let i = 0; i < arr.length; i++) {
      const currentVal = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }
}

console.log(InsertionSort.iSort([2, -2, 0, -9, 85, 58, 65, 92, 10, 0, -52]));
