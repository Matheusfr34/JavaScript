//Armazenando uma função em uma variável 
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável 
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//Retorno implícito 
const subtracao = (a, b) => a - b //Essa função executa uma única linha de código e sem as {}, assim subentende que deve retornar o valor
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) //Apenas um parametro 
imprimir2('Legal!')