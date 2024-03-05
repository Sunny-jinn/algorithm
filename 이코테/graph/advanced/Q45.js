class Deque {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.rear = 0;
  }

  push(v) {
    this.arr[this.rear++] = v;
  }

  isEmpty() {
    return this.front >= this.rear;
  }

  pop() {
    if (this.front >= this.rear) return null;
    return this.arr[this.front++];
  }
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [],
  cnt = 0,
  iter = 1;

rl.on("line", (line) => {
  arr.push(line.trim());
}).on("close", () => {
  cnt = +arr.shift();
  for (let i = 0; i < cnt; i++) {
    iter = +arr.shift();
    const temp = arr.shift().split(" ").map(Number);
    const graph = Array.from({ length: iter + 1 }, () => [false]);
    const indegree = Array(iter + 1).fill(0);
    for (let j = 0; j < iter; j++) {
      for (let k = j + 1; k < iter; k++) {
        graph[temp[j]][temp[k]] = true;
        indegree[temp[k]]++;
      }
    }
    const iter2 = +arr.shift();
    if (iter2 === 0) {
      console.log(temp);
      continue;
    }
  }
});
