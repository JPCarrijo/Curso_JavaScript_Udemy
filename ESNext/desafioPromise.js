const fs = require('fs');
const path = require('path');

const dados = path.join(__dirname, 'dados.txt');

function lerArquivo(dados) {
  return new Promise(resolve => {
    fs.readFile(dados, (err, data) => {
      if(err) {
        resolve(err);
      } else {
        resolve(data.toString());
      }
      console.log(`Depois de Ler`);
    })
  })
}

lerArquivo(dados)
  .then(data => data.split('\n'))
  .then(separa => separa.join(','))
  .then(text => `O texto é: ${text}`)
  .then(console.log)