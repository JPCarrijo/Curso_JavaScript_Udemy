const [a] = [10]
console.log(a)

console.log('.................');

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

console.log('.................');

const [, [, nota]] = [[, 3, 8], [, 6, 3]]
console.log(nota)