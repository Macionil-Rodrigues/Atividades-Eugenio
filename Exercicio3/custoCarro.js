const carro = 50000;
const fabrica = 0.30;
const distribuidor = 0.12;

let custoFabrica = carro*fabrica;
let custoDistribuidor= carro*distribuidor;
let custoCarro = carro+custoDistribuidor+custoFabrica;
console.log ("O custo do carro para o consumidor sera de "+ "R$:"+ custoCarro.toFixed(2));

