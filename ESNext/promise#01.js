let a = 1
console.log(a);

let p = new Promise((cumprirPromessa) => cumprirPromessa(['Ana', 'João', 'Maria']))

const nome = (valor) => valor[1]

const letra = (valor) => valor[0]

const letraMinuscula = (valor) => valor[0].toLowerCase()

// p
//   .then(valor => valor[0])
//   .then(primeiro => primeiro[0])
//   .then(letra => letra.toLowerCase())
//   .then(primeiro => console.log(primeiro))

  p
  .then(nome)
  .then(letra)
  .then(letraMinuscula)
  .then(console.log)