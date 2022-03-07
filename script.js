// -------------------- STRICT MODE --------------------

"use strict"

const ola = () => {
    let nome = 'Lucas'
    console.log(`Olá ${nome}`)
}
ola()

// delete window.document

// function soma(a, a, c) {
//     return a + a + c
// }
// console.log(soma(1, 3, 2))

// -------------------- HOISTING --------------------

// var a = 2
// console.log(a)
// function teste() {
//     console.log(a)
//     var a = 3
//     console.log(a)
// }
// teste()

// function getValor() {
//     function retornaValor() {
//         return 1
//     }
//     return retornaValor()
//     function retornaValor() {
//         return 2
//     }
// }
// console.log(getValor())

// function getValor() {
//     var retornaValor = function() {
//         return 1
//     }
//     return retornaValor
//     var retornaValor = function() {
//         return 2
//     }
// }
// console.log(getValor())

// -------------------- var, let, const --------------------

// var nome = "olá"
// {
//     var nome = "adeus"
//     console.log(nome)
// }
// console.log(nome)

// -------------------- for, forEach, for.. of --------------------

// let array = [10, 20, 30, 40, 50]

// for (let i = 0; i < array.length; i++) {
//     console.log(`Indice ${i} e valor ${array[i]}`)
// }

// console.log("--------------------------------")

// array.forEach((numero, i) => {
//     console.log(`Indice ${i} e valor ${numero}`)
// })

// console.log("--------------------------------")

// for (const numero of array) {
//     console.log(numero)
// }
