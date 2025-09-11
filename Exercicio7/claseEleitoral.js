function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarIdade(readline);
}
function solicitarIdade(readline) {
    readline.question('Insira Sua idade: ', voltarIdade => {
        idadeCidadao(voltarIdade, readline);
    });
}
function idadeCidadao(idade, readline) {
    
    if (idade < 16) {
        console.log("Não eleitor");
    } else if (idade >= 18 && idade <= 65) {
        console.log("Eleitor Obrigatório");
    } else {
        console.log("Eleitor Facultativo");
    }

    readline.close();
}
startApp();  