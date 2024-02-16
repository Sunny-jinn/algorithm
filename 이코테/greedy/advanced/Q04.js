const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0;
let cnt, temp;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    cnt = Number(line);
  }
  if (lineCnt === 1) {
    temp = line.split(" ").map((num) => Number(num));
    temp.sort((a, b) => b - a);
    rl.close();
  }
  lineCnt++;
});

rl.on("close", () => {
  let sum = 0;
  temp.forEach((num) => (sum += num));
  for (let i = 1; i < sum; i++) {
    let temp3 = i;
    for (let j = 0; j < cnt; j++) {
      if (temp3 >= temp[j]) {
        temp3 -= temp[j];
      }
      if (temp3 === 0) break;
    }
    if (temp3 !== 0) {
      console.log(i);
      process.exit();
    }
  }
  console.log(sum + 1);
  process.exit();
});
