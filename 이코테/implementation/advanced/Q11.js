const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let len,
  matrix,
  apple,
  move,
  lineCnt = 0,
  appleInput = 0,
  moveInput = 0,
  moveArr = [],
  prevPos = [];

rl.on("line", (line) => {
  switch (lineCnt) {
    case 0:
      len = Number(line);
      matrix = Array.from(Array(len), () => Array(len).fill(0));
      lineCnt++;
      break;
    case 1:
      apple = Number(line);
      if (apple === 0) lineCnt = 3;
      else lineCnt++;
      break;
    case 2: // 사과 위치 받기
      const temp = line.split(" ").map(Number);
      matrix[temp[0] - 1][temp[1] - 1] = 1;
      appleInput++;
      if (appleInput === apple) {
        lineCnt++;
      }
      break;
    case 3:
      move = Number(line);
      lineCnt++;
      break;
    case 4:
      moveArr.push(line.split(" "));
      moveInput++;
      if (moveInput === move) {
        lineCnt++;
        rl.close();
      }
      break;
  }
}).on("close", () => {
  const dx = [0, 1, 0, -1]; // 동, 남, 서, 북 순서
  const dy = [1, 0, -1, 0];
  let nx = 0,
    ny = 0,
    dir = 0,
    sec = 0;
  prevPos.push([0, 0]);
  let i = 0;
  while (true) {
    if (i === Number(moveArr[sec][0])) {
      if (moveArr[sec][1] === "D") dir += 1;
      else dir -= 1;
      if (dir < 0) dir = 3;
      else if (dir > 3) dir = 0;
      if (sec + 1 !== moveArr.length) sec++;
    }
    nx += dx[dir];
    ny += dy[dir];
    if (nx >= len || nx < 0 || ny >= len || ny < 0) break; // 배열 범위를 벗어나는가
    if (prevPos.some((arr) => arr[0] === nx && arr[1] === ny)) {
      // 몸통에 닿았다면
      break;
    }
    if (matrix[nx][ny] === 0) {
      //사과가 없다면 꼬리 제거
      prevPos.shift();
    } else {
      matrix[nx][ny] = 0;
    }

    prevPos.push([nx, ny]);
    i++;
  }
  console.log(i + 1);
  process.exit();
});
