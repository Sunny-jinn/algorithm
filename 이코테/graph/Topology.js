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
    else return this.arr[this.front++];
  }
}

function solution(v, e, arr) {
  const graph = Array.from(Array(v + 1), () => []);

  const indegree = Array(v + 1).fill(0); // 진입차수를 위한 배열
  const q = new Deque();
  const result = [];

  for (const i of arr) {
    graph[i[0]].push(i[1]);
    indegree[i[1]]++;
  }
  for (let i = 1; i < v + 1; i++) {
    if (indegree[i] === 0) q.push(i);
  }
  while (!q.isEmpty()) {
    let now = q.pop();
    result.push(now);
    for (const i of graph[now]) {
      indegree[i]--;
      if (indegree[i] === 0) q.push(i);
    }
  }

  return result;
}

const v = 7,
  e = 8;
const arr = [
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 6],
  [3, 4],
  [4, 7],
  [5, 6],
  [6, 4],
];

console.log(solution(v, e, arr));
