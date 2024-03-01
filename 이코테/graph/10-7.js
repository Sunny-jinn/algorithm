function findParent(parent, x) {
  if (parent[x] !== x) parent[x] = findParent(parent, parent[x]);
  return parent[x];
}

function unionParent(parent, a, b) {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a > b ? (parent[a] = b) : (parent[b] = a);
}

function Solution(v, e, arr) {
  const parent = Array(v + 1).fill(0);
  for (let i = 1; i < v + 1; i++) parent[i] = i;
  for (const i of arr) {
    const [oper, a, b] = i;
    if (oper === 0) unionParent(parent, a, b);
    else {
      findParent(parent, a) === findParent(parent, b)
        ? console.log("YES")
        : console.log("NO");
    }
  }
}

const v = 7,
  e = 8;
const arr = [
  [0, 1, 7],
  [1, 1, 7],
  [0, 7, 6],
  [1, 1, 6],
  [0, 3, 7],
  [0, 4, 2],
  [0, 1, 1],
  [1, 1, 1],
];

Solution(v, e, arr);
