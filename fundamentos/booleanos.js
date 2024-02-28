let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) // "!" é uma negação, transforma em falso (nesse caso), duas !! volta o valor ao original (true)

console.log('Os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar:')
console.log(!!('' || null || ' '))

let nome = ''
// Caso haja um nome na variável, irá imprimir o nome, caso não haja, irá imprimir "Desconhecido"
console.log(nome || 'Desconhecido')

// Explicação simples
teste = true
console.log(teste) // Simplesmente imprimindo o conteúdo.
console.log(!teste)  // Imprimindo o contrário do conteúdo por usar o ! antes.
console.log(!!teste)  // Imprimindo o contrário do contrário do conteúdo por usar o !! antes.