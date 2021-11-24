// 1. ES 6 的 Object.assign(target, ...source)
let target = {};
let source = {a: {b: 1}};
Object.assign(target, source);

// 2. 扩展运算符 let cloneObj = { ...obj };
// 对象拷贝
let obj = {a: 1, b: {c: 1}};
let obj2 = { ...obj};
// 数组拷贝
let arr = [1, 2, 3];
let newArr = [ ...arr];


// 3. concat 拷贝数组
let arr = [1, 2, 3];
let newArr = arr.concat();

// 4. slice 拷贝数组
let arr = [1, 2, {val: 4}];
let newArr = arr.slice();