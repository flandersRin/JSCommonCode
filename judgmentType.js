function getType(obj) {
  let type = typeof obj;
  if (type !== "object") {
    /**
     * 因为 typeof 在判断基本类型的时候会直接返回 第一个小写字母的类型，所以直接返回即可,但是在判断引用类型的时候会有缺陷，因此应当使用另一种方式
     * typeof null // 'object' 历史悠久的 bug
     * typeof [] // 'object'
     * typeof {} // 'object'
     * typeof console // 'object'
     * typeof console.log // 'function'
     * 可以看到引用类型除了 function 意外其他无法准确判断
     */
    return type;
  }
  // 注意正则中间有空格
  // toString() 方法会统一 放回 [object Xxx], 其中 Xxx 就是对象类型，注意首字母为大写，因此通过正则表达式提取即可
  return Object.prototype.toString.call(obj),replace(/^\[object (\S+)\]$/, '$1');
}