class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa("João")
p1.falar()

const p2 = new Pessoa("Maria")
p2.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = criarPessoa("Paulo")
p3.falar()
