//console.log("Hello World")
const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we include fromEuroToDollar here as well because it needs to be exported
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 106.6;
    valueInYen = +valueInYen.toFixed(1);
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.00625488663;
    valueInPound = +valueInPound.toFixed(1);
    return valueInPound
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };