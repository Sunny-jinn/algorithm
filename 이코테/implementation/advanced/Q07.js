const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [],
  sum = 0;

rl.on("line", (line) => {
  arr = line.split("").map(Number);
  arr.forEach((num) => (sum += num));
  rl.close();
});

rl.on("close", () => {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    cnt += arr[i];
    sum -= arr[i];
    if (sum === cnt) {
      console.log("LUCKY");
      process.exit();
    }
  }
  console.log("READY");
  process.exit();
});
