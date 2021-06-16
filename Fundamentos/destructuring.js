// NOvo recurso ES2015

const  pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'rua ABC',
        numero: 1000
    }
}



//console.log(pessoa)
console.log('.................');

const { nome, idade } = pessoa
console.log(nome,idade)
console.log('.................');

const { nome: n, idade: i} = pessoa
console.log(n,i)
console.log('.................');

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

console.log('.................');

const {endereço: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

console.log('.................');

const { conta: {ag, num} } = pessoa
console.log(ag, num);


