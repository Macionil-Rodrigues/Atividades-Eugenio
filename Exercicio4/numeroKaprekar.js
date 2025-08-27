const  numero =2025;
let resultado = Math.pow(Math.trunc(numero/100)+(numero%100),2);
if(numero==resultado){console.log("Verdadeiro");}
if(numero!=resultado){console.log("Falso");}

