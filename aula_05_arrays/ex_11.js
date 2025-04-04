matriz = [ 
    [9,2,4], 
    [6,5,7], 
    [2,1,3] 
];
coluna = 0;
linha = 0;
soma = 0;
while(coluna < matriz.length) {
    while(linha < matriz[coluna].length) {
        soma += matriz[coluna][linha];
        linha++;
    }
    linha = 0;
    coluna++;
}
console.log(`Somatório: ${soma}.`);