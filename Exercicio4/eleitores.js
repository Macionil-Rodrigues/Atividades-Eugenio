const idade = 16
if(idade<16){console.log("Não eleitor");}
if(idade>=18 && idade<=65){console.log("Eleitor Obrigatorio");}
if(idade<=16 && idade<18 || idade>65){console.log("Eleitor Facultativo");}