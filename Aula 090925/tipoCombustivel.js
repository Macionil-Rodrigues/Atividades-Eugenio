function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}
function solicitarValores(readline) {
    console.log("Os combustiveis disponiveis e seus preços são:\n" + "1. Álcol\n" + "2. Disel\n" + "3. Gasolina")
    readline.question('Insira o codigo do combustivel escolhido: ', voltarTipoCombustivel => {
        readline.question('Insira a quantidade de litros desejá abastecer: ', voltarLitros => {
            dadosColetadosPosto(voltarTipoCombustivel, voltarLitros, readline);
        });
    });
}
function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}
function dadosColetadosPosto(tipoCombustivel, litros, readline) {
    let strCombustivel = "";
    let Quantidadelitros = toNumber(litros)

    switch (toNumber(tipoCombustivel)) {
        case 1:
            strCombustivel = "Alcol";
            valorPago = Quantidadelitros * 4.805;
            break;
        case 2:
            strCombustivel = "Disel";
            valorPago = Quantidadelitros * 5.953;
            break;
        case 3:
            strCombustivel = "Gasolina";
            valorPago = Quantidadelitros * 6.565;
        default:
            strCombustivel = "Tipo de Combustivel errado";
            valorPago = 0;
            break;
    }
    const saida1 = "Tipo de Combustivel:" + strCombustivel;
    const saida2 = "Valor a ser pago: R$" + valorPago.toFixed(2);

    console.log(saida1 + "\n" + saida2);
readline.close();
}
startApp();