function solution(N, stages) {
  const temp = [];
  stages.sort((a, b) => a - b);
  for (let i = 1; i <= N; i++) {
    let noClear = 0,
      user = 0;
    for (const stage of stages) {
      if (i === stage) {
        user++;
        noClear++;
      } else if (i < stage) {
        user++;
      }
    }
    temp.push([i, noClear, user]);
  }
  temp.sort((a, b) => {
    if (a[1] / a[2] !== b[1] / b[2]) return b[1] / b[2] - a[1] / a[2];
    else return b[0] - a[0];
  });
  return temp;
}
