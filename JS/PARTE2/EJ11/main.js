const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';

let array = [];
let main = document.querySelector("main"); 
let button = document.querySelector("#load-gallery");


button.addEventListener("click", () => {

fetch(url)
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    array = data; 
    buildGallery(array); 
  })
  
});

function buildGallery(array) {
  for (const photo of array) {
    let div = document.createElement("div");
    let card = document.createElement("img");
    card.src = photo.url;
    div.append(card);
    main.append(div);
  }
}

/* const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';

let array = [];

fetch(url)
 .then(res => res.json())
 .then((data) => {

    console.log(data);
    let photo = data;
    buildGalery(array);

 });


 function buildGalery(array) {
  for (const photo of array) {
    let div = document.createElement("div");
    let card = document.createElement("img");
    card.src = photo.url;
    div.append(card);
    main.append(div);
  }
}*/