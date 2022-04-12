
// setTimeout(() => {
//   console.log(`Executando callback...`)

//   setTimeout(() => {
//     console.log(`Executando callback...`)
//   }, 2000)

// }, 2000)

function esperaPor(tempo = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Executando Promise...`)
      resolve()
    }, tempo
  )})
}

esperaPor()
  .then(() => esperaPor())
  .then(esperaPor)