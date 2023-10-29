fetch('https://jsonplaceholder.typicode.com/posts')
  .then(strdata => strdata.json())
  .then(data => {
    data.filter(i => i.id % 2).map(d => console.log(d.id, d.title))
  });
