function soBoaNotcia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNotcia(8.1)
soBoaNotcia(6.5)


function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade ...' + valor);
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})
seForVerdadeEuFalo([1,2])