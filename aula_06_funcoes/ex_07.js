function inverter(lista) {
    let c = lista.length-1;
    invertida = [];
    console.log('Lista: ')
    i = 0;
    while (c > 0) {
        invertida.push(lista[c]);
        console.log(`${c}: ${invertida[i]}`)
        c--;
        i++;
    }
    return invertida;
}
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
invertida = [];
invertida = inverter(lista);
console.log(typeof(invertida));

lista = [8,3,4,7,5];
invertida = inverter(lista);