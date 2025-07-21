//Novo recurso do ES2015
//Destructuring é uma forma de extrair valores de objetos ou arrays e atribuí-los a variáveis de forma mais simples e legível.

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

//No objeto pessoa nao existe esses dois atributos
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)