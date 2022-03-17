function lanchonete(cod, qtd) {
    switch (cod) {
        case 100:
            return `Cachorro Quente - ${qtd} x 3,00 = R$${calcular(qtd, 3).toFixed(2).replace(".",",")}`
        break;
        case 200:
            return `Hambúrguer Simples - ${qtd} x 4,00 = R$${calcular(qtd, 4).toFixed(2).replace(".",",")}`
        break;
        case 300:
            return `Cheeseburguer - ${qtd} x 5,50 = R$${calcular(qtd, 5.5).toFixed(2).replace(".",",")}`
        break;
        case 400:
            return `Bauru - ${qtd} x 7,50 = R$${calcular(qtd, 7.5).toFixed(2).replace(".",",")}`
        break;
        case 500:
            return `Refrigerante - ${qtd} x 3,50 = R$${calcular(qtd, 3.5).toFixed(2).replace(".",",")}`
        break;
        case 600:
            return `Suco - ${qtd} x 2,80 = R$${calcular(qtd, 2.8).toFixed(2).replace(".",",")}`
        break;
        default:
            return `Código e/ou Qunatidade Inválida...`
    }
}

function calcular(qtd, valor) {
    return qtd * valor
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 8))
console.log(lanchonete(300, 9))
console.log(lanchonete(400, 4))
console.log(lanchonete(500, 7))
console.log(lanchonete(600, 5))
console.log(lanchonete(700, 2))