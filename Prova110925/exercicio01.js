function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}
function solicitarValores(readline) {
    readline.question('Insira o valor do salario minimo: ', voltarSalarioMin => {
        readline.question('Insira a quantidade de quilowatt: ', voltarquilowatt => {
            calcularValorQuilowatt(voltarSalarioMin, voltarquilowatt, readline);
        });
    });
}
function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}
function calcularValorQuilowatt(salarioMin, quantidadeQuilowatt, readline) {
    salarioMin = toNumber(salarioMin);
    quantidadeQuilowatt = toNumber(quantidadeQuilowatt);
    let valorQuilowatt = salarioMin / 4;
    let valorPagQuilowatt = valorQuilowatt*quantidadeQuilowatt;
    let valorDesconto = valorPagQuilowatt-(valorPagQuilowatt*0.25);
    console.log("O valor de cada quilowatt é de: R$"+valorQuilowatt.toFixed(2)+"\n"+"O Valor a ser pago ao consumir: "
    +quantidadeQuilowatt+" de quilowatt é de: R$"+valorPagQuilowatt.toFixed(2)+"\n"+" O valor a ser pago com 25% de desconto é: R$"+valorDesconto.toFixed(2));
readline.close();
}
startApp(); 