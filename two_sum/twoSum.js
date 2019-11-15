const twoSum = (nums, target) => {
  let index1 = null;
  let index2 = null;
  nums.forEach((num1, i1) => {
    let i2 = i1 + 1;
    while (i2 < nums.length) {
      if (num1 + nums[i2] === target) {
        index1 = i1;
        index2 = i2;
      }
      i2++;
    }
  });
  return [index1, index2];
};

console.log(twoSum([2, 7, 11, 15], 18));
