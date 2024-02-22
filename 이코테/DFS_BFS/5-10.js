function solution(n, m, graph) {
  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= n || y >= n) return false;
    if (graph[x][y] === 0) {
      graph[x][y] = 1;
      dfs(x - 1, y);
      dfs(x + 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
      return true;
    }
    return false;
  }
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j) === true) {cnt++;console.log(i, j)}
    }
  }
  return cnt;
}

console.log(
  solution(3, 3, [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
