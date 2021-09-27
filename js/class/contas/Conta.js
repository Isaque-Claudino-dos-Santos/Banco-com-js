export class Conta {
  #saldo = 0;
  #idCliente;

  get idCliente() {
    return this.#idCliente;
  }

  get saldo() {
    return this.#saldo;
  }

  constructor() {
    this.#saldo = 0;
  }

  sacar(valor) {
    if (this.saldo > 0 && valor > 0) {
      this.saldo -= valor;
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }
}
