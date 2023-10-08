/* const arr = ["Raju", "Bappy", "Krishno", "Monzurul", "Munna"];

arr.map((val, i)=>{
    console.log(i, val);
});
 */

fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => data.filter(user => user.id > 5 &&  user.id < 10)).then(data => data.map(user => console.log(user.name)));
