console.log(soma(3, 4))
// function declaration
function soma(x, y) {
    return x + y
} // pode ser chamada antes de ser declarada

//function expression
const sub = function (x, y) {
    return x - y 
} 
console.log(sub(3, 4)) // não pode ser chamada antes de declarada

// named function expression 
const mult = function mult(x, y){
    return x * y
} // pouco utilizada e não pode ser chamada antes de declarada