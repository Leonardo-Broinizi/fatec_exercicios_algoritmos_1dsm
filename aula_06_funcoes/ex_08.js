function matriz(m) {
    let c = 0;
    let l = 0;
    let s = 0;
    while(c < m.length) {
        l = 0;
        while(l < m[c].length) {
            s += m[c][l];
            l++;
        }
        c++;
    }
    return s;
}

numeros = [
    [9,2,4],
    [6,5,7],
    [2,1,3]
];
somatorio = matriz(numeros);
console.log('Somatório: ', somatorio);

numeros = [
    [5,8,3,4],
    [9,7,2]
];
somatorio = matriz(numeros);
console.log('Somatório: ', somatorio);