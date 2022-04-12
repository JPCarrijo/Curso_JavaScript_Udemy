const { reject } = require("lodash");

function falarDepoisDe(segundos, frases) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve(frases)
  }, segundos * 1000)
 })
}

falarDepoisDe(3, 'Que Legal!')
 .then(frases => frases.concat('?!?!?!?'))
 .then(outrasFrases => console.log(outrasFrases))
 .catch(e => console.log(e))