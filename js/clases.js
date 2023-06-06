class Sistema {
  constructor() {
    this.usuarios = [];
  }
  agregarUsuario(unUsuario) {
    this.usuarios.push(unUsuario);
  }
  obtenerUsuarios() {
    return this.usuarios;
  }
  usuarioRepetido(nom) {
    let estaRepetido = false;
    for (let i = 0; i < this.usuarios.length && !estaRepetido; i++) {
      let usuarioActual = this.usuarios[i];
      if (nom === usuarioActual.usuario) {
        estaRepetido = true;
      }
    }
    return estaRepetido;
  }

  loginValido(nombreDeUsuario, pass) {
    let login = false;
    for (let i = 0; i < this.usuarios.length && !login; i++) {
      let usuarioActual = this.usuarios[i];
      if (
        usuarioActual.usuario.toLowerCase() === nombreDeUsuario.toLowerCase() &&
        usuarioActual.contraseña === pass
      ) {
        login = true;
      }
    }
    return login;
  }
}

class Usuario {
  constructor(nombre, usuario, contraseña) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
}
