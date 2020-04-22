fetch('https://api.giphy.com/v1/gifs/trending?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN')
  .then((taco) => {
    return taco.json();
  })
  .then((data) => {
    console.log(data.data[5]);
    const responseContainerEl = document.querySelector("#response-container");
    const responseDataArr = data.data;
    var gifImg = document.createElement("img");
    gifImg.setAttribute("src", responseDataArr[5].images.original.url);
    responseContainerEl.appendChild(gifImg)
    // for(var i = 0; i < responseDataArr.length; i++) {
    //   var gifImg = document.createElement("img");
    //   gifImg.setAttribute("src", responseDataArr[i].images.original.url);
    //   responseContainerEl.appendChild(gifImg)
    // }
    
  });