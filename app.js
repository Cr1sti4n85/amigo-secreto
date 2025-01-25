// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

//Variables globales
const amigos = [];

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;
  if (!amigo) {
    alert("Pro favor, ingrese un nombre para agregarlo a la lista");
    return;
  }

  const lista = document.getElementById("listaAmigos");
  amigos.push(amigo);
  const itemAmigo = document.createElement("li");
  itemAmigo.textContent = amigo;
  lista.appendChild(itemAmigo);
}
