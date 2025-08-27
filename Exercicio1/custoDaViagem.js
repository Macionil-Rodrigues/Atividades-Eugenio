const consumoMedio =12.5;
const precoLitro = 6.44;
const tempoViagem = 4;
const velocidadeMedia = 100;
let distancia = tempoViagem * velocidadeMedia;
let quantidadeLitros = distancia/consumoMedio;
let custo = quantidadeLitros * precoLitro;
console.log("custo da Viagem R$"+ custo);

