import chai from 'chai';
import oddEven from '../app/oddEven';

const { assert, expect } = chai;

describe('Test cases for OddEven function', () => {

    describe('Input validation should tests cases', () => {
        it('should test for undefined argument', () => {
            assert.equal(oddEven(), 'Missing arguement, please provide an array of numbers')
        })
        it('should test for string arguement', () => {
            assert.equal(oddEven('yes boss'), 'String argument is not valid, please provide an array of numbers')
        })
        it('should test for integer argument', () => {
            assert.equal(oddEven(5), 'Integer argument is not valid, please provide an array of numbers')
        })
        it('should test for object argument', () => {
            assert.equal(oddEven({}), 'Object argument is not valid, please provide an array of numbers')
        })
        it('should test for empty an array', () => {
            assert.equal(oddEven([]), 'Array must not be empty')
        })
        it('should test for invalid array contents', () => {
            assert.equal(oddEven([5, 's', { name: 'Henry' }, true, 38, 8]), 'Array items must only contain numbers')
        })
    });

    describe('Odd numder tests cases', () => {
        it('should test that an "odd" property exist in returned object', () => {
            assert.property(oddEven([5, 7, 9, 3, 2, 6, 4, 9]), 'odd');
        })
        it('should test odd property value to equal an array of odd number(s)', () => {
            expect(oddEven([5, 7, 9, 3, 2, 6, 4]).odd).to.contain(3);
        })
        it('should test odd preperty value to equal empty array', () => {
            assert.lengthOf(oddEven([2, 6, 4]).odd, 0);
        })
    });

    describe('Even numders should tests cases', () => {
        it('should test for even property in returned object', () => {
            assert.property(oddEven([5, 7, 9, 3, 2, 6, 4, 9]), 'even');
        })
        it('should test even preperty value to equal an array of odd number(s)', () => {
            expect(oddEven([5, 7, 9, 3, 2, 6, 4]).even).deep.equal([2, 4, 6]);
        })
        it('should test odd preperty value to equal empty array', () => {
            assert.lengthOf(oddEven([3, 5, 7]).even, 0);
        })
    });

    describe('Tests cases to ', () => {
        it('should test for valid odd and even arrays in returned object', () => {
            assert.deepEqual(oddEven([5, 7, 9, 3, 2, 6, 4, 9]), { odd: [3, 5, 7, 9, 9], even: [2, 4, 6] });
        })
        it('should test for valid odd array with empty even array in returned object', () => {
            assert.deepEqual(oddEven([5, 7, 9, 3, 9]), { odd: [3, 5, 7, 9, 9], even: [] });
        })
        it('should test for valid even array with empty odd array in returned object', () => {
            assert.deepEqual(oddEven([2, 6, 4]), { odd: [], even: [2, 4, 6] });
        })
    });
});