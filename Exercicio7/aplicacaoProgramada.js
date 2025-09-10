function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}

function solicitarValores(readline) {
    readline.question('Insira a aplicação mensal: ', voltarAplicacao => {
        readline.question('Insira a taxa: ', voltarTaxa => {
            readline.question('Insira o numero de meses: ', voltarNumeroMeses => {
                calcularAplicacao(voltarAplicacao, voltarTaxa, voltarNumeroMeses, readline);
            });
        });
    });
}
function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}
function calcularAplicacao(aplicacao, taxa, numeroMeses, readline) {
    let valorAcumulado = ((Math.pow(1 + toNumber(taxa), parseInt(numeroMeses, 10)) - 1) / toNumber(taxa)) *toNumber(aplicacao);
    console.log("O valor do rendimento é: " + "R$" + valorAcumulado.toFixed(2));
    readline.close();
}
startApp();