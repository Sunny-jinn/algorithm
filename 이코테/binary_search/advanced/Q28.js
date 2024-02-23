const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  cnt = 0,
  len;

function BS(arr, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === mid) return mid;
    else if (arr[mid] > mid) end = mid - 1;
    else {
      //mid > arr[mid]
      start = mid + 1;
    }
  }
  return -1;
}

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    len = Number(line);
  } else {
    arr = line.split(" ").map(Number);
    rl.close();
  }
}).on("close", () => {
  console.log(BS(arr, 0, len - 1));
  process.exit();
});
