const entre = (min, max, num, inclusive = false) => {
  if(inclusive) return num >= min && num <= max

  return num > min && num < max
}

console.log(entre(10,100,50));