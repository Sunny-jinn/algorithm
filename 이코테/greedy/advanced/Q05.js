const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total, temp;
let lineCount = 0;

rl.on("line", (line) => {
  if (lineCount === 0) {
    total = Number(line[0]);
    lineCount++;
  } else {
    temp = line.split(" ").map((num) => Number(num));
    rl.close();
  }
});

rl.on("close", () => {
  let cnt = 0;
  for (let i = 0; i < total; i++) {
    for (let j = i; j < total; j++) {
      if (temp[i] !== temp[j]) cnt++;
    }
  }
  console.log(cnt);
  process.exit();
});
