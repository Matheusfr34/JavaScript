/*
 * Exercício para praticar o tipo booleano em JavaScript 
 * Arrays em JavaScript é do tipo objeto e é heterogêneo 
 */

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push(false, null, 'teste') //Método para inserir em um array
console.log(valores)

console.log(valores.pop()) //Método para remover o último elemento em um array
delete valores[0] //Deletar um elemento de um array em uma posição específica
console.log(valores)

console.log(typeof valores)