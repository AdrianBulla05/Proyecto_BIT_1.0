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