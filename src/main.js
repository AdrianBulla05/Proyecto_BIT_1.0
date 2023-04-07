//Declaracion de variables para las funciones de registrar usuario y hacer el login del usuario
let usuarioSave,
  passwordSave,
  correoSave,
  usuario,
  password,
  correo,
  acceso,
  nueva_password;
acceso = false;

//Funcion para  registro de los usuarios a traves de localStorage
function registroUsuario(event) {
  event.preventDefault();
  usuarioSave = document.getElementById("usuarioSave").value;
  correoSave = document.getElementById("correoSave").value;
  passwordSave = document.getElementById("passwordSave").value;
  localStorage.setItem("usuario", usuarioSave);
  localStorage.setItem("correo", correoSave);
  localStorage.setItem("password", passwordSave);
  alert("Usuario creado!!!!");
}

//Funcion para  hacer el login de los usuarios de los usuarios a traves de localStorage
function login() {
  if (acceso === false) {
    usuario = document.getElementById("usuario").value;
    password = document.getElementById("password").value;

    usuarioSave = localStorage.getItem("usuario");
    passwordSave = localStorage.getItem("password");

    if (usuario == usuarioSave && password == passwordSave) {
      acceso = true;
      window.location = "/pages/home.html";
    } else {
      alert("usuario o contraseña errado");
    }
  }
}
/* Función para visualizar la alternancia de los formularios de inicio de sesión o registro */
const $btnSignIn= document.querySelector('.btn-sign-in'), 
$btnSignUp= document.querySelector('.btn-sign-up'),
$signUp= document.querySelector('.sign-up'),
$signIn= document.querySelector('.sign-in')


    document.addEventListener('click', e => {
        if (e.target === $btnSignIn || e.target === $btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active')
        }
    })
