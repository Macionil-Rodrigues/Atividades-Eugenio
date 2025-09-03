const valorA = 3;
const valorB = 5;
const valorC = 3;

if(valorA+valorB>valorC && valorA+valorC>valorB && valorB+valorC>valorA){
if(valorA==valorB && valorB==valorC){
    console.log("Esse triangulo é  Equilátero")
}else if(valorA == valorB||valorA==valorC||valorB==valorC){
    console.log("Esse triangulo é isósceles")
}else{
   console.log("Esse triangulo é isósceles") }

}else{
    console.log("Os numeros não formam um Triangulo")
}