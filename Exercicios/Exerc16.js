function calcular(num1, oper, num2) {
    switch (oper) {
        case "*":
            return num1 * num2
        break;
        case "+":
            return num1 + num2
        break;
        case "/":
            return num1 / num2
        break;
        case "-":
            return num1 - num2
        break;
        default:
            return `Operador Inválido!`
    } 
}

console.log(calcular(50, "+", 30));
console.log(calcular(50, "-", 80));
console.log(calcular(50, "/", 30));
console.log(calcular(50, "*", 30));
console.log(calcular(50, "x", 30));