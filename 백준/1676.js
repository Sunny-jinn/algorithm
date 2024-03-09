const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

rl.on("line", (line) => {
  n = Number(line);
  rl.close();
}).on("close", () => {
  let cnt1 = 0,
    cnt2 = 0;
  for (let i = 1; i < n + 1; i++) {
    let temp = i;
    if(temp % 5 === 0) {
        while(temp % 5 === 0) {
            cnt1++;
            temp /= 5;
        }
    } else if(temp % 2 === 0) {
        while(temp % 2 === 0) {
            temp = temp / 2;
            cnt2++;
        }
    }
  }
  console.log(Math.min(cnt1, cnt2));
  process.exit();
});
