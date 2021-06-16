// par nome/valor
const saudacao = `Olá!`  // contexto léxico 1

function exerc() {
    const saudacao = `Faaalaaa` // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {}
    cliente.nome = `Pedro`
    cliente.idade = 32
    cliente.peso = 90
    cliente.endereço = {}
        cliente.endereço.logradouro = `Rua Muito Legal`
        cliente.endereço.numero = 123
    
    console.log(saudacao)
    console.log(exerc())
    console.log(cliente)