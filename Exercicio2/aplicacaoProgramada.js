const aplicacaoMensal= 200;
let taxa= 0.1;
const meses=32;
let valorAcumulado = (Math.pow(1 + taxa, meses) - 1) / taxa * aplicacaoMensal;
console.log ("O valor do rendimento é: " + "R$"+valorAcumulado.toFixed(2));