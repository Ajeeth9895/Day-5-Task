var arr = [1,2,2,3,5,4,6,4,8,9,4,6,1,2,4];
 
    let a = function (arr) {
        return [...new Set(arr)];
    }
 
    console.log(a(arr));
    