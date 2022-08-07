
(()=> {

    let a = "converting string to titlecase";

    let b =  a.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
  
   console.log(b);
  
})();
