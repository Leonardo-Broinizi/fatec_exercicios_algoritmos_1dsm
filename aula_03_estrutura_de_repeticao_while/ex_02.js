n1 = prompt("Entre com o menor valor: ");
n2 = prompt("Entre com o maior valor: ");
n1 = parseInt(n1);
n2 = parseInt(n2);

while (n1 < n2) {
    console.log(n1);
    n1 = n1 + 1; 
}