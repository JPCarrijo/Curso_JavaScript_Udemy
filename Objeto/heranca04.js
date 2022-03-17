function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj01 = new MeuObjeto
const obj02 = new MeuObjeto

console.log(obj01.__proto__ === obj02.__proto__);
console.log(MeuObjeto.prototype === obj01.__proto__);

MeuObjeto.prototype.nome = 'Antonio'
MeuObjeto.prototype.falar = function() {
  console.log(`Olá meu nome é ${this.nome}`);
}

obj01.nome = 'Lucas'
obj01.falar()

const obj03 = {}
obj03.__proto__ = MeuObjeto.prototype
obj03.nome = 'Obj03'
obj03.falar()



