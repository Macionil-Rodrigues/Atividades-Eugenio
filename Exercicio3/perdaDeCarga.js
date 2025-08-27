let vazao = 0.05;
const diametroTudo = 12;
const coeficienteRugosidade = 120;

let perdaDeCarga = (Math.pow(vazao,1.85))*10.643*(Math.pow(diametroTudo,4.87))*(Math.pow(coeficienteRugosidade,-1.87))
 
console.log ("A perda de carga é de:" + perdaDeCarga);