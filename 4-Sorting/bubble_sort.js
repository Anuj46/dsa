//   A sorting algorithm where the largest values bubble up to the top!

const bubbleSort = (arr) => {
  if (arr.length < 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([42, 95, 712, 12, 14, 32, 285, 36]));

// let's say we have an almost sorted array then we have to short circuit our code.
// Optimized bubble sort.

const OptbubbleSort = (arr) => {
  if (arr.length < 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let noSwap = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (!noSwap) break;
  }
  return arr;
};

class BubbleSort {
  static bSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    for (let i = 0; i < arr.length; i++) {
      let isSwap = false;
      for (let j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          isSwap = true;
        }
      }
      if (!isSwap) break;
    }
    return arr;
  }
}

console.log(BubbleSort.bSort([42, -1, -58, 55, 6, 95]));
