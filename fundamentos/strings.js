const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna caractere do índice 4 (primeiro caractere é indice 0)
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) // valor na tabela unicode
console.log(escola.indexOf('3')) // Mostra em qual índice está um caractere

console.log(escola.substring(1)) // Mostra tudo após o índice 1
console.log(escola.substring(0,3)) // Vai do índice 0 até o índice 3 (sem mostrar o 3)

console.log('Escola '.concat(escola).concat("!")) // faz concatenação
console.log('Escola ' + escola + "!") 
console.log(escola.replace(3, 'e')) // Troca o índice 3 por um caractere

console.log('Ana,maria,Pedro'.split(',')) // gera um array e separa por virgula