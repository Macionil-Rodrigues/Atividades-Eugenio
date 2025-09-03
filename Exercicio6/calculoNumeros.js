const numero1 = 2;
const numero2 = 3;
const operacaoAritimedica= 2;

let strOperacao = "";
let calculo = 0;

switch (operacaoAritimedica) {
    case 1:
        strOperacao = "Adição";
        calculo= numero1+numero2;
        break;
     case 2:
        strOperacao = "Subtração";
        calculo= numero1-numero2;
        break;
     case 3:
        strOperacao = "Multiplicação";
        calculo= numero1*numero2;
        break;
     case 4:
        strOperacao = "Divisão";
        calculo= numero1/numero2;
        break;        
    default:
        strOperacao="Não é uma operação Valida";
        calculo= 0;
        break;
}
console.log ("Os valores: "+numero1+" e "+numero2+" passando por uma "+strOperacao+" é igual a: "+calculo);