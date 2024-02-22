// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })

// rl.on("line", (line) => {
//   const arr = [[0, 0], [1, 1], [2, 2]];
//   const a = 1, b = 1;
//   console.log(arr.includes([a, b]));
//   rl.close();
// })

// rl.on("close", () => {
//   process.exit()
// })

const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = input[0];
const b = input [1];
console.log(a, b)