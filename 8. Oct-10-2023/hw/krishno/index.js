
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        const oddnumber = data.filter(user => user.id % 2 !== 0);
        console.log(oddnumber);
    });
