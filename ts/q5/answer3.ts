/**
 * 下周算法题目
 * 给你一个整数数组 nums 和一个整数 k。
 * 如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「纯奇数数组」。
 * 请返回这个数组中「纯奇数数字」的数量。
 * 
 * 输入：nums = [1,1,2,1,1], k = 3
   输出：2
   解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。

   * 进阶： 在O(n) 的时间复杂度
   * 提示:  双指针  滑动窗口
   
 */
var nums = [1,1,2,2,1,1,2,2,2,1,2,1];
// var nums = [1,1,2,1,1];
var k = 3;
let oddArray = 0;
let oddIndex = []; // 存储数组中奇数的下标
var numberOfSubarrays = function(nums:number[], k:number):number {
  let oddNum = 0;
  for(let i=0; i<nums.length; i++) {
    if (nums[i]%2 !== 0) {
      oddIndex.push(i) 
    }
    // 先拿到第一个满足条件的数组
    if (oddNum < k) {
      oddArray = 1
      nums[i]%2 !== 0 ? oddNum++ : ''
    // 之后根据新数字的奇偶性和原本奇数之间的个数判断
    } else {
      if(nums[i]%2 !== 0) {
        oddArray += oddIndex[1] - oddIndex[0];
        oddIndex.shift() // 去掉头部的奇数
      } else {
        oddArray++
      }
    }
  }
  return oddArray
};
console.log(numberOfSubarrays(nums, k));