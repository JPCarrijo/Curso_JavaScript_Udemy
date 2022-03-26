const sequence = {
  _id: 1,
  get id() { return this._id++}
}

const produtos = {}

const salvarProdutos = prod => {
  if(!prod.id) prod.id = sequence.id
  produtos[prod.id] = prod
  return prod
}

const getProd = id => produtos[id] || {}

const getProdutos = () => Object.values(produtos)

const excluirProduto = id => {
  const prod = produtos[id]
  delete produtos[id]
  return prod
}

module.exports = {
  salvarProdutos,
  getProd,
  getProdutos,
  excluirProduto
}