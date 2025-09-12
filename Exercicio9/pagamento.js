function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}

function solicitarValores(readline) {
    readline.question('Matrícula do funcionário: ', matricula => {
        readline.question('Nome do funcionário: ', nome => {
            readline.question('Número de dependentes: ', dependentes => {
                readline.question('Salário base (R$): ', salarioBase => {
                    readline.question('Quantidade produzida (itens): ', producao => {
                        calcularContraCheque(matricula, nome, dependentes, salarioBase, producao, readline);
                    });
                });
            });
        });
    });
}

function toNumber(v) {
    return parseFloat(String(v).trim().replace(',', '.'));
}


function calcularGratificacao(producao) {
    if (producao <= 1000) return 500.00;
    if (producao <= 2000) return 1250.00;

    return 1650.00; 
}

function aliquotaINSS(salBruto) {
    if (salBruto <= 1412.00) return 0.075;
    if (salBruto <= 2666.68) return 0.09;
    if (salBruto <= 4000.03) return 0.12;
    return 0.14;
}

function aliquotaIRPF(salBruto) {
    if (salBruto <= 2259.20) return 0.00;
    if (salBruto <= 2826.65) return 0.075;
    if (salBruto <= 3751.05) return 0.15;
    if (salBruto <= 4664.68) return 0.225;
    return 0.275;
}

function calcularContraCheque(matricula, nome, dependentes, salarioBase, producao, readline) {
    
    dependentes = parseInt(dependentes, 10);
    salarioBase = toNumber(salarioBase);
    producao = parseInt(producao, 10);

    
    const gratificacao = calcularGratificacao(producao);
    const salarioBruto = salarioBase + gratificacao;
    const aliqINSS = aliquotaINSS(salarioBruto);
    const descINSS = salarioBruto * aliqINSS;
    const aliqIRPF = aliquotaIRPF(salarioBruto);
    const deducaoDependentes = (Number.isFinite(dependentes) ? dependentes : 0) * 123.00;
    const baseIRPF = Math.max(0, salarioBruto - deducaoDependentes);
    const descIRPF = baseIRPF * aliqIRPF;

    
    const salarioLiquido = salarioBruto - descINSS - descIRPF;
    console.log(
        "CONTRACHEQUE\n" + "Matrícula: " + matricula + "\n" + "Nome: " + nome + "\n" + "Dependentes: " + dependentes + "\n" + "Salário base: R$ " + salarioBase.toFixed(2) + "\n" + "Gratificação por produção: R$ " + gratificacao.toFixed(2) + "\n" +
        "Salário bruto: R$ " + salarioBruto.toFixed(2) + "\n" + "INSS (" + (aliqINSS * 100).toFixed(1) + "%): R$ " + descINSS.toFixed(2) + "\n" + "IRPF (" + (aliqIRPF * 100).toFixed(1) + "%): R$ " + descIRPF.toFixed(2) + "\n" + "Desconto por dependentes: R$ " + deducaoDependentes.toFixed(2) + "\n" + "Salário líquido: R$ " + salarioLiquido.toFixed(2) + "\n");

    readline.close();
}
startApp();