// criando uma pessoa através de uma classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// criando uma pessoa através de uma factory
const criarPessoa = nome => {
    return { 
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Carlos')
p2.falar()