const age = -38;

if(typeof age === "number"){
    if (age < 13 && age > 0) {
        console.log("Your age is : "+ age + " and you are a child");
    }else if (age < 20 && age > 0) {
        console.log("Your age is : "+ age + " and you are a teenager");
    }else if (age < 30 && age > 0) {
        console.log("Your age is : "+ age + " and you are a young peroson" && age > 0);
    }else if (age < 50 && age > 0) {
        console.log("Your age is : "+ age + " and you are a middle aged person");
    }else if (age < 140 && age > 0) {
        console.log("Your age is : "+ age + " and you are an old person");
    }else{
        console.log("Your age is : "+ age + " and you are not a human");
    }
}else{
    console.log("Please enter a valid age");
}


let city = "Bogra";

switch (city) {
    case "Bogra":
        console.log("You are from Bogra");
        break;

    case "Bhola":
        console.log("You are from Bhola");
        break;    
    
    case "Barisal":
        console.log("You are from Barisal");
        break;    

    case "Dhaka":
        console.log("You are from Dhaka");
        break;    

    default:
        console.log("You are not from Bangladesh");
        break;
}