const diferente = (num1, num2) => {
  if(typeof num1 != typeof num2) return false

  return num1 >= num2
}

console.log(diferente(0,'0'))