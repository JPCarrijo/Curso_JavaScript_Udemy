function compost(cap, tax, temp) {
    return cap * ((1 + tax) ** temp)
}

function simple(cap, tax, temp) {
    return cap * (1 + (tax * temp))
}

console.log(compost(5000, 0.1, 5).toFixed(2));

console.log(simple(5000, 0.1, 5).toFixed(2));
