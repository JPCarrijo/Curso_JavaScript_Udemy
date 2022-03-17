const sequencia = {
  _valor: 1, // _ é uma convenção para desenvolvedores que o atributo valor será usado internamente
  get valor() {return this._valor++},
  set valor(valor) {
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 9000
console.log(sequencia.valor, sequencia.valor);