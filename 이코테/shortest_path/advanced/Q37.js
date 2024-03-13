const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  n = 0;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    n = Number(line);
  } else if (lineCnt === 1) {
    lineCnt++;
    m = Number(line);
  } else {
    arr.push(line.split(" ").map(Number));
    if (lineCnt === m + 1) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  const graph = Array.from({ length: n + 1 }, () =>
    new Array(n + 1).fill(Infinity)
  );
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i === j) graph[i][j] = 0;
    }
  }
  for (let i of arr) {
    const [a, b, d] = i;
    graph[a][b] = Math.min(graph[a][b], d);
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      for (let k = 1; k < n + 1; k++) {
        graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
      }
    }
  }
  for (let i = 1; i < n + 1; i++) {
    if (graph[i][1] === Infinity) graph[i][1] = 0;
    let str = `${graph[i][1]}`;
    for (let j = 2; j < n + 1; j++) {
      if (graph[i][j] === Infinity) graph[i][j] = 0;
      str += " " + graph[i][j];
    }
    console.log(str);
  }
  process.exit();
});
