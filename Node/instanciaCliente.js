const contA = require('./instanciaUnica')
const contB = require('./instanciaUnica')

const contC = require('./instanciaNova')()
const contD = require('./instanciaNova')()

contA.inc()
contA.inc()
contB.inc()
console.log(contA.valor, contB.valor);

contC.inc()
contC.inc()
console.log(contC.valor, contD.valor);