const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha01 = Object.create(pai)
filha01.nome = 'Ana'

console.log(filha01.corCabelo);

const filha02 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha02.nome);

filha01.nome = 'Carla';

console.log(`${filha02.nome} tem cabelo ${filha02.corCabelo}`);

console.log(Object.keys(filha01));
console.log(Object.keys(pai));

for (let key in filha02) {
  filha02.hasOwnProperty(key) ?
  console.log(key) :
  console.log(`Por herança ${key}`);;
}