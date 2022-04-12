function funcionarOuNao(valor, chance) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chance) {
      reject(`Ocorreu um erro!!!`)
    } else {
      resolve(valor);
    }
  })
}

funcionarOuNao(`Testando....`, 0.5)
  .then(valor => console.log(`Valor: ${valor}`))
  .catch(err => console.log(`ERRO: ${err}`))