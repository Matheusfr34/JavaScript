//Funcao sem retorno 
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Funcao com retorno 
function soma(a, b = 1){ //b tem o valor padrão 1, caso o parametro de b não seja passado
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))