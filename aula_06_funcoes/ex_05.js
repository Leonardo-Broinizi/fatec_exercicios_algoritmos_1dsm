function inverte(p) {
    let c = p.length;
    invertida = '';
    while (c > 0) {
        invertida += p[c -1];
        c--;
    }
    return invertida;
}
i = inverte('Leonardo');
console.log(i);