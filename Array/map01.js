const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(e => e * 3)
console.log(resultado, nums);

const soma = e => e + 10;
const triplo = e => e * 3;
const paraDin = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma).map(triplo).map(paraDin)
console.log(resultado);