let nOld = 30
let strMajor = "Software Engineer"
let bIsPassChoose = true
let bIsPassInterview = true

let bIsPass = false

/**
 * 就像这样的代码。需要进行多重判断最后才能求出结果是否为 true，但是
 * 多重嵌套会导致代码的可读性极差，因此这里采用 do while 进行重构
 */
if (nOld <= 35) {
  if (strMajor === 'Software Engineer') {
    if (bIsPassChoose) {
      if (bIsPassInterview) {
        bIsPass = true
      } else {
        console.log("not passing interview");
      }
    } else {
      console.log("not passing choose");
    }
  } else {
    console.log("Major is not suitable");
  }
} else {
  console.log("nOld is not suitable");
}
console.log(bIsPass);

do {
  if (nOld > 35) {
    console.log("nOld is not suitable");
    break;
  }
  if (strMajor !== 'Software Engineer') {
    console.log("Major is not suitable");
    break;
  }
  if (!bIsPassChoose) {
    console.log("not passing choose");
    break;
  }
  if (!bIsPassInterview) {
    console.log("not passing interview");
    break;
  }
  bIsPass = true
} while (false);
console.log(bIsPass);