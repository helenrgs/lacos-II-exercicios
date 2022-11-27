// # Exercício 2

// Crie um programa que peça um input de número para o usuário. 
//Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

const arr = [1,2,3,4,5,6,7,8,9,10]
const tabuada = (numero) => {
    numero = Number(prompt("Digite um número"))
    // for (let i of arr) {
    //     console.log(numero*i)
    for(let i in arr){
       let c = Number(i) + 1
        console.log(numero*c)
    }
}

tabuada()