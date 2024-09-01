function IPRF() {
    let salario = prompt("Digite o seu salario, será calculado a taxa que você tem que pagar de acordo com seu salario");
    while (salario <= 0 || salario.trim === "" || isNaN(salario)) {
        salario = prompt("Valor ivalido, digite novamente");
    }
    let salarioliquido;
    salario = parseFloat(salario);
    if (salario <= 2259.20) {
        alert("A taxa é isenta no seu caso");
    } else {
        if (salario < 2826.65) {
            alert("Você pagara 7,5% de imposto de renda");
            salarioliquido = (salario - 2259.20) * 0.075;
            taxa = salario - salarioliquido;
            alert(`A taxa que você tera que pagar do seu salario é ${taxa.toFixed(2)} e o salario ja descontado é de ${salarioliquido.toFixed(2)}`);
        } else {
            if (salario < 3751.05) {
                alert("Você pagara 15% de imposto de renda");
                salarioliquido = (salario - 2259.20) * 0.15;
                taxa = salario - salarioliquido;
                alert(`A taxa que você tera que pagar do seu salario é ${taxa.toFixed(2)} e o salario ja descontado é de ${salarioliquido.toFixed(2)}`);
            } else {
                if (salario < 4664.68) {
                    alert("Você pagara 22,5% de imposto de renda");
                    salarioliquido = (salario - 2259.20) * 0.225;
                    taxa = salario - salarioliquido;
                    alert(`A taxa que você tera que pagar do seu salario é ${taxa.toFixed(2)} e o salario ja descontado é de ${salarioliquido.toFixed(2)}`);
                } else {
                    alert("Voce paga pagara 27,5% de imposto de renda");
                    salarioliquido = (salario - 2259.20) * 0.275;
                    taxa = salario - salarioliquido;
                    alert(`A taxa que você tera que pagar do seu salario é ${taxa.toFixed(2)} e o salario ja descontado é de ${salarioliquido.toFixed(2)}`);
                }
            }
        }
    }
}

function trigonometria() {
    alert("Aqui está uma calculadora trigonometrica de triangulos retangulos somente, então digite o valor da gipotenusa tem que ser menor que os catetos");

    let cAD = prompt("Digite o tamanho do cateto adjacente");
    let hipotenusa = prompt("Digite o valor de hipotenusa");
    let cOT = prompt("Digite o valor do cateto oposto");

    while (cAD <= 0 || isNaN(cAD) || cAD.trim === "") {
        cAD = prompt("Digite novamente, valor invalido");
    }

    while (hipotenusa <= 0 || isNaN(hipotenusa) || hipotenusa.trim === "") {
        hipotenusa = prompt("Digite novamente, valor invalido");
    }

    while (cOT <= 0 || isNaN(cOT) || cOT.trim === "") {
       cOT = prompt("Digite novamente, valor invalido");
    }

    cAD = parseFloat(cAD);
    hipotenusa = parseFloat(hipotenusa);
    cOT = parseFloat(cOT);

    if (hipotenusa <= cAD || hipotenusa <= cOT) {
        alert("Valor ivalido, por favor digite novamente");
    } else {
        if ((hipotenusa * hipotenusa) != (cAD * cAD) + (cOT * cOT)) {
            alert("Digite novamente valor invalido, só da para calcular se for triangulo retangulo");
        } else {
            let tanjente, sen, cos;
            tanjente = cOT / cAD;
            sen = cOT / hipotenusa;
            cos = cAD / hipotenusa;
            alert(`Aqui está a tanjente ${tanjente.toFixed(2)}`);
            alert(`Aqui está o seno ${sen.toFixed(2)}`);
            alert(`Aqui está o cosseno ${cos.toFixed(2)}`);
        }
    }
} 