n1 = prompt("Entre com o primeiro valor: ");
n2 = prompt("Entre com o segundo valor: ");
n1 = parseInt(n1);
n2 = parseInt(n2);
soma = 0;

if (n1 < n2) {
    while (n1 <= n2) {
        soma = soma + n1;
        n1 = n1 + 1;
    } 
} else {
    while (n2 <= n1) {
        soma = soma + n2;
        n2 = n2 + 1;
    }
}
console.log("Somatório: " + soma);