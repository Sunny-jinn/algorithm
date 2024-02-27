function solution(n, m, x, k, arr) {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (i === j) graph[i][j] = 0;
    }
  }

  for (const ar of arr) {
    const [start, end] = ar;
    graph[start][end] = 1;
    graph[end][start] = 1;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      for (let k = 1; k < n + 1; k++) {
        graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
      }
    }
  }
  console.log(graph);

  return graph[1][k] + graph[k][x];
}

const n = 5,
  m = 7,
  x = 4,
  k = 5;
const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
];

console.log(solution(n, m, x, k, arr));
