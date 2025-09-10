function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}

function solicitarValores(readline) {
    readline.question('Insira a base: ', valorBase => {
        readline.question('Insira a altura: ', valorAltura => {
            calcularVolumePiramide(valorBase, valorAltura, readline);
        });
    });

}
function calcularVolumePiramide(valorBase, valorAltura, readline) {
    
    const volume = 1.0 / 3.0 * (valorBase * valorAltura).toFixed(2);
    console.log("Valor do volume é: " + volume);
    readline.close();
}
startApp();