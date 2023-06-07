class Sistema {
  constructor() {
    this.usuarios = [];
    this.censos = [];
    this.agregarUsuarioPrueba()  
  }

  agregarUsuarioPrueba() {
    this.usuarios.push(new Usuario("Pedro", "Pedro345", "Hola123"))
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
  obtenerCensos() {
    return this.censos;
  }
  agregarCenso(unCenso){
    this.censos.push(unCenso)
  }
}

class Usuario {
  constructor(nombre, usuario, contraseña) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
  }
}

class Censo {
  constructor(nombre, apellido, edad, cedula, departamento, ocupacion, validado){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula
    this.departamento = departamento
    this.ocupacion = ocupacion
    this.validado = validado
  }
}

// Clase senso para probar
// El profe no haria una clase invitado
// al invitado hay que hacerle un boton de buscar por la cedula y que le muestre todos los datos precargados
// tres opciones, no encuentra la cedula porque no pre cargo, la otra es que este pero no aprobado, y sino esta aprobado y fin.
// En el perfil censita, para los preaprobados, podemos tener un buscador por cedula, una lista.