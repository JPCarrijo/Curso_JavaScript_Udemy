//const { reject } = require("lodash");

const gerarValor = (min, max, numeroProibido) => {
  if(min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if(numeroProibido.includes(aleatorio)) reject(`Número repetido!!!`);
    else resolve(aleatorio);
  })
}

const gerarMegaSena  = async (qtdNumeros) => {
  const numeros = [];
  for(let _ of Array(qtdNumeros).fill()) {
    numeros.push(await gerarValor(1, 60, numeros));
  }
  return numeros;
}

gerarMegaSena(6)
  .then(console.log)
  .catch(console.log);

// gerarValor(10, 50)
//   .then(num => num * 10)
//   .then(numX10 => `O número gerado foi ${numX10}`)
//   .then(console.log)
