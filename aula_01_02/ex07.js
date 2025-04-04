n1 = prompt("Entre com o primeiro número: ");
n1 = parseInt(n1);
n2 = prompt("Entre com o segundo número: ");
n2 = parseInt(n2);
n3 = prompt("Entre com o terceiro número: ");
n3 = parseInt(n3);
if (n1 > n2 && n1 > n3) {
    console.log(`O maior número é: ${n1}`);
} else if (n2 > n1 && n2 > n3) {
    console.log(`O maior número é: ${n2}`);
} else {
    console.log(`O maior número é: ${n3}`);
}
console.log("Fim do programa.");