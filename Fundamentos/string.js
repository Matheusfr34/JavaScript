/*
 * Exercício para praticar o tipo string em JavaScript 
 */

const nome = "Matheus"

console.log(nome.charAt(1)) //O método charAt retorna o caractere na posição que foi passada 
console.log(nome.charCodeAt(1)) //O método charCodeAt retorna o valor do caracter na tabela ASCII
console.log(nome.indexOf('t')) //Retorna a posição que o caracter se encontra na string

console.log(nome.substring(1)) //Passa como parâmetro onde será o início da string
console.log(nome.substring(0, 3)) //Passa como parâmetro onde será o início da string e vai até a pos. anterior do fim (inicio, fim)

console.log('Nome: '.concat(nome).concat(" Filipe")) //O método concat é utilizado para concatenar strings
console.log('Nome: ' + nome + ' Filipe') //Outra forma de concatenar com o operador +
console.log(nome.replace('a', 'f')) //Método replace substitui a ocorrência de um determinado caracter pela outra

console.log('Ana, Pedro, João'.split(','))