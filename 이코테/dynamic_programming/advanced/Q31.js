function Solution(n, k, arr) {
  // Your solution code here
  const temp = Array.from({ length: n }, () => new Array(k).fill(0));
  for (let i = 0; i < n; i++) {
    temp[i][0] = arr[i][0];
  }
  for (let i = 1; i < k; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) leftUp = 0;
      else leftUp = temp[j - 1][i - 1];
      left = temp[j][i - 1];
      if (j === n - 1) leftDown = 0;
      else leftDown = temp[j + 1][i - 1];
      temp[j][i] = arr[j][i] + Math.max(leftUp, left, leftDown);
    }
  }
  return temp;
}

const n = 3,
  k = 4;
let leftUp, leftDown, left;
const arr = [
  [1, 3, 3, 2],
  [2, 1, 4, 1],
  [0, 6, 4, 7],
];

console.log(Solution(n, k, arr));

