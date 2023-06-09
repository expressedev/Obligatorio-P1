function ocultarDivs() {
  document.querySelector("#ingreso").style.display = "none";
  document.querySelector("#perfilCensista").style.display = "none";
  document.querySelector("#formularioInvitado").style.display = "none";
  document.querySelector("#ingresoDeDatos").style.display = "none";
  document.querySelector("#buscardorCedulaInvitado").style.display = "none";
  document.querySelector("#modificarDeDatos").style.display = "none";
}

function mostrarDivPrincipal(id) {
  ocultarDivs();
  document.querySelector("#" + id).style.display = "block";
}

function mostrarDiv(id) {
  document.querySelector("#" + id).style.display = "block";
}

function ocultarDiv(id) {
  document.querySelector("#" + id).style.display = "none";
}
