class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  isEmpty() {
    return this.heap.length < 2;
  }

  insert(v) {
    const { heap } = this;
    let current = heap.length;
    while (current > 1) {
      const parent = ~~(current / 2);
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
      let leftChildIdx = current * 2;
      let rightChildIdx = current * 2 + 1;
      while (heap[leftChildIdx]) {
        let childIdxToCompare = leftChildIdx;
        if (
          heap[rightChildIdx] &&
          heap[rightChildIdx] < heap[childIdxToCompare]
        )
          childIdxToCompare = rightChildIdx;
        if (heap[current] > heap[childIdxToCompare]) {
          [heap[current], heap[childIdxToCompare]] = [
            heap[childIdxToCompare],
            heap[current],
          ];
          current = childIdxToCompare;
        } else break;

        leftChildIdx = current * 2;
        rightChildIdx = current * 2 + 1;
      }
    } else if (heap.length === 2) {
      // queue에 하나의 원소만 있을 때
      heap.splice(1, 1);
    } else {
      // queue가 비어있을 때 null return
      return null;
    }
    return min;
  }
}

function Solution(n, arr) {
  // Your solution code here
  const d = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const q = new PriorityQueue();
  let x = 0,
    y = 0;
  q.insert([arr[x][y], x, y]);
  d[x][y] = arr[x][y];

  while (!q.isEmpty()) {
    const [dist, x, y] = q.remove();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
        const cost = dist + arr[nx][ny];
        if (cost < d[nx][ny]) {
          q.insert([cost, nx, ny]);
          d[nx][ny] = cost;
        }
      }
    }
  }
  return d[n - 1][n - 1];
}

const n = 3;
const arr = [
  [5, 5, 4],
  [3, 9, 1],
  [3, 2, 7],
];

console.log(Solution(n, arr));
console.log(
  Solution(7, [
    [9, 0, 5, 1, 1, 5, 3],
    [4, 1, 2, 1, 6, 5, 3],
    [0, 7, 6, 1, 6, 8, 5],
    [1, 1, 7, 8, 3, 2, 3],
    [9, 4, 0, 7, 6, 4, 1],
    [5, 8, 3, 2, 4, 8, 3],
    [7, 4, 8, 4, 8, 3, 4],
  ])
);
console.log(
  Solution(5, [
    [3, 7, 2, 0, 1],
    [2, 8, 0, 9, 1],
    [1, 2, 1, 8, 1],
    [9, 8, 9, 2, 0],
    [3, 6, 5, 1, 5],
  ])
);
