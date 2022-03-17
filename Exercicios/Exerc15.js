function revenda(tipo) {
    switch (tipo) {
        case "Hatch":
            return `Compra efetuada com sucesso!`
        break;
        case "Sedan":
        case "Motocicleta":
        case "Caminhonete":
            return `Tem certeza que prefere este modelo?`
        break;
        default:
            return `Não trabalhamos com este tipo de automóvel aqui...`
    }
}

console.log(revenda("Motocicleta"));
console.log(revenda("Pick-Up"));
console.log(revenda("Caminhonete"));
console.log(revenda("Hatch"));
console.log(revenda("Sedan"));