function escolherNota(valorNota) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorSaque = calculaValor(valorNota)
    while (valorNota >= valorSaque) {
        switch (valorSaque) {
            case 100:
                valorNota -= 100
                contador100++
                break
            case 50:
                valorNota -= 50
                contador50++
                break
            case 10:
                valorNota -= 10
                contador10++
                break
            case 5:
                valorNota -= 5
                contador5++
                break
            case 1:
                valorNota -= 1
                contador1++
                break
        }
        valorSaque = calculaValor(valorNota)
    }

    return apresentaResult(contador100, contador50, contador10, contador5, contador1)
}


function calculaValor(valorNota) {
    if (valorNota >= 100) return 100
    else if (valorNota >= 50) return 50
    else if (valorNota >= 10) return 10
    else if (valorNota >= 5) return 5
    else return 1
}

function apresentaResult(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''
    if(contador100 > 0) resultado += `${contador100} nota(s) de R$100,00.`
    if(contador50 > 0) resultado += ` ${contador50} nota(s) de R$50,00.`
    if(contador10 > 0) resultado += ` ${contador10} nota(s) de R$10,00.`
    if(contador5 > 0) resultado += ` ${contador5} nota(s) de R$5,00.`
    if(contador1 > 0) resultado += ` ${contador1} moeda(s) de R$1,00.`

    return resultado
}

console.log(escolherNota(352));
