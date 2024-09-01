url = 'https://dragonball-api.com/api/characters?limit=58';

let personajeArray = [];

const button = document.querySelector('.button');
const container = document.querySelector('.container');

button.addEventListener("click", () => {

fetch(url)
  .then(res => res.json())
  .then((data) => { 
    console.log(data);
    let personaje = data.items;
    updateArray(personaje);
    generar_aleatorio(personajeArray);
  })
});

  function updateArray(personaje) {
    personajeArray = personaje; 
}

  function generar_aleatorio(personajeArray){

    container.innerHTML = '';
    
    let personaje_al = Math.floor(Math.random() *  personajeArray.length);

    let characterCard = document.createElement('div');
    let name = document.createElement('h1');
    let image = document.createElement('img');
    let ki = document.createElement('h2');

    image.src = personajeArray[personaje_al].image;
    name.textContent = personajeArray[personaje_al].name;
    ki.textContent = personajeArray[personaje_al].ki;

    image.style.width = '400px';
    image.style.height = '400px'; 

    characterCard.append(name);
    characterCard.append(image);
    characterCard.append(ki);
    container.append(characterCard);

  }

