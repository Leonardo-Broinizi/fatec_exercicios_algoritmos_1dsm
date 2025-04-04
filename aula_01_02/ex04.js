n1 = prompt("Entre com o primeiro número inteiro: ");
n1 = parseInt(n1);
n2 = prompt("Entre com o segundo número inteiro: ");
n2 = parseInt(n2);
if (n1 % n2 == 0) {
    console.log(`${n1} é múltiplo de ${n2}`);
}
else {
    console.log(`${n1} não é múltiplo de ${n2}`);
}
console.log("Fim do programa.");