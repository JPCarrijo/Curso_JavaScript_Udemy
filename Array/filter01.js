const produtos = [
  { nome: 'Noteboook', preco: 2499, fragil: true },
  { nome: 'IPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.99, fragil: true },
  { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(p => {
//   return p.preco > 2000 && p.fragil === true
// }));

const caro = c => c.preco > 500;
const fra = f => f.fragil

let result = produtos.filter(caro).filter(fra)
console.log(result);