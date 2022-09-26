// pull in whichever assert library you'd like to use
const assert = require('assert');

// pull in the main functions that will be tested
const functionCollection = require('../hello-world.js');
const sayHello = functionCollection.sayHello;
const sayGoodbye = functionCollection.sayGoodbye;

// write the mocha describe() and it() function calls that will implement the test(s)

describe('sayHello Tests', () => {

  it('returns the expected salutation from sayHello', () => {
    const expected = 'Hello, World';
    const actual = sayHello('World');
    assert.strictEqual(actual, expected);  
  });
  
  it('returns the expected salutation from sayHello for a second example', () => {
    const expected = 'Hello, World!!';
    const actual = sayHello('World!!');
    assert.strictEqual(actual, expected);  
  });  

});

describe('sayGoodbye Tests', () => {

  it('returns the expected salutation from sayGoodbye', () => {
    const expected = 'Goodbye, World';
    const actual = sayGoodbye('World');
    assert.strictEqual(actual, expected);  
  });
  
  it('returns the expected salutation from sayGoodbye for a second example', () => {
    const expected = 'Goodbye, World!!';
    const actual = sayGoodbye('World!!');
    assert.strictEqual(actual, expected);  
  });  

});
