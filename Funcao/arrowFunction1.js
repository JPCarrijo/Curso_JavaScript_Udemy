let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a  // Retorno Implícito

console.log(dobro(Math.PI));

console.log('***********************************');

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá!'

console.log(ola())

console.log('***********************************');

ola1 = () => 'Olá'
ola2 = _ => 'Olá!'     // Não possui parâmetros

console.log(ola2());