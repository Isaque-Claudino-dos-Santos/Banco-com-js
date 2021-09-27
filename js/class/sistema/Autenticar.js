import { Cliente } from "../Cliente.js";
import { Sistema } from "./Sistema.js";

export class Autenticar {
  static cadastroCliente(nome, email, nacimento, senha, sexo) {
    Sistema.tabelaCliente.push(
      new Cliente(nome, email, nacimento, senha, sexo)
    );
  }
}
