const real = 40;
const tipoMoeda = 5;
let strMoedaConverte = "";
let valorConvertido =0;

switch (tipoMoeda) {
    case 1:
        strMoedaConverte = "Euro";
        valorConvertido = 6.617;
        break;
    case 2:
        strMoedaConverte= "Libra Esterlina";
        valorConvertido =  6.816;
        break;
    case 3:
        strMoedaConverte= "Dólar";
        valorConvertido= 5.071;
        break;
    case 4:
        strMoedaConverte= "lene";
        valorConvertido= "3.018";    
    default:
        strMoedaConverte= "Moeda escolhida é invalida";
        valorConvertido= 0;
        break;
}
console.log ("R$"+real.toFixed(2)+" Convertidos para "+strMoedaConverte+". É igual á: R$"+ real*valorConvertido.toFixed(2));