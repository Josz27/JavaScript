
//function statement
let greet = ()=>{
    console.log("Qué tranza");
}
greet();

//function are first-class
let  logGreeting = (funcion)=>{
    funcion();
}
logGreeting(greet);

//function expression
let greetMe = ()=>{
    console.log("Konichiwa =) =)");
}
greetMe();

logGreeting(greetMe);
logGreeting(()=>{console.log("Los AD2000X Son sorprendentes , Dayo-nee?");})
