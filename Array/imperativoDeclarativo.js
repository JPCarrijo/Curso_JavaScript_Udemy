const alunos = [
  { nome: 'Lucas', nota: 7.9 },
  { nome: 'Maria', nota: 7.7 },
  { nome: 'João', nota: 6.9 },
  { nome: 'Luana', nota: 8.9 },
]

// Imperativo
let total = 0
for(let i = 0; i < alunos.length; i++) {
  total += alunos[i].nota
}

console.log(total / alunos.length);

// Declarativo
const getNota = e => e.nota
const soma = (acum, valor) => acum + valor
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length);