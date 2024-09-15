let numeroArreglos = [1,2,3,4,5,6,7,8,9,10];

numeroArreglos[10] = 11;

for (let i = 0; i < numeroArreglos.length; i++) {
    console.log(numeroArreglos[i]);
}