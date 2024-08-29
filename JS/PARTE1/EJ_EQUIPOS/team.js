let formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => HandleSubmit(event));

function HandleSubmit(event){
  event.preventDefault();
  let team = event.target.elements.team.value;
  if(document.querySelector(".resultado")) {
    document.querySelector(".resultado").remove(); }
  let resultado = calcularEquipo(team);
  let textoResultado = document.createElement("h1");
  textoResultado.classList.add("resultado");
  textoResultado.textContent = resultado;
  document.body.append(textoResultado);
}
function calcularEquipo(team) {
  const equipos = {
    "Equipo 1": ["Pipe, Juarez, Finlai, Felipe, Bruno y Jere"],
    "Equipo 2": ["Santi, Uru, Amigo de Uru, Cain, Amigo de Cain y Sebas"]
  };

  return equipos[team] ? equipos[team].join(", ") : "Equipo no encontrado";
}