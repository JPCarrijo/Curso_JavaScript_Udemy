const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pais = func => func.pais === 'China';
const genero = func => func.genero === 'F';
const salario = (acumulador, funAtual) => { // função REDUCE
  return acumulador.salario < funAtual.salario ? acumulador : funAtual
}

axios.get(url).then(response => {
  const funcionarios = response.data
  console.log(funcionarios);

  // Mulher chinesa com menor salário
  const func = funcionarios
    .filter(pais)
    .filter(genero)
    .reduce(salario)

    console.log(func);
})