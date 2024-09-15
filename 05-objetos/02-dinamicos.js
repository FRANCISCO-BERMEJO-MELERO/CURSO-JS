const user = {id: 1};

user.name = 'Fran';
user.guardar= function(){
    console.log('Guardando')
}
user.guardar;

delete user.name

console.log(user)
Object.freeze() //esto hace que no puedas ni añadirle ni modificarle las diferentes propiedades