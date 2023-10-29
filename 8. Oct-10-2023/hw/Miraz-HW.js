fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => data.filter(post => post.id % 2 === 1).map((post) =>console.log(post.id,post.title) ))
  
