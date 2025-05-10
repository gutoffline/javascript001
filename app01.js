// Boas práticas
// Case sensitive
// Sintaxe básica e comentário
// Declaração de variáveis(var, let, const)
let nome = "Guto" 
let idade = 38

// Console e Debug
console.log(nome)
console.log(idade)
nome = "Renata"
idade = "25"
console.log(nome, idade)

//Tipos de dados
// text == string
let cidade = "americana"

//numérico == number
let salario = 1500

//boleano == boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof salario)
console.log(typeof fumante)

// Operadores
//     Operador Atribuição ( = )
//     Operadores aritméticos (+, -, /, *, %)
console.log(10+15)
let n1 = 10
let n2 = 5
console.log(n1+n2) // soma
console.log(n1-n2) // subtração
console.log(n1/n2) // divisão
console.log(n1*n2) // multiplicação
console.log(n1%3) // módulo (resto da divisão)

//     Operadores relacionais (> , < , >= , <= , != , ==)
console.log(n1 == n2) // igualdade
console.log(n1 != n2) // diferente
console.log(n1 > n2) // maior
console.log(10 < 10) // menor
console.log(10 <= 10) // menor igual
console.log(150 >= 175) // maior igual

//     Operadores lógicos (! , && , || )
console.log(!10>2) // não - inverte o resultado, se for verdadeiro muda pra falso, se for falso muda pra verdadeiro
console.log(!false)

console.log(10>2 && 35<100 && n1>n2 && 100<90) // E - todas as verificações precisam ser verdadeiras para o resultado ser verdadeiro

console.log(10<2 || 100==150 || 57==57) // OU - apenas uma verificação precisa ser verdadeira para o resultado ser verdadeiro, o resultado só será falso quando TODAS as verificações forem falsas

//DESAFIO
let preco = 100
let precoAcrescimo = 0
let precoDesconto = 0
//faça um código que acrescente 17% ao preço e imprima
precoAcrescimo = preco + (preco * 0.17)
console.log("Preço com acréscimo: " + precoAcrescimo.toFixed(2))
//faça um código que desconte 7% do preço e imprima
precoDesconto = preco - preco * 0.07
console.log("Preço com desconto: " + precoDesconto.toFixed(2))




// Estrutura
//     Estrutura de controle/decisão
if(10>100){
    console.log("10 é maior que 5")
}else{
    console.log("10 é menor que 100")
}

let idadeDoCandidado = 17
if(idadeDoCandidado >= 18){
    console.log("pode dirigir")
}else{
    console.log("volte mais tarde")
}

let salarioFunc = 3000
// DESAFIO
// faça um código que verifique se o salário do funcionário é maior que 5000, se for mostre a mensagem "salário OK" se não mostre a mensagem "Precisa de um aumento de X reais" 
if(salarioFunc > 5000){
    console.log("Salário OK")
}else{
    console.log("Precisa de um aumento de " + (5000 - salarioFunc) +" reais")
}

//     Laços de repetição
// quero mostrar 10 vezes a mensagem "Senac Americana"
let controle = 1
while(controle <= 10){
    console.log("Senac Americana")
    controle = controle + 1
}

controle = 1 // definição da variavel de controle
while(controle <= 100){ // condição
    console.log(controle)
    controle = controle + 2 // incremento
}

// mostrar 10 vezes "Senac Americana"
for(let i=1; i<=10; i=i+1){
    console.log("Senac Americana")
}

for(let i=1; i<=50; i=i+1){
    console.log(i)
}

// Arrays --> vetor
let alunos = ["João", "Paulo", "Renata", "Cris", "X"]
console.log(alunos)
console.log(alunos[2])
alunos[4] = "Kleber"
console.log(alunos)
alunos.push("Karem")
console.log(alunos)

let frutas = []
console.log(frutas)
frutas.push("🍓")
frutas.push("🍉")
frutas.push("🍐")
frutas.push("🍕")


// Funções básicas
function soma(num1, num2){
    let total = num1 + num2
    console.log("O resultado é " + total)
}

soma(100 , 14)
soma(7 , 3)


// Escopo


// Alterar conteúdo e atributos *
// incluir js em página html *
// Eventos *
// DOM *
// Objeto
// parâmetros e retorno*

// Programação assíncrona***
// API Fetch ***

// JSON ****
// funções modernas (arrow functions) ****


// Spread e REST  ************
