// 서로소 집합 알고리즘

function findParent(parent, x) {
  if (parent[x] !== x) return findParent(parent, parent[x]);
  return x;
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a > b ? (parent[a] = b) : (parent[b] = a);
}

function Solution(v, e, arr) {
  const parent = Array(v + 1).fill(0);
  for (let i = 0; i < v + 1; i++) {
    parent[i] = i;
  }
  for (const i of arr) {
    unionParent(parent, i[0], i[1]);
  }

  for (let i = 1; i < v + 1; i++) {
    console.log(findParent(parent, i));
  }
  return parent;
}

const v = 6,
  e = 4;
const arr = [
  [1, 4],
  [2, 3],
  [2, 4],
  [5, 6],
];

console.log(Solution(v, e, arr));
