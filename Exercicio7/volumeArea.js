const { read } = require('fs');

function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}
function solicitarValores(readline) {
    console.log("Esses são os objetos disponiveis para calcular o volume e a área: "+"\n"+"1.Cone Reto"+"\n"+"2.Cilindro"+"\n"+"3.Esfera");
    readline.question('Digite o numero do objeto escolhido: ', voltarObjeto=>{
    readline.question('Insira o raio do objeto: ', voltarRaio=>{
    readline.question('Insira a altura do objeto: ', voltarAltura=>{
     calculoDoObjeto(voltarObjeto,voltarRaio,voltarAltura,readline);
    });    
    });    
    });
}
function calculoDoObjeto(objeto,raio,altura,readline) {
   let opcao = "";
   raio = parseFloat(raio);
   altura =parseFloat(altura);
   switch (parseInt(objeto)) {
    case 1:
        opcao = "Cone reto";
        volume = ((Math.PI * (Math.pow(raio, 2)) * altura) / 3);
        area = (Math.PI * raio * (Math.sqrt((Math.pow(raio, 2) + (Math.pow, 2)))));
        break;
    case 2:
        opcao = "Cilindro";
        volume = Math.PI * Math.pow(raio, 2) * altura;
        area = 2 * Math.PI * raio * altura;
        break;
    case 3:
        opcao = "Esfera";
        volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
        area = 4 * Math.PI * Math.pow(raio, 2);
        break;
    default:
        opcao = "Não existe essa opção!";
        volume = 0;
        area = 0;
}
const saida = opcao;
const saida1 = "Valor de volume: " + volume.toFixed(2);
const saida2 = "Valor de área: " + area.toFixed(2);
console.log(saida + "\n" + saida1 + "\n" + saida2);
readline.close();
}    
startApp(); 