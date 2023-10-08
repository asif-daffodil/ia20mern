let person1 = ["Md Raju", 20, "Student", "Tangail", true];
// console.log(person1[4]);
person1.push("Bangladesh", "Dhaka");
// console.log(person1.length);
person1.pop();
// console.log(person1.length);
person1.unshift("Sobahan Allah", "Bismillah");
// console.log(person1.length);
person1.shift();
// console.log(person1.length);
// console.log(person1);

console.log(person1.indexOf("Tangail"));

for (let i = 0; i < person1.length; i++) {
    console.log(i, " - " +person1[i]);
}