/*
 * Exercício para praticar o template String
 */

const nome = 'Matheus'
const concatenacao = 'Olá ' + nome + '!'

//Para usar o template string, usa-se o símbolo da crase `
const template = `
Olá ${nome}!` //O trecho ${} que aparece em strings template literals em JavaScript é chamado de interpolação de expressão

console.log(concatenacao, template)

//Pode usar com expressões também
console.log(`1 + 1 = ${1 + 1}`)

//Função para transformar a palavra em todas as letras maiúsculas 
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)
