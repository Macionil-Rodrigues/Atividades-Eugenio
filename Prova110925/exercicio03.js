const { ucs2 } = require("node:punycode");
const uu = 1;
function startApp() {
    const valorProduto = 100;
    let produtoAumento = 0;
    if (valorProduto <= 50) {
        produtoAumento = valorProduto * (1+0.6);
    } else if (valorProduto >= 50.01 && valorProduto <= 100) {
        produtoAumento = valorProduto * (1+0.15);
    } else {
        produtoAumento = valorProduto * (1+0.20);
    }
    definirClasificacao(produtoAumento)

}
function definirClasificacao(produtoAumento) {
        if(produtoAumento <= 90) {
        console.log("O produto é Barato e custa somente: R$" + produtoAumento);
    } else if (produtoAumento >= 90.01 && produtoAumento<=220) {
        console.log("O produto é Normal e custa somente: R$"+produtoAumento);
    }else if(produtoAumento >= 220.01 && produtoAumento<=300){
        console.log("O produto é Caro esta custando: R$"+produtoAumento);
    }else{
        console.log("o produto é Muito Caro esta custando: R$"+produtoAumento);
    }
}
startApp();