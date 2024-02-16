const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [],
  k,
  lineCnt = 0;

rl.on("line", (line) => {
  if (lineCnt === 0) arr = line.replace(/\[|\]|\s/g, '').split(',').map(Number);
  else {
    k = Number(line);
    rl.close();
  }
  lineCnt++;
}).on("close", () => {
    let iter = 0;
    const len = arr.length;
    for(let i = 0; i < k; i++) {
        let chk = 0;
        while(true) {
            if(chk === len) {
                console.log(-1);
                process.exit();
            }
            if(arr[iter % len] === 0) {
                iter++;
                chk++;
            } else {
                break;
            }
        }
        console.log(iter % len + 1);
        arr[iter % len] -= 1;
        iter++;
    }
    if(arr.every(num => num === 0)) console.log(-1);
    else console.log(iter % len + 1);
  process.exit();
});

