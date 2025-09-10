function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
}
startApp();                   //usar para escrever na tela o valor. necessario abrir o terminal e usar o  "ls" para listar  as pastas "sd" para abrir uma pasta e "node" para executar




function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}
/*O toNumber converte o que o usuário digitou em um número válido, aceitando vírgulas e espaços. 
Deve ser usado para valores de dinheiro, quantidades ou qualquer número que não seja porcentagem.*/



function toPercent(v) {
  let n = parseFloat(String(v).trim().replace(',', '.').replace('%',''));
  return (n > 1) ? n / 100 : n;
}
/*O toPercent garante que a taxa digitada pelo usuário seja reconhecida corretamente como porcentagem,
não importa se ele digitar 10, 10%, 0.10 ou 0,10. Deve ser usado sempre que o valor representar taxa ou juros.*/