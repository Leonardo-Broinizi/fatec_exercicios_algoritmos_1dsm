const disciplina = { 
    nome: "Algoritmos", 
    carga: 80, 
    pesos: { 
    p1: 0.25, 
    p2: 0.35, 
    projeto: 0.4 
    }, 
    notas: { 
    p1: 8.2, 
    p2: 7.5, 
    projeto: 9 
    }
};

const {pesos: {p1, p2} } = disciplina; // Como estou extraindo um objeto dentro de outro objeto, preciso representar isso com chaves dentro de chaves. 
console.log(`Peso P1: ${p1}`);
console.log(`Peso P2: ${p2}`);



// Exercício DeepSeek: 

// const disciplina = {
//     nome: "Algoritmos",
//     carga: 80,
//     pesos: {
//       p1: 0.25,
//       p2: 0.35,
//       projeto: 0.4,
//     },
//     notas: {
//       p1: 8.2,
//       p2: 7.5,
//       projeto: 9,
//     },
//   };
  
//   // Corrigindo o nome da variável e desestruturando pesos
//   const { pesos: { p1, p2, projeto } } = disciplina;
  
//   console.log("Peso P1:", p1); // 0.25
// //   console.log("Peso P2:", p2); // 0.35
