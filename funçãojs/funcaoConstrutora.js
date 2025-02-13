function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// A constante chamada uno recebe todas as informações da função Carro, por meio da instância new Carro. Porém a função Carro continua lá e a constante uno, agora passa a ter a função de Carro dentro dela.

// O new que é utilizado na frente de Carro durante a atribuição é para definir que está sendo criado uma nova instância (uma cópia) da função carro, porém com o nome uno.

//O mesmo vale para a constante ferrari, porém mudam os parâmetros que foram atribuídos durante a instância, ignorando os parâmetros padrão.

// Resumindo: Const uno = new Carro // significa copiar a função Carro e mudar o nome da função de Carro para uno (na cópia).