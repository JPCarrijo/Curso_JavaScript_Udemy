function valorDecimal(valor) {
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

valorDecimal(0.1 + 0.2)