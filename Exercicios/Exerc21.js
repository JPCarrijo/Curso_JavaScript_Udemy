function convenio(idade) {
    if(idade < 10) {
        return `Valor: R$100,00 + adicional de R$80,00 - Total R$180,00`
    } else if(idade <= 30) {
        return `Valor: R$100,00 + adicional de R$50,00 - Total R$150,00`
    } else if(idade <= 60) {
        return `Valor: R$100,00 + adicional de R$95,00 - Total R$195,00`
    } else return `Valor: R$100,00 + adicional de R$130,00 - Total R$230,00`
}

console.log(convenio(59));
console.log(convenio(18));
console.log(convenio(35));
console.log(convenio(89));