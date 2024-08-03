let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => HandleSubmit(event));

function HandleSubmit(event) {
    event.preventDefault();
    let base = parseFloat(event.target.numero.value);
    let exp = parseInt(event.target.exponente.value);
    if(document.querySelector(".resultado")) {
    document.querySelector(".resultado").remove(); }
    let resultado = power(base, exp);
    let textoResultado = document.createElement("h1");
    textoResultado.classList.add("resultado");
    textoResultado.textContent = resultado;
    document.body.append(textoResultado);
    }

    function power(x, n) {
    if (isNaN(x) || isNaN(n)) {
        return 'Debes completar ambos campos';
    }
    else if (0 > n) {
        return 'El exponente debe ser positivo';
    }
        let resultado = 1;
        for(let i = 1; i <= n; i++) {
            resultado *= x;
        } 
        return resultado;
    }
