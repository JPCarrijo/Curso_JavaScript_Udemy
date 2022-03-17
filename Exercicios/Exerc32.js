

function mediaAritmetica(vetor) {
    let soma = 0
    let resultado

    for(let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
        
    }
    resultado = soma / vetor.length
    
    return `A média aritmética é ${resultado}` 
}


let vetor = [5,8,45,98,12,11,74,10,96,58,32,63,36,67]

vetor2 = [2,2,2]

console.log(mediaAritmetica(vetor2))