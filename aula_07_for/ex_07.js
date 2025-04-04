n = prompt('Entre com os números separados por vírgula: ').split(',');
for(i=0; i<n.length;i+=2){
    console.log(n[i]);
}