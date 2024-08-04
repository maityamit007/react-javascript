let taxCalculate = (amount) => amount - amount*.1;
let rebateAmount = (amount) => amount + amount*.05;

let compose = (fns) => (...args) => fns.reduce((acc, currentVal) => currentVal(acc), args[0]);

let calculate = (...fns) => compose(fns); 

let amountAfterTax = calculate(taxCalculate, rebateAmount);
console.log(amountAfterTax(50000, 6000))
