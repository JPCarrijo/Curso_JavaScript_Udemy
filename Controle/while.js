function getInteiroEntre(min, max) {
    let x = Math.random() * (max - min) + min
    return Math.floor(x)
}

let opcao

while (opcao != -1) {
    opcao = getInteiroEntre(-1, 10)
    console.log(`Opção escolhida: ${opcao}`);
}

console.log(`Até a próxima...`);