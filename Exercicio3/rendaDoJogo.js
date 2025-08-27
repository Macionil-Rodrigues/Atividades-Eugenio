const ingressos = 3000;
const popular = (ingressos*0.10);
const geral = (ingressos*0.50);
const arquibancada = (ingressos*0.30);
const cadeiras = (ingressos*0.10);


let rendaTotal = (popular*5)+(geral*10)+(arquibancada*20)+(cadeiras*40);

console.log ("O jogo pode render"+ "R$:"+rendaTotal.toFixed(2));