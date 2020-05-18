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
// var nums = [1,1,2,2,1,1,2,2,2,1,2,1];
var nums = [1,1,2,1,1];
var k = 3;
let arrNum = 0;
let ding = [];
var numberOfSubarrays = function(nums:number[], k:number):number {
  let oddNum = 0;
  let evenNum = 0;
  let left = 0;
  let right = 0;
  console.log('ding', ding);
  for(let i=0; i<nums.length; i++) {
    if (nums[i]%2 !== 0) {
      ding.push(i) 
    }
    if (oddNum < k) {
      if(nums[i]%2 !== 0) {
        oddNum++;
        // 拿到第一个数组
        if (oddNum === k) {
          arrNum = 1;
          right = i;
          let firstArr = nums.slice(left,right+1);
          console.log('第一个满足条件的子数组', firstArr);
        }
      } else {
        evenNum++
      }
    } else {
      if(nums[i]%2 !== 0) {
        // 要判断两个奇数之间间隔的偶数个数，
        let numeve = ding[1]-ding[0];
        left = ding[0];
        // console.log('numeve', numeve);
        arrNum = arrNum + numeve;
        ding.shift()
        const jiji = nums.slice(left,i)
        console.log('满足条件的jiji子数组', jiji);
      } else {
        left = ding[0];
        const letArr = nums.slice(left,i)
        console.log('满足条件的ouou子数组', letArr);
        arrNum++
      }
    }
  }
  return arrNum
};
console.log(numberOfSubarrays(nums, k));