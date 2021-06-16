function getInteiroEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

do {
    opcao = getInteiroEntre(-1, 10)
    console.log(`Opção escolhida: ${opcao}`);
} while(opcao != -1)

console.log(`Até a próxima..!`);