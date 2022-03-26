const moduloA = require('../../moduloA')

console.log(moduloA.ola);

const http = require('http') 
http.createServer((req,res) => {
  res.write('Bom dia! Vamos Acordar Joao Paulo')
  res.end()
}).listen(8080)