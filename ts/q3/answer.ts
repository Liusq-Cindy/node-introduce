const canJump = function (nums: number[]): boolean {
  let jump = 0;
  let maxjump = 0;
  let arr1 = [nums.length]
  for (let i = 0; i< nums.length; i++){
     arr1[i] = i + nums[i]
  }
  while (jump < nums.length && jump <= maxjump) {
      if (maxjump < arr1[jump]) {
          maxjump = arr1[jump];
      }
      jump++;
  }
  if (jump == arr1.length) {
      return true
  } else {
      return false
  }
};
console.log(canJump([2,3,1,1,4]), true);
console.log(canJump([3,2,1,0,4]), false);
console.log(canJump([3,0,1,0,4]), false);
console.log(canJump([3,2,2,0,4]), true);
console.log(canJump([0,3,1,0,4]), false);

// 参考：https://www.cnblogs.com/BaoZiY/p/10861416.html