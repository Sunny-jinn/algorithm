const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let temp;

rl.on("line", (line) => {
  temp = line.split("");
  temp.forEach(function (num, index, array) {
    array[index] = Number(num);
  });
  rl.close();
});

rl.on("close", () => {
  let cnt = temp[0];
  for (let i = 1; i < temp.length; i++) {
    if(cnt + temp[i] < cnt * temp[i]) cnt *= temp[i];
    else cnt += temp[i];
  }
  console.log(cnt);
  process.exit();
});
