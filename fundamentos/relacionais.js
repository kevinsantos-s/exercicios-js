console.log('01)', '1' == 1) // compara se são iguais, ignorando tipo
console.log('02)', '1' === 1) // compara se são literalmente iguais, incluindo qual o tipo do valor

console.log('03)', '3' != 3) // compara se são diferentes, ignorando tipo
console.log('03)', '3' !== 3) // compara se são literalmente diferentes, incluindo tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)

console.log('011)', d1.getTime() === d2)
console.log('12)', undefined == null)
console.log('13)', undefined === null)