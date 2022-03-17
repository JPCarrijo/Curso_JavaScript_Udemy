function anuidade(mes, valor) {
    switch (mes) {
        case 1:
            return `Janeiro - valor R$${valor.toFixed(2)}`
        break;
        case 2:
            return `Fevereiro - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 3:
            return `Março - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 4:
            return `Abril - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 5:
            return `Maio - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 6:
            return `Junho - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 7:
            return `Julho - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 8:
            return `Agosto - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 9:
            return `Setembro - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 10:
            return `Outubro - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 11:
            return `Novembro - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        case 12:
            return `Dezembro - valor R$${calculo(mes, valor).toFixed(2)}`
        break;
        default:
            return `Dados Inválidos!`
    }
}

function calculo(mes,valor) {
    return valor * ((1 + 0.05) ** (mes - 1))
}

console.log(anuidade(12, 1500))
console.log(anuidade(8, 1630))
console.log(anuidade(3, 840))
console.log(anuidade(2, 153))