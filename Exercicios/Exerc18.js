function numExtenso(num) {
    switch (num) {
        case 0:
            return `Zero`
        break;
        case 1:
            return `Um`
        break;
        case 2:
            return `Dois`
        break;
        case 3:
            return `Três`
        break;
        case 4:
            return `Quatro`
        break;
        case 5:
            return `Cinco`
        break;
        case 6:
            return `Seis`
        break;
        case 7:
            return `Sete`
        break;
        case 8:
            return `Oito`
        break;
        case 9:
            return `Nove`
        break;
        case 10:
            return `Dez`
        break;
        default:
            return `Número Fora do Intervalo...`
    }
}

console.log(numExtenso(0));
console.log(numExtenso(1));
console.log(numExtenso(2));
console.log(numExtenso(3));
console.log(numExtenso(4));
console.log(numExtenso(5));
console.log(numExtenso(6));
console.log(numExtenso(7));
console.log(numExtenso(8));
console.log(numExtenso(9));
console.log(numExtenso(10));
