var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var factorial = require('./factorialCalculation.js');

describe('To Check factorial of a number', function() {
  it('factorial of 5 should be 120', function() {
    expect(factorial(5)).to.equal(120);
  });
});

describe('To Check factorial of a large number', function() {
  it('factorial of 1000 should be infinity', function() {
    expect(factorial(1000)).to.equal(Infinity);
  });
});