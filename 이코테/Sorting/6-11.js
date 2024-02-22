const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  n,
  input = 0,
  arr = [];

rl.on("line", (line) => {
  if (lineCnt === 0) {
    n = Number(line);
    lineCnt++;
  } else if (lineCnt === 1) {
    const [name, score] = line.split(' ');
    arr.push({name, score: Number(score)});
    input++;
    if (input === n) rl.close();
  }
}).on("close", () => {
  arr.sort((a, b) => a.score - b.score);
  const temp = arr.map(stu => stu.name).join(" ");
  console.log(temp);
  process.exit();
});
