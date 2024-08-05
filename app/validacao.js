function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if(chuteForInvalido(numero)) {
        console.log("valor inválido");
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log("Valor inválido");
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}
function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}
