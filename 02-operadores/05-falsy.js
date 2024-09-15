//short-cicuit


//Falso 
//false
//0
//null
//undefined
//NaN Not a Number
let nombre="Juanillo el pillo";
let username = nombre || 'Anonimo'

console.log(username);


function f1(){
    console.log('Soy funcion 1')
    return false;
}

function f2(){
    console.log('Soy funcion 2')
    return true;
}

let x = f1() && f2();