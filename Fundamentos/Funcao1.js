//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(5,7)
imprimirSoma(2)
imprimirSoma(2,4,5,6,3)

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,5))
console.log(soma(2))
console.log(soma())

