window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#btnRegistrarse").addEventListener("click", registro);
}

let sistema = new Sistema();

function registro() {
  nombreRegistro = document.querySelector("#nombreRegistro").value;
  nombreUsuario = document.querySelector("#nombreUsuario").value;
  contraseñaRegistro = document.querySelector("#contraRegistro").value;
  document.querySelector("#nombreRegistro").value = "";
  document.querySelector("#nombreUsuario").value = "";
  document.querySelector("#contraRegistro").value = "";
  let personaRegistrada = new Usuario(
    nombreRegistro,
    nombreUsuario,
    contraseñaRegistro
  );
  sistema.usuarios.push(personaRegistrada);
  let usuarioEncontrado = false;
  for (let i = 0; i < sistema.usuarios.length; i++) {
    if (nombreUsuario === sistema.usuarios[i].usuario) {
      usuarioEncontrado = true;
      console.log(usuarioEncontrado);
    }
  }
  if (!usuarioEncontrado) {
    alert("no");
  }
}
