n = prompt('Entre com os números separados por vírgula: ').split(',');
soma = 0;
for(i=0; i<n.length;i++){
    soma += parseInt(n[i]);
}
console.log(`Somatório: ${soma}`);