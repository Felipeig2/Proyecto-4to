let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => HandleSubmit(event));

function HandleSubmit(event){
  event.preventDefault();
  let color1 = event.target.color1.value;
  let color2 = event.target.color2.value;
  let color3 = event.target.color3.value;
  if(document.querySelector(".resultado")) {
    document.querySelector(".resultado").remove(); }
  let resultado = calcularValorResistencia(color1, color2, color3);
  let textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;
  document.body.append(textoResultado);
}

function calcularValorResistencia(color1, color2, color3){
    const colores = {
      negro: 0,
      marron: 1,
      rojo: 2,
      naranja: 3,
      amarillo: 4,
      verde: 5,
      azul: 6,
      violeta: 7,
      gris: 8,
      blanco: 9
  };
let valor1 = colores[color1];
let valor2 = colores[color2];
let valor3 = colores[color3];
if(valor1 == 0){valor1 = 1}
let resistencia = (valor1 * 10 + valor2) * Math.pow(10, valor3);
return resistencia;
}
/* Se puede hacer con esta funcion tambien, sin usar el Math.pow.
function power(valor3){
  let result = 1;
  for(let i = 1; i <= valor3; i++){
    result *= 10;
  }
  return result;
}
*/

