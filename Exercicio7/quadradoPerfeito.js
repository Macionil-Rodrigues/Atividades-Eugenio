function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarNumero(readline);
}
function solicitarNumero(readline) {
    readline.question('Insira um numero inteiro: ', voltarNumero => {
        calculoQuadradoP(voltarNumero, readline);
    });
}
function  calculoQuadradoP(numero, readline) {
    raiz= Math.sqrt(numero);
if(numero == Math.floor(raiz)*2){
console.log("É um quadrado perfeito ")
}else{
    console.log("Não é um quadrado perfeito")
}
    readline.close
}
startApp(); 