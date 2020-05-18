// 找出数组中的多数元素

// const lsq = [1,1,1,1,1,1,1,2,2,3,3,4,4,1,5]
const lsq = [1,2,3,4,51,51,51,51,51,6,7,8,9,51,51,51,51,51,51,0,2];  //定义数组 长21
// 方式一：遍历之后直接找出元素及对应次数
function maxCountEle1(arr) {  
   var obj={};
   for(var i=0;i<arr.length;i++){  
       var key=arr[i];  
       if(obj[key]){
           obj[key]++;  
       }else{  
           obj[key]=1;
       }  
   }
   var maxCount=0;
   var maxElement=arr[0];
   for(var key in obj){  
       if(maxCount<obj[key]){  
           maxCount=obj[key]; 
           maxElement=key;  
       }  
   }  
   return "方式一：该数组中出现次数最多的元素:"+maxElement+"出现了"+maxCount+"次";  
}
var maxNum = maxCountEle1(lsq)
console.log(maxNum)


// 方式二：唯一性
function macCountEle2(arr) {
  var obj={};
  for(var i=0;i<arr.length;i++){
    var key=arr[i];
    if(obj[key]){
      obj[key]++;
    } else {
      obj[key]=1;
    }
    if (obj[key] > (arr.length)/2) {
      let answer = "方式二：该数组中出现次数最多的元素:"+key+"出现了"+obj[key]+"次"
       console.log(answer)
    }
  }
}
macCountEle2(lsq)

// 方法三：正则
function maxCountEle3(arr){
  var newlsq = arr.sort((a,b)=> a-b).toString()+',';  //把数组转换为字符串,最后多一个逗号以免是最后一个值出错
  var num = Math.floor(arr.length / 2) -1 // 因为正则\1会多匹配一个，因此这里 -1
  var reg = "/(\\d+,)\\1{"+num+",}/g";
  let testEXP = newlsq.match(eval(reg)); 
  // console.log('出现次数', testEXP[0].split(',').length)
  let count = testEXP[0].split(',').length -1
  let answer = testEXP[0].split(',')[0]
  return "方式三：该数组中出现次数最多的元素:"+answer+"出现了"+count+"次";  
}
console.log(maxCountEle3(lsq))
