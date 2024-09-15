function esmayor(a, b){
    if(a > b){return a;}
    else if(b < a){return b}
    return undefined
}

let a = 10;
let b = 10;

let mayor = esmayor(a, b);
if(mayor != undefined){
    console.log(mayor);
}else{
    console.log('Son iguales');
}