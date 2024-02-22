function solution(s) {
  let len = s.length,
    temp;
  for (let i = 1; i < Math.floor(s.length / 2) + 1; i++) {
    temp = "";
    let test = s.substring(0, i);
    let cnt = 1;
    for (let j = i; j < s.length; j += i) {
      if (test === s.substring(j, j + i)) {
        cnt++;
      } else {
        temp += cnt >= 2 ? cnt + test : test;
        test = s.substring(j, j + i);
        cnt = 1;
      }
    }
    temp += cnt >= 2 ? cnt + test : test;
    if (len > temp.length) len = temp.length;
  }

  return len;
}
