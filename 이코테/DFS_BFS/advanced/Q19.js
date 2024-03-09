const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  opers = [],
  cnt = 0,
  max = -Infinity,
  min = Infinity;

function dfs(i, v) {
  if (i === cnt) {
    max = Math.max(v, max);
    min = Math.min(v, min);
  }
  if (opers[0] > 0) {
    opers[0]--;
    dfs(i + 1, v + arr[i]);
    opers[0]++;
  }
  if (opers[1] > 0) {
    opers[1]--;
    dfs(i + 1, v - arr[i]);
    opers[1]++;
  }
  if (opers[2] > 0) {
    opers[2]--;
    dfs(i + 1, v * arr[i]);
    opers[2]++;
  }
  if (opers[3] > 0) {
    opers[3]--;
    if (parseInt(v / arr[i]) === -0) dfs(i + 1, 0);
    else dfs(i + 1, parseInt(v / arr[i]));
    opers[3]++;
  }
}

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    cnt = Number(line);
  } else if (lineCnt < 2) {
    arr = line.split(" ").map(Number);
    lineCnt++;
  } else {
    opers = line.split(" ").map(Number);
    rl.close();
  }
}).on("close", () => {
  dfs(1, arr[0]);
  console.log(max);
  console.log(min);
  process.exit();
});
