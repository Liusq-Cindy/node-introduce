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
var nums = [4, 2, 2, 3, 2, 1];
var getNextMax = function (nums) {
    var resultArray = [];
    for (var i = 0; i < nums.length; i++) {
        if (i === 0) {
            var oi = true;
            for (var j = 1; j < nums.length; j++) {
                if (nums[j] > nums[i]) {
                    resultArray.push(nums[j]);
                    oi = true;
                    break;
                }
                else {
                    oi = false;
                }
            }
            if (oi === false) {
                resultArray.push(-1);
            }
        }
        if (i !== 0 && i !== nums.length - 1) {
            var find = true;
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[j] > nums[i]) {
                    find = true;
                    resultArray.push(nums[j]);
                    break;
                }
                else {
                    find = false;
                }
            }
            var leftfind = true;
            if (find === false) {
                for (var k = 0; k < i; k++) {
                    if (nums[k] > nums[i]) {
                        resultArray.push(nums[k]);
                        leftfind = true;
                        break;
                    }
                    else {
                        leftfind = false;
                    }
                }
            }
            if (leftfind === false) {
                resultArray.push(-1);
            }
        }
        if (i === nums.length - 1) {
            var mi = true;
            for (var j = 0; j < nums.length - 1; j++) {
                if (nums[j] > nums[i]) {
                    resultArray.push(nums[j]);
                    mi = true;
                    break;
                }
                else {
                    mi = false;
                }
            }
            if (mi === false) {
                resultArray.push(-1);
            }
        }
    }
    return resultArray;
};
console.log(getNextMax(nums));
