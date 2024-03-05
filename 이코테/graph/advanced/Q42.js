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
  // Your solution code here
  const parent = Array.from({ length: v + 1 }, (_, idx) => idx);
  let cnt = 0;
  for (const i of arr) {
    const temp = findParent(parent, i);
    if (temp === 0) return cnt;
    cnt++;
    unionParent(parent, temp, temp - 1);
  }
  return cnt;
}

const v = 4,
  e = 6;
const arr = [2, 2, 3, 3, 4 ,4];

console.log(Solution(v, e, arr));
