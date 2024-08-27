function imposto() {
  let salario = prompt("Digite o seu salario seu pobre");
  while (salario <= 0 || salario.trim === "" || isNaN(salario)) {
    salario = prompt("Valor ivalido, digite de novo burrão");
  }
  let salarioliquido;
  salario = parseFloat(salario);
  if (salario <= 2259.2) {
    alert("A taxa é isenta no teu caso");
  } else {
    if (salario < 2826.65) {
      alert("Você pagara 7,5% de imposto de renda");
      salarioliquido = salario - salario * 0.075;
      alert(`o seu salario será de ${salarioliquido.toFixed(2)}` );
    } else {
      if (salario < 3751.05) {
        alert("Você pagara 15% de imposto de renda");
        salarioliquido = salario - salario * 0.15;
        alert(`o seu salario será de  ${salarioliquido.toFixed(2)}`);
      } else {
        if (salario < 4664.68) {
          alert("Você pagara 22,5% de imposto de renda");
          salarioliquido = salario - salario * 0.225;
          alert(`o seu salario será de  ${salarioliquido.toFixed(2)} `);
        } else {
          alert("Voce paga pagara 27,5% de imposto, FAZ O L");
          salarioliquido = salario - salario * 0.275;
          alert(`o seu salario será de ${salarioliquido.toFixed(2)}`);
        }
      }
    }
  }
}

function tristeza(){
 let cAD = prompt("Digite o tamanho do cateto adjacente");
 let hiputenusa = prompt("Digite o valor de hipotenusa");
 let cOT = prompt("Digite o valor do cateto oposto");
 while(cAD <= 0 || isNaN(cAD) || cAD.trim === ""){
    cAD = prompt("Digite novamente, você é burro");
 }
 while(hiputenusa <= 0 || isNaN(hiputenusa) || hiputenusa.trim === ""){
    hiputenusa = prompt("Digite novamente, você é burro");
 }
 while(hiputenusa<= 0 || isNaN(hiputenusa) || hiputenusa.trim === ""){
    hiputenusa = prompt("Digite novamente, você é burro");
 }
 cAD = parseFloat(cAD);
 hiputenusa = parseFloat(hiputenusa);
 cOT = parseFloat(cOT);
 if(hiputenusa <= cAD || hiputenusa <= cOT){
    alert("Valor ivalido, por favor digite novamente");
 } else{
    let tanjente, sen, cos;
    tanjente = cOT/cAD;
    sen = cOT/hiputenusa;
    cos = cAD/hiputenusa;
    alert(`Aqui está a tanjente ${tanjente.toFixed(2)}`);
    alert(`Aqui está o seno ${sen.toFixed(2)}`);
    alert(`Aqui está o cosseno ${cos.toFixed(2)}`);
 }
} 

