const formulario = document.querySelector("form");
const Inome = document.querySelector("#nome");
const Isenha = document.querySelector("#senha");

 function cadastrar() {
     fetch("https:localhost:0888/cadastro", 
     {
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         method: "POST",
         body: JSON.stringify({
             nome: Inome.value,
             senha: Isenha.value,     
         })
     })
     .then(function (res) {console.log(res) })
     .catch(function (res) {console.log(res) })
};

function limpar() {
     Inome.value = "";
     Isenha.value = "";
}

formulario.addEventListener('submit', function (event) {
     event.preventDefault();

     console.log(Inome.value);

      cadastrar();
      limpar();
});