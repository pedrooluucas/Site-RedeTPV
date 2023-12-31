const formulario = document.querySelector("form");
const Inome = document.querySelector("#nome");
const Iemail = document.querySelector("#email");
const Isenha = document.querySelector("#user-senha");
const Icomfirmar = document.querySelector("#user-comfirmar");

function cadastrar() {
    fetch("http://localhost:8080/usuarios", 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            username: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            comfirmar: Icomfirmar.value      
        })
    })
    .then(function (res) {console.log(res) })
    .catch(function (res) {console.log(res) })
};

function limpar() {
    Inome.value = "";
    Iemail.value = "";
    Isenha.value = "";
    Icomfirmar.value = "";
}

formulario.addEventListener('submit', function (event) {
     event.preventDefault();

     cadastrar();
     limpar();
});