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

  // Ver la clase o ver luego que no esta referenciado que el profe ya estaba yendo al palo
  usuarioRepetido(nombre){
    let estaRepetido = false;
    for(let i = 0; i< this.usuarios.length; i++){
      let usuarioActual = this.usuarios[i];
      if(usuarioActual.usuario === nombreDeUsuario){ //Ver aca los nombres de nuestras variables principalmente nombreDeUsuario
        estaRepetido = true;
      }
    }
    return estaRepetido;
  }

// Ver la clase o ver luego que no esta referenciado que el profe ya estaba yendo al palo
  loginValido(nombreDeUsuario, pass){   //ver variables nuestras comparadas con las del profe que segundo esta alguna mal!
    let loginOk = false;
    for(let i = 0; i< this.usuarios.length && !loginOk; i++){
      let usuarioActual = this.usuarios[i];
      if(usuarioActual.usuario.ToLowerCase() === nombreDeUsuario.ToLowerCase() && usuarioActual.password === pas){ //Ver aca los nombres de nuestras variables principalmente nombreDeUsuario
        loginOk = true;
      }
    }
    return loginOk;
  }
}

class Usuario {
  constructor(nombre, usuario, contraseña) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
}


// Cuando entras al usuario logeado osea ensista.. que te muestre arriba el usuario logueado.
// tres div principales.. uno de registro y logeo, otro de sensista y otro del invitado.
