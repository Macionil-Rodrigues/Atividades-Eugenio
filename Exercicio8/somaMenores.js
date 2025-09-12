function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarNumeros(readline);
}
function solicitarNumeros(readline) {
    readline.question('Insira o primeiro número: ', numero1 => {
        readline.question('Insira o segundo número: ', numero2 => {
            readline.question('Insira o terceiro número: ', numero3 => {
                readline.question('Insira o quarto número: ', numero4 => {
                    voltarNumeros(numero1, numero2, numero3, numero4, readline);
                });
            });
        });
    });
}
function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}
function voltarNumeros(numero1, numero2, numero3, numero4, readline) {
    const numeros = [toNumber(numero1), toNumber(numero2), toNumber(numero3), toNumber(numero4)];
    numeros.sort((a, b) => a - b);

    const soma = numeros[0] + numeros[1] + numeros[2];
    console.log("A soma dos três menores é:", soma);

    readline.close();
}

startApp(); 