function startApp() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    solicitarValores(readline);
}
function solicitarValores(readline) {
    readline.question('Insira o numero de 5 digitos: ', voltarnumero=>{
    numeroPalindrome (voltarnumero,readline);
    });
}
function numeroPalindrome(numero, readline) {
  const invertida = String(numero).split('').reverse().join('');
  if(numero==invertida){
   console.log("O numero: "+numero+" é um Palindrome.Pois ao invertelo fica: "+invertida)
  }else{
    console.log("O numero: "+numero+" não é um Palindrome. Pois ao invertelo fica: "+invertida)
  }
  readline.close();
}
startApp();