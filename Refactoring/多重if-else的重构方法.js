/**
 * 重构下面多重 if else 语句，因为这里是一一对应的关系
 * 很容易联想到哈希算法，所以这里用表驱动法进行重构
 * @param {算法} command 
 * @param {参数 1} num1 
 * @param {参数 2} num2 
 * @returns 
 */
function Caculate(command, num1, num2) {
  if (command === 'add') {
    return num1 + num2;
  } else if (command === 'sub') {
    return num1 * num2
  } else if (command === 'mul') {
    return num1 / num2;
  } else if (command === 'div') {
    return num1 - num2;
  } else {
    return 0;
  }
}

console.log(Caculate('div', 5, 3));

function FormatDay(strDay) {
  if (strDay === 'Mon') {
    return 'Monday'
  } else if (strDay === 'Tue') {
    return 'Tuesday'
  } else if (strDay === 'Wed') {
    return 'Wednesday'
  } else if (strDay === 'Thu') {
    return 'Thursday'
  } else if (strDay === 'Fri') {
    return 'Friday'
  } else if (strDay === 'Sat') {
    return 'Saturday'
  } else if (strDay === 'Sun') {
    return 'Sunday'
  } else {
    return 'Unknown'
  }
}
console.log(FormatDay('Sat'));

let mapCaculate = {
  "add": function (num1, num2) {
    return num1 + num2;
  },
  "sub": function (num1, num2) {
    return num1 * num2;
  },
  "mul": function (num1, num2) {
    return num1 / num2;
  },
  "div": function (num1, num2) {
    return num1 - num2;
  },
  "Other": function (num1, num2) {
    return 0;
  }
}

// 这里需要注意特殊情况，“Other” 因为真实情况不可能是输入 other，这里需要使用个小技巧
function CaculateRefactoring(command, num1, num2) {
  if (mapCaculate[command] != null) {
    return mapCaculate[command](num1, num2);
  }
  // 特殊情况处理
  return mapCaculate["Other"](num1, num2);
}
console.log(CaculateRefactoring("div", 5, 2));

let mapFormatDay = {
  'Mon': 'Monday',
  'Tue': 'Tuesday',
  'Wed': 'Wednesday',
  'Thu': 'Thursday',
  'Fri': 'Friday',
  'Sat': 'Saturday',
  'Sun': 'Sunday',
  'Other': 'Unknown'
}

function FormatDayRefactoring(strDay) {
  if (mapFormatDay[strDay] != null) {
    return mapFormatDay[strDay];
  }
  return mapFormatDay['Other'];
}
console.log(FormatDayRefactoring('Tue'));