const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas) { 
    if (notas[i] < 7) { // índice onde as notas sao menor que 7
        notasBaixas.push(notas[i]) // adicionará as notas menor que 7 ao array notasBaixas
    }
}
console.log(notasBaixas)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

// Facilitando 
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)