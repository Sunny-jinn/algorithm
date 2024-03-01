class Deque {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.rear = 0;
  }

  push(v) {
    this.arr[this.rear++] = v;
  }

  pop() {
    if (this.front >= this.rear) return null;
    else return this.arr[this.front++];
  }

  isEmpty() {
    return this.front >= this.rear;
  }
}

function Solution(n, arr) {
  // Your solution code here
  const time = Array(n + 1).fill(0);
  const indegree = Array(n + 1).fill(0);
  const graph = Array.from(Array(n + 1), () => []);
  for (let i = 1; i < n + 1; i++) {
    time[i] = arr[i - 1][0];
    for (let j = 1; j < arr[i - 1].length - 1; j++) {
      console.log(arr[i - 1], arr[i - 1][j]);
      indegree[i]++;
      graph[arr[i - 1][j]].push(i);
    }
  }

  const result = time.slice();

  const q = new Deque();

  for (let i = 1; i < n + 1; i++) {
    if (indegree[i] === 0) q.push(i);
  }
  while (!q.isEmpty()) {
    const now = q.pop();
    for (const i of graph[now]) {
      result[i] = Math.max(result[i], result[now] + time[i]);
      indegree[i]--;
      if (indegree[i] === 0) q.push(i);
    }
  }

  return result;
}

const v = 5;
const arr = [
  [1, -1],
  [15, 1, -1],
  [40, 1, -1],
  [4, 3, 1, -1],
  [3, 3, -1],
];

console.log(Solution(v, arr));
