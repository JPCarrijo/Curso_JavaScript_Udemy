function salario(plano,valor) {
    switch (plano) {
        case "A":
            return valor + (valor * 0.1)
        break;
        case "B":
            return valor + (valor *  0.15)
        break;
        case "C":
            return valor + (valor * 0.20)
        break;
        default:
            return `Plano Inválido!`
    }
}

console.log(salario("A", 1500));
console.log(salario("B", 1500));
console.log(salario("C", 1500));
console.log(salario("d", 1500));
