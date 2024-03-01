function findParent(parent, x) {
  if (parent[x] !== x) parent[x] = findParent(parent, parent[x]);
  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a > b ? (parent[a] = b) : (parent[b] = a);
}

function solution(v, e, arr) {
  const parent = Array(v + 1).fill(0);
  for (let i = 1; i < v + 1; i++) {
    parent[i] = i;
  }
  arr.sort((a, b) => a[2] - b[2]);
  let sum = 0;
  for(const i of arr) {
    const [a, b, cost] = i;
    if (findParent(parent, a) !== findParent(parent, b )) {
        unionParent(parent, a ,b );
        sum += cost;
    }
  }
  return sum;
}

const v = 7,
  e = 9;
const arr = [
  [1, 2, 29],
  [1, 5, 75],
  [2, 3, 35],
  [2, 6, 34],
  [3, 4, 7],
  [4, 6, 23],
  [4, 7, 13],
  [5, 6, 53],
  [6, 7, 25],
];

console.log(solution(v, e, arr));
