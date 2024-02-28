var numero = 1 
{ 
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

// Evitar usar Var em escopo global
// Priorize usar Let e Const ao invés de var