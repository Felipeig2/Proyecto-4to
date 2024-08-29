document.addEventListener("click", handeClick);

function handeClick(e){
  let h1 = document.querySelector("h1");
  let n = +h1.textContent;
  if(e.target.id == "plus"){
    n++;
    h1.textContent = n;
  }
  if(e.target.id == "change"){
    if(n >= 10){
      n -= 10;
      h1.textContent = n;

      let div = document.querySelector(".container");
      let r1 = Math.floor(Math.random()*256);
      let g1 = Math.floor(Math.random()*256);
      let b1 = Math.floor(Math.random()*256);
      let r2 = Math.floor(Math.random()*256);
      let g2 = Math.floor(Math.random()*256);
      let b2 = Math.floor(Math.random()*256);
      div.style.background = `linear-gradient(rgb(${r1}, ${g1}, ${b1}), rgb(${r2},${g2},${b2}))`;
    }
  }
}

































/*document.addEventListener("click", handeClick)

function handeClick(e){
  let h1 = document.querySelector("h1");
  let n = +h1.textContent

    if(e.target.id == "plus"){
      n++;
      h1.textContent = n;
    }
   if(e.target.id == "change"){
      if(n >= 10){
      n -=10;
      h1.textContent = n;
      let div = document.querySelector(".container");
      let r1 = Math.floor(Math.random()*256);
      let g1 = Math.floor(Math.random()*256);
      let b1 = Math.floor(Math.random()*256);
      let r2 = Math.floor(Math.random()*256);
      let g2 = Math.floor(Math.random()*256);
      let b2 = Math.floor(Math.random()*256);
      div.style.background = `linear-gradient(rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
    }
  }
}
*/