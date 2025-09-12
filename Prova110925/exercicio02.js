function startApp() {
    const x1 =0;
    const y1 = 0;
    const x2 = 4;
    const y2 = 0;
    calculoDistancia(x1, y1, x2, y2);
}

function calculoDistancia(x1, y1, x2, y2) {
    const conta = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    saidaDados(x1, y1, conta);

}
function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}
function saidaDados(x1, y1, distancia) {

distancia = toNumber(distancia);
distancia = distancia.toFixed(2);
    console.log("A distancia do ponto A para o ponto B é de: " + distancia);
    if (x1 <= 1 && y1 >= 1) {
        console.log("O ponto A esta no 1° Quadrante.");
    } else if (x1 >= -1 && y1 >= 1) {
        console.log("O ponto A esta no 2° Quadrante.");
    } else if (x1 >= -1 && y1 <= -1) {
        console.log("O ponto A esta no 3° Quadrante.");
    } else if (x1 <= 1 && y1 <= -1) {
        console.log("O ponto A esta no 4° Quadrante.");
    } else if (x1 >= 1 && y1 == 0 || x1 <= -1 && y1 == 0) {
        console.log("O ponto A esta no eixo X");
    } else if (x1 == 0 && y1 >= 1 || x1 == 0 && y1 <= -1) {
        console.log("O ponto A esta no eixo Y.");
    } else {
        console.log("O ponto A esta no centro.");
    }
}
startApp();