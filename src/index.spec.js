import assert from 'power-assert';

import { greet } from '../src';


describe('greet()', () => {

  it('shoud return greeting.', () => {
    assert.equal(greet('Alice'), 'Hello, Alice!!');
    assert.equal(greet('Bob'), 'Hello, Bob!!');
  });

  it('shoud return default greeting, when none name.', () => {
    assert.equal(greet(), 'Hello, Anonymous!!');
  });

});
