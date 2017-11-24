import mocha from 'mocha';
import chai from 'chai';
// import oddEven from './oddEven';

const {assert, expect} = chai;

const items = [3,4,6,7,5,2,8];


describe('Test cases for OddEven function', () => {

  describe('Input validation should tests cases', () => {
    it('should test for undefined argument', () =>{
      assert.equal(oddEven(), 'Missing arguement, please provide an array of numbers')
    })
    it('should test for string arguement', () =>{
      assert.equal(oddEven('yes boss'), 'String argument is not valid, please provide an array of numbers')
    })
    it('should test for integer argument', () =>{
      assert.equal(oddEven(5), 'Integer argument is not valid, please provide an array of numbers')
    })
    it('should test for object argument', () =>{
      assert.equal(oddEven({}), 'Object argument is not valid, please provide an array of numbers')
    })
    it('should test for empty array', () =>{
      assert.equal(oddEven([]), 'Array must not be empty')
    })
    it('should test for invalid array contents', () =>{
      assert.equal(oddEven([ 5, 's', { name: 'Henry'}, true, 38, 8]), 'Array items must only contain numbers')
    })
  });

  describe('Odd numder tests cases', () => {
    it('should test for odd property in returned object', () => {
      assert.property(oddEven([5, 7, 9, 3, 2, 6, 4, 9]), 'odd');
    })
    it('should test odd preperty value to equal an array of odd number(s)', () => {
      expect(oddEven([5, 7, 9, 3, 2, 6, 4]).odd).values.to.contain([5, 7, 3, 9]);
    })
    it('should test odd preperty value to equal empty array', () => {
      assert.equal(oddEven([2, 6, 4]).odd, []);
    }) 
  });

  describe('Even numders should tests cases', () => {
    it('should test for even property in returned object', () => {
      assert.property(oddEven([5, 7, 9, 3, 2, 6, 4, 9]), 'even');
    })
    it('should test even preperty value to equal an array of odd number(s)', () => {
      expect(oddEven([5, 7, 9, 3, 2, 6, 4]).even).values.to.contain([4, 6, 2]);
    })
    it('should test odd preperty value to equal empty array', () => {
      assert.equal(oddEven([3, 5, 7]).even, []);
    }) 
  });

  describe('Tests cases to ', () => {
    it('should test  returned an object', () => {
      assert.deepEqual(oddEven([5, 7, 9, 3, 2, 6, 4, 9]), { odd: [3, 5, 7, 9], even: [2, 4, 6] });
    })
    it('should test  returned an object', () => {
      assert.deepEqual(oddEven([5, 7, 9, 3, 9]), { odd: [3, 5, 7, 9], even: [] });
    })
    it('should test  returned an object', () => {
      assert.deepEqual(oddEven([2, 6, 4]), { odd: [], even: [2, 4, 6] });
    })
  });

});
