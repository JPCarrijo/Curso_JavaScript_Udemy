// Função Arrow
const soma = (a, b) => a + b;
console.log(soma(10, 5));

// Arrow function (this)
const lexico = () => console.log(this === exports);
const lexico2 = lexico.bind({})
lexico()
lexico2()

// Parâmetro default
function log(texto = 'Node') {
  console.log(texto);
}

log()
log('Sou mais forte')

// Operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach(n => total += n)
  return total
}

console.log(total(1, 2, 3, 4, 5));