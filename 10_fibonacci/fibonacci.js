const fibonacci = function(n) {
    if (n < 0) {return 'OOPS';}
    if (n == 0 ) {return 0;}
    return n < 3 ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
};

// Do not edit below this line
module.exports = fibonacci;
