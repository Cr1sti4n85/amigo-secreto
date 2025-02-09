//Variables globales
let amigos = [];
let amigosSorteados = [];
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
    alert(
      "En estos momentos no hay amigos en la lista. Comienza a ingresarlos"
    );
    cambiarBoton("#fe652b", "Sortear amigo");
    deshabilitarInput(false);
    return;
  }

  if (amigosSorteados.length === amigos.length) {
    const res = confirm(
      "Ya se sortearon todos los amigos. ¿Quieres ingresar otra lista?"
    );
    reinicializarVariables();
    if (res) {
      cambiarBoton("#fe652b", "Sortear amigo");
      deshabilitarInput(false);
    }
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

  if (amigosSorteados.length === amigos.length) {
    cambiarBoton("#4B69FD", "REINICIAR");
    deshabilitarInput(true);
  }
}

function reinicializarVariables() {
  lista.innerHTML = "";
  resultado.innerHTML = "";
  amigosSorteados = [];
  amigos = [];
}

function cambiarBoton(color, texto) {
  document.querySelector(".button-draw").style.backgroundColor = color;
  document.querySelector(".button-draw").childNodes[2].textContent = texto;
}

function deshabilitarInput(estaDeshabilitado) {
  document.getElementById("amigo").disabled = estaDeshabilitado;
  document.querySelector(".button-add").disabled = estaDeshabilitado;
}
