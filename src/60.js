function calculateSum(operands) {
    let result = 0;
    operands.forEach(operand => {
        if (typeof operand === 'number') {
            result += operand;
        }
    });
    return result;
}

function multiply(operands) {
    let result = 1;
    operands.forEach(operand => {
        if (typeof operand === 'number') {
            result *= operand;
        }
    });
    return result;
}
