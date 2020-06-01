/**
 * 爬楼梯。
 * 有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。
 * 实现一种方法，计算小孩有多少种上楼梯的方式。
 * 只考虑 100 层以下。

示例1:

 输入：n = 3 
 输出：4
 
示例2:
 输入：n = 5
 输出：13
 */
let dat=[5, 8, 10, 3, 2, 18, 17, 9];
var sortedData=function quickSort(data){
  //递归出口
    if(data.length<=1){
      return data;
  }
//此处要将基准数从原数组移除，避免上面的data.length判断陷入死循环
  let  baseData=data.splice(0,1)[0];
  let  leftData=[],rightData=[];
//此处的data.length和上面不同，移除了基准数，比上面小1
   for(let i=0;i<data.length;i++){
      if(data[i]>baseData){
        rightData.push(data[i]);
      }else{
        leftData.push(data[i]);
      }
    }
    leftData=quickSort(leftData);
    rightData=quickSort(rightData);
    return   [...leftData, baseData, ...rightData];
  }
console.log(sortedData(dat));