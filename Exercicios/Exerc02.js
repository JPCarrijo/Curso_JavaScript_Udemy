function triangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return `Triângulo Equilátero`
    }

    else if ((ladoA != ladoB) && (ladoB != ladoC) && (ladoA != ladoC)) {
        return `Triângulo Escaleno`
    }

    else if (((ladoA === ladoB) != ladoC) || ((ladoB === ladoC) != ladoA) || ((ladoA === ladoC) != ladoB)) {
        return `Triângulo Isósceles`
    }

    else return `Triângulo não encontrado!`
}

console.log(triangulo(2, 2, 2));

console.log(triangulo(1, 8, 7));

console.log(triangulo(3, 4, 3));

console.log(triangulo(10, 10, 10))