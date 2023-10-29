const rajuIsPresent = true;
let rajurPromise = new Promise((resolve, reject) => {
    if (rajuIsPresent) {
        resolve('Bangladesh will win the match');
    }
    reject('Bangladesh will lose the match');
});

rajurPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


const rajurAge = (num1, num2, cbFunc ) => {
    const sum = num1 + num2;
    cbFunc(sum);
}

const cbFunc = (sum) => {
    console.log("Rajur boyos holo : " + sum);
}

rajurAge(10, 12, cbFunc);


// async await

const users = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    });
}

users();


const miraj = async () => {
    const mirajPromise = new Promise((resolve) => {
        setTimeout(()=> resolve("Hello World"), 2000);
    })
    const result = await mirajPromise;
    console.log(result);
};

miraj();

try {
    fetch("http://localhost/mernia20/miraj.php?name=Shiraj").then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
    });
}catch{
    console.log("prince namer kono variable nai");
}
