// Forma literal
const obj1 = {}
//console.log(obj1);

// Objetc em JS
//console.log(typeof Object, typeof new Object);
const obj2 = new Object
//console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desconto) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return 'O preço do produto ' + nome +  ' é ' + preco * (1 - desconto)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2354.25, 0.25)

//console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Ana', 11400, 1);
const f2 = criarFuncionario('Joao', 7980, 4);

//console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

// Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info);