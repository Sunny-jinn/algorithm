class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  push(v) {
    const { heap } = this;
    heap.push(v);
    let idx = heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);

    while (idx > 0 && heap[idx] < heap[parent]) {
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }

  pop() {
    const { heap } = this;
    if (heap.length <= 1) {
      return heap.pop();
    }

    const output = heap[0];
    heap[0] = heap.pop();
    let idx = 0;

    while (idx * 2 + 1 < heap.length) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let next = idx;

      if (heap[left] < heap[next]) {
        next = left;
      }

      if (right < heap.length && heap[right] < heap[next]) {
        next = right;
      }

      if (idx === next) break;
      this.swap(idx, next);
      idx = next;
    }
    return output;
  }
}

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  len,
  arr = [],
  cnt = 0;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    len = Number(line);
    if (len === 1) {
      console.log(0);
      process.exit();
    }
  } else if (lineCnt === 1) {
    arr.push(Number(line));
    cnt++;
    if (cnt === len) rl.close();
  }
}).on("close", () => {
  let sum = 0;
  const q = new PriorityQueue();

  arr.forEach((num) => {
    q.push(num);
  });

  while (q.heap.length > 1) {
    const temp = q.pop() + q.pop();
    q.push(temp);
    sum += temp;
  }

  console.log(sum);

  process.exit();
});
