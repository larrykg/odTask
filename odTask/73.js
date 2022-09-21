//Title: 最远足迹
//输入描述 ：
//输出描述：

//输入 ace(3,10)a213df(3,4)f435gdf(5,10)

//输出  (5,10)

//输入 fdgsfdhfgdhgdjghd(0,90)
//
//输出  (0,0)


// my work
//首先需要解析出所有的 () 再判断括号的内容是否合法，再判断x*x+y*y的大小  ，如果有相等的 则第一次为准

// let s = 'dsgd(9,10)fdssdgsdg(3,4)kgfhfdhfdg(5,10)';
let s = 'dsgd 0)';


let x = 0;
let y = 0;
let arr = [];
let arrs = [];

//最终输出只关心坐标，不考虑坐标在原字串中的位置，故只需要将每个坐标去除即可
for (let i = 0; i < s.length; i++) {
  if (s.charAt(i) == '(') {
    x = i + 1

  } else if (s.charAt(i) == ')') {
    y = i;

  }

  ;
  if (y != 0) {
    let str = s.substring(x, y).split(',');
    // console.log(str);
    let p = Number(str[0]);
    let q = Number(str[1]);
    if (p > 0 && p < 1000 && q > 0 && q < 1000 && str[0].charAt(0) != '0' && str[1].charAt(0) != '0') {
      arr.push(p);
      arr.push(q);
      arrs.push(arr);
      arr = []
    }
    x = y = 0
  }
}


if (arrs.length == 0) {
  console.log('(0,0)');
} else {
  arrs.sort((a, b) => {
    let ax = a[0] * a[0] + a[1] * a[1];
    let bx = b[0] * b[0] + b[1] * b[1];

    if (bx >= ax) {
      return 1
    } else {
      return -1
    }
  })

  console.log('(' + arrs[0][0] + ',' + arrs[0][1] + ')')
}
// console.log(arrs);

//net work
let nets = 'dsgd(3,10)fdssdgsdg(3,4)kgfhfdhfdg(5,10)';
let a = 0;
let b = 0;
let netArrs = [];

for (let i = 0; i < nets.length; i++) {
  if (nets.charAt(i) == '(') {
    a = i
  } else if (nets.charAt(i) == ")") {
    b = i
  }

  if (b > 0) {
    let netStr = nets.substring(a + 1, b).split(',');
    let arr = [];
    arr.push(Number(netStr[0]));
    arr.push(Number(netStr[1]));
    netArrs.push(arr);
    a = b = 0;
  }
}

if (netArrs.length == 0) {
  console.log("(0,0)");
} else {
  netArrs.sort((a, b) => {
    let aa = a[0] * a[0] + a[1] * a[1];
    let bb = b[0] * b[0] + b[1] * b[1];
    return aa - bb
    // if (bb >= aa) {
    //   return 1
    // } else {
    //   return -1
    // }
  })
  console.log(netArrs);
  console.log(`(${netArrs[0][0]},${netArrs[0][1]})`)
}

/*注意事项
x , y 起到的是标记作用，所以找到一组，处理之后就需要将它们置位0
sort()方法的使用 形参指的是每个元素，返回1 就是按照这种准则排序

* */






















