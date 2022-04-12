const gerarValor = (min, max, tempo) => {
  if(min > max) {
    [max, min] = [min, max];
  }

  return new Promise(resolve => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      resolve(aleatorio);
    }, tempo)
  })
}

function gerarNovo() {
  return Promise.all([
    gerarValor(10, 50, 4000),
    gerarValor(10, 50, 500),
    gerarValor(10, 50, 3000),
    gerarValor(10, 50, 1500)
  ])
 
}

console.time('promise');

gerarNovo()
  .then(num => console.log(num))
  .then(() => console.timeEnd('promise'))