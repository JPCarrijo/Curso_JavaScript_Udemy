const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/teste', (request, response) => response.json(new Date()));
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, './upload');
  },
  filename: function (request, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage }).single('arquivo');

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.end('Ocorreu um erro.');
    }
    res.end('Concluido com sucesso.');
  });
});

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: 1,
  })
})

app.get('/parOuImpar', (req, res) => {
  // req.body
  // req.query
  // req.params
  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? 'par' : 'impar'
  })
})

const porta = process.env.PORT || 3000;
app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
