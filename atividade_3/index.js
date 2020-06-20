// ## Importe a biblioteca ##
let rs = require('readline-sync')


// ## Faça o código ##
let tamanho = rs.question('Qual o tamanho dos lados do quadrado? \n')
let area =  tamanho * tamanho

console.log ('O área do seu quadrado é ' + area + 'cm')