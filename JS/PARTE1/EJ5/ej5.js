
let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => handleSubmit(event));

function handleSubmit(event){
  event.preventDefault();
  let numero = parseInt(event.target.numero.value);
  let resultado = Pasa_a_Romano(numero);
  if(document.querySelector(".resultado")){
    document.querySelector(".resultado").remove();}
  let textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;
  document.body.append(textoResultado);
}
const romanos = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  IIX: 8,
  VII: 7,
  VI: 6,
  V: 5,
  IV: 4,
  III: 3,
  II: 2,
  I: 1
}
function Pasa_a_Romano(numero){
  let resultado = "";
  for (let key in romanos) {
    while (numero >= romanos[key]) {
      resultado += key;
      numero -= romanos[key];
    }
  }
return resultado;

}

