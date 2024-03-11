const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  cnt = 0;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    cnt = Number(line);
  } else {
    arr.push(line.split(" ").map(Number));
    if (lineCnt === cnt) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  let left, right;
  for (let i = 1; i < cnt; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) left = 0;
      else left = arr[i - 1][j - 1];
      if (j === i) right = 0;
      else right = arr[i - 1][j];
      arr[i][j] = arr[i][j] + Math.max(left, right);
    }
  }
  let result = 0;
  for (let i = 0; i < cnt; i++) {
    result = Math.max(result, arr[cnt - 1][i]);
  }
  console.log(result);
  process.exit();
});
