let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => HandleSubmit(event));

function HandleSubmit(event){
  event.preventDefault();
  let numero = parseInt(event.target.numero.value);
  if(document.querySelector(".resultado")){
    document.querySelector(".resultado").remove();
  }
  let resultado = Fibonacci(numero);
  textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;
  document.body.append(textoResultado);

}

function Fibonacci(numero) {
  if (isNaN(numero)) {
      return 'Tenes que completar el campo';
  }
  let g = 1;
  let f = 0;
  let temp = 0;
  let resultado = '';

  for (let i = 1; i <= numero; i++) {
      resultado += f + ', ';
      temp = g + f;
      g = f;
      f = temp;
  }

  return resultado;
  }
