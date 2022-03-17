function notaAluno(num) {
    let notaCorrigida = analisaNota(num)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else console.log(`Reprovado com nota ${notaCorrigida}`);
}

function analisaNota(num) {
    if (num % 5 > 2) {
        return num + (5 - (num % 5))
    } else return num
}

notaAluno(38)
notaAluno(37)
notaAluno(41)
notaAluno(40)