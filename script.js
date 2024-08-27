function exercicio1(){
    let nota = prompt("Digite uma nota de 1 a 10:\n");
    console.log("A nota digitada foi essa\n", nota);
    while (nota>10 || nota<1 || isNaN(nota) || nota.trim() ===''){
        nota = prompt("Valor inválido, digite novamente\n");
    }
    nota = parseInt(nota);
    alert("Nota válida\n");
    console.log("Nota válida\n");
}

function exercicio2(){
    let NomeDoUsuario = prompt("Digite seu nome:\n");
    let SenhaDoUsuario = prompt("Digite a sua senha:\n");
  
    while(NomeDoUsuario.trim()===''){
       NomeDoUsuario = prompt("Valor vazio, digite novamente:\n");
    }
    while(SenhaDoUsuario.trim()==='' || SenhaDoUsuario==NomeDoUsuario){
       SenhaDoUsuario = prompt("Valor vazio, por favor digite sua senha novamente:\n");
    }
    alert("Cadastro aceito");
    console.log("Cadastro aceito");
}
  
function exercicio3(){
    let nota = prompt("Digite o número de notas: ");
    while(nota<1 || nota.trim()==='' || isNaN(nota)){
      nota = prompt("Valor inválido digite novamente: ");
    }
    nota = parseInt(nota);
    let soma = 0;
    
    for (let i = 0; i < nota; i++) {
    let nota1 = prompt(`Digite a nota ${i + 1}: `);
    while(nota1<0 || nota1.trim()==='' || isNaN(nota1)){
      nota1 = prompt("Nota inválida, digite novamente: ");
      
    }
    nota1 = parseFloat(nota);
    soma += nota1;
    }
    
    let media = soma / nota;
    
    alert(`A média aritmética é: ${media.toFixed(2)}`);
      
}
    

function exercicio4() {
    let numero = prompt("Digite um número inteiro");
  
    while (isNaN(numero) || numero.trim() === '' || !Number.isInteger(parseFloat(numero))) {
      numero = prompt("Número inválido ou foi digitado um espaço vazio, por favor digite um número inteiro novamente");
    }
  
    numero = parseInt(numero);
  
    if (numero <= 1) {
      console.log(`${numero} não é primo.`);
      return;
    }
  
    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        isPrimo = false;
        break;
      }
    }
    if (isPrimo) {
      alert(`${numero} é um número primo.`);
      console.log(`${numero} é um número primo.`);
    } else {
      alert(`${numero} não é um número primo.`);
      console.log(`${numero} não é um número primo.`);
    }
}

