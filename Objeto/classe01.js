class Lancamento {
  constructor(nome = 'Generico', valor = 0) {
    this.nome = nome
    this.valor = valor
  }
}

class CicloLancamento {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lancamento = []
  }

  addLancamentos(...lancamento) {
    lancamento.forEach(l => this.lancamento.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamento.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}

const salario = new Lancamento('Salário', 45000)
const contaLuz = new Lancamento('Luz', -200)
const bonus = new Lancamento('Bonificação', 1000)

const contas = new CicloLancamento(6, 2019)
contas.addLancamentos(salario, contaLuz, bonus)

console.log(CicloLancamento);

console.log(contas.sumario());