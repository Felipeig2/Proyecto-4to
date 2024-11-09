const url = 'https://restcountries.com/v3.1/all';

let nombresBanderas = [];
let imagenesBanderas = [];

let acierto = 0;
let equivocacion = 0;
let nombreCorrecto;

function recuperarValores() {
  const aciertosGuardados = localStorage.getItem("aciertos");
  const equivocacionesGuardadas = localStorage.getItem("equivocaciones");

    acierto = parseInt(aciertosGuardados);
    equivocacion = parseInt(equivocacionesGuardadas);
}

function actualizarLocalStorage() {
  localStorage.setItem("aciertos", acierto);
  localStorage.setItem("equivocaciones", equivocacion);

  console.log(`Aciertos: ${acierto}`);
  console.log(`Equivocaciones: ${equivocacion}`);
}

let main = document.querySelector("main");

recuperarValores();

fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      nombresBanderas[i] = data[i].name.common;
      imagenesBanderas[i] = data[i].flags.png;
    }
    nowDoTheGame(nombresBanderas, imagenesBanderas);
  });

function nowDoTheGame(nombresBanderas, imagenesBanderas) {
  let num_Al = Math.floor(Math.random() * nombresBanderas.length);
  let num_Al2 = Math.floor(Math.random() * nombresBanderas.length);

  nombreCorrecto = nombresBanderas[num_Al];
  let banderaUrl = imagenesBanderas[num_Al];

  let nombreIncorrecto1;
  let nombreIncorrecto2;
  do {
    nombreIncorrecto1 = nombresBanderas[Math.floor(Math.random() * nombresBanderas.length)];
  } while (nombreIncorrecto1 === nombreCorrecto);
  do {
    nombreIncorrecto2 = nombresBanderas[Math.floor(Math.random() * nombresBanderas.length)];
  } while (nombreIncorrecto2 === nombreCorrecto && nombreIncorrecto2 === nombreIncorrecto1);

  main.innerHTML = '';

  let banderaDiv = document.createElement('div');
  let nombre = document.createElement('h1');
  let imagen = document.createElement('img');

  imagen.src = banderaUrl;

  imagen.style.width = '450px';
  imagen.style.height = '350px';

  banderaDiv.append(nombre);
  banderaDiv.append(imagen);
  main.append(banderaDiv);

  let button1 = document.getElementById('button1');
  let button2 = document.getElementById('button2');
  let button3 = document.getElementById('button3');

  let opciones = [nombreCorrecto, nombreIncorrecto1, nombreIncorrecto2];
  opciones.sort(() => Math.random() - 0.5);

  button1.textContent = opciones[0];
  button2.textContent = opciones[1];
  button3.textContent = opciones[2];

  mostrarLocalStorage();
}

function configurarBotones() {
  button1.addEventListener('click', manejarRespuesta);
  button2.addEventListener('click', manejarRespuesta);
  button3.addEventListener('click', manejarRespuesta);
}

function manejarRespuesta(event) {
  const botonPulsado = event.target;
  if (botonPulsado.textContent == nombreCorrecto) {
    mostrarMensaje('¡Acertaste! La bandera correcta era: ' + nombreCorrecto);
    acierto++;
  } else {
    mostrarMensaje('Incorrecto :(');
    equivocacion++;
  }
  actualizarLocalStorage();
}

function mostrarMensaje(mensaje) {
  let h3_creado = document.querySelector('h3');
  if (h3_creado) {
    h3_creado.textContent = mensaje;
  } else {
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = mensaje;
    div.append(h3);
    main.append(div);
  }
}

function mostrarLocalStorage() {
  let div_1 = document.createElement('div');
  let h4_1 = document.createElement('h4');
  h4_1.textContent = 'Aciertos: ' + acierto;
  div_1.append(h4_1);
  main.append(div_1);

  let div2 = document.createElement('div');
  let h4_2 = document.createElement('h4');
  h4_2.textContent = 'Equivocaciones: ' + equivocacion;
  div2.append(h4_2);
  main.append(div2);
}

configurarBotones();

let nextButton = document.getElementById('nextButton');

button.nextButton.addEventListener('click', () => {
  nowDoTheGame(nombresBanderas, imagenesBanderas);
});

