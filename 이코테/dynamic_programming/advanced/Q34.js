// !FEAT: 가장 긴 증가하는 부분 수열

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
    arr = line.split(" ").map(Number);
    rl.close();
  }
}).on("close", () => {
  const dp = new Array(cnt).fill(1);
  for (let i = 1; i < cnt ; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  console.log(cnt - Math.max(...dp));
  process.exit();
});
