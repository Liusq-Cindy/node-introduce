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
var nums = [1, 1, 3, 4, 5, 1];
var k = 3;
var numberOfSubarrays = function (nums, k) {
    // 循环每一个数作为子数组开头
    var arrNum = 0;
    for (var i = 0; i < nums.length; i++) {
        var addNum = 0;
        for (var j = i; j < nums.length; j++) {
            if (nums[j] % 2 !== 0 && addNum < k) {
                addNum++;
                if (addNum === k) {
                    arrNum++;
                }
            }
            else if (nums[j] % 2 === 0 && addNum === k) {
                arrNum++;
            }
        }
    }
    return arrNum;
};
console.log(numberOfSubarrays(nums, k));
