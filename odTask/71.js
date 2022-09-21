//Title:  五键盘的输出
//输入描述 ：输入一行 为简化解析 用 12345代表a ctrl+c ctrl+x ctrl+v ctrl+a 五键输入 数字用空格分隔

//输出描述：  一个数字 最终屏幕上的字母数量

//输入  1 1 1
//输出  3

//输入  1 1 5 1 5 2 4 4
//输出  2
// 输入两个a后ctrl-a选择这两个a，再输入a时选择的两个a先被清空，所以此时屏幕只有一个a，后续的ctrl-a，ctrl-c选择并复制了这一个a，最后两个ctrl-v在屏幕上输出两个a，故屏幕上字母的长度为2（第一个ctrl-v清空了屏幕上的那个a）


// my work
//将字串转为数组 循环处理
let mys = '1 1 5 1 5 2 4 4';
let res = 0;

let strArr = mys.split(" ").map(Number);
console.log(strArr);
let curStr = '';
let copyStr = '';
let slectStr = '';
for (let i = 0; i < strArr.length; i++) {
  switch (strArr[i]) {
    case 1:
      if (slectStr) {
        curStr = 'a';
        slectStr = ''
      } else {
        curStr += "a";
      }
      break;
    case 2:
      if (slectStr) {
        copyStr = slectStr
      }
      break;
    case 3:
      if (slectStr) {
        copyStr = slectStr;
        curStr = '';
        select = ''
      }
      break
    case 4:
      if (slectStr) {
        copyStr = slectStr;
        slectStr = ''
      } else {
        curStr += copyStr
      }
      break
    case 5:
      if (curStr) {
        slectStr = curStr
      }

      break

  }

}


console.log(curStr.length);

//net work
//let s = readline().split(" ");
//let s = "1 1 1".split(" ");
let s = "1 1 5 1 5 2 4 4".split(" ");

let temp = "";//剪贴板
let screen = "";//屏幕
let select = "";//选择的

for (let i = 0; i < s.length; i++) {

  switch (s[i]) {
    case "1":
      if (select != "") {
        screen = "a";
        select = "";
      } else {
        screen += "a";
      }
      break;
    case "2":
      if (select != "") {
        temp = select;
      }
      break;
    case "3":
      if (select != "") {
        temp = select;
        screen = "";
        select = "";
      }
      break;
    case "4":
      if (select != "") {
        screen = temp;
        select = "";
      } else {
        screen += temp;
      }
      break;
    case "5":
      if (screen != "") {
        select = screen;
      }
      break;
  }

}

console.log(screen.length);

/*注意事项
 再讨论前需要判断当前是否为'选取状态',即select是否为空，不为空的时候，吃屎的输入会将全部内容覆盖

* */






















