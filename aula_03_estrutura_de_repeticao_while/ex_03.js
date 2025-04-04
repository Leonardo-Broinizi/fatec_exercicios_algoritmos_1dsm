n1 = prompt("Entre com o primeiro valor: ");
n2 = prompt("Entre com o segundo valor: ");
n1 = parseInt(n1);
n2 = parseInt(n2);

if (n1 < n2) {
    while (n1 < n2) {
    console.log(n1);
    n1 = n1 + 1; 
    } 
} else {
    while (n2 < n1) {
        console.log(n2);
        n2 = n2 + 1;
    }
}

//Exercício 3
// entrada = prompt("Entre com o menor valor:");
// i = parseInt(entrada);
// entrada = prompt("Entre com o maior valor:");
// maior = parseInt(entrada);

// if( maior < i ){
//   temp = maior;
//   maior = i;
//   i = temp;
// }

// while (i <= maior) {
//   console.log(i);
//   i = i + 1;
// }
// console.log("fim");


// Os dois códigos têm a mesma função: imprimir todos os números inteiros em ordem crescente entre dois valores informados pelo usuário. No5 entanto, o segundo código (Exercício 3) é preferível por ser mais eficiente e robusto. Aqui estão os motivos:

// 🟢 Vantagens do segundo código (Exercício 3):
// Evita código duplicado:

// No primeiro código, há dois loops while separados para os casos n1 < n2 e n2 < n1. Isso faz com que a lógica seja escrita duas vezes, o que torna o código mais difícil de manter e aumentar a chance de erros.
// No segundo código, a troca de valores (temp = maior; maior = i; i = temp;) garante que i sempre comece com o menor número. Assim, o loop while funciona com um único bloco de código.
// Menos verificações desnecessárias:

// O segundo código não precisa de um else separado, pois já ajusta os valores antes do while, tornando-o mais limpo e eficiente.
// Evita erro de comparação estrita (< vs <=):

// No primeiro código, se n1 e n2 forem iguais, nenhum dos loops while será executado. O segundo código resolve isso garantindo que o loop rode pelo menos uma vez, imprimindo i caso i == maior.
// Inclui uma saída clara ("fim") no final:

// O segundo código imprime "fim" após o loop, o que melhora a legibilidade da saída no console.
// 🔴 Problemas do primeiro código:
// Código duplicado:

// Há dois blocos while separados, o que é desnecessário.
// Lógica mais confusa:

// O primeiro código depende do if para decidir qual loop executar, enquanto o segundo ajusta os valores antes do loop, tornando a lógica mais clara.
// Menos flexível:

// O primeiro código pode falhar se os valores forem iguais (n1 == n2), pois nenhum while será executado.
// Conclusão
// ✅ O segundo código (Exercício 3) é a melhor opção porque:
// ✔ Usa apenas um loop while, tornando-o mais simples e eficiente.
// ✔ Evita código duplicado.
// ✔ Funciona corretamente mesmo que os valores sejam inseridos em qualquer ordem.
// ✔ Tem melhor legibilidade e manutenção.

// Se precisar de mais explicações, me avise! 🚀