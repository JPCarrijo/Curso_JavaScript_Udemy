const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Ricardo',
    nota: 8.9
  }, {
    nome: 'Aline',
    nota: 7.7
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Ana',
    nota: 7.1
  }, {
    nome: 'João',
    nota: 9.5
  }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNotaAluno)

const nota01 = escola.map(getNotaTurma)
console.log([].concat([ 8.9, 7.7 ], [ 7.1, 9.5 ]));

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2);

