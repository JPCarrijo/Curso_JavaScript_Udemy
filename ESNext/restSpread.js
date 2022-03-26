// Operador ...rest(juntar) / spread(espalhar)
// Usar rest com parâmetro de função


// Usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12349.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone);

// Usar spread com array
const grupoA = [ 'João', 'Pedro', 'Glória' ]
const grupoFinal = ['Rosa', ...grupoA, 'Rubens']
console.log(grupoFinal);