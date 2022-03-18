Array.prototype.map2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  } return newArray
}

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lápis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
]
console.log(carrinho);
// Retornar um array apenas com os preços
const obj = json => JSON.parse(json)
const preco = prod => prod.preco

const result = carrinho.map2(obj).map2(preco)

console.log(result);