let pontuacoes = "20, 25, 85, 41, 78, 96, 74, 36, 98, 29"

function comparaPontos(pontuacoes) {
    let pontos = pontuacoes.split(", ")
    let piorJogo = 1
    let qtdQuebraDeRecords = 0
    let maior = pontos[0]
    let menor = pontos[0]
    //console.log(pontos[9]);
    for (let i = 1; i < pontos.length; i++) {
        if (pontos[i] > maior) {
            maior = pontos[i]
            qtdQuebraDeRecords++
        }

        else if(pontos[i] < menor) {
            menor = pontos[i]
            piorJogo = i+1
        }
    }

    return [qtdQuebraDeRecords, piorJogo]
}

console.log(comparaPontos(pontuacoes));
