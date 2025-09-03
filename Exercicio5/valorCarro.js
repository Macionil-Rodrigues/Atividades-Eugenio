const carro = 70000;
const ar =  1700;
const pintura = 800;
const vidro = 1200;
const direcaoH = 2000;

let valorFinal = 70000;

if(ar==true){
    valorFinal+=ar;
}
if(pintura==true){
    valorFinal+=pintura;
}
if(vidro==true){
    valorFinal+=vidro;
}
if(direcaoH==true){
    valorFinal+=direcaoH;
}

console.log("O valor final do carro ficou por: "+"R$"+valorFinal);
