const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lineCnt = 0,
  arr = [],
  cnt;

rl.on("line", (line) => {
  if (lineCnt === 0) {
    lineCnt++;
    cnt = Number(line);
  } else {
    const [name, ko, eng, math] = line.split(" ");
    arr.push({ name, ko: Number(ko), eng: Number(eng), math: Number(math) });
    lineCnt++;
    if (cnt + 1 === lineCnt) rl.close();
  }
}).on("close", () => {
  arr.sort((a, b) => {
    if (a.ko !== b.ko) return b.ko - a.ko;
    else {
      if (a.eng !== b.eng) return a.eng - b.eng;
      else {
        if (a.math !== b.math) return b.math - a.math;
        else if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      }
    }
  });
  console.log(arr.map((stu) => stu.name).join("\n"));
  process.exit();
});
