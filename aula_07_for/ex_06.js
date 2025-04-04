n = prompt('Entre com os números separados por vírgula: ').split(',');
nint = 0;
for(i=0; i<n.length;i++){
    nint = parseInt(n[i]);
    if(nint%2 == 0){
        console.log(nint);
    }
}