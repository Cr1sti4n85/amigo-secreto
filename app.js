//Variables globales
const amigos = [];
const amigosSorteados = [];

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;
  if (!amigo) {
    alert("Pro favor, ingrese un nombre para agregarlo a la lista");
    return;
  }

  const lista = document.getElementById("listaAmigos");
  amigos.push(amigo);
  const itemAmigo = document.createElement("li");
  itemAmigo.innerHTML = amigo;
  lista.appendChild(itemAmigo);
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (!amigos.length) {
    alert("En estos momentos no hay amigos en la lista");
    return;
  }
  const resultado = document.getElementById("resultado");
  const index = Math.floor(Math.random() * amigos.length);

  if (revisarAmigosSorteados(amigos[index])) {
    sortearAmigo();
    return;
  }

  resultado.innerHTML = amigos[index];
}

function revisarAmigosSorteados(amigo) {
  return amigosSorteados.includes(amigo);
}
