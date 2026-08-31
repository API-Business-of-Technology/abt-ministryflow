fetch("http://localhost:3001/api/users")
  .then(res => res.json())
  .then(data => console.log(data));
