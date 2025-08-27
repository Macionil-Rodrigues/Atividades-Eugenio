const numero = 123;
const unidade = numero %10;
const dezena =Math.floor((numero%100)/10);
const centena = Math.floor(numero/100);
const soma = unidade*100+dezena*10+centena;
console.log(soma);     
