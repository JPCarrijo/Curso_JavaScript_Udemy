const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()
//console.log(pilotos);

pilotos.push('Verstapen')
//console.log(pilotos);

pilotos.shift()
//console.log(pilotos);

pilotos.unshift('Hamilton')
//console.log(pilotos);

// splice pode adicionar e remover

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

//pilotos.splice(3, 1)
//console.log(pilotos);

//const alPilotos = pilotos.slice(2)
//console.log(alPilotos);


const alPilotos02 = pilotos.slice(3, 5)
console.log(alPilotos02);