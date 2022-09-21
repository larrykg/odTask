//Title:  快递运输
//输入描述 ：每个快递的重量 如 2 4 11
//           货车的载重量
//输出描述：  快递的个数

//输入 5,2,10,11
//         20

//输出  3


// my work
//将输入的字串转为数字并且排序
let s = '1,10,5,2,11';
let n = Number('10');
let arr = s.split(',');

arr = arr.map(item => Number(item));
//sort():a-b:升序
arr.sort((a, b) => a - b
);
console.log(arr);
let num = 0;
let res = 0;
for (let i = 0; i < arr.length; i++) {
  num += arr[i];
  if (num > n) {
    break
  }
  res++

}
console.log(res);


//net work


/*注意事项
x , y 起到的是标记作用，所以找到一组，处理之后就需要将它们置位0
sort()方法的使用 形参指的是每个元素，返回1 就是按照这种准则排序

* */






















