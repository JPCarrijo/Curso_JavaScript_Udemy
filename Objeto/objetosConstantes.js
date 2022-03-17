// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa);

Object.freeze(pessoa)

pessoa.nome = 'Ana'
pessoa.end = 'Av das Gaivotas'
console.log(pessoa);

delete pessoa.nome
console.log(pessoa);