function Solution(n, k, arr) {
  const d = Array(k + 1).fill(10001);
  d[0] = 0;
  for (const money of arr) {
    for (let j = money; j < k + 1; j++) {
      if (d[j - money] !== -1) d[j] = Math.min(d[j], d[j - money] + 1);
    }
  }
  return d[k];
  // Your solution code here
}

const n = 3;
const k = 4;
const arr = [1, 6, 5, 7];

console.log(Solution(n, k, arr));
