const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  cnt = 0,
  sum = 0;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    cnt = Number(line);
  } else {
    arr.push(parseInt(line));
    sum += parseInt(line);
    if (lineCnt === cnt) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  console.log(~~Math.round(sum / cnt));
  arr.sort((a, b) => a - b);
  console.log(arr[~~(arr.length / 2)]);

  let m = new Map();
  for (const n of arr) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    return a[0] - b[0];
  });
  if (m.length === 1) console.log(m[0][0]);
  else m[0][1] === m[1][1] ? console.log(m[1][0]) : console.log(m[0][0]);
  console.log(Math.max(...arr) - Math.min(...arr));
  process.exit();
});
