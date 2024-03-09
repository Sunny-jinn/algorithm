const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  k = 0,
  n;

function count(num) {
  let cnt = 0;
  arr.forEach((a) => (cnt += ~~(a / num)));
  return cnt;
}

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    [k, n] = line.split(" ").map(Number);
  } else {
    arr.push(Number(line));
    if (lineCnt === k) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  arr.sort((a, b) => a - b);
  let result = 0;
  let start = 1,
    end = arr[k - 1];
  while (start <= end) {
    let mid = ~~((start + end) / 2);
    let temp = count(mid);
    if (temp >= n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(end);
  process.exit();
});
