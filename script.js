//  Sarcina 1
function valoareaMinima(Ion, Alina, Ana) {
    let minValue = Ion;

    if (Alina < minValue) {
        minValue = Alina;
    }

    if (Ana < minValue) {
        minValue = Ana;
    }

    return minValue;
}
console.log(valoareaMinima(23, 13, 34))

// Sarcina 2
function valoareaMaxima(Ion, Alina, Ana) {
    let maxValue = Ion;

    if (Alina > maxValue) {
        maxValue = Alina;
    }

    if (Ana > maxValue) {
        maxValue = Ana;
    }

    return maxValue;
}
console.log(valoareaMaxima(23, 13, 34))

//Sarcina 3
function varstaUnuiUtilizator(varsta) {
    if (varsta >= 18) {
        return "Esti potrivit pentru a juca acest joc";
    }
    else {
        return "Esti prea tanar pentru a juca acest joc";
    }
}
console.log(varstaUnuiUtilizator(18))

//Sarcina 4
function verificaLimita(numar, limitaInferioara, limitaSuperioara) {
    if (limitaInferioara <= numar && numar <= limitaSuperioara) {
        return "Numarul 23 se afla intre limita superioara si limita inferioara.";
    }
    else {
        return "Numarul 23 nu se afla intre limita superioara si limita inferioara.";
    }
}
const numar = 23;
const limitaInferioara = 22;
const limitaSuperioara = 32;

const rezultat = verificaLimita(numar, limitaInferioara, limitaSuperioara);
console.log(rezultat);

