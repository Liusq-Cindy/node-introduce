/*
下周题目： 下一个更大的元素
给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。

示例 1:

输入: [1,2,1]
输出: [2,-1,2]
解释: 第一个 1 的下一个更大的数是 2；
数字 2 找不到下一个更大的数； 
第二个 1 的下一个最大的数需要循环搜索，结果也是 2。

*/
var nums = [1,2,1];
var getNextMax = function(nums: number[]):number[] {
  let resultArray = [];
  for (let i=0; i<nums.length; i++) {
    console.log('第几个数', i);
    let find = true;
    let leftfind = false;
    for (let j=i+1; j<nums.length+1; j++) {
      console.log('j', j);
      if (nums[j] > nums[i] && j<nums.length+1) {
        find = true;
        resultArray.push(nums[j])
        console.log('resultArray', resultArray)
        break;
      } else {
        find = false
        console.log('后面找不到', i);
      }
    }
    if (find === false) {
      console.log('shenm', i)
      for (let k=0; k<i; k++) {
        console.log('kkk', k);
        console.log('iii', i);
        if (nums[k] > nums[i]) {
          console.log('nums[k]', nums[k])
          resultArray.push(nums[k]);
          leftfind = true;
          break;
        } else {
          leftfind = false;
        }
      }
    }
    if (leftfind = false) {
      console.log('都找不到')
      resultArray.push(-1);
    }
  }
  return resultArray;
}
console.log(getNextMax(nums));