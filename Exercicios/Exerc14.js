function varejao(fruta) {
    switch (fruta) {
        case "Maçã":
            return "Não vendemos esta fruta aqui."
        break;
        case "Kiwi":
            return "Estamos com escassez de kiwis."
        break;
        case "Melância":
            return "Aqui está. São R$3,00kg"
        break;
        default:
            return "ERRO - Não vendemos essa fruta"
    }
}


console.log(varejao("Melância"));
console.log(varejao("Maçã"));
console.log(varejao("Melão"));
console.log(varejao("Limão"));
console.log(varejao("Kiwi"));