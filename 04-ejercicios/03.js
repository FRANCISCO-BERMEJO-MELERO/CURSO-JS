function arrayIndx(arry, i){
    if(i < 0 || i > arry.length){
        return 'error';
    }
    return arry[i];
}

console.log(arrayIndx([1,2,3,4,5,6,7,8,9,10], 4));