const repetir = (item, qtd) => {
  let result = []

  for(let i = 0; i < qtd; i++) {
    result.push(item)
  }
  return result
}

console.log(repetir(3,4));