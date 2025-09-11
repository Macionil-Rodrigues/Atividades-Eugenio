function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}
function solicitarValores(readline) {
    readline.question('Insira o valor A: ', voltarA => {
        readline.question('Insira o valor B: ', voltarB => {
            readline.question('Insira o Insira o valor C: ', voltarC => {
                validarTriangulo(voltarA, voltarB, voltarC, readline);
            });
        });
    });
}
function validarTriangulo(valorA, valorB, valorC, readline) {
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);
    valorC = parseFloat(valorC);

    if (valorA + valorB > valorC && valorA + valorC > valorB && valorB + valorC > valorA) {
        if (valorA === valorB && valorB === valorC) {
            console.log("Esse triângulo é Equilátero");
        } else if (valorA === valorB || valorA === valorC || valorB === valorC) {
            console.log("Esse triângulo é Isósceles");
        } else {
            console.log("Esse triângulo é Escaleno");
        }
    } else {
        console.log("Os números não formam um triângulo");
    }
    readline.close();
}
startApp(); 