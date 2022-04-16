const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/usuarios', (req, res) => {
  console.log(req.body)
  const nome = req.body
  res.send(`<h1>Parabéns! Cadastrado com sucesso!</h1>`)
})

app.post('/usuarios/:id', (req, res) => {
  console.log(req.body)
  console.log(req.params.id);
  res.send(`<h1>Parabéns! Alterado com sucesso!</h1>`)
})

const port = 3003
app.listen(port, (err, resp) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`Servidor rodando na porta ${port}`)
  }
})