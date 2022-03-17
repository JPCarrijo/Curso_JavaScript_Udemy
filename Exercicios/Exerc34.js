function verificacao(nome1, nome2) {
    let contido = true

    for(let i = 0; i < nome1.length; i++) {
        let contem1 = nome1.charAt(i).toLowerCase()

        for(let j = 0; j < nome2.length; j++) {
            let contem2 = nome2.charAt(j).toLowerCase()

            if(contem1 === contem2) {
                contido = true
                break
            } else contido = false
        }
        //if(!contido) return false
    } return contido
}


console.log(verificacao('abc', 'cba'));

console.log(verificacao('mineiro', 'paulista'));

console.log(verificacao('aclad', 'calca'));