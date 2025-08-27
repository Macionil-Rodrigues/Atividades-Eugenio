let raio = 0.10;
let altura = 0.50;
const valorM =155;
const areaBase = (2*Math.PI)*(Math.pow(raio,2))*(altura);
const areaLado = (2*Math.PI*raio*altura);
const areaLata = areaBase + areaLado;
const valorTotal = areaLata*valorM;
console.log ("A lata ficara por: "+"R$"+valorTotal.toFixed(2));
