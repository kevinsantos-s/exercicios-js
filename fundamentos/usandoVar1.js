{
    {
        {
            { 
                var sera = 'Será???' 
                console.log(sera)
            }
        }
    }
}
// O teste sendo feito é até onde vai o escopo de uma Var
console.log(sera)
// Var consegue ser acessada mesmo fora do bloco

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)  // Var não pode ser acessada por fora quando está em uma função