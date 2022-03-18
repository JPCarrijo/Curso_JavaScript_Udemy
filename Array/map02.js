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

const result = carrinho.map(obj).map(preco)

console.log(result);