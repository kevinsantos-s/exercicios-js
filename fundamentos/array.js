const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // imprime índice 0 e índice 3
console.log(valores[4]) // não existe índice 4 (indefinido)

valores [4] = 10 // adiciona o índice 4 com valor 10
console.log(valores)
console.log(valores.length) // quantos elementos temos no array

valores.push({id: 3}, false, null, 'teste') // adiciona várias coisas no array
console.log(valores)

console.log(valores.pop()) // retira o ultimo elemento do array
delete valores[0] // deleta primeiro elemento do array
console.log(valores)

console.log(typeof valores)