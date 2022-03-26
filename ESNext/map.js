const tecno = new Map()
tecno.set('react', { framework: false })
tecno.set('angular', { framwork: true })

console.log(tecno.react);
console.log(tecno.get('react').framework);

const chavesV = new Map([
  [function() {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número']
])

chavesV.forEach((valor, chave) => {
  console.log(chave, valor);
});

console.log(chavesV.has({}));
chavesV.delete(123)
console.log(chavesV.has(123));
//console.log(chavesV.has())
//console.log(chavesV.size);

chavesV.set(123, 'a')
chavesV.set(123, 'b')
chavesV.set(456, 'b')
console.log(chavesV);