function semana(dia) {
    switch (dia) {
        case 1:
        case 7:
            return `Fim de Semana`;
        break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return `Dia Útil`;
        break;
        default:
            return `Dia Inválido!`
    }
}

console.log(semana(2));
console.log(semana(12));
console.log(semana(1));
console.log(semana(12));