//  Sarcina 1
function getValueMinimum(number1, number2, number3) {
    let minValue = number1;

    if (number2 < minValue) {
        minValue = number2;
    }

    if (number3 < minValue) {
        minValue = number3;
    }

    return minValue;
}
console.log(getValueMinimum(23, 13, 34))

// Sarcina 2
function getMaximumValue(number1, number2, number3) {
    let maxValue = number1;

    if (number2 > maxValue) {
        maxValue = number2;
    }

    if (number3 > maxValue) {
        maxValue = number3;
    }

    return maxValue;
}
console.log(getMaximumValue(23, 13, 34))

//Sarcina 3
function checkUserAge(age) {
    if (age >= 18) {
        return "Esti potrivit pentru a juca acest joc";
    }
    else {
        return "Esti prea tanar pentru a juca acest joc";
    }
}
console.log(checkUserAge(18))

//Sarcina 4
function checkLimit(number, inferiorLimit, upperLimit) {
    if (inferiorLimit <= number && number <= upperLimit) {
        return "Numarul 23 se afla intre limita superioara si limita inferioara.";
    }
    else {
        return "Numarul 23 nu se afla intre limita superioara si limita inferioara.";
    }
}
const number = 23;
const inferiorLimit = 22;
const upperLimit = 32;

const rezultat = checkLimit(number, inferiorLimit, upperLimit);
console.log(rezultat);

//Sarcina 5
function convertCurrency(value, fromCurrency, toCurrency) {
    const exchangeRates = {
        "USD": 0.92,
        "MDL": 0.05,
        "RON": 0.2
    };

    let baseAmount;
    if (fromCurrency === "EUR") {
        baseAmount = value;
    } else {
        baseAmount = value * exchangeRates[fromCurrency];
    }

    let result;
    if (toCurrency === "EUR") {
        result = baseAmount;
    } else {
        result = baseAmount / exchangeRates[toCurrency];
    }

    return result.toFixed(2);
}

const inputValue = 1;
const fromCurrency = "EUR";
const toCurrency = "USD";

const result = convertCurrency(inputValue, fromCurrency, toCurrency);
console.log(`${inputValue} ${fromCurrency} sunt echivalentul a ${result} ${toCurrency}`);

//Sarcina 6
function checkSquare(side1, side2, side3, side4) {
    if (side1 === side2 && side2 === side3 && side3 === side4) {
        return "Dreptunghiul este un patrat.";
    } else {
        return "Dreptunghiul nu este un patrat.";
    }
}

let side1 = 3
let side2 = 3
let side3 = 6
let side4 = 3

let rezultatt = checkSquare(side1, side2, side3, side4);
console.log(rezultatt);

//Sarcina 7
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Luni";
        case 2:
            return "Marti";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sambata";
        case 7:
            return "Duminica";

        default:

            return "Numar invalid pentru ziua saptamanii.";
    }
}
let dayNumber = 6;
let dayName = getDayName(dayNumber);

console.log(dayName);