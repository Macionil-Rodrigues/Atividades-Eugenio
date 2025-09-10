function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}
function solicitarValores(readline) {
    readline.question('Insira o valor da prestação: ', voltarPrestacao => {
        readline.question('Insira a taxa: ', voltarTaxa => {
            readline.question('Insira o tempo de atraso: ', voltarAtraso => {
                valorAtualizado(voltarPrestacao, voltarTaxa, voltarAtraso, readline);
            });
        });
    });
}
function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}
function  valorAtualizado(valorPrestacao, taxaJuros, tempoAtraso, readline) {
    let valorAtualizado = toNumber(valorPrestacao) +( toNumber(valorPrestacao)* toNumber(taxaJuros)*tempoAtraso);
    console.log("O valor da prestação atualizado é:"+" R$:"+valorAtualizado.toFixed(2));
    readline.close();
}
startApp();