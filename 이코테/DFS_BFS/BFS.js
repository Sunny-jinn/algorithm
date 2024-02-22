function bfs(graph, start, visited) {
  queue = [start];
  visited[start] = true;
  while (queue.length !== 0) {
    const v = queue.shift();
    console.log(v);
    for (const i of graph[v]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
}

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = Array.from({ length: 9 }, () => false);

bfs(graph, 1, visited);
