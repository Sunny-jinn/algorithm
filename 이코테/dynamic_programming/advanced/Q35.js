function Solution(n, arr) {
  // Your solution code here
  const temp = [1];
  for (let i = 2; i <= 1000; i++) {
    if (i % 2 === 0 || i % 5 === 0 || i % 3 === 0) temp.push(i);
  }
  return temp[n - 1];
}

console.log(Solution(4));
