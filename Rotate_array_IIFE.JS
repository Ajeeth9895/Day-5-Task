
(()=>{

    let nums = [1,2,3,4,5];
    let k = 2;

  for (let i = 0; i < k; i++) {
      nums.unshift(nums.pop());
  }

  console.log(nums);
})();

