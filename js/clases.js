class Sistema {
  constructor() {
    this.usuarios = []; //El this aca se usa para definir una propiedad
    this.censos = [];
    this.agregarUsuarioPrueba();
    this.agregarCensoPrueba();
    this.usuarioLogueado = null;
  }
  agregarUsuarioPrueba() {
    this.usuarios.push(new Usuario("Pedro", "Pedro99", "Hola123", 1)); //En este caso el this se utiliza para acceder a una propiedad
    this.usuarios.push(new Usuario("Maxi", "Maxi10", "Hola123", 2));
    this.usuarios.push(new Usuario("Guille", "Guille", "Hola123", 3));
  }

  agregarCensoPrueba() {
    this.censos.push(
      new Censo(
        "Pedro",
        "Aznarez",
        "20",
        49758675,
        "Montevideo",
        "Independiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Maxi",
        "Navarro",
        "20",
        49758672,
        "Canelones",
        "Independiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Juan",
        "Navarro",
        "22",
        49758674,
        "Canelones",
        "Independiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Joaquin",
        "Suarez",
        "11",
        49758673,
        "Canelones",
        "Dependiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Joaquina",
        "Rodriguez",
        "21",
        49758663,
        "Soriano",
        "Dependiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Hernan",
        "Arias",
        "21",
        49758661,
        "Montevideo",
        "No trabaja",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Marcos",
        "Esteban",
        "12",
        49758661,
        "Canelones",
        "No trabaja",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Luis",
        "Suarez",
        "31",
        49758661,
        "Canelones",
        "Estudiante",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      )
    );
  }
  agregarUsuario(unUsuario) {
    this.usuarios.push(unUsuario);
  }
  obtenerUsuarios() {
    return this.usuarios;
  }
  buscarUsuario(usuario) {
    let usuarioB = null;
    for (let i = 0; i < this.usuarios.length; i++) {
      let usuarioActual = this.usuarios[i];
      if (usuarioActual.usuario.toLowerCase() === usuario.toLowerCase()) {
        usuarioB = usuarioActual;
      }
    }
    return usuarioB;
  }
  existeUsuario(nom) {
    let existe = false;
    let buscar = this.buscarUsuario(nom);
    if (buscar != null) {
      existe = true;
    }
    return existe;
  }

  loginRealizado(nombreDeUsuario, pass) {
    let login = false;
    for (let i = 0; i < this.usuarios.length && !login; i++) {
      let usuarioActual = this.usuarios[i];
      if (
        usuarioActual.usuario.toLowerCase() === nombreDeUsuario.toLowerCase() &&
        usuarioActual.contraseña === pass
      ) {
        login = true;
        this.usuarioLogueado = usuarioActual;
      }
    }
    return login;
  }
  logoutRealizado() {
    this.usuarioLogueado = null;
  }

  buscarCedula(cedula) {
    let cedulaBuscada = null;
    for (let i = 0; i < this.censos.length && !cedulaBuscada; i++) {
      let cedulaAcutal = this.censos[i];
      if (cedulaAcutal.cedula === cedula) {
        cedulaBuscada = cedulaAcutal;
      }
    }
    return cedulaBuscada;
  }

  cedulaValida(cedula){
    for(let i = 0; i < cedula.length; i++){
    cedula = cedula.replace('.', '')
    cedula = cedula.replace('-', '')
    }
    return cedula
}

  contarDepartamento(departamento) {
    let departamentoBuscada;
    let contadorDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (departamentoAcutal.departamento === departamento) {
        departamentoBuscada = departamentoAcutal;
        contadorDepartamento = contadorDepartamento + 1;
      }
    }
    return contadorDepartamento;
  }

  contarMayores(departamento) {
    let departamentoBuscada;
    let contadorDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.edad >= 18
      ) {
        departamentoBuscada = departamentoAcutal;
        contadorDepartamento = contadorDepartamento + 1;
      }
    }
    return contadorDepartamento;
  }

  contarMenores(departamento) {
    let departamentoBuscada;
    let contadorDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.edad < 18
      ) {
        departamentoBuscada = departamentoAcutal;
        contadorDepartamento = contadorDepartamento + 1;
      }
    }
    return contadorDepartamento;
  }

  contarDependiente(departamento) {
    let departamentoBuscada;
    let contadorDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.ocupacion == "Dependiente"
      ) {
        departamentoBuscada = departamentoAcutal;
        contadorDepartamento = contadorDepartamento + 1;
      }
    }
    return contadorDepartamento;
  }


  contarIndependiente(departamento) {
    let departamentoBuscada;
    let contadorDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.ocupacion == "Independiente"
      ) {
        departamentoBuscada = departamentoAcutal;
        contadorDepartamento = contadorDepartamento + 1;
      }
    }
    return contadorDepartamento;
  }

  contarEstudiante(departamento) {
    let departamentoBuscada;
    let contadorDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.ocupacion == "Estudiante"
      ) {
        departamentoBuscada = departamentoAcutal;
        contadorDepartamento = contadorDepartamento + 1;
      }
    }
    return contadorDepartamento;
  }

  contarNoTrabajan(departamento) {
    let departamentoBuscada;
    let contadorDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.ocupacion == "No trabaja"
      ) {
        departamentoBuscada = departamentoAcutal;
        contadorDepartamento = contadorDepartamento + 1;
      }
    }
    return contadorDepartamento;
  }

  obtenerCensos() {
    return this.censos;
  }
  agregarCenso(unCenso) {
    this.censos.push(unCenso);
  }

  modificarCenso(nombre, apellido, edad, cedula, departamento, ocupacion) {
    let censo = this.buscarCedula(cedula);
    censo.nombre = nombre;
    censo.apellido = apellido;
    censo.edad = edad;
    censo.departamento = departamento;
    censo.ocupacion = ocupacion;
  }
}

class Usuario {
  constructor(nombre, usuario, contraseña, id) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.id = id
  }
}

class Censo {
  constructor(
    nombre,
    apellido,
    edad,
    cedula,
    departamento,
    ocupacion,
    validado,
    id
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cedula = cedula;
    this.departamento = departamento;
    this.ocupacion = ocupacion;
    this.validado = validado;
    this.id = id;
  }
}

// Clase senso para probar
// El profe no haria una clase invitado
// al invitado hay que hacerle un boton de buscar por la cedula y que le muestre todos los datos precargados
// tres opciones, no encuentra la cedula porque no pre cargo, la otra es que este pero no aprobado, y sino esta aprobado y fin.
// En el perfil censita, para los preaprobados, podemos tener un buscador por cedula, una lista.
