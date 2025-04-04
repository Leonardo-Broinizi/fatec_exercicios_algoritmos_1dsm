entradas = [9,2,4,5,8] 
saidas =   [3,5,2,7,4]
cont = 0;
while(cont < entradas.length) {
    if(entradas[cont] > saidas[cont]) {
        console.log(entradas[cont]);
    } else {
        console.log(saidas[cont]);
    }
    cont++;
}