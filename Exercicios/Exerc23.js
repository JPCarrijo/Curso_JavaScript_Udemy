function mediaFinal(cod, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort()

    let mediaFinal = (notas[0] * 3) + (notas[1] * 3) + (notas[2] * 4) / 10

    return `Código do Aluno: ${cod} - Notas: ${nota1}, ${nota2} e ${nota3} => ${mediaFinal < 5 ? "Aprovado" : "Reprovado"}`
}
console.log(mediaFinal(25, 9, 5, 7));
console.log(mediaFinal(12, 7.5, 2, 0));