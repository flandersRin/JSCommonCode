function typeCheck(obj) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, "");
}
console.log(typeCheck(111.000));