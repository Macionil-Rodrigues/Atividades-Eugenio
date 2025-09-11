function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarDados(readline);
}
function solicitarDados(readline) {
    console.log("1. aritmética" + "\n" + "2. ponderada" + "\n" + "3. harmônica" + "\n" + "4. geométrica" + "\n" + "5. quadrática.");
    readline.question('Insira a media escolhida: ', voltarTipoMedia => {
        readline.question('Insira o valor da Primeira nota: ', voltarnota1 => {
            readline.question('Insira o valor da Segunda nota: ', voltarnota2 => {
                readline.question('Insira o valor da Terceira nota: ', voltarnota3 => {
                    calcularMedia(voltarTipoMedia, voltarnota1, voltarnota2, voltarnota3, readline);
                });
            });
        });
    });
}
function calcularMedia(media, nota1, nota2, nota3, readline) {
    nota1 = parseFloat(nota1);
    nota2 = parseFloat(nota2);
    nota3 = parseFloat(nota3);
    let strtipoMedia ="";

    switch (parseInt(media)) {
        case 1:
            strtipoMedia = "Aritmética";
            conta = (nota1 + nota2 + nota3) / 3
            break;
        case 2:
            strtipoMedia = "Ponderada";
            conta = (nota1 * 3) + (nota2 * 3) + (nota3 * 4) / (3 + 3 + 4);
            break;
        case 3:
            strtipoMedia = "Harmônica";
            conta = 3 / ((1 / nota1) + (1 / nota2) + (1 / nota3));
            break;
        case 4:
            strtipoMedia = "Geométrica";
            conta = Math.cbrt(nota1 * nota2 * nota3);
        case 5:
            strtipoMedia = "Quadrática";
            conta = Math.sqrt((nota1 ** 2 + nota2 ** 2 + nota3 ** 2) / 3);;

            break;


        default:
            strtipoMedia = "Invalido";
            conta = "invalido";
            break;
    }
    console.log("A media " + strtipoMedia + " das notas " + nota1 + ", " + nota2 + " e " + nota3 + " é: " + conta.toFixed(2));
    readline.close();
}
startApp();