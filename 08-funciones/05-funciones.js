//Funciones recursivas
function imprimirNumeros(n){
    if (n != 1) {
        console.log(n)
        imprimirNumeros(n-1)
    }else{
        console.log(n)
    }
}

imprimirNumeros(5)