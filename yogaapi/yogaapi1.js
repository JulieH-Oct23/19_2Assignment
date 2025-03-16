fetch('https://github.com/alexcumplido/yoga-api/v1/categories')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));