
// setTimeout(() => {
//   console.log(`Executando callback...`)

//   setTimeout(() => {
//     console.log(`Executando callback...`)
//   }, 2000)

// }, 2000)

function esperaPor(tempo = 2000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), tempo
  )})
}

// esperaPor()
//   .then(() => esperaPor())
//   .then(esperaPor)

// esperaPor(2000)
//   .then(() => console.log(`Executando promise 1..`))
//   esperaPor(2000)
//   .then(() => console.log(`Executando promise 2..`))
//   esperaPor(2000)
//   .then(() => console.log(`Executando promise 3..`))

function retornaValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 2000)
  })
}

// retornaValor()
//   .then(valor => console.log(valor))

async function executar() {
  await esperaPor(1500)
  console.log(`Executando async/await 1...`)
  await esperaPor(1500)
  console.log(`Executando async/await 2...`)
  await esperaPor(1500)
  console.log(`Executando async/await 3...`)
}

executar()