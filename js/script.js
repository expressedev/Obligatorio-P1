window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#btnIngreso").addEventListener("click", login);
  document.querySelector("#btnRegistrarse").addEventListener("click", registro);
  mostrarDivPrincipal("ingreso");
  document.querySelector("#btnInvitado").addEventListener("click", invitado);
  document
    .querySelector("#btnBuscarCed")
    .addEventListener("click", buscadorCedula);
  document
    .querySelector("#btnIngresoDatos")
    .addEventListener("click", ingresoDatosNuevoInvitado);
  document.querySelector("#btnDatosForm").addEventListener("click", datosCenso);
  document.querySelector("#btnLogout").addEventListener("click", cerrarSesion);
  
  document
    .querySelector("#btnModificarForm")
    .addEventListener("click", modificarDatos);
    document.querySelector("#btnCensarPersona").addEventListener("click", datosNuevoCensoCensista);
    document.querySelector("#btnNuevoCenso").addEventListener("click", ingresarCensoCensista );
    document.querySelector("#btnRegresar").addEventListener("click", regresoApantallaPrincipal);
}

let sistema = new Sistema();

function login() {
  let usuario = document.querySelector("#usuario").value.trim();
  let contraseña = document.querySelector("#contraseña").value.trim();
  if (usuario.length === 0 || contraseña.length === 0) {
    alert("Todos los campos son obligatorios");
  } else if (!sistema.loginRealizado(usuario, contraseña)) {
    alert("Login Incorrecto");
  } else mostrarDivPrincipal("perfilCensista");
  document.querySelector("#usuarioLogin").innerHTML =
    sistema.usuarioLogueado.nombre;
  document.querySelector("#usuario").value = "";
  document.querySelector("#contraseña").value = "";
}

function cerrarSesion() {
  mostrarDivPrincipal("ingreso");
  sistema.logoutRealizado();
}
function datosNuevoCensoCensista(){
  mostrarDivPrincipal("ingresoDatosCensista");
}

function registro() {
  nombreRegistro = document.querySelector("#nombreRegistro").value.trim();
  nombreUsuario = document.querySelector("#nombreUsuario").value.trim();
  contraseñaRegistro = document.querySelector("#contraRegistro").value.trim();
  document.querySelector("#nombreRegistro").value = "";
  document.querySelector("#nombreUsuario").value = "";
  document.querySelector("#contraRegistro").value = "";

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
  } else if (sistema.existeUsuario(nombreUsuario)) {
    alert("El nombre de usuario ya existe");
  } else if (passwordIncompleta(contraseñaRegistro)) {
    alert(
      "La contraseña debe ser mayor a 4 caracteres, contener una minuscula, una mayuscula y un numero "
    );
  } else {
    let nuevoUsuario = new Usuario(
      nombreRegistro,
      nombreUsuario,
      contraseñaRegistro
    );
    sistema.agregarUsuario(nuevoUsuario);
    alert("registrado");
    document.querySelector("#formRegistro").reset();
  }
}
function invitado() {
  mostrarDivPrincipal("buscardorCedulaInvitado");
}

function ingresoDatosNuevoInvitado() {
  mostrarDivPrincipal("ingresoDeDatos");
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

function buscadorCedula() {
  let cedula = Number(document.querySelector("#inputCedulaInvitado").value);
  let buscar = sistema.buscarCedula(cedula);
  if (buscar === null) {
    document.querySelector("#cedulabuscada").innerHTML =
      "La cedula no esta censada";
  } else {
    mostrarDiv("modificarDeDatos");
    document.querySelector("#nombre1").value =
      sistema.buscarCedula(cedula).nombre;
    document.querySelector("#apellido1").value =
      sistema.buscarCedula(cedula).apellido;
    document.querySelector("#edad1").value = sistema.buscarCedula(cedula).edad;
    document.querySelector("#cedula1").value =
      sistema.buscarCedula(cedula).cedula;
    document.querySelector("#cedula1").disabled = true;
    document.querySelector("#ocupacion1").value =
      sistema.buscarCedula(cedula).ocupacion;
    document.querySelector("#departamento1").value =
      sistema.buscarCedula(cedula).departamento;
  }
}

function datosCenso() {
  let nombreCenso = document.querySelector("#nombre").value.trim();
  let apellidoCenso = document.querySelector("#apellido").value.trim();
  let edadCenso = document.querySelector("#edad").value.trim();
  let cedulaCenso = document.querySelector("#cedula").value.trim();
  let ocupacionCenso = document.querySelector("#ocupacion").value.trim();
  let departamentoCenso = document.querySelector("#departamento").value.trim();
  document.querySelector("#nombre").value = "";
  document.querySelector("#apellido").value = "";
  document.querySelector("#edad").value = "";
  document.querySelector("#cedula").value = "";
  document.querySelector("#ocupacion").value = "";
  document.querySelector("#departamento").value = "";

  let nuevoCenso = new Censo(
    nombreCenso,
    apellidoCenso,
    edadCenso,
    cedulaCenso,
    ocupacionCenso,
    departamentoCenso,
    false
  );
  if (
    nombreCenso.length === 0 ||
    apellidoCenso.length === 0 ||
    edadCenso.length === 0 ||
    cedulaCenso.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (edadCenso < 0 || edadCenso > 120) {
    alert("La edad tiene que estar entre 0 y 120");
  } else if (cedulaCenso < 1000000 || edadCenso.length > 99999999) {
    alert("La cedula tiene que ser valida");
  } else if (ocupacionCenso === "") {
    alert("Seleccione Ocupacion");
  } else if (departamentoCenso === "") {
    alert("Seleccione Departamento");
  } else {
    sistema.agregarCenso(nuevoCenso);
    alert("Datos ingresados correctamente");
    mostrarDivPrincipal("buscardorCedulaInvitado");
  }
}

  //VER CON PROFESOR COMO REEMPLAZAR
function modificarDatos() {
  let nombreCenso = document.querySelector("#nombre1").value.trim();
  let apellidoCenso = document.querySelector("#apellido1").value.trim();
  let edadCenso = document.querySelector("#edad1").value.trim();
  let cedulaCenso = document.querySelector("#cedula1").value.trim();
  let ocupacionCenso = document.querySelector("#ocupacion1").value.trim();
  let departamentoCenso = document.querySelector("#departamento1").value.trim();
  document.querySelector("#nombre1").value = "";
  document.querySelector("#apellido1").value = "";
  document.querySelector("#edad1").value = "";
  document.querySelector("#cedula1").value = "";
  document.querySelector("#ocupacion1").value = "";
  document.querySelector("#departamento1").value = "";

  let nuevoCenso = new Censo(
    nombreCenso,
    apellidoCenso,
    edadCenso,
    cedulaCenso,
    ocupacionCenso,
    departamentoCenso,
    false
  );
  if (
    nombreCenso.length === 0 ||
    apellidoCenso.length === 0 ||
    edadCenso.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (edadCenso < 0 || edadCenso > 120) {
    alert("La edad tiene que estar entre 0 y 120");
  } else if (ocupacionCenso === "") {
    alert("Seleccione Ocupacion");
  } else if (departamentoCenso === "") {
    alert("Seleccione Departamento");
  } else {
    sistema.modificarCenso(nuevoCenso); // esto cambiarlo por el de modificar usuario en clases
    alert("Datos ingresados correctamente");
    mostrarDivPrincipal("buscardorCedulaInvitado");
  }
}


function regresoApantallaPrincipal(){
  mostrarDivPrincipal("perfilCensista");
}
function ingresarCensoCensista(){
  let nombreCenso = document.querySelector("#nombre10").value.trim();
  let apellidoCenso = document.querySelector("#apellido10").value.trim();
  let edadCenso = document.querySelector("#edad10").value.trim();
  let cedulaCenso = document.querySelector("#cedula10").value.trim();
  let ocupacionCenso = document.querySelector("#ocupacion10").value.trim();
  let departamentoCenso = document.querySelector("#departamento10").value.trim();
  document.querySelector("#nombre10").value = "";
  document.querySelector("#apellido10").value = "";
  document.querySelector("#edad10").value = "";
  document.querySelector("#cedula10").value = "";
  document.querySelector("#ocupacion10").value = "";
  document.querySelector("#departamento10").value = "";

  let nuevoCenso = new Censo(
    nombreCenso,
    apellidoCenso,
    edadCenso,
    cedulaCenso,
    ocupacionCenso,
    departamentoCenso,
    false
  );
  if (
    nombreCenso.length === 0 ||
    apellidoCenso.length === 0 ||
    edadCenso.length === 0 ||
    cedulaCenso.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (edadCenso < 0 || edadCenso > 120) {
    alert("La edad tiene que estar entre 0 y 120");
  } else if (cedulaCenso < 1000000 || edadCenso.length > 99999999) {
    alert("La cedula tiene que ser valida");
  } else if (ocupacionCenso === "") {
    alert("Seleccione Ocupacion");
  } else if (departamentoCenso === "") {
    alert("Seleccione Departamento");
  } else {
    sistema.agregarCenso(nuevoCenso);
    alert("Datos ingresados correctamente");
  }

}
