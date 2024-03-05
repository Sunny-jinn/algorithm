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
  const parent = Array.from({ length: v + 1 }, (_, i) => i);
  arr.sort((a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let sum = 0, total = 0;
  console.log(arr);
  for (const i of arr) {
    const [a, b, cost] = i;
    total += cost;
    if(findParent(parent, a) !== findParent(parent, b))  {
        unionParent(parent, a, b);
        sum += cost;
    }
  }
  return total - sum;
}

const v = 7,
  e = 11;
const arr = [
  [0, 1, 7],
  [0, 3, 5],
  [1, 2, 8],
  [1, 3, 9],
  [1, 4, 7],
  [2, 4, 5],
  [3, 4, 15],
  [3, 5, 6],
  [4, 5, 8],
  [4, 6, 9],
  [5, 6, 11],
];

console.log(Solution(v, e, arr));
