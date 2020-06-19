// ## Importe a biblioteca ##
let rs = require('readline-sync')




// ## Faça o código ##
let mascara = rs.question(console.log('Você está usando mascara para sair de casa (S ou N) \n'))

let lavarMao = rs.question(console.log('Você está lavando as mãos sempre que possível? (S ou N) \n'))

console.log('=========================================================================')

if (mascara == 'S' && lavarMao == 'S')
console.log('Párabens você está seguindo o protocolo de segurança')

else ( mascara == 'N' && lavarMao == 'N')
console.log('Não seja um vacilão, coloque mascara e lave a mão')
