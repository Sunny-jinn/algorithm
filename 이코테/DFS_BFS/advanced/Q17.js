class Deque {
  constructor(arr) {
    this.heap = JSON.parse(JSON.stringify(arr));
    this.front = 0;
    this.rear = arr.length;
  }

  push(v) {
    this.heap[this.rear++] = v;
  }

  pop() {
    if (this.front >= this.rear) return null;
    return this.heap[this.front++];
  }

  isEmpty() {
    return this.front >= this.rear;
  }
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  temp = [],
  n,
  k,
  s,
  x,
  y;

function bfs() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== 0) temp.push([arr[i][j], 0, i, j]); // virus에 대한 정보, 시간, x, y
    }
  }

  temp.sort((a, b) => a[0] - b[0]);
  const q = new Deque(temp);
  while (!q.isEmpty()) {
    let num = q.pop();
    const [virus, sec, x1, y1] = num;
    if (sec === s) break;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
      const nx = x1 + dx[i];
      const ny = y1 + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (arr[nx][ny] === 0) {
        arr[nx][ny] = virus;
        q.push([virus, sec + 1, nx, ny]);
      }
    }
  }
  console.log(arr[x - 1][y - 1]);
  return;
}

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    [n, k] = line.split(" ").map(Number);
  } else if (lineCnt <= n) {
    arr.push(line.split(" ").map(Number));
    lineCnt++;
  } else {
    [s, x, y] = line.split(" ").map(Number);
    rl.close();
  }
}).on("close", () => {
  bfs();
  process.exit();
});
