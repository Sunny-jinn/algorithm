//!FEAT: MinHeap
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.heap.length < 2;
  }

  insert(v) {
    const { heap } = this;
    let current = this.heap.length;

    while (current > 1) {
      const parent = Math.floor(current / 2); // 부모가 1 일 때 자식은 2, 3이고, 부모가 3일 때 자식은 6, 7이기 때문.
      if (heap[parent] > v) {
        // 부모 node의 value가 삽입하고자 하는 value보다 클 때, 자식 value를 위로 올려야함.
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }

    this.heap[current] = v;
  }

  getHeap() {
    return this.heap;
  }

  remove() {
    const { heap } = this;
    let min = heap[1]; // root값이 최솟값인 min heap이기 때문

    // 비어있지 않을 때
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1]; // 맨 끝 node의 값으로 치환 후 맨 끝 node 제거
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
      heap.splice(1, 1);
    } else {
      return null;
    }
    return min;
  }
}

function Solution(n, start, arr) {
  const graph = Array.from(Array(n + 1), () => []);

  for (let i = 0; i < arr.length; i++) {
    const [startNode, endNode, distance] = arr[i];
    graph[startNode].push([endNode, distance]);
  }

  function dijkstra(start) {
    const pq = new MinHeap();
    pq.insert([0, start]); // start인 1은 1과의 거리가 0이므로 [0, 1] 삽입
    d[start] = 0;

    while (!pq.isEmpty()) {
      const [dist, now] = pq.remove();

      if (d[now] < dist) continue;

      for (const i of graph[now]) {
        const cost = dist + i[1];
        if (cost < d[i[0]]) {
          pq.insert([cost, i[0]]);
          d[i[0]] = cost;
        }
      }
    }
  }

  dijkstra(start);

  return d;
}

const n = 6,
  start = 1;
const d = new Array(n + 1).fill(Infinity);
const arr = [
  //   [1, 2, 2],
  //   [1, 3, 5],
  //   [1, 4, 1],
  //   [2, 3, 3],
  //   [2, 4, 2],
  //   [3, 2, 3],
  //   [3, 6, 5],
  //   [4, 3, 3],
  //   [4, 5, 1],
  //   [5, 3, 1],
  //   [5, 6, 2],
  [1, 2, 4],
  [1, 3, 2],
];
console.log(Solution(n, start, arr));
