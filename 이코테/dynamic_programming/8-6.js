function Solution(n, arr) {
  const d = Array(n).fill(0);
  d[0] = arr[0];
  d[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < n; i++) {
    d[i] = Math.max(d[i - 2] + arr[i], d[i - 1]);
  }
  return d[n - 1];
}

console.log(Solution(6, [1, 3, 1, 5, 10, 2]));
