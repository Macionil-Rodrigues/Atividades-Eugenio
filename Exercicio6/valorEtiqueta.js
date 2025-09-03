const  valor = 200;
const codigo = 1;

let strTipoPagamento= "";
let valorFinal =0;

switch (codigo) {
    case 1:
        strTipoPagamento ="À vista, dinheiro ou cheque"
        valorFinal = valor-0.10;
        break;
    case 2:
        strTipoPagamento ="À vista, cartão de credito"
        valorFinal = valor-0.05;
        break;
    case 3:
        strTipoPagamento ="Em 2 vezes"
        valorFinal = valor;
        break;
    case 4:
        strTipoPagamento ="Em 3 vezes"
        valorFinal = valor+0.10;
        break;            
    default:
        strTipoPagamento="Não é uma forma de pagamento Cadastrada"
        valorFinal= 0;
        break;
}
let saida1= "Forma de pagamento:"+strTipoPagamento;
let saida2= "Valor a ser pago: R$"+valorFinal.toFixed(2);

console.log("O valor do item é: R$"+valor.toFixed(2)+"\n"+saida1+"\n"+saida2);