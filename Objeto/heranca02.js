// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // Não modifique o Object.prototype
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1, filho.attr2, filho.attr0);

const carro = {
  velAtual: 0,
  velMax: 200,
  acelereMais(diferenca) {
    if(this.velAtual + diferenca <= this.velMax) {
      this.velAtual += diferenca
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}km/h e a máxima é ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324  // shadowing - sobrescreve a velocidade acima
}

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo} - sua velocidade é ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);

ferrari.acelereMais(320)
console.log(ferrari.status());

volvo.acelereMais(191)
console.log(volvo.status());