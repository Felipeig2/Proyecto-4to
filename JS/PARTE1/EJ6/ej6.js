let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => HandleSubmit(event));

function HandleSubmit(event){
  event.preventDefault();
  let año = parseInt(event.target.año.value);
  if(document.querySelector(".resultado")){
  document.querySelector(".resultado").remove();}
  let resultado = isLeap(año);
  let textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado ? "Es bisiesto" : "No es bisiesto";
  document.body.append(textoResultado);
}

function isLeap(año) {
  if (isNaN(año)) {
    return 'Debes completar el campo';
  }
  return año % 4 === 0 && año % 100 !== 0 || año % 400 === 0;
}

/* // OTRA FORMA DE HACER LA FUNCION //
function isLeap(año){
  if (isNaN(año)) {
    return 'Debes completar el campo';
  }
  else{
   if (año % 4 == 0 && año % 100 != 0 || año % 400 == 0){
    return "Es bisiesto";
  }
  else{
    return "No es bisiesto";
  }
  }

}*/