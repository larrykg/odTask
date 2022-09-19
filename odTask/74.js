//Title: 字符串序列判定 输入两个字符串 s <100 l <500000.判断S 是L 的有限字串
//输入描述 ：输入两个字符串S  L ，都是小写
//输出描述： S 串最后一个有效字符在L中的位置(首位从0开始算，没有则返回-1)

//输入 ace
//    abcde
//输出  4

//输入 fgh
//     abcde
//输出  -1

/*
// my work
let s1 = 'gfgh';
let l1 = 'abnsgfthgczh'

let sArr = [];
let lArr = [];
for (let i = 0; i < s.length; i++) {
  sArr.push(s.charAt(i))
}
for (let i = 0; i < l.length; i++) {
  lArr.push(l.charAt(i))
}
;
let indexStr = '';
let arr = [];
lArr.forEach((item1, index1) => {
  sArr.forEach((item2, index2) => {
    if (item2 == item1) {
      if (arr) {

      }
      arr.push({
        indexL: index1,
        indexS: index2
      })
    }
  })
})
console.log(arr);
*/

//net work

let s = 'gfgh';
let l = 'aabnsgfthgczhv';

let n = 0;
let m = 0;

while (n < s.length && m < l.length) {
  if (s.charAt(n) == l.charAt(m)) {
    n++
  }
  m++
}

if(n==s.length){
  console.log(m - 1);
}else {
  console.log(-1);
}

/*注意事项
1.charAt()的使用;
思路：本质是找到 替换与被替换的元素以及下标 》 先将数组排序 (默认视为数组), 原数组第一个比排序后的第一个大，说明原数组第一个就是目标，需要被替换》 此时注意替换的元素，需要找最后一个
     所以需要倒序循环》替换之前先判断有没有被替换的元素，因为有可能原数组已经达到要求，不需要处理

* */






















