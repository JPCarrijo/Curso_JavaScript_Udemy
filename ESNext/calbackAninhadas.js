// sem promise...
const http = require('http')

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  http.get(url, res => {
    let result = ''

    res.on('data', dados => {
      result += dados
    })

    res.on('end', () => {
      callback(JSON.parse(result))
    })
  })
}

let nomes = []
getTurma('A', meninos => {
  nomes = nomes.concat(meninos.map(a => `A: ${a.nome}`))
  console.log(nomes);

  getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    console.log(nomes);

    getTurma('C', alunos => {
      nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
      console.log(nomes);
    })
  })
})