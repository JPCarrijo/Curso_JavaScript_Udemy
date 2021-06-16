console.log(soma(3, 4));


// function declaration
function soma(x, y) {               // Pode ser chamada a função antes da declaração.
    return x + y
}

// function expression
const sub = function(x, y) {        // Deve ser declarada a expressão de funcão, só aí pode ser chamada a função.
    return x - y
}

console.log(sub(3, 4));

// named function expression
const mult = function mult(x, y) {  // Deve ser declarada a expressão de funcão, só aí pode ser chamada a função.
    return x * y                    // Uso reduzido de named expression.
}

console.log(mult(3, 4));