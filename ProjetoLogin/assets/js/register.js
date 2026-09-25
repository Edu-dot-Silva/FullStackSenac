const showHidePassword = (inputId, iconId) => {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    
    if (!input || !icon) 
        return;

    icon.addEventListener('click', () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        icon.classList.toggle('ri-eye-off-line');
    });
}

showHidePassword('register_password', 'register_eye');
showHidePassword('register_confirm_password', 'register_eye_repeat');
showHidePassword('register_confirm_password', 'register_confirm_eye');
