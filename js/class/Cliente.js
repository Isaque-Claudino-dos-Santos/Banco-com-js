export class Cliente {
  static autoIncremento = 1;
  #uuid;
  #nacimento;
  #senha;
  #sexo;

  constructor(nome, email, nacimento, senha, sexo) {
    this.#uuid = Cliente.autoIncremento;
    this.nome = nome;
    this.email = email;
    this.#nacimento = nacimento;
    this.#senha = senha;
    this.#sexo = sexo;
    Cliente.autoIncremento += 1;
  }
}
