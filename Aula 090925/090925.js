/*function soma(valor1, valor2){
   return valor1 + valor2;
}

const numero1 = 15;
const numero2 = 25;
const resultado = soma(numero1,numero2);
console.log("Soma = " + resultado); */

function verificarParImpar(valor){
   const resto = valor%2;
   if(resto == 0) return "PAR";
   else return "IMPAR";
}

const numero = 10;
const resposta = verificarParImpar(numero);
console.log("O " + numero + " e " + resposta);

