const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function LastBS(arr, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target && arr[mid + 1] !== target) return mid;
    else if (arr[mid + 1] === target || arr[mid] < target) {
      //오른쪽에 target이 남아있을 때
      start = mid + 1;
    } else if (arr[mid] > target) {
      //왼쪽에 target이 남아있을 때
      end = mid - 1;
    }
  }
  return -1;
}

function FirstBS(arr, target, start, end) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target && arr[mid - 1] !== target) return mid;
    else if (arr[mid - 1] === target || arr[mid] > target) {
      //오른쪽에 target이 남아있을 때
      end = mid - 1;
    } else if (arr[mid] < target) {
      //왼쪽에 target이 남아있을 때
      start = mid + 1;
    }
  }
  return -1;
}

let lineCnt = 0,
  arr = [],
  cnt = 0,
  N,
  x;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    const temp = line.split(" ");
    N = Number(temp[0]);
    x = Number(temp[1]);
  } else {
    arr = line.split(" ").map(Number);
    rl.close();
  }
}).on("close", () => {
  if (FirstBS(arr, x, 0, N - 1) === -1) console.log(-1);
  else {
    console.log(LastBS(arr, x, 0, N - 1) - FirstBS(arr, x, 0, N - 1) + 1);
  }
  process.exit();
});
