// ## Importe a biblioteca ##
let rs = require('readline-sync')


// ## Faça o código ##
let mes = rs.question ('Mes \n')
let  dia = rs.question('Dia \n')

if (mes == 1){
    if (dia <= 20){
        console.log('Seu signo é: Capricornio')
    }
    else {
        console.log('Seu signo é: Aquario')

    }
}else if (mes == 2){
    if( dia <=18){
    console.log('Seu signo é: aquário')
    } 
    else {
        console.log('Seu signo é: Peixes')
    }
  
} else if (mes == 3){
    if (dia <= 19)
    console.log('Seu signo é: Peixes')
        else {
            console.log('Seu signo é: Aries')
        }

} else if (mes == 4){
    if (dia <=20)
    console.log('Seu signo é: Aries')
    else {
        console.log('Seu signo é: Touro')
    }
} else if(mes == 5){
    if (dia <=21)
    console.log('Seu signo é: Touro')
    else{
        console.log('Seu signo é: Gêmeos')
    }
} else if (mes == 6){
    if (dia <=21)
    console.log('Seu signo é: Gêmeos')

    else{
        console.log('Seu signo é: Câncer')
    }
    
} else if (mes == 7){
    if (dia <= 22)
    console.log('Seu signo é: Câncer')

    else {
        console.log('Seu signo é: Leão')
    }
} else if (mes == 8){
    if (dia <=22)
    console.log('Seu signo é: Leão')

    else {
        console.log('Seu signo é: Virgem')
    }
} else if (mes == 9){
    if (dia <=23)
    console.log('Seu signo é: virgem')

    else{
        console.log('Seu signo é: Libra')
    }
 
} else if (mes == 10){
    if (dia <= 22)
    console.log ('Seu signo é: Libra')

    else{
        console.log('Seu signo é: Escorpião')
    }

} else if (mes == 11){
    if (dia <= 21)
    console.log('Seu signo é: Escorpião')

    else{
        console.log ('Seu signo é: Capricornio')
    }
}