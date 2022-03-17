function fatorial(num) {
    let res = 1
    for(let i = num; i > 0; i--) {
        res *= i
    }
    return res
}

console.log(fatorial(10));
console.log(fatorial(0))