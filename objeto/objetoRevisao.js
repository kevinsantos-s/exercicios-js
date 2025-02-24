// coleção dinâmica de pares chave/valor
produto = new Object
produto.tipo = 'Comida'
produto.preco = 1.99
produto.marca = 'Doritos'
produto['Nome da comida'] = 'Fandangos'

console.log(produto)
delete produto['Nome da comida']
delete produto.marca
console.log(produto)

const carro = {
    modelo: 'Chevrolet',
    valor: 89000,
    proprietario: {
        nome: 'Mendes',
        idade: 18,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Kevin',
        idade: 18
    }, {
        nome: 'Fernando',
        idade: 19
    }],
    calcularValorSeguro: function() {
        // ...
    }
    
}

console.log(carro)

