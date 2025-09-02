const A = 2;
const B = 4;
const C = 6;

const delta = Math.pow(B, 2) - 4 * A * C;
const raiz = -B / (2 * A);

if (delta < 0) {
    console.log(raiz + " = É uma raiz imaginária.");
} else if (delta === 0) {
    console.log(raiz + " = É uma raiz única.");
} else {
    const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
    const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
    console.log("As raízes distintas são " + raiz1 + " e " + raiz2);
}