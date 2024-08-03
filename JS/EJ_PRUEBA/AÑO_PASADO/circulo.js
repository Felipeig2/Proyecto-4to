let formulario = document.querySelector(".form");
formulario.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); 

  
  let x = parseInt(event.target.x.value);
  let y = parseInt(event.target.y.value);
  let r = parseInt(event.target.r.value);

 
  Circle(x, y, r);
}

function Circle(x, y, r) {
  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // si lo saco, se quedan los circulos y no se borra al crearse uno nuevo
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.stroke();
}
