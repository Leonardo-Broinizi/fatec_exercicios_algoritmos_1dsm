const disciplina = { 
    nome: "Algoritmos", 
    carga: 80, 
    pesos: [0.25,0.35,0.4], 
    notas: [8.2,7.5,9] 
}; 

const {pesos: [pesoP1, pesoP2] } = disciplina; // Como agora o conteúdo está sendo extraído de um array, uso colchetes e não chaves. 

console.log(`Peso P1: ${pesoP1}`);
console.log(`Peso P2: ${pesoP2}`);
