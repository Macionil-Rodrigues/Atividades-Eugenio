const nota1 = 4;
const nota2 = 7;
const nota3 = 8;
const strtipoMedia ="";
const conta= 0;
let media = 3;

switch (media) {
    case 1:
        strtipoMedia ="Aritmética";
        conta = (nota1+nota2+nota3)/3
        break;
    case 2:
        strtipoMedia ="Ponderada";
        conta = (nota1*3)+(nota2*3)+(nota3*4)/(3+3+4);
        break;
    case 3:
        strtipoMedia ="Harmônica";
        conta = 3/((1/nota1)+(1/nota2)+(1/nota3));
        break;
    case 4:
        strtipoMedia ="Geométrica";
        conta = Math.cbrt(n1 * n2 * n3);
    case 5:
        strtipoMedia ="Quadrática";
        conta = Math.sqrt((n1 ** 2 + n2 ** 2 + n3 ** 2) / 3);;
        
        break;     

                 
    default:
        strtipoMedia ="Invalido";
        conta ="invalido";
        break;
}
console.log("A media das notas"+nota1+", "+nota2+" e "+nota3+"");