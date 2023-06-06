window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#btnIngreso").addEventListener("click", login);
  document.querySelector("#btnRegistrarse").addEventListener("click", registro);
  mostrarDiv("ingreso");
  document.querySelector("#btnInvitado").addEventListener("click", invitado);
}

let sistema = new Sistema();
let usuarioLogueado = null;

function login() {
  let usuario = document.querySelector("#usuario").value.trim();
  let contraseña = document.querySelector("#contraseña").value.trim();
  if (usuario.length === 0 || contraseña.length === 0) {
    alert("Todos los campos son obligatorios");
  } else if (!sistema.loginValido(usuario, contraseña)) {
    alert("Login Incorrecto");
  } else mostrarDiv("perfilCensista");
  usuarioLogueado = usuario;
  document.querySelector("#usuarioLogin").innerHTML = usuarioLogueado;
}

function registro() {
  nombreRegistro = document.querySelector("#nombreRegistro").value.trim();
  nombreUsuario = document.querySelector("#nombreUsuario").value.trim();
  contraseñaRegistro = document.querySelector("#contraRegistro").value.trim();
  document.querySelector("#nombreRegistro").value = "";
  document.querySelector("#nombreUsuario").value = "";
  document.querySelector("#contraRegistro").value = "";
  let nuevoUsuario = new Usuario(
    nombreRegistro,
    nombreUsuario,
    contraseñaRegistro
  );
  if (
    nombreRegistro.length === 0 ||
    nombreUsuario.length === 0 ||
    contraseñaRegistro.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (nombreRegistro.length < 3) {
    alert("El nombre debe tener al menos 2 caracteres");
  } else if (nombreUsuario.length < 3) {
    alert("El nombre de usuario debe tener al menos 2 caracteres");
  } else if (sistema.usuarioRepetido(nombreUsuario)) {
    alert("El nombre de usuario ya existe");
  } else if (passwordIncompleta(contraseñaRegistro)) {
    alert(
      "La contraseña debe ser mayor a 4 caracteres, contener una minuscula, una mayuscula y un numero "
    );
  } else {
    sistema.agregarUsuario(nuevoUsuario);
    alert("registrado");
  }
}
function invitado() {
  mostrarDiv("perfilInvitado");
}

function passwordIncompleta(unPass) {
  passwordCorrecta = false;
  if (
    unPass.length < 5 ||
    unPass.search(/[0-9]/) < 0 ||
    unPass.search(/[a-z]/) < 0 ||
    unPass.search(/[A-Z]/) < 0
  ) {
    passwordCorrecta = true;
  }
  return passwordCorrecta;
}
