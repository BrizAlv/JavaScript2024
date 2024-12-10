/*
***funciones puras no son alteradas,no tienen efectos secundarios
****funciones impuras son alteradas, tienen efectos secundarios

Efectos secundarios
 1. Modificar  variables globales
 2. Modificar parámetros
 3. Solicitudes HTTP
 4. Imprimir mensajes en pantalla o consola
 5. Manipulación del DOM
 6. Obtener la hora actual
*/

//*****  Funcion pura *****

function sum (a,b){
    return a + b;
}

function square(x) {
    return x * x;
}

function addTen (y){
    return y + 10;     
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult) 

//***** función impura *****

function sum (a,b){
    console.log('A: ', a)  //imprimir en consola
    return a + b
}

let total=0

function sumWithSideEffect(a){
    total += a  
    return total                 //modificacion de variable global/inicial
}

