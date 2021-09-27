import { Sistema } from "./class/sistema/Sistema.js";

Sistema.cadastroCliente("sumaya", "sumaya@gmai.com", 1989, 31231, "F");

Sistema.tabelaCliente.forEach((elem) => {
  document.querySelector("main table tbody").innerHTML += `<tr>
     <td>${elem.id}</td>
     <td>${elem.nome}</td>
     <td>${elem.email}</td>
     <td>${elem.nacimento}</td>
     <td>${elem.senha}</td>
     <td>${elem.sexo}</td> </tr>`;
});
