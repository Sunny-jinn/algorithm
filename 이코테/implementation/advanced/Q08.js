const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr;

rl.on("line", (line) => {
  arr = line.split("");
  rl.close();
}).on("close", () => {
  let sum = 0;
  arr.forEach((str) => {
    if (!isNaN(str)) sum += Number(str);
  });
  console.log(arr.sort().toString().replace(/[0-9\,]/g, '') + String(sum));
  process.exit();
});
