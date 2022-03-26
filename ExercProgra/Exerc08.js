const multiplicar = (n1, n2) => {
  let result = 0

  for(let i = 0; i < n2; i++) {
    result += n1
  }

  return result
}

const multiplicar2 = (n1, mult) => {
  if(n1 === 0 || mult === 0) return 0

  return mult === 1 ? n1 : n1 + multiplicar2(n1, mult - 1)
}

console.log(multiplicar2(3,8));