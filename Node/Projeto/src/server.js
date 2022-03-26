const porta = 3001
const express = require('express')
const app = express()
const bancoDados = require('./bancoDados')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
  res.send(bancoDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDados.getProd(req.params.id))
})

app.post('/produtos', (req, res, next) => {
  const produto = bancoDados.salvarProdutos({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)  // Retorna formato JSON
})

app.put('/produtos/:id', (req, res, next) => {
  const produto = bancoDados.salvarProdutos({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto)  // Retorna formato JSON
})

app.delete('/produtos/:id', (req, res, next) => {
  const excluir = bancoDados.excluirProduto(req.params.id)
  res.send(excluir)
})

app.get('/produtos', (req, res, next) => {
  res.send({
    nome: 'Notebook',
    preco: 123.45 }) // Converte para JSON
})

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}.`);
})

// app.get('/produtos', (req, res, next) => {
//   console.log('Middleware 1...');
//   next()
// })


