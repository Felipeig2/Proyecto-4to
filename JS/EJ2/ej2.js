let formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", event => HandleSubmit(event));

function HandleSubmit(event){
    event.preventDefault(); 
    let numero = parseInt(event.target.numero.value);
    if (document.querySelector(".resultado")) {
        document.querySelector(".resultado").remove();
    }
    let resultado = factorial(numero);
    let textoResultado = document.createElement("h1");
    textoResultado.classList.add("resultado");
    textoResultado.textContent = resultado;
    document.body.append(textoResultado);
}

function factorial(x) {
    if (isNaN(x)) {
        return 'Debes completar el campo';
    }
    else if( x < 0){
        return "El numero debe ser positivo";
    }
    let resultado = 1;
    for (let i = 2; i <= x; i++) {
        resultado *= i;
    }
    return resultado;
}