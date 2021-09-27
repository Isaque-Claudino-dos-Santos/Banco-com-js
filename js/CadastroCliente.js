import { Sistema } from "./class/sistema/Sistema.js";

let btnSubmint = document.getElementById("btnCadastrar");

function onCadastrarCliente() {
  let nome = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;
  let nacimento = document.querySelector("#nacimento").value;
  let senha = document.querySelector("#senha").value;
  let sexo = document.getElementsByName("sexo");
  let valueSexo;

  sexo.forEach((elem) => {
    if (elem.checked) {
      valueSexo = elem.value;
    }
  });

  Sistema.cadastroCliente(nome, email, nacimento, senha, valueSexo);
}

btnSubmint.addEventListener("click", onCadastrarCliente);
