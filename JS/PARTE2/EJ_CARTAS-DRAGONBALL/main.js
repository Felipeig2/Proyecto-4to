url = 'https://dragonball-api.com/api/characters?limit=58';

let array_personajes = [];

pie = document.querySelector('.pie');

const button = document.querySelector('.button');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');

let div_1= document.querySelector('#div1');
let div_2= document.querySelector('#div2');

button.addEventListener("click", () => {

fetch(url)
  .then(res => res.json())
  .then((data) => {
    console.log(data);

    let personaje = data.items;
    array_personajes = personaje;
    
    primerafuncion(array_personajes);
  })
});

  function primerafuncion(array_personajes){

    container1.innerHTML = '';
    container2.innerHTML = '';

    let num_al1 = Math.floor(Math.random() * 57);
    let num_al2 = Math.floor(Math.random() * 57);

    let k_1 = eval(array_personajes[num_al1].ki.replaceAll(".",""));
    let k_2 = eval(array_personajes[num_al2].ki.replaceAll(".",""));

    let nom_1 = array_personajes[num_al1].name;
    let nom_2 = array_personajes[num_al2].name;

    let foto_1 = array_personajes[num_al1].image;
    let foto_2 = array_personajes[num_al2].image;

    let carta1 = document.createElement('div');
    let k1 = document.createElement('h1');
    let nom1 = document.createElement('h2');
    let foto1 = document.createElement('img');

    let carta2 = document.createElement('div');
    let k2 = document.createElement('h1');
    let nom2 = document.createElement('h2');
    let foto2 = document.createElement('img');

    k1.textContent = k_1;
    nom1.textContent = nom_1;
    foto1.src = foto_1;

    foto1.style.width = '400px';
    foto1.style.height = '400px'; 

    k2.textContent = k_2;
    nom2.textContent = nom_2;
    foto2.src = foto_2;

    foto2.style.width = '400px';
    foto2.style.height = '400px'; 

    carta1.append(k1);
    carta1.append(nom1);
    carta1.append(foto1);
    container1.append(carta1);

    carta2.append(k2);
    carta2.append(nom2);
    carta2.append(foto2);
    container2.append(carta2);

    setTimeout(() => {
      compararKi(nom_1, nom_2, k_1, k_2);
    }, 500);
  }

  function compararKi(nom_1, nom_2, k_1, k_2){
    console.log('k_1:', k_1);
    console.log('k_2:', k_2);

    if (k_1 === 'unknown' || k_2 === 'unknown') {
      pie.textContent = 'NO HAY GANADOR';
    } else if (k_1 > k_2) {
      pie.textContent = 'El enemigo ' + nom_1 + ' es más fuerte que ' + nom_2;
    } else if (k_2 > k_1) {
      pie.textContent = 'El enemigo ' + nom_2 + ' es más fuerte que ' + nom_1;
    } else {
      pie.textContent = 'NO HAY GANADOR';
    }
  } 

  button1.addEventListener("click", () => {
    intervalID = setInterval(() => {
      document.body.style.backgroundColor = colorRandom();
      button.style.backgroundColor = colorRandom();
      pie.style.backgroundColor = colorRandom();
    }, 2000);
  });

 function colorRandom(){
  let r = Math.floor(Math.random() *256);
  let g = Math.floor(Math.random() *256);
  let b = Math.floor(Math.random() *256);

  return`rgb(${r}, ${g}, ${b})`;
}


button2.addEventListener('click', () => {
  clearInterval(intervalID);
});