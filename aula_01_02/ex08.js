temp = prompt("Entre com a temperatura comporal: ");
temp = parseFloat(temp);
if (temp >= 41) {
    console.log("Você está com hipertemia (febre muito alta).");
}
else if (temp >= 39.6) {
    console.log("Você está com febre alta.");
} else if (temp >= 37.8) {
    console.log("Você está com febre normal.");
} else if (temp >= 35.1) {
    console.log("Você está com temperatura normal.");
} else if (temp <= 35) {
    console.log("Você está com hipotermia (temperatura muito baixa).");
}
console.log("Fim do programa.");