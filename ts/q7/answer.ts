
// 解题思路
// 解三元一次方程：i + 2j + 3k = n;
// 限定条件：i <= n，j <= n/2，k <= n/3
// 求出ijk的所有解，
// 对123的对应个数ijk的组合，求出其所有去重后的排列(直接数学计算或基于上次的字符串排列组合方法)，相加求和

// 方法一：简化版
var waysToStep1 = function(n: Number):Number {
  let allType = 0;
  for (var i=0; i<=n; i++) {
      for (var j=0; j<= Math.floor(<number>n/2); j++) {
          for (var k=0; k<= Math.floor(<number>n/3); k++) {
              if (i+2*j+3*k === n) {
                  // 求排列组合数
                  const li = i+j+k;
                  var num = <number>jiech(li)/((<number>jiech(i)*<number>jiech(j)*<number>jiech(k)));
                  allType+= num;
              }
          }
      }
  }
  return allType;
};

var jiech = function(n: Number):Number {
  var result = 1;
  while(n){
      result *= <number>n;
      n = <number>n-1;
  }
return result;
}
console.log('方式一:求阶乘');
console.log(waysToStep1(3), '4')
console.log(waysToStep1(5), '13')

// 方法二(基于上次)：能列出所有组合方法
var waysToStep = function(n: Number):Number {
  let allType = 0;
  for (var i=0; i<=n; i++) {
      for (var j=0; j<= Math.floor(<number>n/2); j++) {
          for (var k=0; k<= Math.floor(<number>n/3); k++) {
              if (i+2*j+3*k === n) {
                  // 将i个1，j个2，k个3拼接成字符串
                  let a = new Array(i).fill(1).join('') + new Array(j).fill(2).join('') + new Array(k).fill(3).join('');
                  const num = getAllList(a).length;
                  allType+= num;
              }
          }
      }
  }
  return allType;
};
var getAllList = function(str: string):string[] {
  var result = [];
  if (str.length <= 1) {
    return [str];
  } else {
    for (var i = 0; i < str.length; i++) {
      var head = str[i];
      var newStr = str.slice(0, i) + str.slice(i + 1, str.length);
      var l = getAllList(newStr);
         
      for (var j = 0; j < l.length; j++) {
        var tmp = head + l[j];
        result.push(tmp);
      }
    }
  }
  return Array.from(new Set(result));
}
console.log('方式二:排列组合');
console.log(waysToStep(3), '4')
console.log(waysToStep(5), '13')

// 方式三：跳跃法

// 1、n位数，每位数都可以为123，求所有排列组合
var getAll = function(n:Number[]):Number[] {
  let arr = [];
  for (var i=1; i<4; i++) {
      let a = n;
      a.push(i);
      let b = a.concat();
      arr.push(b);
      a.pop();
  }
return arr
}
// 2、跳跃法判断当前数组是否可以到最后
var canJump = function (nums: number[]): boolean {
let jump = 0;
let as = [];
while (jump < nums.length) {
  as.push(nums[jump]);
  jump += nums[jump];
}
if (jump == nums.length) {
    allLi.push(as.join(''));
    return true
} else {
    return false
}
};
// 3、给定123，后面都可以接123，直到n位；
// 4、基于跳跃法，判断每种排列组合是否能到最后的n；最后去重
var getN = function(n:Number):Number {
      let newArr = [[1],[2],[3]];
      let lk = [];
      for (var j=1; j<n; j++) {
      newArr.map(item => {
          let ll = getAll(item) || [];
          lk = lk.concat(ll);
          newArr = lk;
      })
  }
  let lsq = []
  lk.map(item =>{
      if (item.length === n) {
          lsq.push(item)
      }})
  lsq.map(item => {
      canJump(item);
  })
  return Array.from(new Set(allLi)).length;
}
let allLi = [];

console.log('方式三:跳跃');
console.log(getN(3),'4');
console.log(getN(5),'13');