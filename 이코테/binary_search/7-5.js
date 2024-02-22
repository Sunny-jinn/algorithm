function BinarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

const Solution = (N, arr1, M, arr2) => {
  arr1.sort((a, b) => a - b);
  for (const num of arr2) {
    if (BinarySearch(arr1, num, 0, N - 1) !== -1) console.log("yes");
    else console.log("no");
  }
};

console.time("solutio");

// 실행할 코드
Solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]);

console.timeEnd("solutio");
