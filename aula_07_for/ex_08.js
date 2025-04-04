n = prompt('Entre com os números separados por vírgula: ').split(',');
nint = 0;
soma = 0;
for(i=0; i<n.length;i+=2){
    nint = parseInt(n[i]);
    soma += nint;
}
console.log(`Somatório dos elementos em posições pares: ${soma}.`);