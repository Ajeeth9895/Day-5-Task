

(()=>{
    let a = [1,2,3,4];
    let b = [5,6,7,8];
    let arr = a.concat(b);
    let median;

   let middleIndex = Math.floor(arr.length/2)
   median = (arr[middleIndex] + arr[middleIndex - 1])/2;
   console.log(median);
})();

