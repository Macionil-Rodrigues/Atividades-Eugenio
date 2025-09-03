const quantidadeCombustivel=20;
const tipoCombustivel=1;
let strCombustivel ="";
let valorPago = 0;
switch (tipoCombustivel) {
    case 1:
        strCombustivel="Alcol";
        valorPago = quantidadeCombustivel * 4.805;
        break;
    case 2:
        strCombustivel="Disel";
        valorPago = quantidadeCombustivel* 5.953;
        break;
    case 3:
        strCombustivel ="Gasolina";
        valorPago = quantidadeCombustivel* 6.565;    
    default:
        strCombustivel = "Tipo de Combustivel errado";
        valorPago = 0;
        break;
}
const saida1 = "Tipo de Combustivel:"+ strCombustivel;
const saida2 = "Valor a ser pago: R$"+valorPago;

console.log (saida1+"\n"+saida2);