// o This em javascript serve para referenciar um objeto ou atributo de um objeto
const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

// bind serve para fixar o objeto no this

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

