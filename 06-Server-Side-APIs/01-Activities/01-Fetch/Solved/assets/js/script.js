fetch('https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')

.then(function(response) {
  return response.json();
})

.then(function(data){
  console.log(data);
})


  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });