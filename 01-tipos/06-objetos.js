//Es un tipo de referencia, no es un tipo primitivo

//Personaje de TV

let nombre = "Tanjiro";
let anmie = "Demon slayer";
let edad = 15;


let personaje = {
    nombre : 'Tanjiro',
    anime: 'Demon Slayer',
    edad: 15,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje ['anime']);

personaje.nombre = 'Inosuke';

console.log(personaje.nombre);
delete personaje.anime;