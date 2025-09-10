function eQuadratica(valorA, valorB, valorC) {
    return Math.pow(valorB,2)-4 *valorA*valorC
}

const coeficienteA = 3;
const coeficienteB = 9;
const coeficienteC = 5;
const delta = eQuadratica(coeficienteA,coeficienteB,coeficienteC);
console.log("Valor de Delta é:"+ delta)