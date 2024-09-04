let button = document.getElementById('button');
button.addEventListener('click', handleClick);

let timeoutId;

function handleClick(e) {

  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  console.log('Boton');

    timeoutId = setTimeout(() => {
      let num_al = Math.floor(Math.random() * 10 + 1);
      let div = document.getElementById('div');
      div.textContent = num_al;
    }, 2000);
  
}





  
