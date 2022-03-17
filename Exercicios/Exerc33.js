function concat(vet1, vet2, vet3) {
    let vetorTotal = vet1.concat(vet2, vet3)
    return vetorTotal
}

vetorInteiro = [5,6,7,3]
vetorString = ["laranja","berinjela","maca","uva"]
vetorDouble = [1.54,0.54,8.78,6.89]

console.log(concat(vetorInteiro, vetorString, vetorDouble));