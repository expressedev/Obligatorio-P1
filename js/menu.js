function ocultarDiv() {
  document.querySelector("#ingreso").style.display = "none";
  document.querySelector("#perfilCensista").style.display = "none";
  document.querySelector("#formularioInvitado").style.display = "none";
  document.querySelector("#ingresoDeDatos").style.display = "none";
  document.querySelector("#buscardorCedulaInvitado").style.display = "none";
}

function mostrarDiv(id) {
  ocultarDiv();
  document.querySelector("#" + id).style.display = "block";
}
