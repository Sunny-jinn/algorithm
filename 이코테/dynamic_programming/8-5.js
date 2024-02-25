const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  X;

rl.on("line", (line) => {
  X = Number(line);
  rl.close();
}).on("close", () => {
  arr = Array(X + 1).fill(0);
  for (let i = 2; i <= X ; i++) {
      arr[i] = arr[i - 1] + 1;
    if (i % 2 === 0) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    if (i % 5 === 0) arr[i] = Math.min(arr[i], arr[i / 5] + 1);
    if (i % 3 === 0) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
  }
  console.log(arr[X]);
  process.exit();
});
