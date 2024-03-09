const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  row,
  col;

function solution(row, col, arr) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const temp = Array.from({ length: row }, () => new Array(col).fill(0));
  console.log(temp);
}

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    [row, col] = line.split(" ").map(Number);
  } else {
    arr.push(line.split(" ").map(Number));
    if (lineCnt === row) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  solution(row, col, arr);
  process.exit();
});
