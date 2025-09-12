function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}

function solicitarValores(readline) {
    readline.question('Informe a cor da etiqueta (Verde/Amarelo): ', voltarCor => {
        readline.question('Informe a quantidade do produto: ', voltarQuantidade => {
            readline.question('Informe o valor unitário do produto: ', voltarValorUnitario => {
                calcularValor(voltarCor, voltarQuantidade, voltarValorUnitario, readline);
            });
        });
    });
}

function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}

function calcularValor(cor, quantidade, valorUnitario, readline) {
    quantidade = toNumber(quantidade);
    valorUnitario = toNumber(valorUnitario);

    let desconto = 0;

    if (cor.toLowerCase() === "verde") {
        if (quantidade <= 10) {
            desconto = 0.05;
        } else {
            desconto = 0.10;
        }
    } else if (cor.toLowerCase() === "amarelo") {
        if (quantidade <= 5) {
            desconto = 0.15;
        } else if (quantidade > 10) {
            desconto = 0.20;
        }
    }

    const valorTotal = quantidade * valorUnitario;
    const valorComDesconto = valorTotal - (valorTotal * desconto);

    console.log("\nResumo da compra:\n"+"Cor da etiqueta:"+ cor+"\nQuantidade:"+quantidade+"\nValor unitário: R$"+valorUnitario.toFixed(2)+"\nDesconto aplicado: "+(desconto * 100)+"%"+"\nValor final a pagar: R$"+valorComDesconto.toFixed(2));

    readline.close();
}

startApp();