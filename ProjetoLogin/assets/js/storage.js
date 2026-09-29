const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputEmail = document.getElementById('register_email').value.toLowerCase();
    const inputSenha = document.getElementById('register_password').value;
    const inputRepetirSenha = document.getElementById('register_confirm_password').value;

    if (inputSenha === inputRepetirSenha) {
        // alert('Cadastro feito com sucesso!!')
        localStorage.setItem("email", inputEmail)
        localStorage.setItem("senha", inputRepetirSenha)
        window.location.href = "../index.html";        
    } else{
        alert('Senhas não batem, digite novamente!!')
    }
    // alert(inputEmail.value);
    // alert(inputSenha.value);
    // alert(inputRepetirSenha.value);

})

//console.log(formulario);

// function mostraNome(nome, idade) {
//     console.log(nome, idade)
// }
// mostraNome('Eduardo', 26);