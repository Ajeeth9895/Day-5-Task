let arr = ["dad","mad","mom",];
let b = [];

let palindrom = function(){
    for(let i=0; i<arr.length; i++){
        let a = arr[i].split("").reverse().join("");
        if(arr[i]==a){
            b.push(a);
        }
    }
    return b;
}

console.log(palindrom());