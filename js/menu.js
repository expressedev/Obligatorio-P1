function ocultarDiv() {
  document.querySelector("#ingreso").style.display = "none";
  document.querySelector("#perfilCensista").style.display = "none";
  document.querySelector("#perfilInvitado").style.display = "none";
}

function mostrarDiv(id) {
  ocultarDiv();
  document.querySelector("#" + id).style.display = "block";
}
