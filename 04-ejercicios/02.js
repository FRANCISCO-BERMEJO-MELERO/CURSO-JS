function nombreResolucion(alto,ancho){
    switch (ancho,alto) {
        case 7680, 4320:
            return '8K'
            break;
        case 3840,2160 :
            return '4K'
            break
        default:
            return 'Esa resolucion no conicide con ninguna exitente en nuestra funcion'
        break;
    }
}