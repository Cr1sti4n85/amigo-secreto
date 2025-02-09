//Variables globales
const amigos = [];
const amigosSorteados = [];
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;
  if (!amigo) {
    alert("Pro favor, ingrese un nombre para agregarlo a la lista");
    return;
  }

  if (amigos.includes(amigo)) {
    alert("Este nombre ya fue ingresado");
    return;
  }

  amigos.push(amigo);
  const itemAmigo = document.createElement("li");
  itemAmigo.innerHTML = amigo;
  const classAmigo = amigo.replace(" ", "_");
  itemAmigo.classList.add(`${classAmigo}`);
  lista.appendChild(itemAmigo);
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (!amigos.length) {
    alert("En estos momentos no hay amigos en la lista");
    return;
  }

  if (amigosSorteados.length === amigos.length) {
    alert("Ya se sortearon todos los amigos");
    reinicializarVariables();
    return;
  }

  const index = Math.floor(Math.random() * amigos.length);

  if (amigosSorteados.includes(amigos[index])) {
    sortearAmigo();
    return;
  }

  resultado.innerHTML = amigos[index];
  amigosSorteados.push(amigos[index]);
  const itemListaEliminado = document.querySelector(
    `.${amigos[index].replace(" ", "_")}`
  );
  itemListaEliminado.style.textDecoration = "line-through";
}

function reinicializarVariables() {
  lista.innerHTML = "";
  resultado.innerHTML = "";
  amigosSorteados = [];
  amigos = [];
}
