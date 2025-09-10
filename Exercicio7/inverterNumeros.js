function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}
function solicitarValores(readline) {
    readline.question('Insira um numero de 3 digitos: ', voltarNumero => {
        inverterNumero(voltarNumero, readline);
    });
}

function inverterNumero(numero, readline) {
    const unidade = numero % 10;
    const dezena = Math.floor((numero % 100) / 10);
    const centena = Math.floor(numero / 100);
    const soma = unidade * 100 + dezena * 10 + centena;
    console.log("numero: " + numero + "\n" + "inverso: " + soma);
    readline.close();
}
startApp(); 