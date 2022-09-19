//Title: 字符串变换最小字符串  给定一个字符串s 最多只进行一次交换，返回变换后能得到的最小字符串；交换规则：交换字符串中任意两个不同位置的字符

//输入描述 ：一串小写字母组成的字符串S
//输出描述： 按照要求进行变换得到最小的字符串

//输入 abcdef
//输出  abcdef

//输入 bcdefa
//输出  abcdef
//1<s.length<=1000

// my work
//理解： 先将字符串整体排序，一个一个进行比对，只需要校正一次故只需要找到 ：  需要替换的元素，需要替换的元素下标，被替换的元素，被替换的元素下标
let s = 'bcaasdflg';
let len = s.length;
let listBySort = [];
let charts = [];

for (let i = 0; i < len; i++) {
  listBySort.push(s.charAt(i));
  charts[i] = s.charAt(i)
}

listBySort.sort(); //排列好的数组

let change = '';
let minIndex = 0;  // 较小的字符的下标
let changeIndex = 0; //被替换的下标

//找到需要替换的字符,下标
for (let i = 0; i < len; i++) {
  if (listBySort[i] < charts[i]) {
    change = listBySort[i];
    changeIndex = i
    break
  }
}

//找到替换的下标 并且替换之. 需要找到最后一个等于change 的字符，所以是倒序循环
if (change != '') {
  console.log(123);
  for (let i = len - 1; i >= 0; i--) {
    if (charts[i] == change) {
      minIndex = i
      break
    }
  }
  //替换
  charts[minIndex] = charts[changeIndex]
  charts[changeIndex] = change;

}

//组装字符串 返回结果
let res = '';
charts.forEach(item => {
  res += item
})

console.log(res);

/*注意事项
1.charAt()的使用;
思路：本质是找到 替换与被替换的元素以及下标 》 先将数组排序 (默认视为数组), 原数组第一个比排序后的第一个大，说明原数组第一个就是目标，需要被替换》 此时注意替换的元素，需要找最后一个
     所以需要倒序循环》替换之前先判断有没有被替换的元素，因为有可能原数组已经达到要求，不需要处理

* */






















