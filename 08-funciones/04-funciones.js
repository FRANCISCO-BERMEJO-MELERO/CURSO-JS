//Cadenas y funciones en js 
// Cadenas inmutables en js (no se pueden cambiar)
let argumento = 'Valor original';
let a = 'a';


function cambiarValor(parametro){
    parametro = 'Nuevo valor';
    a = 'b';
}


console.log('argumento antes de llamar a la función:',argumento);

cambiarValor(argumento);

console.log('argumento después de llamar a la función:',argumento);

console.log('a después de llamar a la función:',a);
