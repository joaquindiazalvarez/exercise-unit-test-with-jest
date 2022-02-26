const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test('3,5 Euro should be 4.2 dollars', function(){

    expect(fromEuroToDollar(3.5)).toBe(4.2);
});
test('1 Euro should be 1.2 Dollar', () =>{

    expect(fromEuroToDollar(1)).toBe(1.2);
})
test('1 Dollar should be 153.38 Yen', () =>{

    expect(fromDollarToYen(1)).toBe(106.6);
});
test('1 Yen should be 102.32 Pounds', () =>{

    expect(fromYenToPound(1)).toBe(0);
});
test('1 Euro should be 127.9 Yen', () =>{
    let result = fromDollarToYen(fromEuroToDollar(1));
    expect(result).toBe(127.9);
});
test('1 Euro should be 0.8 Pound', () =>{
    let result = fromYenToPound(fromDollarToYen(fromEuroToDollar(1)));
    expect(result).toBe(0.8);
});

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}