
const lsq1 = [1,2,3,4,51,51,51,51,51,6,7,8,9,51,51,51,51,51,51,0,2];  //定义数组 长21
function maxCountEle3(arr){
  var newlsq = arr.sort((a,b)=> a-b).toString();  //把数组转换为字符串
  var num = Math.floor(arr.length / 2) -1 // 因为正则\1会多匹配一个，因此这里 -1
  var reg = "/(\\d+,)\\1{"+num+",}/g";
  let testEXP = newlsq.match(eval(reg)); 
  let answer = testEXP[0].split(',')[0]
  return answer
}
console.log('数组中的多数元素为', maxCountEle3(lsq1));