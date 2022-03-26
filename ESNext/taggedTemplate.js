// Tagged Template
function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores);
  return `Outra string`
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`2º console - ${aluno} está ${situacao}!`);