/*const brasil = ['Acre','Alagoas','Amapá','Amazonas','Bahia', 'Ceará','Distrito Federal','Espirito Santo','Goiás','Maranhão', 'Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins']

const estadosBrasil = []

for(let i = 1; i < brasil.length; i++) {
    let obj1 = {id : i, estado: brasil[i]}
    estadosBrasil.push(obj1)
}

console.log(estadosBrasil)
*/

const frutas = ['Maçã', 'Uva', 'Banana', 'Morango', 'Manga']

const frutasM = []

function filtrar(letra) {
    return frutas.filter(b => b.frutas[0]  === letra)
}

console.log(filtrar('M'))