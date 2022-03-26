const inverso = (valor) => {
  if(typeof valor === "boolean") return !valor
  else if(typeof valor === "number") return -valor
  else return `Booleano ou Número, mas o parâmetro é do tipo string`
}

console.log(inverso(-100))