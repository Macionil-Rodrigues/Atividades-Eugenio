function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}
function solicitarValores(readline) {
    readline.question('Insira o valor A: ', valorA=>{
        readline.question('Insira o valor B: ', valorB=>{
         readline.question('Insira o valor C: ', valorC=>{
       validarTipoTriangulo (valorA, valorB, valorC,readline);
         });   
        });
    });
}
function validarTipoTriangulo (valorA, valorB, valorC,readline) {
    valorA = parseFloat(valorA);
    valorB = parseFloat(valorB);
    valorC = parseFloat(valorC);
   if (valorA**2==valorB**2+valorC**2) {
    console.log("Trata-se de um triangulo retângulo");
   }else if(valorA**2>valorB**2+valorC**2){
    console.log("Trata-se de um triangulo obtusângulo");
   }else{
    console.log("Trata-se de um triangulo acutângulo")
   }
   readline.close();
}
startApp();   