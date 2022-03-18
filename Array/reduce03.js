Array.prototype.reduce2 = function(callback, inicial) {
  let indice = inicial ? 0 : 1
  let acumu = inicial || this[0]
  for(let i = indice; i < this.length; i++) {
    acumu = callback(acumu, this[i], i, this)
  } return acumu
}
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce2((tot, val) => tot + val, 10));

// const alunos = [
//   {nome: 'João', nota: 7.5, bolsista: false},
//   {nome: 'Carlos', nota: 8.3, bolsista: true},
//   {nome: 'Ana', nota: 6.8, bolsista: true},
//   {nome: 'Maria', nota: 8.7, bolsista: false},
//   {nome: 'José', nota: 9.5, bolsista: true},
// ]

// // Desafio 1: Todos os alunos são bolsistas?

// console.log(alunos.map(e => e.bolsista).reduce((acum, atual) => acum && atual));

// // Desafio 2: Algum aluno é bolsista?

// console.log(alunos.map(e => e.bolsista).reduce2((acum, atual) => acum || atual));