const inputSenha = document.getElementById('login_password') || document.getElementById('register_password') || document.getElementById('register_confirm_password');
const iconeOlho = document.getElementById('login_eye') || document.getElementById('register_eye') || document.getElementById('register_eye_repeat');

const showHidePassword = () =>{
    inputSenha.type === 'password' ? inputSenha.type = 'text' : inputSenha.type = 'password';
    iconeOlho.classList.toggle('ri-eye-off-line');
}

iconeOlho.addEventListener('click', showHidePassword);

