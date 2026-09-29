const iconeOlho = document.getElementById('login_eye');
const formulario = document.getElementById('formulario_login');
const inputEmail = document.getElementById('login_email');
const inputSenha = document.getElementById('login_password');

const showHidePassword = () =>{
    inputSenha.type === 'password' ? inputSenha.type = 'text' : inputSenha.type = 'password';
    iconeOlho.classList.toggle('ri-eye-off-line');
}
iconeOlho.addEventListener('click', showHidePassword);

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailSalvo = localStorage.getItem("email")
    const senhaSalva = localStorage.getItem("senha")

    if ((inputEmail.value === emailSalvo) && (inputSenha.value === senhaSalva)){
        window.location.href = "pages/home.html";        
    } else{
        alert("Login ou senha incorretos")
    }

})

