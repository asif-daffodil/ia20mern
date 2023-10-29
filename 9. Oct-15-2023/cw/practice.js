const personInfo = {
    name1: 'John',
    age: 30,
    gender: "Male",
    address: 'New York',
    name2: 'Chacha'
}

const {name2, age} = personInfo;
/* 
const name = personInfo.name;
const age = personInfo.age; 
*/

// console.log(name2, age);


const rajurFriends = ['Amir Khan', 'Salman Khan', 'Sharukh Khan', 'Arman Khan', 'Shahid Kapoor'];

const [chotoFriend, nextFriend, specialFriend] = rajurFriends;

// console.log(specialFriend);

// spread operator
const munnaFriend = [...rajurFriends, "Dipjol", "Bapparaz"];

console.log(munnaFriend);