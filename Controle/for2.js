const notas = [6.8, 7.8, 9.8, 2.3, 5.8, 1.9]

for(let i in notas) {
    console.log(`Notas: ${notas[i]}`);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}


for(let i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`);
}
