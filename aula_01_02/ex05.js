n1 = prompt("Entre com o primeiro número inteiro: ");
n1 = parseInt(n1);
n2 = prompt("Entre com o segundo número inteiro: ");
n2 = parseInt(n2);
if (n1 == n2) {
    console.log(`Os dois números informados são iguais: ${n1}`);
} else if (n1 > n2) {
    console.log(`O maior número informado é: ${n1}`);
} else {
    console.log(`O maior número informado é: ${n2}`);
}
console.log("Fim do programa.");