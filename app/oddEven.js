'use strict'

const oddEven = (args) => {
    const oddNumberArray = [],
        evenNumberArray = [],
        wrongInputArray = [];

    if (typeof args === 'undefined') {
        return 'Missing arguement, please provide an array of numbers';
    }
    if (!Array.isArray(args)) {
        const argType = typeof args;
        return `${(argType === 'number' ? 'Integer' : argType[0].toUpperCase().concat(argType.slice(1)))} argument is not valid, please provide an array of numbers`;
    }
    if (args.length === 0) {
        return 'Array must not be empty';
    }

    args.filter((number) => {
        if (typeof number !== 'number') {
            wrongInputArray.push(number);
        }
    });
    if (wrongInputArray.length !== 0) {
        return 'Array items must only contain numbers';
    }
    args.map((number) => {
        if (number % 2 === 0) {
            evenNumberArray.push(number);
        } else {
            oddNumberArray.push(number);
        }
    });
    return { 'odd': oddNumberArray.sort((a, b) => a - b), 'even': evenNumberArray.sort((a, b) => a - b) };
};

export default oddEven;