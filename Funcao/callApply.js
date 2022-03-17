function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco());

console.log(produto.getPreco());

const carro = {preco: 49900, desc: 0.2}

console.log(getPreco.call(carro));

console.log(getPreco.apply(produto));

console.log(getPreco.apply(global, [0.17, '$']));