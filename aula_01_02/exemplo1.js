idade = prompt("Entre com a idade: ");
if (idade != null) {
    idade = parseInt(idade);
    if (idade < 18) {
        console.log("Menor de idade");
    }
    else {
        console.log("Maior de idade");
    }
}
else {
    console.log("Idade não informada");
}