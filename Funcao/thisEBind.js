const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar

console.log('******************************');

falar()   // Conflito entre paradigmas: funcional e OO

console.log('******************************');

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()

console.log('******************************');

const falar2 = pessoa.falar

falar2()