function confereSenha() {
    const senha = document.querySelector('input[name=senha]');
    const comfirmar = document.querySelector('input[name=comfirmar]');

        if (comfirmar.value === senha.value) {
            comfirmar.setCustomValidity('');
        } else {
            comfirmar.setCustomValidity('As Senhas não Conferem');
        }
}

confereSenha();