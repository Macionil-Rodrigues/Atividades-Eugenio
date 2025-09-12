const { read } = require('fs');

function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarTelefone(readline);
}
function solicitarTelefone(readline) {
    readline.question('Insira o numero de telefone a ser pesquisado: ', voltarNumero => {
        validarNumero(voltarNumero, readline);
    });
}
function validarNumero(numero, readline) {

    const prefixo = parseInt(numero.slice(0, 4));
    
    if (prefixo==3223 ||prefixo==3225 ||prefixo==3212) {
        console.log("O numero: "+numero+" é do Bairo Oeste");
        
    }else if(prefixo==3223 ||prefixo==3224 ||prefixo==3211){
        console.log("O numero: "+numero+" é do Bairo Centro");
    }else if(prefixo==3242 ||prefixo==3243 ||prefixo==3281||prefixo==3241){
        console.log("O numero: "+numero+" é do Bairo Sul");
    }else if(prefixo==3251 ||prefixo==3285){
        console.log("O numero: "+numero+" é do Bairo Bueno");
}else if(prefixo==3233 ||prefixo==3291){
        console.log("O numero: "+numero+" é do Bairo Campinas");
}else{
    console.log("Não foi encontrado um bairro para esse numero");
}
readline.close();
}

startApp();