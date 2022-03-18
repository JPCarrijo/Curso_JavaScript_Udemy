const aprovados = ['Ana', 'Bianca', 'Augusto', 'Daniel', 'Raquel']

//aprovados.forEach((nome, indice) => console.log(`${indice}) ${nome}`))

//aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprov => console.log(aprov);

aprovados.forEach(exibirAprovados)