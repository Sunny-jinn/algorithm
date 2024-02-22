const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [];

rl.on("line", (line) => {
  if (lineCnt === 0) lineCnt++;
  else {
    arr = line.split(" ").map(Number);
    rl.close();
  }
}).on("close", () => {
  arr.sort((a, b) => a - b);
  console.log(arr[Math.floor((arr.length -1) / 2)]);
  process.exit();
});
