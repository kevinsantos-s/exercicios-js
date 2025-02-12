const fabricantes = ["Intel", "Ryzen", "Xeon"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
// para cada fabricante ele dirá o índice e o nome 
fabricantes.forEach(imprimir)

// só passará o nome
fabricantes.forEach(fabricante => console.log(fabricante))

