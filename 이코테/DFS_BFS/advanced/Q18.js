function proper(str) {
  if (str[0] === ")") return false;
  let cnt1 = 1,
    cnt2 = 0,
    isLeft = true;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === "(") cnt1++;
    else {
      cnt1++;
    }
    if (cnt2 > cnt1) return false;
  }
  return true;
}

function flip(str) {
    let temp = '';
    for(let i = 0 ; i < str.length; i ++) {
        if(str[i] === "(") temp += ")";
        else temp+= "(";
    }
    return temp;
}

function dfs(str) {
  let u = "",
    v = "",
    temp = "",
    cnt1 = 0,
    cnt2 = 0;
  if (str.length === 0) return "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") cnt1++;
    else cnt2++;
    u += str[i];
    if (cnt1 === cnt2) break;
  }
  v = str.substr(cnt2 + cnt1);
  if(proper(u)) v = dfs(v);
  if (!proper(u)) {
    temp += "(" + v + ")";
    u = u.substring(1, u.length - 1);
    u = flip(u);
    temp += u;
    return temp;
  }
  return u + v;
}

function solution(p) {
  if (p.length === 0) return p;

  return dfs(p);
}

console.log(solution(")("));

