const calcularSalario = (hrsMes, recebHora) => {
  // return `Salário igual a R$${parseFloat(hrsMes * recebHora * 0.3).toFixed(2).replace('.',',')}.`
  const salarioBruto = hrsMes * recebHora
  const salarioLiquido = salarioBruto - (salarioBruto * (30/100))
  return `Salário líquido é igual a R$${parseFloat(salarioLiquido).toFixed(2).replace('.',',')}`
}

console.log(calcularSalario(180, 60));