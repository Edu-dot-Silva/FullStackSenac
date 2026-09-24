const inputSenha = document.getElementById('login_password');
const iconeOlho = document.getElementById('login_eye');

const showHidePassword = () =>{
    inputSenha.type === 'password' ? inputSenha.type = 'text' : inputSenha.type = 'password';
    iconeOlho.classList.toggle('ri-eye-off-line');
}

iconeOlho.addEventListener('click', showHidePassword);

