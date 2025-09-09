const nota1 = 10;
const nota2 = 10;
const nota3 = 10;

let escolha = 6;
let media = 0;
let opcao = "";

switch(escolha){
    case 1:
        opcao = "Aritmética";
        media = (nota1+nota2+nota3)/3;
    break;
    case 2:
        const peso = (3+3+4);
        opcao = "Ponderada";
        media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / peso;
    break;
    case 3:
        if (nota1 === 0 || nota2 === 0 || nota3 === 0) {
        console.log("Não é possível calcular a média com notas zero.");
        return;
        }
        opcao = "Harmônica";
        media = ((1 / nota1) + (1 / nota2) + (1 / nota3))/3;
    break;
    case 4:
        opcao = "Geométrica";
      if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
        console.log("Não é possível calcular a média com notas zero.");
        return;
      }
        media = Math.pow(nota1 * nota2 * nota3, 1/3);
    break;
    case 5:
        opcao = "Quadrática";
        media = Math.sqrt((Math.pow(nota1, 2) + Math.pow(nota2, 2) + Math.pow(nota3, 2)) / 3);
    break;
    default:
        opcao = "Não existe essa opção!";
        media = 0;
  }
  const saida = opcao;
  const saida2 = "O valor da media: "+media.toFixed(1);
  console.log(saida+"\n"+saida2);
