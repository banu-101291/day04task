const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }
  ([1,2,3,4,5,6],3)