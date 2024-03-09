class Deque {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.rear = 0;
  }

  push(v) {
    this.arr[this.rear++] = v;
  }

  pop() {
    if (this.front >= this.rear) return null;
    return this.arr[this.front++];
  }

  isEmpty() {
    return this.front >= this.rear;
  }
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function BFS(graph, start, visited) {
  visited[start] = true;
  const q = new Deque();
  q.push(start);
  let dis = Array(n + 1).fill(-1);
  dis[start] = 0;
  while (!q.isEmpty()) {
    const v = q.pop();
    for (const i of graph[v]) {
      if (!visited[i]) {
        dis[i] = dis[v] + 1;
        visited[i] = true;
        q.push(i);
      }
    }
  }
  return dis;
}

let lineCnt = 0,
  graph = [],
  n,
  m,
  k,
  x;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    [a, b, c, d] = line.split(" ").map(Number);
    (n = a), (m = b), (k = c), (x = d);
    graph = Array.from({ length: n + 1 }, () => []);
  } else {
    [a, b] = line.split(" ").map(Number);
    graph[a].push(b);
    if (lineCnt === m) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  const visited = Array(n + 1).fill(false);
  const temp = BFS(graph, x, visited);
  let chk = false;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === k) {
      console.log(i);
      chk = true;
    }
  }
  if (!chk) console.log(-1);
  process.exit();
});
