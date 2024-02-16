const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let temp= [];

function countMin(a, arr) {
    let cnt = 0;
    for(let i = 0; i < arr.length; i++) {
        if(a === Number(arr[i])) cnt++;
    }
    return cnt;
}

rl.on("line", (line) => {
    temp.push(line[0])
    let cnt = 0;
  for(let i = 1 ; i < line.length; i ++) {
    if(line[i] === temp[cnt]) continue;
    else {
        temp.push(line[i]);
        cnt++;
    }
  }
  rl.close();
});

rl.on("close", () => {
  console.log(Math.min(countMin(0, temp), countMin(1, temp)));
  process.exit();
});
