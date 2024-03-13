class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  push(v) {
    const { heap } = this;
    let current = this.heap.length;
    while (current > 1) {
      let parent = ~~(current / 2);
      if (heap[parent] > v) {
        heap[current] = heap[parent];
        current = parent;
      } else break;
    }
    heap[current] = v;
  }

  remove() {
    const { heap } = this;
    let min = heap[1];

    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      let current = 1;
      let left = current * 2;
      let right = current * 2 + 1;
      while (heap[left]) {
        let compare = left;
        if (heap[right] && heap[right] < heap[compare]) compare = right;
        if (heap[current] > heap[compare]) {
          [heap[current], heap[compare]] = [heap[compare], heap[current]];
          current = compare;
        } else break;

        left = current * 2;
        right = current * 2 + 1;
      }
    } else if (heap.length === 2) heap.splice(1, 1);
    else return null;
    return min;
  }

  isEmpty() {
    return this.heap.length < 2;
  }
}

function Solution(n, m, arr) {
  const d = new Array(n + 1).fill(Infinity);
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const i of arr) {
    const [a, b] = i;
    graph[a].push([b, 1]);
    graph[b].push([a, 1]);
  }
  const q = new PriorityQueue();
  q.push([0, 1]);
  d[1] = 0;
  while (!q.isEmpty()) {
    const [dist, now] = q.remove();
    if (dist > d[now]) continue;
    for (const i of graph[now]) {
      const cost = dist + i[1];
      if (cost < d[i[0]]) {
        q.push([cost, i[0]]);
        d[i[0]] = cost;
      }
    }
  }
  d[0] = 0;
  return d.indexOf(Math.max(...d));
  // Your solution code here
}

const n = 6,
  m = 7;
const arr = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(Solution(n, m, arr));
