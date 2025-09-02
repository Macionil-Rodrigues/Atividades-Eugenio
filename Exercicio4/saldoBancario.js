const nome = "Macionil";
const numeroconta = "1";
const saldoSemestral = 300000; 
const saldoMedio = saldoSemestral / 6;

let tarifa = 0;
if (saldoMedio <= 1000) {
    tarifa = 25.00;
} else if (saldoMedio >= 1000 && saldoMedio < 2000) {
    tarifa = 20.00;
} else if (saldoMedio >= 2000 && saldoMedio <= 3500) {
    tarifa = 13.00;
} else if (saldoMedio > 3500) {
    tarifa = 0;
}

console.log("Cliente: " + nome + ". Conta: " + numeroconta + ". Tarifa bancária: " + tarifa.toFixed(2));
