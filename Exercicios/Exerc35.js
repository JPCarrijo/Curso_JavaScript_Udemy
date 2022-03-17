function adiciona(vet1, vet2) {

    for(let i = 0; i < vet1.length; i++) {
        console.log(vet1[i]);
        vet2.unshift(vet1[i])
    }
    console.log(`Vetor normal = ${vet1}`);
    console.log(`vetor Adicionado = ${vet2}`);
}

vetorPilha = [1,2,3,4,5]
vetorAdiciona = [6,7,8,9,10]

//console.log(adiciona(vetorPilha, vetorAdiciona));
adiciona(vetorPilha, vetorAdiciona)