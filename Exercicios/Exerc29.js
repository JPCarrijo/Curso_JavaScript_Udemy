function intervalo(vetNums) {
    let dentInter = 0
    let foraInter = 0

    for(let i = 0; i < vetNums.length; i++) {
        if(vetNums[i] >= 10 && vetNums[i] <= 20) {
            dentInter++
        } else foraInter++
    }
    return `${dentInter} números dentro do intervalo e ${foraInter} fora do intervalo.`
}

vetor = [45, 12, 15, 56, 21, 20, 9, 77, 16, 20, 10]

console.log(intervalo(vetor)); 