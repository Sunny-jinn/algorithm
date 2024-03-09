const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  cnt = 0;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    cnt = Number(line);
    if (cnt === 0) {
      console.log(0);
      process.exit();
    }
    lineCnt++;
  } else {
    arr.push(Number(line));
    if (lineCnt++ === cnt) rl.close();
  }
}).on("close", () => {
  const x = Math.round(arr.length * 0.15);
  let sum = 0;
  arr.sort((a, b) => a - b);
  for (let i = x; i < arr.length - x; i++) {
    sum += arr[i];
  }
  console.log(Math.round(sum / (arr.length - 2 * x)));
  process.exit();
});
