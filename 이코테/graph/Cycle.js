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
  let chk = false; //cycle 판별 boolean
  const parent = Array(v + 1).fill(0);
  for (let i = 1; i < v + 1; i++) {
    parent[i] = i;
  }

  for (const i of arr) {
    if (findParent(parent, i[0]) === findParent(parent, i[1])) {
      chk = true;
      break;
    } else unionParent(parent, i[0], i[1]);
  }

  console.log(parent);

  return chk ? "사이클이 발생했습니다." : "사이클이 발생하지 않았습니다.";
}

const v = 3,
  e = 3;
const arr = [
  [1, 2],
  [1, 3],
  [2, 3],
];

console.log(solution(v, e, arr));
