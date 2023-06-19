window.addEventListener("load", inicio);

function inicio() {
  document.querySelector("#btnIngreso").addEventListener("click", login);
  document.querySelector("#btnRegistrarse").addEventListener("click", registro);
  mostrarDivPrincipal("ingreso");
  document.querySelector("#btnInvitado").addEventListener("click", invitado);
  document.querySelector("#volverLogin").addEventListener("click", volverLogin);
  document
    .querySelector("#btnBuscarCed")
    .addEventListener("click", buscadorCedula);
  document
    .querySelector("#btnIngresoDatos")
    .addEventListener("click", ingresoDatosNuevoInvitado);
  document
    .querySelector("#volverInvitado")
    .addEventListener("click", volverInvitado);
  document.querySelector("#btnDatosForm").addEventListener("click", datosCenso);
  document
    .querySelector("#btnVisualizarInforEstad")
    .addEventListener("click", infoEstadisticaCensista);
  document.querySelector("#btnLogout").addEventListener("click", cerrarSesion);

  document
    .querySelector("#btnModificarForm")
    .addEventListener("click", modificarDatos);
  document
    .querySelector("#btnEliminarForm")
    .addEventListener("click", eliminarDatos);
  document
    .querySelector("#btnCensarPersona")
    .addEventListener("click", datosNuevoCensoCensista);
  document
    .querySelector("#btnNuevoCenso")
    .addEventListener("click", ingresarCensoCensista);
  document
    .querySelector("#btnRegresar")
    .addEventListener("click", regresoApantallaPrincipal);
  document
    .querySelector("#btnRegresarDesdeInfo")
    .addEventListener("click", regresoApantallaCensista);
  document
    .querySelector("#btnBuscarPorCed")
    .addEventListener("click", buscarPorCedulaCensista);
  document
    .querySelector("#btnRegreso")
    .addEventListener("click", regresoCensista);
  document
    .querySelector("#verInfoDelDpto")
    .addEventListener("click", infoPorDepartamento);
  document
    .querySelector("#ocultarInfoDelDpto")
    .addEventListener("click", ocultarInfoPorDepartamento);
  document
    .querySelector("#mostrarInforme")
    .addEventListener("click", mostrarInforme);
  document
    .querySelector("#ocultarInforme")
    .addEventListener("click", ocultarInforme);
  document
    .querySelector("#btnCensosPreCompletados")
    .addEventListener("click", muestraPreCensos);
  document
    .querySelector("#btnModificar")
    .addEventListener("click", modificarPreCenso);
  document
    .querySelector("#btnValidarForm")
    .addEventListener("click", validarCenso);
  document
    .querySelector("#btnReasignar")
    .addEventListener("click", reasignarCenso);
  document
    .querySelector("#btnReasignarCompletado")
    .addEventListener("click", reasignarCensista);
  document
    .querySelector("#btnModificarFormCensista")
    .addEventListener("click", modificarDatosBuscados);
}

let sistema = new Sistema();

function infoPorDepartamento() {
  let departamento = document.querySelector("#infoDelDepartamento").value;
  let cantDepartamentoMayores = (
    (sistema.contarMayores(departamento) /
      sistema.contarCensados(departamento)) *
    100
  ).toFixed(2);
  let cantDepartamentoMenores = (
    (sistema.contarMenores(departamento) /
      sistema.contarCensados(departamento)) *
    100
  ).toFixed(2);
  if (sistema.contarCensados(departamento) === 0) {
    alert("No hay censados para el departamento seleccionado");
  } else {
    let tabla = `<table border="1px">
  <thead id="tablaPorDepartamento">
    <tr>
      <th>Departamento</th>
      <th>Porcentaje de Personas Mayores de Edad</th>
      <th>Porcentaje de Personas Menores de Edad</th>
    </tr>
    <tr>
      <td>${departamento}</td>
      <td id="cantMontevideoMayores">${cantDepartamentoMayores}</td>
      <td id="cantMontevideoMenores">${cantDepartamentoMenores}</td>
    </tr>
  </thead>
</table>`;
    document.querySelector("#tablaMenoresMayores").innerHTML = tabla;
    mostrarDiv("tablaMenoresMayores");
  }
}

function ocultarInfoPorDepartamento() {
  ocultarDiv("tablaMenoresMayores");
}

function mostrarInforme() {
  let montevideo = "Montevideo";
  let montevideoTrabajan =
    sistema.contarIndependiente(montevideo) +
    sistema.contarDependiente(montevideo);
  let montevideoEstudiante = sistema.contarEstudiante(montevideo);
  let montevideoNoTrabajan = sistema.contarNoTrabajan(montevideo);
  let totalMontevideo = (
    (sistema.contarDepartamento(montevideo) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianMontevideo1").innerHTML =
    montevideoEstudiante;
  document.querySelector("#cantNoTrabajanMontevideo1").innerHTML =
    montevideoNoTrabajan;
  document.querySelector("#cantTrabajanMontevideo1").innerHTML =
    montevideoTrabajan;
  document.querySelector("#cantMontevideo1").innerHTML = totalMontevideo;

  let canelones = "Canelones";
  let canelonesTrabajan =
    sistema.contarIndependiente(canelones) +
    sistema.contarDependiente(canelones);
  let canelonesEstudiante = sistema.contarEstudiante(canelones);
  let canelonesNoTrabajan = sistema.contarNoTrabajan(canelones);
  let totalCanelones = (
    (sistema.contarDepartamento(canelones) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianCanelones1").innerHTML =
    canelonesEstudiante;
  document.querySelector("#cantNoTrabajanCanelones1").innerHTML =
    canelonesNoTrabajan;
  document.querySelector("#cantTrabajanCanelones1").innerHTML =
    canelonesTrabajan;
  document.querySelector("#cantCanelones1").innerHTML = totalCanelones;

  let maldonado = "Maldonado";
  let maldonadoTrabajan =
    sistema.contarIndependiente(maldonado) +
    sistema.contarDependiente(maldonado);
  let maldonadoEstudiante = sistema.contarEstudiante(maldonado);
  let maldonadoNoTrabajan = sistema.contarNoTrabajan(maldonado);
  let totalMaldonado = (
    (sistema.contarDepartamento(maldonado) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianMaldonado1").innerHTML =
    maldonadoEstudiante;
  document.querySelector("#cantNoTrabajanMaldonado1").innerHTML =
    maldonadoNoTrabajan;
  document.querySelector("#cantTrabajanMaldonado1").innerHTML =
    maldonadoTrabajan;
  document.querySelector("#cantMaldonado1").innerHTML = totalMaldonado;

  let CerroLargo = "CerroLargo1";
  let CerroLargoTrabajan =
    sistema.contarIndependiente(CerroLargo) +
    sistema.contarDependiente(CerroLargo);
  let CerroLargoEstudiante = sistema.contarEstudiante(canelones);
  let CerroLargoNoTrabajan = sistema.contarNoTrabajan(canelones);
  let totalCerroLargo = (
    (sistema.contarDepartamento(CerroLargo) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianCerroLargo1").innerHTML =
    CerroLargoEstudiante;
  document.querySelector("#cantNoTrabajanCerroLargo1").innerHTML =
    CerroLargoNoTrabajan;
  document.querySelector("#cantTrabajanCerroLargo1").innerHTML =
    CerroLargoTrabajan;
  document.querySelector("#cantCerroLargo1").innerHTML = totalCerroLargo;

  let flores = "Flores";
  let floresTrabajan =
    sistema.contarIndependiente(flores) +
    sistema.contarDependiente(flores);
  let floresEstudiante = sistema.contarEstudiante(flores);
  let floresNoTrabajan = sistema.contarNoTrabajan(flores);
  let totalFlores = (
    (sistema.contarDepartamento(flores) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianFlores1").innerHTML =
    floresEstudiante;
  document.querySelector("#cantNoTrabajanFlores1").innerHTML =
    floresNoTrabajan;
  document.querySelector("#cantTrabajanFlores1").innerHTML =
    floresTrabajan;
  document.querySelector("#cantFlores1").innerHTML = totalFlores;

  let florida = "Florida";
  let floridaTrabajan =
    sistema.contarIndependiente(florida) +
    sistema.contarDependiente(florida);
  let floridaEstudiante = sistema.contarEstudiante(florida);
  let floridaNoTrabajan = sistema.contarNoTrabajan(florida);
  let totalFlorida = (
    (sistema.contarDepartamento(florida) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianFlorida1").innerHTML =
    floridaEstudiante;
  document.querySelector("#cantNoTrabajanFlorida1").innerHTML =
    floridaNoTrabajan;
  document.querySelector("#cantTrabajanFlorida1").innerHTML =
    floridaTrabajan;
  document.querySelector("#cantFlorida1").innerHTML = totalFlorida;

  let salto = "Salto";
  let saltoTrabajan =
    sistema.contarIndependiente(salto) +
    sistema.contarDependiente(salto);
  let saltoEstudiante = sistema.contarEstudiante(salto);
  let saltoNoTrabajan = sistema.contarNoTrabajan(salto);
  let totalSalto = (
    (sistema.contarDepartamento(salto) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianSalto1").innerHTML =
    saltoEstudiante;
  document.querySelector("#cantNoTrabajanSalto1").innerHTML =
    saltoNoTrabajan;
  document.querySelector("#cantTrabajanSalto1").innerHTML =
    saltoTrabajan;
  document.querySelector("#cantSalto1").innerHTML = totalSalto;

  let paysandu = "Paysandu";
  let paysanduTrabajan =
    sistema.contarIndependiente(paysandu) +
    sistema.contarDependiente(paysandu);
  let paysanduEstudiante = sistema.contarEstudiante(paysandu);
  let paysanduNoTrabajan = sistema.contarNoTrabajan(paysandu);
  let totalPaysandu = (
    (sistema.contarDepartamento(paysandu) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianPaysandu1").innerHTML =
    paysanduEstudiante;
  document.querySelector("#cantNoTrabajanPaysandu1").innerHTML =
    paysanduNoTrabajan;
  document.querySelector("#cantTrabajanPaysandu1").innerHTML =
    paysanduTrabajan;
  document.querySelector("#cantPaysandu1").innerHTML = totalPaysandu;

  let rocha = "Rocha";
  let rochaTrabajan =
    sistema.contarIndependiente(rocha) +
    sistema.contarDependiente(rocha);
  let rochaEstudiante = sistema.contarEstudiante(rocha);
  let rochaNoTrabajan = sistema.contarNoTrabajan(rocha);
  let totalRocha = (
    (sistema.contarDepartamento(rocha) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianRocha1").innerHTML =
    rochaEstudiante;
  document.querySelector("#cantNoTrabajanRocha1").innerHTML =
    rochaNoTrabajan;
  document.querySelector("#cantTrabajanRocha1").innerHTML =
    rochaTrabajan;
  document.querySelector("#cantRocha1").innerHTML = totalRocha;

  let treintayTres = "TreintayTres";
  let treintayTresTrabajan =
    sistema.contarIndependiente(treintayTres) +
    sistema.contarDependiente(treintayTres);
  let treintayTresEstudiante = sistema.contarEstudiante(treintayTres);
  let treintayTresNoTrabajan = sistema.contarNoTrabajan(treintayTres);
  let totalTreintayTres = (
    (sistema.contarDepartamento(treintayTres) / sistema.censos.length) *
    100
  ).toFixed(2);

  document.querySelector("#cantEstudianTreintayTres1").innerHTML =
    treintayTresEstudiante;
  document.querySelector("#cantNoTrabajanTreintayTres1").innerHTML =
    treintayTresNoTrabajan;
  document.querySelector("#cantTrabajanTreintayTres1").innerHTML =
    treintayTresTrabajan;
  document.querySelector("#cantTreintayTres1").innerHTML = totalTreintayTres;

  let artigas = "Artigas";
let artigasTrabajan =
  sistema.contarIndependiente(artigas) + sistema.contarDependiente(artigas);
let artigasEstudiante = sistema.contarEstudiante(artigas);
let artigasNoTrabajan = sistema.contarNoTrabajan(artigas);
let totalArtigas = (
  (sistema.contarDepartamento(artigas) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianArtigas1").innerHTML = artigasEstudiante;
document.querySelector("#cantNoTrabajanArtigas1").innerHTML = artigasNoTrabajan;
document.querySelector("#cantTrabajanArtigas1").innerHTML = artigasTrabajan;
document.querySelector("#cantArtigas1").innerHTML = totalArtigas;

let colonia = "Colonia";
let coloniaTrabajan =
  sistema.contarIndependiente(colonia) + sistema.contarDependiente(colonia);
let coloniaEstudiante = sistema.contarEstudiante(colonia);
let coloniaNoTrabajan = sistema.contarNoTrabajan(colonia);
let totalColonia = (
  (sistema.contarDepartamento(colonia) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianColonia1").innerHTML = coloniaEstudiante;
document.querySelector("#cantNoTrabajanColonia1").innerHTML = coloniaNoTrabajan;
document.querySelector("#cantTrabajanColonia1").innerHTML = coloniaTrabajan;
document.querySelector("#cantColonia1").innerHTML = totalColonia;

let durazno = "Durazno";
let duraznoTrabajan =
  sistema.contarIndependiente(durazno) + sistema.contarDependiente(durazno);
let duraznoEstudiante = sistema.contarEstudiante(durazno);
let duraznoNoTrabajan = sistema.contarNoTrabajan(durazno);
let totalDurazno = (
  (sistema.contarDepartamento(durazno) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianDurazno1").innerHTML = duraznoEstudiante;
document.querySelector("#cantNoTrabajanDurazno1").innerHTML = duraznoNoTrabajan;
document.querySelector("#cantTrabajanDurazno1").innerHTML = duraznoTrabajan;
document.querySelector("#cantDurazno1").innerHTML = totalDurazno;

let lavalleja = "Lavalleja";
let lavallejaTrabajan =
  sistema.contarIndependiente(lavalleja) + sistema.contarDependiente(lavalleja);
let lavallejaEstudiante = sistema.contarEstudiante(lavalleja);
let lavallejaNoTrabajan = sistema.contarNoTrabajan(lavalleja);
let totalLavalleja = (
  (sistema.contarDepartamento(lavalleja) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianLavalleja1").innerHTML =
  lavallejaEstudiante;
document.querySelector("#cantNoTrabajanLavalleja1").innerHTML =
  lavallejaNoTrabajan;
document.querySelector("#cantTrabajanLavalleja1").innerHTML = lavallejaTrabajan;
document.querySelector("#cantLavalleja1").innerHTML = totalLavalleja;

let rionegro = "Rio Negro";
let rioNegroTrabajan =
  sistema.contarIndependiente(rionegro) + sistema.contarDependiente(rionegro);
let rioNegroEstudiante = sistema.contarEstudiante(rionegro);
let rioNegroNoTrabajan = sistema.contarNoTrabajan(rionegro);
let totalRioNegro = (
  (sistema.contarDepartamento(rionegro) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianRioNegro1").innerHTML = rioNegroEstudiante;
document.querySelector("#cantNoTrabajanRioNegro1").innerHTML =
  rioNegroNoTrabajan;
document.querySelector("#cantTrabajanRioNegro1").innerHTML = rioNegroTrabajan;
document.querySelector("#cantRioNegro1").innerHTML = totalRioNegro;

let rivera = "Rivera";
let riveraTrabajan =
  sistema.contarIndependiente(rivera) + sistema.contarDependiente(rivera);
let riveraEstudiante = sistema.contarEstudiante(rivera);
let riveraNoTrabajan = sistema.contarNoTrabajan(rivera);
let totalRivera = (
  (sistema.contarDepartamento(rivera) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianRivera1").innerHTML = riveraEstudiante;
document.querySelector("#cantNoTrabajanRivera1").innerHTML = riveraNoTrabajan;
document.querySelector("#cantTrabajanRivera1").innerHTML = riveraTrabajan;
document.querySelector("#cantRivera1").innerHTML = totalRivera;

let sanJose = "San Jose";
let sanJoseTrabajan =
  sistema.contarIndependiente(sanJose) + sistema.contarDependiente(sanJose);
let sanJoseEstudiante = sistema.contarEstudiante(sanJose);
let sanJoseNoTrabajan = sistema.contarNoTrabajan(sanJose);
let totalSanJose = (
  (sistema.contarDepartamento(sanJose) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianSanJose1").innerHTML = sanJoseEstudiante;
document.querySelector("#canNoTrabajanSanJose1").innerHTML = sanJoseNoTrabajan;
document.querySelector("#cantTrabajanSanJose1").innerHTML = sanJoseTrabajan;
document.querySelector("#cantSanJose1").innerHTML = totalSanJose;

let soriano = "Soriano";
let sorianoTrabajan =
  sistema.contarIndependiente(soriano) + sistema.contarDependiente(soriano);
let sorianoEstudiante = sistema.contarEstudiante(soriano);
let sorianoNoTrabajan = sistema.contarNoTrabajan(soriano);
let totalSoriano = (
  (sistema.contarDepartamento(soriano) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianSoriano1").innerHTML = sorianoEstudiante;
document.querySelector("#cantNoTrabajanSoriano1").innerHTML = sorianoNoTrabajan;
document.querySelector("#cantTrabajanSoriano1").innerHTML = sorianoTrabajan;
document.querySelector("#cantSoriano1").innerHTML = totalSoriano;

let tacuarembo = "Tacuarembo";
let tacuaremboTrabajan =
  sistema.contarIndependiente(tacuarembo) +
  sistema.contarDependiente(tacuarembo);
let tacuaremboEstudiante = sistema.contarEstudiante(tacuarembo);
let tacuaremboNoTrabajan = sistema.contarNoTrabajan(tacuarembo);
let totalTacuarembo = (
  (sistema.contarDepartamento(tacuarembo) / sistema.censos.length) *
  100
).toFixed(2);

document.querySelector("#cantEstudianTacuarembo1").innerHTML =
  tacuaremboEstudiante;
document.querySelector("#cantNoTrabajanTacuarembo1").innerHTML =
  tacuaremboNoTrabajan;
document.querySelector("#cantTrabajanTacuarembo1").innerHTML =
  tacuaremboTrabajan;
document.querySelector("#cantTacuarembo1").innerHTML = totalTacuarembo;

  //HAY QUE COPIAR PARA CADA DEPARTAMENTO EJEMPLO: DESDE LA LINE 141 LET CANELONES HASTA LA LINE 159 QUE TERMINA EN =TOTALCANELONES, COPIAR Y PEGAR Y CAMBIAR LOS CANELONES POR MALDONADOS RESPETANDO LAS MAYUSCULAS Y MINUSCULAS POR LOS IDS.

  mostrarDiv("tablaReporte");
}

function ocultarInforme() {
  ocultarDiv("tablaReporte");
}

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
function volverLogin() {
  mostrarDivPrincipal("ingreso");
}
function datosNuevoCensoCensista() {
  mostrarDivPrincipal("ingresoDatosCensista");
}

function registro() {
  nombreRegistro = document.querySelector("#nombreRegistro").value.trim();
  nombreUsuario = document.querySelector("#nombreUsuario").value.trim();
  contraseñaRegistro = document.querySelector("#contraRegistro").value.trim();
  let idCensista = sistema.usuarios.length + 1;

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
      contraseñaRegistro,
      idCensista
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
  ocultarDiv("tablaReporte");
}

function volverInvitado() {
  mostrarDivPrincipal("buscardorCedulaInvitado");
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
      "Para esta cedula no se han ingresado datos previos, debera ir al boton de ingresar Datos.";
  } else if (buscar.validado === true) {
    document.querySelector("#cedulabuscada").innerHTML =
      "La cedula ya fue validada por un censista, no se podran modificar los datos.";
  } else {
    document.querySelector("#cedulabuscada").innerHTML = "";
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

function buscarPorCedulaCensista() {
  let cedula = Number(document.querySelector("#buscarPorCedula").value);
  let buscar = sistema.buscarCedula(cedula);
  let validado = "";
  if(sistema.cedulaExiste(cedula) === true){
    if (sistema.buscarCedula(cedula).validado === false) {
      mostrarDivPrincipal("modificarDatosCensista");
      validado = "El censo no esta validado";
      document.querySelector("#nombre101").value =
        sistema.buscarCedula(cedula).nombre;
      document.querySelector("#apellido101").value =
        sistema.buscarCedula(cedula).apellido;
      document.querySelector("#edad101").value =
        sistema.buscarCedula(cedula).edad;
      document.querySelector("#cedula101").value =
        sistema.buscarCedula(cedula).cedula;
      document.querySelector("#cedula101").disabled = true;
      document.querySelector("#ocupacion101").value =
        sistema.buscarCedula(cedula).ocupacion;
      document.querySelector("#departamento101").value =
        sistema.buscarCedula(cedula).departamento;
      document.querySelector("#pValidado").innerHTML = validado;
      
    } else {
    alert('El censo ya fue validado');
  }
}
else{
    alert("La cedula ingresada no tiene censo asociado");
  }
}

function regresoCensista() {
  mostrarDivPrincipal("perfilCensista");
  ocultarDiv("ingresoDatosCensista");
}

function infoEstadisticaCensista() {
  document.querySelector("#totalPersonasCensadas").innerHTML =
    "El total de personas censadas es: " + sistema.contarCensadosTotales();
  let porcentaje = (
    ((sistema.censos.length - sistema.contarCensadosTotales()) /
      sistema.censos.length) *
    100
  ).toFixed(2);
  document.querySelector("#porcentajePendientesValidados").innerHTML =
    "El porcentaje de personas pendientes de validar sus datos respecto al total de personas es: " +
    porcentaje +
    "%";

  mostrarDivPrincipal("mostrarTabla");
  let montevideo = "Montevideo";
  document.querySelector("#cantMontevideo").innerHTML =
    sistema.contarCensados(montevideo);
  let canelones = "Canelones";
  document.querySelector("#cantCanelones").innerHTML =
    sistema.contarCensados(canelones);
  let maldonado = "Maldonado";
  document.querySelector("#cantMaldonado").innerHTML =
    sistema.contarCensados(maldonado);
  let cerroLargo = "Cerro Largo";
  document.querySelector("#cantCerroLargo").innerHTML =
    sistema.contarCensados(cerroLargo);
  let flores = "Flores";
  document.querySelector("#cantFlores").innerHTML =
    sistema.contarCensados(flores);
  let florida = "Florida";
  document.querySelector("#cantFlorida").innerHTML =
    sistema.contarCensados(florida);
  let salto = "Salto";
  document.querySelector("#cantSalto").innerHTML =
    sistema.contarCensados(salto);
  let paysandu = "Paysandu";
  document.querySelector("#cantPaysandu").innerHTML =
    sistema.contarCensados(paysandu);
  let rocha = "Rocha";
  document.querySelector("#cantRocha").innerHTML =
    sistema.contarCensados(rocha);
  let artigas = "Artigas";
  document.querySelector("#cantArtigas").innerHTML =
    sistema.contarCensados(artigas);
  let colonia = "Colonia";
  document.querySelector("#cantColonia").innerHTML =
    sistema.contarCensados(colonia);
  let durazno = "Durazno";
  document.querySelector("#cantDurazno").innerHTML =
    sistema.contarCensados(durazno);
  let lavalleja = "Lavalleja";
  document.querySelector("#cantLavalleja").innerHTML =
    sistema.contarCensados(lavalleja);
  let RioNegro = "Rio Negro";
  document.querySelector("#cantRioNegro").innerHTML =
    sistema.contarCensados(RioNegro);
  let rivera = "Rivera";
  document.querySelector("#cantRivera").innerHTML =
    sistema.contarCensados(rivera);
  let sanJose = "San Jose";
  document.querySelector("#cantSanJose").innerHTML =
    sistema.contarCensados(sanJose);
  let soriano = "Soriano";
  document.querySelector("#cantSoriano").innerHTML =
    sistema.contarCensados(soriano);
  let tacuarembo = "Tacuarembo";
  document.querySelector("#cantTacuarembo").innerHTML =
    sistema.contarCensados(tacuarembo);
  let treintayTres = "Treinta y Tres";
  document.querySelector("#cantTreintayTres").innerHTML =
    sistema.contarCensados(treintayTres);
}

//ACA VA VALIDADOR DE CEDULA
function datosCenso() {
  let nombreCenso = document.querySelector("#nombre").value.trim();
  let apellidoCenso = document.querySelector("#apellido").value.trim();
  let edadCenso = document.querySelector("#edad").value.trim();
  let cedulaCenso = document.querySelector("#cedula").value.trim();
  let cedulaValidada = Number(sistema.cedulaValida(cedulaCenso));
  let cedulaValidarDigito = sistema.cedulaValida(cedulaCenso);
  let ocupacionCenso = document.querySelector("#ocupacion").value.trim();
  let departamentoCenso = document.querySelector("#departamento").value.trim();
  let totalCensistas = sistema.usuarios.length;
  let idCenso = Math.floor(Math.random() * totalCensistas + 1);

  let multiplicador = "2987634";
  let digitoVerificar = cedulaValidarDigito.charAt(
    cedulaValidarDigito.length - 1
  );
  let acumulador = 0;
  for (let i = 0; i < cedulaValidarDigito.length - 1; i++) {
    acumulador +=
      Number(cedulaValidarDigito.charAt(i)) * Number(multiplicador.charAt(i));
  }
  let digitoVerificador = 10 - (acumulador % 10);

  let nuevoCenso = new Censo(
    nombreCenso,
    apellidoCenso,
    edadCenso,
    cedulaValidada,
    departamentoCenso,
    ocupacionCenso,
    false,
    idCenso
  );
  if (
    nombreCenso.length === 0 ||
    apellidoCenso.length === 0 ||
    edadCenso.length === 0 ||
    cedulaCenso.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (edadCenso < 0 || edadCenso > 130) {
    alert("La edad tiene que estar entre 0 y 130");
  } else if (digitoVerificar != digitoVerificador) {
    alert("Cedula Invalida");
  } else if (sistema.cedulaExiste(cedulaValidada) === true) {
    alert("Cedula ya fue censada");
  } else if (ocupacionCenso === "") {
    alert("Seleccione Ocupacion");
  } else if (departamentoCenso === "") {
    alert("Seleccione Departamento");
  } else {
    sistema.agregarCenso(nuevoCenso);
    alert("Datos ingresados correctamente");
    document.querySelector("#formIngresoDeDatos").reset(); //Esta funcion borra los datos del form
    mostrarDivPrincipal("buscardorCedulaInvitado");
  }
}

function modificarDatos() {
  let nombreCenso = document.querySelector("#nombre1").value.trim();
  let apellidoCenso = document.querySelector("#apellido1").value.trim();
  let edadCenso = document.querySelector("#edad1").value.trim();
  let cedulaCenso = Number(document.querySelector("#cedula1").value);

  let ocupacionCenso = document.querySelector("#ocupacion1").value.trim();
  let departamentoCenso = document.querySelector("#departamento1").value.trim();

  let censo = sistema.buscarCedula(cedulaCenso);

  if (
    nombreCenso.length === 0 ||
    apellidoCenso.length === 0 ||
    edadCenso.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (edadCenso < 0 || edadCenso > 130) {
    alert("La edad tiene que estar entre 0 y 130");
  } else if (ocupacionCenso === "") {
    alert("Seleccione Ocupacion");
  } else if (departamentoCenso === "") {
    alert("Seleccione Departamento");
  } else {
    sistema.modificarCenso(
      nombreCenso,
      apellidoCenso,
      edadCenso,
      cedulaCenso,
      departamentoCenso,
      ocupacionCenso
    );
    alert("modificaste tus datos");
    ocultarDiv("modificarDeDatos");
  }
}

function eliminarDatos() {
  let cedulaCenso = Number(document.querySelector("#cedula1").value);
  sistema.eliminarPersona(cedulaCenso);
  alert("Sus datos para el censo fueron eliminados");
  ocultarDiv("modificarDeDatos");
}

function modificarDatosBuscados() {
  let nombreCenso = document.querySelector("#nombre101").value.trim();
  let apellidoCenso = document.querySelector("#apellido101").value.trim();
  let edadCenso = document.querySelector("#edad101").value.trim();
  let cedulaCenso = Number(document.querySelector("#cedula101").value);

  let ocupacionCenso = document.querySelector("#ocupacion101").value.trim();
  let departamentoCenso = document
    .querySelector("#departamento101")
    .value.trim();

  let censo = sistema.buscarCedula(cedulaCenso);

  if (
    nombreCenso.length === 0 ||
    apellidoCenso.length === 0 ||
    edadCenso.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (edadCenso < 0 || edadCenso > 130) {
    alert("La edad tiene que estar entre 0 y 130");
  } else if (ocupacionCenso === "") {
    alert("Seleccione Ocupacion");
  } else if (departamentoCenso === "") {
    alert("Seleccione Departamento");
  } else {
    sistema.modificarCenso(
      nombreCenso,
      apellidoCenso,
      edadCenso,
      cedulaCenso,
      departamentoCenso,
      ocupacionCenso,
      true
    );
    alert("modificaste y validaste el censo");
    ocultarDiv("modificarDatosCensista");
    mostrarDiv("perfilCensista");
  }
}

function regresoApantallaPrincipal() {
  mostrarDivPrincipal("perfilCensista");
  ocultarDiv("ingresoDatosCensista");
}

function regresoApantallaCensista() {
  mostrarDivPrincipal("perfilCensista");
  ocultarDiv("ingresoDatosCensista");
}

function ingresarCensoCensista() {
  let nombreCenso = document.querySelector("#nombre10").value.trim();
  let apellidoCenso = document.querySelector("#apellido10").value.trim();
  let edadCenso = document.querySelector("#edad10").value.trim();
  let cedulaCenso = document.querySelector("#cedula10").value.trim();
  let cedulaValidada = Number(sistema.cedulaValida(cedulaCenso));
  let cedulaValidarDigito = sistema.cedulaValida(cedulaCenso);
  let ocupacionCenso = document.querySelector("#ocupacion10").value.trim();
  let departamentoCenso = document
    .querySelector("#departamento10")
    .value.trim();
  
  let idCenso = sistema.usuarioLogueado.id;
  console.log(idCenso);
  let multiplicador = "2987634";
  let digitoVerificar = cedulaValidarDigito.charAt(
    cedulaValidarDigito.length - 1
  );
  let acumulador = 0;
  for (let i = 0; i < cedulaValidarDigito.length - 1; i++) {
    acumulador +=
      Number(cedulaValidarDigito.charAt(i)) * Number(multiplicador.charAt(i));
  }
  let digitoVerificador = 10 - (acumulador % 10);

  let nuevoCenso = new Censo(
    nombreCenso,
    apellidoCenso,
    edadCenso,
    cedulaValidada,
    ocupacionCenso,
    departamentoCenso,
    true,
    idCenso
  );
  if (
    nombreCenso.length === 0 ||
    apellidoCenso.length === 0 ||
    edadCenso.length === 0 ||
    cedulaCenso.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (edadCenso < 0 || edadCenso > 130) {
    alert("La edad tiene que estar entre 0 y 130");
  } else if (digitoVerificar != digitoVerificador) {
    alert("Cedula Invalida");
  } else if (sistema.cedulaExiste(cedulaValidada) === true) {
    alert("Cedula ya fue censada");
  } else if (ocupacionCenso === "") {
    alert("Seleccione Ocupacion");
  } else if (departamentoCenso === "") {
    alert("Seleccione Departamento");
  } else {
    sistema.agregarCenso(nuevoCenso);
    alert("Datos ingresados correctamente");
    document.querySelector("#formIngresoDatosCensista").reset();
  }
}

function muestraPreCensos() {
  let idCensista = sistema.usuarioLogueado.id;
  let arrayCensos = sistema.buscarId(idCensista);
  let select = "";
  for (let i = 0; i < arrayCensos.length; i++) {
    let nombre = arrayCensos[i].nombre;
    let cedula = arrayCensos[i].cedula;
    let validado = arrayCensos[i].validado;
    if (validado == false) {
      select += `<option value="${cedula}">${nombre}-${cedula}</option>`;
    }
  }
  mostrarDiv("idCensos");

  document.querySelector("#selectCensos").innerHTML = select;
}

function modificarPreCenso() {
  let valueSelect = Number(document.querySelector("#selectCensos").value);
  mostrarDiv("validarDatos");
  let buscar = sistema.buscarCedula(valueSelect);
  if (buscar === null) {
    document.querySelector("#cedulabuscada").innerHTML =
      "La cedula no esta censada";
  } else {
    mostrarDiv("validarDatos");
    document.querySelector("#nombre2").value =
      sistema.buscarCedula(valueSelect).nombre;
    document.querySelector("#apellido2").value =
      sistema.buscarCedula(valueSelect).apellido;
    document.querySelector("#edad2").value =
      sistema.buscarCedula(valueSelect).edad;
    document.querySelector("#cedula2").value =
      sistema.buscarCedula(valueSelect).cedula;
    document.querySelector("#cedula2").disabled = true;
    document.querySelector("#ocupacion2").value =
      sistema.buscarCedula(valueSelect).ocupacion;
    document.querySelector("#departamento2").value =
      sistema.buscarCedula(valueSelect).departamento;
  }
}

function validarCenso() {
  let nombreCenso = document.querySelector("#nombre2").value.trim();
  let apellidoCenso = document.querySelector("#apellido2").value.trim();
  let edadCenso = document.querySelector("#edad2").value.trim();
  let cedulaCenso = Number(document.querySelector("#cedula2").value);

  let ocupacionCenso = document.querySelector("#ocupacion2").value.trim();
  let departamentoCenso = document.querySelector("#departamento2").value.trim();

  let censo = sistema.buscarCedula(cedulaCenso);

  if (
    nombreCenso.length === 0 ||
    apellidoCenso.length === 0 ||
    edadCenso.length === 0
  ) {
    alert("Todos los campos son obligatorios");
  } else if (edadCenso < 0 || edadCenso > 130) {
    alert("La edad tiene que estar entre 0 y 130");
  } else if (ocupacionCenso === "") {
    alert("Seleccione Ocupacion");
  } else if (departamentoCenso === "") {
    alert("Seleccione Departamento");
  } else {
    sistema.modificarCenso(
      nombreCenso,
      apellidoCenso,
      edadCenso,
      cedulaCenso,
      departamentoCenso,
      ocupacionCenso,
      true
    );
    alert("Validaste el Censo");
    ocultarDiv("validarDatos");
    muestraPreCensos();
  }
}

function reasignarCenso() {
  let idCensista = sistema.usuarioLogueado.id;
  let arrayCensistas = sistema.listaCensista(idCensista);

  let select = "";
  for (let i = 0; i < arrayCensistas.length; i++) {
    let nombre = arrayCensistas[i].nombre;
    let id = arrayCensistas[i].id;
    select += `<option value="${id}">${nombre}-${id}</option>`;
  }
  mostrarDiv("listaCensistas");

  document.querySelector("#selectCensistas").innerHTML = select;
}

function reasignarCensista() {
  let censoNuevo = Number(document.querySelector("#selectCensos").value);
  let censistaNuevo = Number(document.querySelector("#selectCensistas").value);

  sistema.modificarId(censoNuevo, censistaNuevo);
  alert("Reasignaste el censo");

  ocultarDiv("listaCensistas");
  muestraPreCensos();
}
