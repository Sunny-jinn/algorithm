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
  arr
    .sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[0] - b[0];
    })
    .forEach((num) => {
      console.log(`${num[0]} ${num[1]}`);
    });

  process.exit();
});
