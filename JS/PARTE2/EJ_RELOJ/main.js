function actualizarReloj(){
  let dia;
  setInterval(() => {
    console.log(new Date().toLocaleTimeString());
    dia = new Date().toLocaleTimeString();
  }, 500);
  let reloj = document.getElementById('reloj');
  reloj.textContent = dia;
}

setInterval(() => {
  actualizarReloj();
}, 500);