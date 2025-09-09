const raio = 2;
const altura = 4;
const pi = 3.14;

let volume = 0;
let area = 0;
let opcao = "";
const escolha = 4;
switch(escolha){
    case 1:
        opcao = "Cone reto";
        volume = ((pi*(Math.pow(raio,2))*altura)/3);
        area =(pi*raio*(Math.sqrt((Math.pow(raio,2)+(Math.pow,2)))));
    break;
    case 2:
        opcao = "Cilindro";
        volume = pi*Math.pow(raio,2)*altura;
        area = 2*pi*raio*altura;
    break;
    case 3:
        opcao = "Esfera";
        volume = (4/3)*pi*Math.pow(raio,3);
        area = 4*pi*Math.pow(raio,2);
    break;
    default:
        opcao = "Não existe essa opção!";
        volume = 0;
        area = 0;
}
const saida = opcao;
const saida1 = "Valor de volume: "+ volume.toFixed(2);
const saida2 = "Valor de área: "+ area.toFixed(2);
console.log(saida+"\n"+saida1+"\n"+saida2);


