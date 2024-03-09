const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  row,
  col;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    [row, col] = line.split(" ").map(Number);
  } else {
    arr.push(line.split(" ").map(Number));
    if (lineCnt === cnt) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  console.log(row, col, arr);
  process.exit();
});
