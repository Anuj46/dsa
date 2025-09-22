// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

const selectionSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
};

console.log(selectionSort([712, 285, 42, 14, 12, 32, 95, 36]));

class SelectionSort {
  static sSort(arr) {
    if (arr.length < 2) {
      return arr;
    }

    for (let i = 0; i < arr.length; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[min] > arr[j]) {
          min = j;
        }
      }
      if (i !== min) [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
  }
}

console.log(SelectionSort.sSort([1, -2, 55, 598, -2, 65, -9, 56, 3, 4]));
