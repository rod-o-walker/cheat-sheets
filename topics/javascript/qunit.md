---
layout: topic-page
topic: javascript
permalink: /javascript/qunit
title: QUnit
summary: Unit testing framework built by JQuery
---

## Intro
Similar to server side testing frameworks like JUnit and NUnit


## How To Run
Create a test runner HTML file (e.g. test-runner.html), which includes references to the qunit.js/.css framework files, the application JS file(s), and the JS files containing the actual tests.


## Basic test
``` javascript
test('my first test', function() {
  ok(true);
});
```
Call the QUnit test() function, passing in the name of the test, and function to execute the test assertions.


## Organizing tests
In the JS file with the QUnit tests, insert a call to module() function, passing in the module name, to indicate that all tests follow after that are part of the module.
``` javascript
module('module 1');
test('test 1', function() { ... });
module('module 2');
// etc.
```
<br/>
The module function can also take an object, that includes a setup and/or teardown function that get executed before/after each test associated with the module.
```javascript
module('module 1', {
  setup: function() {
    // stuff to do before each test
  }, 
  teardown: function() {
    // stuff to do ater each test
  }
});
```

