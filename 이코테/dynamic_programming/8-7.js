function Solution(n) {
    const d = Array(n).fill(0);
    d[1] = 1;
    d[2] = 3;
    for(let i = 3; i <= n; i++) {
        d[i] = (d[i-1] + 2 * d[i-2]) % 795795;
    }
    return d[n];
    // Your solution code here
}

const n = 10;

console.log(Solution(n));
