const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findParent(parent, x) {
  if (parent[x] !== x) parent[x] = findParent(parent, parent[x]);
  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a > b ? (parent[a] = b) : (parent[b] = a);
}

let lineCnt = 0,
  x = [],
  y = [],
  z = [],
  edges = [],
  cnt = 0;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    cnt = Number(line);
  } else {
    const [x1, y1, z1] = line.split(" ").map(Number);
    x.push([x1, lineCnt]);
    y.push([y1, lineCnt]);
    z.push([z1, lineCnt]);
    if (lineCnt === cnt) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  const parent = Array.from({ length: cnt + 1 }, (_, idx) => idx);
  x.sort((a, b) => a[0] - b[0]);
  y.sort((a, b) => a[0] - b[0]);
  z.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < cnt - 1; i++) {
    edges.push([x[i + 1][0] - x[i][0], x[i][1], x[i + 1][1]]);
    edges.push([y[i + 1][0] - y[i][0], y[i][1], y[i + 1][1]]);
    edges.push([z[i + 1][0] - z[i][0], z[i][1], z[i + 1][1]]);
  }
  edges.sort((a, b) => a[0] - b[0]);
  let sum = 0;
  for (const edge of edges) {
    const [cost, a, b] = edge;
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(parent, a, b);
      sum += cost;
    }
  }
  console.log(sum);
  process.exit();
});
