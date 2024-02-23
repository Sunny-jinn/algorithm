const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  cnt = 0,
  N,
  C;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    [N, C] = line.split(" ").map(Number);
  } else {
    arr.push(Number(line));
    cnt++;
    if (cnt === N) rl.close();
  }
}).on("close", () => {
  arr.sort((a, b) => a - b);
  let start = 1,
    end = arr[N - 1] - arr[0];
  let result = 0,
    count;
  while (start <= end) {
    value = arr[0];
    count = 1;
    const mid = Math.floor((start + end) / 2);
    for (let i = 0; i < N; i++) {
        if (arr[i] >= value + mid) {
            // gap보다  다음 값이 클 때 공유기 설치
            count++;
            value = arr[i];
        }
    }
    if (count >= C) {
      // 안테나를 더 많이 설치할 수 있는 경우
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }
  console.log(result);
  process.exit();
});
