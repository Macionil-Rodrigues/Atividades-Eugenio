function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarNumeros(readline);
}
function solicitarNumeros(readline) {
    readline.question('Insira um numero de 3 digitos: ', voltarNumero => {
        numeroKaprekar(voltarNumero, readline);
    });
}
function numeroKaprekar(numero, readline) {
    let resultado = Math.pow(Math.trunc(numero / 100) + (numero % 100), 2);
    if (numero == resultado) { console.log("Verdadeiro"); }
    if (numero != resultado) { console.log("Falso"); }
    readline.close();
}
startApp();