const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
 Olá
 ${nome}!`

console.log(concatenacao, template)

// Expressôes
console.log(`1 + 1 = ${1 + 1}`) /* A crase (ou backticks) faz a concatenação ( junção dos argumentos) sem ter que usar o sinal de "+", deixando o código mais estético, e também precisa usar o cifrão de chaves {} e indicar o que se quer fazer ali e fechar com a crase*/

const up = texto => texto.toUpperCase() // transforma em maíuscula
console.log(`Ei... ${up('cuidado')}!`)  // Puxando função para o template string