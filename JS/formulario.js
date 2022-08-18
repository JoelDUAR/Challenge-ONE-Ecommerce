const btnSubmit = document.querySelector('#btn__form__login');
const loginError = document.querySelector('.login__mensaje-error');
const inputs = document.querySelectorAll('.input__form');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#form__email');
    const password = document.querySelector('#form__password');
    if(email.value == "tejidos@alura.com" && password.value == "tejidos1234"){
            window.location.href = '../HTML/administrador.html'
        } else {
            loginError.classList.add('login__invalido');
            input.parentElement.querySelector(".mensaje-error-input").innerHTML = "";
        }
})

const validar = (evento) => {
    const input = evento.target;
    if(!input.validity.validar){
        mostrarMensajeError(input);
    }
}

const mostrarMensajeError = (input) => {
    if(input.validity.valueMissing){
        mensaje = '*Este campo no puede estar vacío';
    }else if(input.validity.typeMismatch){
        input.parentElement.querySelector(".mensaje-error-input").innerHTML = "";
        mensaje = '*El valor ingresado no es válido';
    }
    input.parentElement.querySelector(".mensaje-error-input").innerHTML = mensaje;
}

inputs.forEach(input => input.addEventListener('blur', validar))