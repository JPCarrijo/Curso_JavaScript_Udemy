function parImpar() {
    let impar = 0
    let par = 0
    let nums = [5, 8, 24, 95, 78, 29, 74, 77, 28, 99, 69, 13, 23, 19, 11, 31, 91]

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 === 0) {
            par++
        }else impar++
    } return `${par} números pares e ${impar} números ímpares.`
}

console.log(parImpar())
