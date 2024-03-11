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
  const dp = new Array(cnt + 1).fill(0);
  let maxValue = 0;
  for (let i = cnt - 1; i >= 0; i--) {
    let time = arr[i][0] + i;
    if (time > cnt) dp[i] = maxValue;
    else {
      dp[i] = Math.max(arr[i][1] + dp[time], maxValue);
      maxValue = dp[i];
    }
  }
  console.log(Math.max(...dp));
  process.exit();
});
