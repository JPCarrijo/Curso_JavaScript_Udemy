function numNegativo(vetor) {
    let negativos = 0

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < 0) {
            negativos++
        }
    } return `${negativos} números negativos.`
}

vetor = [-54,25,-87,-1,54,25,-88,84,36,-96,12,59,79,39,49,-99]
console.log(numNegativo(vetor));