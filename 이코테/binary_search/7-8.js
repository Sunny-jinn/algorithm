function Solution(N, M, arr) {
  arr.sort((a, b) => a - b);
  let start = 0,
    end = Math.max(...arr),
    result = 0;
  while (start <= end) {
    let sum = 0;
    const mid = parseInt((start + end) / 2);
    arr.forEach((num) => {
      if (num > mid) sum += num - mid;
    });
    if (sum < M) end = mid - 1;
    else {
      result = mid;
      start = mid + 1;
    }
  }
  return result;
}

console.log(Solution(4, 6, [19, 15, 10, 17]));
