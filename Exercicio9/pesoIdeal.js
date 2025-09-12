const { read } = require('fs');

function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarDados(readline);
}
function solicitarDados(readline) {
    readline.question('Qual é o seu Sexo?: ', voltarSexo => {
        readline.question('Qual a sua altura?: ', voltarAltura=>{
            dadosUsuario(voltarSexo, voltarAltura, readline);
        });
    });
}
function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}
function dadosUsuario(sexo, altura, readline) {
sexo = toLowerCase(sexo);
altura = toNumber(altura);

if (sexo ==="homem" || sexo =="masculino") {
    const pesoIdeal= (72.7*altura)-58;
    console.log(" O seu peso ideal é: "+ pesoIdeal)
}else if(sex =="mulher" || sexo =="feminino"){
const pesoIdeal= (62.1*altura)-44.7;
    console.log(" O seu peso ideal é: "+ pesoIdeal)
}else{
    console.log("Esse sexo é invalido")
}
    readline.close();
}
startApp();   