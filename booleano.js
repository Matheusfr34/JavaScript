/*
 * Exercício para praticar o tipo booleano em JavaScript 
 */

let isAtivo = true
console.log(isAtivo)

isAtivo = false 
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

//Para esses casos, eles são considerados V
console.log("VERDEIROS")
console.log(!!3) //Para qualquer numero != 0, é verdadeiro 
console.log(!!-1) 
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Para esses casos, eles são considerados F
console.log("FALSOS")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("PARA FINALIZAR")
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')