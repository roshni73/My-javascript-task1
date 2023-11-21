//write functions for basic calculations.

const calculation = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b === 0) {
            return ;
        }
        return a / b;
    }
};
console.log(calculation.add(5, 3));
console.log(calculation.subtract(10, 4)); 
console.log(calculation.multiply(7, 6)); 
console.log(calculation.divide(20, 5)); 
console.log(calculation.divide(10, 2)); 



