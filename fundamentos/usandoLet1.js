var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero )

// Let usa escopo por bloco, não busca por fora igual o Var, exceto caso não tenha a variável numero dentro do bloco, ele buscará por fora