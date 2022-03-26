function real(partes, ...valores) {
  let result = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2).replace('.', ',')}`
    result.push(partes[indice], valor)
  })
  return result.join('')
}

const preco = 29.9
const precoParcela = 11.
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
