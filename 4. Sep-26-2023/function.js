/* 
function myfunc () {
    return "Hello World!";
}
console.log(myfunc()); 
*/


/* 
const myfunc = function() {
    return "Hello World!";
}
console.log(myfunc()); 
*/

/* 
const myfunc = () => {
    return "Hello World!";
} 
*/
const myfunc = x => x;
// console.log(myfunc("Hello World!"));

const sum = (a = 5, b = 5) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: Both arguments must be numbers";
    }
    return a - b
};
// console.log(sum("kakku", "Chacchu"));
// console.log(sum(4, 5));
// console.log(sum());
// console.log(sum(7));
// console.log(sum(4, 6));

/* 
const a = 5;
const b = "5";
if (a === b) {
    console.log("Joy Bangla");
}else if(a > 15){
    console.log("Bangladesh Jindabad");
}else{
    console.log("Joy Bangabandhu");
} 
*/

const age = 75;
if(age > 0 && age <= 12){
    console.log("You are a child");
}else if(age >= 13 && age <= 19){
    console.log("You are a teenager");
}else if(age >= 20 && age <= 30){
    console.log("You are a young adult");
}else if(age >= 31 && age <= 64){
    console.log("You are an adult");
}else if(age >= 65 && age <= 140){
    console.log("You are an elder");
}else{
    console.log("You are not in this world");
}

