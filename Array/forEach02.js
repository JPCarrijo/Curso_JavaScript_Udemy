// Criando um forEach2 através do prototype, fazendo a mesma função do forEach convencional
Array.prototype.forEach2 = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Ana', 'Bianca', 'Augusto', 'Daniel', 'Raquel']

aprovados.forEach2((nome, indice) => console.log(`${indice + 1}) ${nome}`))

