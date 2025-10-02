function named(firstName: string, lastName: string){
    return ` Olá ${firstName}, seu sobrenome é ${lastName} né?`
}

//const variableFunction = named('Arthur', 'Rocha')   

//console.log(variableFunction)




function isPositive(number: number){
    if (number >= 0){
        return `The number${number} is ${true}`
    }
    return `The number ${number} is ${false}`
}


// const x = isPositive(-10)
// console.log(x)




function predecessor(number: number){
    // if(number >= 0){
        // return `The predecessor of ${number} is ${number -1} `
    // }

    // a gente vê o antecessor de um número, na reta numérica, vemos que a subtração(antecede) sempre pra esquerda. Ou podemos fazer o calculo
    // (-2 - 1 = -3) maenos com menos da mais, e repete o sinal do maior 
    return number - 1
    // return `The successor of ${number} is ${number + 1} `
}

// const y = predecessor(-2)
// console.log(y)





function typeVariable(v: any){
    return `The variable:(${v}) is of type ${typeof v}`
}

// const m = typeVariable("2")
// console.log(m)





function addNumbers(n1:number, n2: number){
    const result = n1 + n2
    if (result < 0){
        return `The result is negative, ${n1} + ${n2} = ${result}` 
    }
    return `The result of ${n1} + ${n2} = ${result}` 
}

// console.log(addNumbers(-20, -10))






function division(y1: number, y2:number){
     
     if (y2 == 0 || y1 == 0){
        return `Error! One of numbers is 0`
     }

    else if( y1 % y2 == 0){
    const calc = y1 / y2
    return `The division ${y1} by ${y2} this ${calc} `
    }

    const calc = y1 / y2
    return `Division decimal result = ${calc}`
}

// console.log(division(13,3))




type Paramenternar = {
    operator: 'sum' | 'sub' | 'div'| 'mult'  
    n1: number,
    n2:number,
}

function calcMat({operator, n1, n2}: Paramenternar) {
    if(operator == 'sum'){
        return `${n1} + ${n2} = ${n1 + n2}`
    }
    if(operator == "sub"){
        return `${n1} - ${n2} = ${n1- n2}`
    }
    if(operator == "mult"){
        return `${n1} x ${n2} = ${n1 * n2}`
    }
    if(operator == "div"){
             if (n2 == 0 || n1 == 0){
        return `Error! One of numbers is 0`
     }

    else if( n1 % n2 == 0){
    const calc = n1 / n2
    return `The division ${n1} by ${n2} this ${calc} `
    }

    const calc = n1 / n2
    return `Division decimal result = ${calc}`
    }
}

// console.log(calcMat({operator: "sum", n1: 2, n2: 3}))




function perimetroQuadrado({ladoQuadrado}: {ladoQuadrado:number}){
    return `The area of quadrado is ${ladoQuadrado * 4}`

}

// console.log(perimetroQuadrado({ladoQuadrado: 4}))



type InformationsFigure = {
    nameQuadrado: string,
    lado: number
}

function figure({nameQuadrado,lado}: InformationsFigure){
    const name = `${nameQuadrado}`
    const perimetro = lado * 4
    const area = lado **2

    return {
        nameFigure: name, //quando a gente tem no return variaveis com o mesmo nome de uma variável da função,
        perimetro,        // o typescript interpreta: perimetro == perimetro, ou seja, automaticamnete ele faz essa
        area              // atribuição do return a variável
    }
}

// console.log(figure({nameQuadrado: "sala de aula 7", lado: 100 }))





type Retangule = {
    comprimento: number,
    largura: number
}

function retanguleInformations({comprimento, largura}: Retangule){
    const area = comprimento * largura
    const perimetro = (comprimento * 2) + (largura * 2)

    return{
        area,
        perimetroRetangulo: perimetro
    }
}

console.log(retanguleInformations({comprimento: 10, largura: 12}))
