const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.80
}

console.log(prod2)

// APLICANDO ARRAY
const roupas = {
    camisas: [{
        nome: 'Polo Red',
        preco: 89.90
    }, {
        nome: 'Polo Blue',
        preco: 109.90
    }],
    calcas: [{
        nome: 'Calça Flyer',
        preco: 149.90
    }, {
        nome: 'Calça Jeans',
        preco: 179.80
    }]
}
 
console.log(roupas)

// para acessar um específico
console.log(roupas.camisas[0].nome)