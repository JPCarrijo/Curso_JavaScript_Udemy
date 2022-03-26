// Não aceita repetição / não indexada
const times = new Set()
times.add('Vasco').add('Palmeiras').add('São Paulo').add('Corinthians').add('Flamengo').add('Vasco').add('Palmeiras')

console.log(times);

console.log(times.size);

console.log(times.has('vasco'));
console.log(times.has('Vasco'));

times.delete('Vasco')
console.log(times);

const nome = ['Raquel', 'Júlia', 'Ana', 'Pedro', 'Ana', 'Pedro']
const nomeSet = new Set(nome)
console.log(nomeSet);

// Não aceita que os elementos se repitam