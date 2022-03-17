// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Mauro';
produto['marca do produto'] = 'Genérica'
produto.preco = 220

//console.log(produto);

delete produto.preco
delete produto['marca do produto']

//console.log(produto);

const carro =  {
  modelo: 'A4',
  valor: 54000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Junior',
    idade: 29
  }, {
    nome: 'Ana',
    idade: 42
  }],
  calcularValorSeguro: function() {
    //.....
  }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av dos Gigantes'

//delete carro.condutores
delete carro.calcularValorSeguro
delete carro.proprietario.endereco

console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);