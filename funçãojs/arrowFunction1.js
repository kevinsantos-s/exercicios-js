let dobro = function (a) {
    return 2 * a
}

// Utilizando arrow function
dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui parâmetro
console.log(ola)