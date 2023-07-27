function mostrarSenha() {
    var inputPass = document.getElementById('senha');
    var btnShowPass = document.getElementById('btn-senha');

    if (inputPass.type === 'password'){
        inputPass.setAttribute('type', 'text');
        btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        inputPass.setAttribute('type', 'password');
        btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}


function exibirOcultarMostrarSenha() {
    const inputSenha = document.getElementById('senha');
    const mostrarSenha = document.getElementById('mostrar-senha');
    
    inputSenha.addEventListener('input', function() {
        if (inputSenha.value !== '') {
            mostrarSenha.classList.remove('oculta');
            mostrarSenha.classList.add('fixada');
        } else {
            mostrarSenha.classList.remove('fixada');
            mostrarSenha.classList.add('oculta');
        }
    });
}

exibirOcultarMostrarSenha();

