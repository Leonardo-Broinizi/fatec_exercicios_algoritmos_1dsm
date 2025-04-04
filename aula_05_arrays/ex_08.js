pesos = [0.4,0.2,0.1,0.3];
notas = [8.2,5.0,10.0,9.1];
cont = 0;
soma = 0;
while(cont < pesos.length) {
    soma += pesos[cont] * notas[cont];
    cont++;
}
console.log(soma);