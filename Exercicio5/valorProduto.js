

const etiqueta = 10000.00;
const codigo = 2; 

let valorFinal;

if (codigo === 1) {
  valorFinal = precoEtiqueta * 0.90;
  console.log("Pagamento à vista (dinheiro/cheque) = R$"+valorFinal.toFixed(2));
} else if (codigo === 2) {
  valorFinal = etiqueta * 0.95;
  console.log("Pagamento à vista (cartão) = R$"+valorFinal.toFixed(2));
} else if (codigo === 3) {
  valorFinal = etiqueta;
  console.log("Pagamento em 2x de R$" +(valorFinal / 2).toFixed(2) + " Sem juros");
} else if (codigo === 4) {
  valorFinal = etiqueta * 1.10;
  console.log("Pagamento em 3x de R$"+(valorFinal / 3).toFixed(2)+" Com juros");
} else {
  console.log("Código de pagamento inválido!");
}
