const valorPrestacao = 1200;
const taxaJuros = 10;
const tempoAtraso = 30;

let valorAtualizado = valorPrestacao +(valorPrestacao*(taxaJuros/100)*tempoAtraso);

console.log("O valor da prestação atualizado é:"+" R$:"+valorAtualizado.toFixed(2));