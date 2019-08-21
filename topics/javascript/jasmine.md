---
layout: topic-page
topic: javascript
permalink: /javascript/jasmine
title: Jasmine
summary: Unit testing using Jasmine BDD framework
---

## Intro
Jasmine is a BDD type testing framework, and is currently most popular framework used for doing all kinds of JavaScript client testing - <https://jasmine.github.io/>

Jasmine is very flexible in how it reports the test results, allowing you to plug-in different reporter implementations, such as HTML, XML, etc.

Tests are normally referred to as specs. For example, the tests for module.js are often kept in module.spec.js.

## Spec structure
Create blocks of specs using the describe() function, and these blocks can be nested. 
``` javascript
describe('Block', function() {
  // nested blocks and tests
});
```

Specs themselves are created using the it() function.
``` javascript
describe('Block', function() {
  it('spec', function() {
    // code and assertions
  })
});
```

The first argument of describe() and it() functions is description string. Idea is that these strings get concatenated together to make complete sentences, which can then act as documentation. 
```javascript
// "User when new should have blank user-name"
describe('User', function() {
  describe('when new', function() {
    it('should have blank user-name', function() {
      // assertions
    });
  }
});
```

## beforeEach() and afterEach()
beforeEach() and afterEach() functions are setup and teardown functions that are executed before/after each of the it() functions are executed.
```javascript
describe('User', function() {
  var user;
  
  beforeEach(function() {
    user = new User();
  });
  afterEach(function() {
    user.delete();
  });
  
  // specs
});
```

## Assertions and matchers
An assertion in Jasmine is done using the expect() function, which is passed the value that is to be evaluated for assertion. You then chain to it a matcher function to complete the assertion.
```javascript
expect(x).toEqual(y);
```

Jasmine has a number of built-in matchers:
```javacript
// does deep comparison check, including array and object comparison
expect(x).toEqual(y)
// does simple equality check, using ===
expect(x).toBe(y);
// uses RegEx pattern to compare
expect(x).toMatch(pattern);
// checks for items in an array
expect(x).toContain(y);
// checks for particular exception getting thrown
expect(function() {
}).toThrow(ex);

// rest of these are very self explanatory
expect(x).toBeDefined();
expect(x).toBeUndefined();
expect(x).toBeNull();
expect(x).toBeTruthy();
expect(x).toBeFalsy();
expect(x).toBeLessThan(y);
expect(x).toBeGreaterThan(y)
```

Each matcher can be negated by inserting not
```javacript
expect(x).not.toEqual(y);
```
