const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let lineCnt = 0, arr = [], cnt = 0;

rl.on('line', (line) => {
  if(lineCnt === 0) {
    lineCnt++;
    cnt = Number(line);
  }
  else {
    arr.push(line.split(' ').map(Number));
    if(lineCnt === cnt) {
      rl.close();
    }
    lineCnt++;
  }
}).on('close', () => {
  console.log(arr);
    process.exit();
});