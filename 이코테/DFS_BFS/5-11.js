function solution(n, m, graph) {
  dx = [-1, 1, 0, 0];
  dy = [0, 0, -1, 1];

  function bfs(x, y) {
    q = [];
    q.push([x, y]);

    while (q.length !== 0) {
      const temp = q.shift();
      (x = temp[0]), (y = temp[1]);
      for (let i = 0; i < 4; i++) {
        nx = x + dx[i];
        ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
        if (graph[nx][ny] === 0) continue;
        if (graph[nx][ny] === 1) {
          graph[nx][ny] = graph[x][y] + 1;
          q.push([nx, ny]);
        }
      }
    }
    return graph[n - 1][m - 1];
  }
  return bfs(0, 0);
}

console.log(
  solution(5, 6, [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
