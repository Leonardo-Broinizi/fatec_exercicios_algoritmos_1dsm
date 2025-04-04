function converter(entrada) {
    let textos = entrada.split();
    return textos;
};

const teste = "30,60,50,10,20,40";
const resposta = converter(teste);
console.log(resposta);