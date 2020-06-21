// ## Importe a biblioteca ##
let rs = require('readline-sync')


// ## Faça o código ##
let nome = rs.question(console.log('Olá, qual é o seu nome?\n'))
let texto = rs.question('Digite um texto \n')
console.log(nome + ' ' + 'Seu texto possui' + ' ' + texto.length + ' ' + 'caracteres')
 