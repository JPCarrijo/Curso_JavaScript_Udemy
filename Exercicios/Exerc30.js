function maiorMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i]
        } else if(vetor[i] < menor) {
            menor = vetor[i]
        }
    } return `O maior é o número ${maior} e o menor número é ${menor}`
}

vetor = [23,5,52,59,65,74,12,82,98,35,101,152,201,547,65,82,325]
console.log(maiorMenor(vetor));