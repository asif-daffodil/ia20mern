const person1 = {
    name: "Md Raju",
    age: 20,
    job: "Student",
    homeTown: "Tangail",
    isMarried: true,
    girlFriendList : ["Rupa", "Rupali", "Rupoma", "Ruposhi", "Ruponti"],
    gfBreak: (person) => {
        return `${person} is not ${person1.name}'s love anymore.`;
    },
    pname : function() {
        return `${this.name}`;
    }
}

// console.log(person1.name);

person1.girlFriendList.forEach(gfl => {
    console.log(gfl);
})

console.log(person1.gfBreak("Shefali"));
console.log(person1.pname());

