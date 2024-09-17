//Paso por valor
function cambiarValor(a){
    a = 20;
}

let valor = 10;

console.log('valor antes de llamar a la función:',valor);

cambiarValor(valor);

console.log('valor después de llamar a la función:',valor);
