for(let letra in 'Cod3r') {
  //console.log(letra);
}

// For in -> percorre o termo dado e retorna os índices
// For of -> percorre o termo dado e retorna os valores

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma) {
  //console.log(i); // Retornou as chaves do array
}

for(let ass of assuntosEcma) {
  //console.log(ass);  // Retornou os valores do array
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: true }]
])

for(let assunto of assuntosMap) {
  //console.log(chave);
}

for(let chave of assuntosMap.keys()) {
  //console.log(chave);
}

for(let valor of assuntosMap.values()) {
  //console.log(valor);
}

for(let [ch, vl] of assuntosMap.entries()) {
  //console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
  console.log(letra);
}
