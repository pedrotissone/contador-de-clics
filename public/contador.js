let contador = document.getElementById("contadorjs");

let botonClic = document.getElementById("boton-clicjs");

let botonReiniciar = document.getElementById("boton-reiniciarjs");

let numeroEnPantalla = 0

botonClic.addEventListener("click", aumentarConteo)

function aumentarConteo(){
	nuevoNumero = numeroEnPantalla + 1
  contador.innerText = nuevoNumero
  return numeroEnPantalla = nuevoNumero
}

botonReiniciar.addEventListener("click", reiniciarContador)

function reiniciarContador(){
	contador.innerText = 0
  numeroEnPantalla = 0  
}



