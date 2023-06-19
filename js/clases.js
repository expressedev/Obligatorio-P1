class Sistema {
  constructor() {
    this.usuarios = []; //El this aca se usa para definir una propiedad
    this.censos = [];
    this.agregarUsuarioPrueba();
    this.agregarCensoPrueba();
    this.usuarioLogueado = null;
  }
  agregarUsuarioPrueba() {
    this.usuarios.push(new Usuario("Pedro", "Pedro99", "Hola123", 1));
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
        44103668,
        "Canelones",
        "Independiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Lionel",
        "Messi",
        "34",
        29781386,
        "Maldonado",
        "Dependiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Diego",
        "Forlan Jr",
        "14",
        49758673,
        "Montevideo",
        "Estudiante",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Joaquina",
        "Rodriguez",
        "21",
        34066890,
        "Soriano",
        "No trabaja",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Hernan",
        "Arias",
        "14",
        34066890,
        "Duarzno",
        "Estudiante",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Marcos",
        "Esteban",
        "42",
        38223985,
        "Canelones",
        "Dependiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Luis",
        "Suarez",
        "38",
        28627204,
        "Montevideo",
        "Independiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Javier",
        "Hernandez",
        "28",
        12350879,
        "Colonia",
        "Dependiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Marina",
        "Rodriguez",
        "18",
        9009867,
        "Montevideo",
        "Independiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Mario",
        "Yamasaki",
        "16",
        49775410,
        "Rocha",
        "Estudiante",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Federico",
        "Valverde",
        "22",
        90288121,
        "Rio Negro",
        "Dependiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Juan",
        "Heslop",
        "34",
        13394862,
        "Canelones",
        "Estudiante",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Leo",
        "Fernandez",
        "38",
        37703273,
        "Salto",
        "No trabaja",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Martin",
        "Imhof",
        "38",
        39990321,
        "Lavalleja",
        "Dependiente",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Cristian",
        "Sanches",
        "68",
        39990321,
        "Lavalleja",
        "No trabaja",
        true,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Rodrigo",
        "Stoickovic",
        "28",
        32013023,
        "Soriano",
        "Dependiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Ines",
        "Pereira",
        "18",
        62285882,
        "Salto",
        "Independiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Lorena",
        "Fernandez",
        "12",
        77603790,
        "Paysandu",
        "Estudiante",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Maria",
        "Algorta",
        "20",
        97706314,
        "Paysandu",
        "No trabaja",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Cristian",
        "Santos",
        "68",
        17246845,
        "Rivera",
        "Dependiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Juana",
        "De Arcos",
        "28",
        86416801,
        "Rivera",
        "Estudiante",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Jaime",
        "Roos",
        "18",
        29524596,
        "Florida",
        "Estudiante",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Manuela",
        "Perez",
        "38",
        46761957,
        "Florida",
        "Dependiente",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Martina",
        "Rodriguez",
        "14",
        77756993,
        "Flores",
        "Estudiante",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Mercedes",
        "Lorenzo",
        "68",
        38435877,
        "Montevideo",
        "No trabaja",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Juan",
        "Martinez",
        "28",
        60937962,
        "Canelones",
        "Estudiante",
        false,
        Math.floor(Math.random() * this.usuarios.length + 1)
      ),
      new Censo(
        "Javier",
        "Sanches",
        "68",
        60913750,
        "Maldonado",
        "No trabaja",
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
