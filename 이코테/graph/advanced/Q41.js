function findParent(parent, x) {
  if (parent[x] !== x) parent[x] = findParent(parent, parent[x]);
  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a > b ? (parent[a] = b) : (parent[b] = a);
}

function Solution(v, e, arr, arr2) {
  // Your solution code here
  const parent = Array.from({ length: v + 1 }, (_, idx) => idx);
  for (let i = 1; i < v + 1; i++) {
    for (let j = 0; j < v; j++) {
      if (arr[i - 1][j] === 1) unionParent(parent, i, j + 1);
    }
  }
  console.log(parent);
  for (let i = 0; i < e - 1; i++) {
    if (findParent(parent, arr2[i]) !== findParent(parent, arr2[i + 1]))
      return "NO";
  }
  return "YES";
}

const v = 5,
  e = 3;
const arr = [
  [0, 0, 0, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
];
const arr2 = [2, 3, 4, 3];

console.log(Solution(v, e, arr, arr2));
