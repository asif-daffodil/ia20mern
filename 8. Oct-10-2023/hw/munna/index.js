fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((obj) => {
    obj.map((data) => {
      if (data.id % 2 !== 0) {
        console.log(`id: ${data.id} title: ${data.title}`);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
