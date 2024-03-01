const findParent = (parent, x) => {
    // 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    if(parent[x] !== x) return findParent(parent, parent[x]);
    return x;
}

const unionParent = (parent, a, b) => {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if (a < b) parent[b] = a;
    else parent[a] = b;        
}

function solution(v, e, arr) {
    const parent = Array(v + 1).fill(0);
    for(let i = 1; i < v + 1; i ++) {
        // 부모를 자기 자신으로 초기화
        parent[i] = i;
    }

    for(let i = 0; i < e; i++) {
        const [a , b] = arr[i];
        unionParent(parent, a, b);
    }

    return parent;
}

const v = 6, e = 4;
const arr = [[1, 4], [2, 3], [2, 4], [5, 6]];

console.log(solution(v, e, arr));