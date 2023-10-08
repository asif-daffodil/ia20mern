const raju = {
    name: 'Raju',
    age: 25,
};

console.log(raju.name);

const rajuString = JSON.stringify(raju);
console.log(rajuString);

// console.log(rajuString.name);

const rajuJson = JSON.parse(rajuString);
console.log(rajuJson);


