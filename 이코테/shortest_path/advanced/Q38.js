function Solution(n, m, arr) {
  // Your solution code here
  const graph = Array.from({ length: n + 1 }, () =>
    new Array(n + 1).fill(1e5 + 1)
  );

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i === j) graph[i][j] = 0;
    }
  }

  for (let i of arr) {
    const [a, b] = i;
    graph[a][b] = 1;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let a = 1; a < n + 1; a++) {
      for (let b = 1; b < n + 1; b++) {
        graph[a][b] = Math.min(graph[a][b], graph[a][i] + graph[i][b]);
      }
    }
  }
  let result = 0;
  for (let i = 1; i < n + 1; i++) {
    let cnt = 0;
    for (let j = 1; j < n + 1; j++) {
      (graph[i][j] !== 1e5 + 1 || graph[j][i] !== 1e5 + 1) && cnt++;
    }
    cnt === n && result++;
  }
  return result;
}

const n = 6,
  m = 7;
const arr = [
  [1, 5],
  [3, 4],
  [4, 2],
  [4, 6],
  [5, 2],
  [5, 4],
  [5, 3],
];

console.log(Solution(n, m, arr));
