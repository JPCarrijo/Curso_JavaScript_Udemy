const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// Assincrono...
fs.readFile(caminho, 'utf-8', (err, response) => {
  const config = JSON.parse(response)
  console.log(response);
})

const config = require('./arquivo.json')
console.log(config);

fs.readdir(__dirname, (err, response) => {
  console.log(`Conteúdo da pasta...`);
  console.log(response);
})