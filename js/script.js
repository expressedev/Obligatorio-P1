window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#btnRegistrarse").addEventListener("click", registro);
}

let sistema = new Sistema();
// let usuarios = [];
// let contraseña = [];

function login() {
  let usuario = document.querySelector("usuario").value;
  let contraseña = document.querySelector("contraseña").value;
}

function registro() {
  nombreRegistro = document.querySelector("#nombreRegistro").value;
  nombreUsuario = document.querySelector("#nombreUsuario").value;
  contraseñaRegistro = document.querySelector("#contraRegistro").value;
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
    nombreUsuario === 0 ||
    contraseñaRegistro === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (nombreRegistro.length < 3) {
    alert("El nombre debe tener al menos 2 caracteres");
  } else if (nombreUsuario < 3) {
    alert("El nombre de usuario debe tener al menos 2 caracteres");
  } else if (sistema.usuarioRepetido(nombreUsuario)) {
    alert("El nombre de usuario ya existe");
  } else if (passwordIncorrecta(contraseñaRegistro)) {
    alert("La contraseña debe ser mayor a 4 caracteres");
  } else {
    sistema.agregarUsuario(nuevoUsuario);
    alert("registrado");
    document.querySelector("formRegistro").reset();
  }

  sistema.usuarios.push(personaRegistrada);
}

function passwordIncorrecta(unPass) {
  passwordCorrecta = true;
  if (unPass.length < 5) {
    passwordCorrecta = false;
  }
  return passwordCorrecta;
}
//fijarnos codigo ASCY
//agregar un booleano para contar mayuscula
