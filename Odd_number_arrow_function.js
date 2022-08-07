let a = [1,2,3,4,5,6,7,8]

let b = ()=>{
    let c = a.filter(n => n%2 != 0);
    return c;
}

console.log(b());