const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  parent = [],
  temp3 = [],
  N,
  L,
  R;

function union(graph) {
  for (let [i, j, nx, ny] of graph) {
    temp3.push(Math.min(parent[i][j], parent[nx][ny]));
    if (parent[i][j] !== parent[nx][ny]) {
      parent[i][j] > parent[nx][ny]
        ? (parent[i][j] = parent[nx][ny])
        : (parent[nx][ny] = parent[i][j]);
    }
  }
}

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    [N, L, R] = line.split(" ").map(Number);
  } else {
    arr.push(line.split(" ").map(Number));
    if (lineCnt === N) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  parent = Array.from({ length: N }, (_, idx) => new Array(N).fill(0));
  let cnt = 1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      parent[i][j] = cnt++;
    }
  }
  const graph = [];
  parent[0][0] = 1;
  //   while (true) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < 4; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];
        if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
          const gap = Math.abs(arr[i][j] - arr[nx][ny]);
          if (gap >= L && gap <= R) {
            graph.push([i, j, nx, ny]);
          }
        }
      }
    }
  }
  // 간선이 없을 경우 끝
  // if (graph.length === 0) break;
  union(graph);
  const temp2 = temp3.filter((num, idx) => temp3.indexOf(num) === idx);
  console.log(temp2, parent);
  for(const a of temp2) {
    for(let i =0; i< N; i++) {
        for(let j =0; j < N; j++) {
            
        }
    }
  }
  let sum = 0;

  process.exit();
});
