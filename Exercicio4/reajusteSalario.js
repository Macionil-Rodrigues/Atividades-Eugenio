const salario = 1414;
if(salario<=1412){
    let salarioAjuste =(salario*(1+0.50));
    console.log("O Salario ajustado é: "+"R$"+salarioAjuste);
}
if(salario>1412){
    let salarioAjuste =(salario*(1+0.40));
    console.log("O Salario ajustado é: "+"R$"+salarioAjuste);
}