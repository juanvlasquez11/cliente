let etiqueta=document.getElementById("boton");

let foto=document.getElementById("foto");

let audio=document.getElementById("audio");
let titulo=document.getElementById("titulo");

etiqueta.addEventListener("click",cambio);

function cambio(){
  foto.src="img/acdc1.jpg";
  audio.src="./audio/acdc.mp3";
  titulo.textContent="cancion2";

  titulo.classList.add("text-danger");
titulo.classList.remove("text-danger")
}

  