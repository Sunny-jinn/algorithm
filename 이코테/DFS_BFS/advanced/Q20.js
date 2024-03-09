const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  temp = [],
  N = 0;

function watch(teachers) {
  for (const t of teachers) {
    let [x, y] = t;
    for (let i = x - 1; i >= 0; i--) {
      // 선생 왼쪽
      if (temp[i][y] === "O") break;
      else if (temp[i][y] === "S") return false;
    }
    for (let i = x + 1; i < N; i++) {
      // 선생 오른쪽
      if (temp[i][y] === "O") break;
      else if (temp[i][y] === "S") return false;
    }
    for (let i = y - 1; i >= 0; i--) {
      // 선생 위쪽
      if (temp[x][i] === "O") break;
      else if (temp[x][i] === "S") return false;
    }
    for (let i = y + 1; i < N; i++) {
      // 선생 아래쪽
      if (temp[x][i] === "O") break;
      else if (temp[x][i] === "S") return false;
    }
  }
  return true;
}

function dfs(count) {
  if (count === 3) {
    temp = JSON.parse(JSON.stringify(arr));
    const teachers = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (temp[i][j] === "T") teachers.push([i, j]);
      }
    }
    if (watch(teachers)) {
      console.log("YES");
      process.exit();
    }
  } else {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (arr[i][j] === "X") {
          count++;
          arr[i][j] = "O";
          dfs(count);
          count--;
          arr[i][j] = "X";
        }
      }
    }
  }
}

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    N = Number(line);
  } else {
    arr.push(line.split(" "));
    if (lineCnt === N) rl.close();
    lineCnt++;
  }
}).on("close", () => {
  temp = Array.from({ length: N }, () => Array(N).fill("X"));
  dfs(0);
  console.log("NO");
  process.exit();
});
