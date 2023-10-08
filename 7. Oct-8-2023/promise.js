/* let rajurPromise = new Promise((resolve, reject) => {
  
}); */

class dipti {
    name = 'Tripti';
    age = 25;
    citi = 'Dhaka';
    friendList = ["Raju", "Bappy", "Krishno", "Monzurul", "Munna"];
    constructor() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.citi);
        console.log(this.friendList);
        this.friendList.map((val, i)=>{
            console.log(i, val);
        });
    };
    raju = () => {
        return this.name;
    }
}

const obj = new dipti;
console.log(obj.raju());