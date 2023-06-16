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
        49758676,
        "Montevideo",
        "Independiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Maxi",
        "Navarro",
        "20",
        44103662,
        "Canelones",
        "Independiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Juan",
        "Navarro",
        "22",
        49758674,
        "Canelones",
        "Independiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Joaquin",
        "Suarez",
        "11",
        49758673,
        "Canelones",
        "Dependiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Joaquina",
        "Rodriguez",
        "21",
        49758663,
        "Soriano",
        "Dependiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Hernan",
        "Arias",
        "21",
        49758261,
        "Montevideo",
        "No trabaja",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Marcos",
        "Esteban",
        "12",
        49758661,
        "Canelones",
        "No trabaja",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Luis",
        "Suarez",
        "31",
        49751661,
        "Canelones",
        "Estudiante",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
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

  eliminarPersona(cedula) {
    this.censos = this.censos.filter((censo) => censo.cedula !== cedula);
  }

  cedulaExiste(cedula) {
    let cedulaExiste = false;
    for (let i = 0; i < this.censos.length; i++) {
      let cedulaAcutal = this.censos[i];
      if (cedulaAcutal.cedula === cedula) {
        cedulaExiste = true;
      }
    }
    return cedulaExiste;
  }

  buscarId(id) {
    let censos = [];
    for (let i = 0; i < this.censos.length; i++) {
      let censoActual = this.censos[i];
      if (censoActual.id === id) {
        censos.push(censoActual);
      }
    }
    return censos;
  }

  listaCensista(id) {
    //Pasamos ID de censista logueado
    let censistas = [];
    for (let i = 0; i < this.usuarios.length; i++) {
      let censistaActual = this.usuarios[i];
      if (censistaActual.id != id) {
        censistas.push(censistaActual);
      }
    }
    return censistas;
  }

  cedulaValida(cedula) {
    for (let i = 0; i < cedula.length; i++) {
      cedula = cedula.replace(".", "");
      cedula = cedula.replace("-", "");
    }
    return cedula;
  }

  contarDepartamento(departamento) {
    let contadorDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (departamentoAcutal.departamento === departamento) {
        contadorDepartamento = contadorDepartamento + 1;
      }
    }
    return contadorDepartamento;
  }

  contarMayores(departamento) {
    let contadorMayoresDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.edad >= 18 &&
        departamentoAcutal.validado == true
      ) {
        contadorMayoresDepartamento = contadorMayoresDepartamento + 1;
      }
    }
    return contadorMayoresDepartamento;
  }

  contarMenores(departamento) {
    let contadorMenoresDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.edad < 18 &&
        departamentoAcutal.validado == true
      ) {
        contadorMenoresDepartamento = contadorMenoresDepartamento + 1;
      }
    }
    return contadorMenoresDepartamento;
  }

  contarDependiente(departamento) {
    let contadorDependienteDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.ocupacion == "Dependiente" &&
        departamentoAcutal.validado == true
      ) {
        contadorDependienteDepartamento = contadorDependienteDepartamento + 1;
      }
    }
    return contadorDependienteDepartamento;
  }

  contarIndependiente(departamento) {
    let contadorIndependienteDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.ocupacion == "Independiente" &&
        departamentoAcutal.validado == true
      ) {
        contadorIndependienteDepartamento =
          contadorIndependienteDepartamento + 1;
      }
    }
    return contadorIndependienteDepartamento;
  }

  contarEstudiante(departamento) {
    let contadorEstudianteDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.ocupacion == "Estudiante" &&
        departamentoAcutal.validado == true
      ) {
        contadorEstudianteDepartamento = contadorEstudianteDepartamento + 1;
      }
    }
    return contadorEstudianteDepartamento;
  }

  contarNoTrabajan(departamento) {
    let contadorNoTrabajaDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.ocupacion == "No trabaja" &&
        departamentoAcutal.validado == true
      ) {
        contadorNoTrabajaDepartamento = contadorNoTrabajaDepartamento + 1;
      }
    }
    return contadorNoTrabajaDepartamento;
  }

  contarCensados(departamento) {
    let contadorCensadosDepartamento = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let departamentoAcutal = this.censos[i];
      if (
        departamentoAcutal.departamento === departamento &&
        departamentoAcutal.validado == true
      ) {
        contadorCensadosDepartamento = contadorCensadosDepartamento + 1;
      }
    }
    return contadorCensadosDepartamento;
  }

  contarCensadosTotales() {
    let contadorCensadosTotales = 0;
    for (let i = 0; i < this.censos.length; i++) {
      let censos = this.censos[i];
      if (censos.validado == true) {
        contadorCensadosTotales = contadorCensadosTotales + 1;
      }
    }
    return contadorCensadosTotales;
  }

  obtenerCensos() {
    return this.censos;
  }
  agregarCenso(unCenso) {
    this.censos.push(unCenso);
  }

  modificarId(cedula, id) {
    let censo = this.buscarCedula(cedula);
    censo.id = id;
  }

  modificarCenso(
    nombre,
    apellido,
    edad,
    cedula,
    departamento,
    ocupacion,
    validado
  ) {
    let censo = this.buscarCedula(cedula);
    censo.nombre = nombre;
    censo.apellido = apellido;
    censo.edad = edad;
    censo.departamento = departamento;
    censo.ocupacion = ocupacion;
    censo.validado = validado;
  }
}

class Usuario {
  constructor(nombre, usuario, contraseña, id) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.contraseña = contraseña;
    this.id = id;
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
