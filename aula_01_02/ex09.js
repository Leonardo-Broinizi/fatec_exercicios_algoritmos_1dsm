peso = prompt("Entre com o peso: ");
peso = parseFloat(peso);
altura = prompt("Entre com a altura: ");
altura = parseFloat(altura);
imc = peso / (altura * altura);
if (imc <= 18.5) {
    console.log("Você está abaixo do peso.");
} else if (imc <= 24.9) {
    console.log("Você está com o peso normal.");
} else if (imc <= 29.9) {
    console.log("Você está com sobrepeso.");
} else if (imc <= 34.9) {
    console.log("Você está com obesidade grau 1.");
} else if (imc <= 39.9) {
    console.log("Você está com obesidade grau 2 (severa).");
} else {
    console.log("Você está com obesidade grau 3 (mórbida).");
}
console.log("Fim do programa.");