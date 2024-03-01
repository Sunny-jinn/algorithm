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
  arr = [],
  v,
  e;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    [v, e] = line.split(" ").map(Number);
  } else {
    arr.push(line.split(" ").map(Number));
    if (lineCnt === e) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  let sum = 0,
    last = 0;
  const parent = Array(v + 1).fill(0);
  for (let i = 1; i < v + 1; i++) {
    parent[i] = i;
  }
  arr.sort((a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  for (const i of arr) {
    const [a, b, cost] = i;
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(parent, a, b);
      sum += cost;
      last = cost;
    }
  }

  console.log(sum - last);
  process.exit();
});
