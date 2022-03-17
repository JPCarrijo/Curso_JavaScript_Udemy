function baskara(ax, bx, c) {
    // Vetor e delta
    let result = []
    let delta = (bx ** 2) - (4 * ax * c)
    // Validação delta
    if(delta < 0) {
        return `Delta Negativo`
    }
    // Variáveis num1 e num2
    let num1 = -bx + Math.sqrt(delta) / 2 * ax
    let num2 = -bx - Math.sqrt(delta) / 2 * ax
    // Inserção no vetor
    result.push(num1)
    result.push(num2)

    return result
}
// Chamada
console.log(baskara(4, 2, -10))