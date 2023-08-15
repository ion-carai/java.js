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

//Sarcina 5
function convertCurrency(value, fromCurrency, toCurrency) {
    const exchangeRates = {
        "USD": 18.02,  
        "MDL": 21.12,  
        "RON": 4.01    
    };

    let baseAmount;
    if (fromCurrency === "EUR") {
        baseAmount = value;
    } else {
        baseAmount = value / exchangeRates[fromCurrency];
    }

    let results;
    if (toCurrency === "EUR") {
        results = baseAmount;
    } else {
        results = baseAmount * exchangeRates[toCurrency];
    }

    return results.toFixed(2);
}

const inputValue = 10; 
const fromCurrency = "USD"; 
const toCurrency = "MDL";   

const results = convertCurrency(inputValue, fromCurrency, toCurrency);
console.log(`${inputValue} ${fromCurrency} sunt echivalentul a ${results} ${toCurrency}`);



//Sarcina 6
function checkRectangleType(length, width) {
    if (length === width) {
        return "Dreptunghiul este un pătrat.";
    } else {
        return "Dreptunghiul nu este un pătrat.";
    }
}

let length = 5;
let width = 5;

let result = checkRectangleType(length, width);
console.log(result);

//Sarcina 7
function getDayName(dayNumber) {
    let daysOfWeek = [
        "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"
    ];

    if (dayNumber >= 1 && dayNumber <= 7) {
        return daysOfWeek[dayNumber - 1];
    } else {
        return "Numărul introdus nu corespunde unei zile de săptămână.";
    }
}

let dayNumber = 3;

let dayName = getDayName(dayNumber);
console.log(dayName);
