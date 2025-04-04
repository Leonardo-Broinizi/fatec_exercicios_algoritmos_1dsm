function exibir() {
    console.log('Olá!!!');
}

exibir();
exibir();
exibir();

// Exemplo
function exibir(){
    console.log("Olá!!!");
}

function maior(a, b){
    if( a < b ){
        console.log(b, "é maior que", a);
    } else {
        console.log(a, "é maior que", b);
    }
}

function menor(a, b){
    if( a < b ){
        return a;
    } else {
        return b;
    }
}

r = menor(2,3);
console.log("Menor:", r);