// Paso por referencia

function cambiarValor(parametro){
    parametro[0] = 20;
}

let valor = [10];

console.log('valor antes de llamar a la función:',valor);

cambiarValor(valor);

console.log('valor después de llamar a la función:',valor);