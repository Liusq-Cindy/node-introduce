const arr1: number[] = [1,2,3,4,51,51,51,51,51,6,7,8,9,51,51,51,51,51,51,0,2];  //定义数组

// 方式一：遍历之后直接找出元素及对应次数
console.time('f1')
function maxCount1(arr) {  
     var obj={};
     for(var i=0;i<arr.length;i++){  
         var keys=arr[i];  
         if(obj[keys]){
             obj[keys]++;  
         }else{  
             obj[keys]=1;
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
  console.log(maxCount1(arr1))
  console.timeEnd('f1')

// 方式二：唯一性
console.time('f2')
function maxCount2(arr: number[]): string {
  var obj={};
  for(var i=0;i<arr.length;i++){
    var key=arr[i];
    if(obj[key]){
      obj[key]++;
    } else {
      obj[key]=1;
    }
    if (obj[key] > (arr.length)/2) {
      return "方式二：该数组中出现次数最多的元素:"+key+",次数不知"
    }
  }
}
console.log(maxCount2(arr1))
console.timeEnd('f2')

// 方法三：正则
console.time('f3')
function maxCount3(arr: number[]): string {
  let newarr = arr.sort((a,b)=> a-b).toString()+',';  //把数组转换为字符串
  let num = Math.floor(arr.length / 2) -1 // 因为正则\1会多匹配一个，因此这里 -1
  let reg = "/(\\d+,)\\1{"+num+",}/g"; // 带变量的正则表达式
  let testEXP = newarr.match(eval(reg)); 
  let count = testEXP[0].split(',').length -1
  let answer = testEXP[0].split(',')[0]
  return "方式三：该数组中出现次数最多的元素:"+answer+"出现了"+count+"次"; 
}
console.log(maxCount3(arr1));
console.timeEnd('f3')
