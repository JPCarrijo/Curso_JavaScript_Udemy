const cumprimentar = nome => {
  let saudacao = 'Olá'
  //return console.log(`${saudacao}, ${nome}`.concat('!'))
  return [saudacao, nome].join(', ').concat('!')
}

console.log(cumprimentar("Leonardo")); 