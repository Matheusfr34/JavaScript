/*
 * Exercício para praticar o tipo number em JavaScript 
 */

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //O método toFixed fixa a quant. de casas decimais desejada
console.log(media.toString(2)) //Converte para String e em binário
console.log(typeof media) //Pegar o tipo
