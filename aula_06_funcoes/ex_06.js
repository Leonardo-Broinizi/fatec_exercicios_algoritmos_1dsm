function somatorio(n) {
    c = n.length;
    s = 0;
    while (c > 0) {
        s += n[c - 1];
        c--;
    }
    return s;
}

numeros = [1, 2, 3, 4, 5, 15];
s = somatorio(numeros);
console.log(s);