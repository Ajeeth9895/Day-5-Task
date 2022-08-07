let a = [20,30,40,50];

let c = ()=> {
  let b =  a.reduce( (d, e) =>d+e)
   return b;
}
console.log(c());