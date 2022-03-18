const alunos = [
  {nome: 'João', nota: 7.5},
  {nome: 'Carlos', nota: 8.3},
  {nome: 'Ana', nota: 6.8},
  {nome: 'Maria', nota: 8.7},
  {nome: 'José', nota: 9.5},
]
const resultado = alunos.map(e => e.nota).reduce((acum, atual) => {
  console.log(acum, atual)
  return acum + atual
},2)

console.log(resultado);