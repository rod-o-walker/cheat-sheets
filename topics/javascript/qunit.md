---
layout: topic-page
topic: javascript
permalink: /javascript/qunit
title: QUnit
summary: Unit testing framework built by JQuery
---

## Intro
Similar to server side testing frameworks like JUnit and NUnit.

API page is available here - <https://api.qunitjs.com/>


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

## DOM integration
Use JQuery, or vanilla JS, to access and check for DOM elements.
``` javascript
test('DOM test', function() {
  // check element exists
  strictEqual($('#myDiv').length, 1);
  // check text in element
  strictEqual($('#myDiv').text(), 'some text');
});
```
<br/>
Testing for DOM elements requires adding those elements to the DOM, which is usually done in the setup function. However, that means will also need to clean-up added elements in the teardown function. To avoid doing the teardown work, you can do DOM manipulation work inside a specific QUnit div, with id="qunit-fixture", and QUnit will clear out this div before each test is executed.


## QUnit events
QUnit has number of custom events that can hook into:
```javascript
QUnit.begin = function() { ... };
QUnit.end = function() { ... };
QUnit.moduleStart = function() { ... };
QUnit.moduleDone = function() { ... };
QUnint.testStart = function() { ... };
QUnit.testDone = function() { ... };
// this is run each time an assert function is executed
QUnit.log = function() { ... };
```
These are helpful for implementing testing within Continuous Integration (CI) pipelines.


## Asynchronous testing
QUnit has few features to acommodate testing asynchronous functionality:
1. stop()/start() functions 
* stop() causes QUnit to pause until start() call is made, which is usually done within a callback of some asynchronous functionality.
* if functionality includes multiple bits of asynchronous code, can include a count parameter to stop() to indicate how many starts should wait for.
    
    ```javascript
    test('asynch test', function() {
      stop(2);
      asynchMethod(function() {
        start();
      });
      asynchMethod(function() {
        start();
      });
      // some asserts
    });
    ```

2. asynchTest()
* if use asynchTest() in place of test(), then can avoid having use stop() function, though start() calls are still required.
    
    ```javascript
    asynchTest('asynch test', function() {
      asynchMethod(function() {
        start();
      });
      // some asserts
    });
    ```

## NoGlobals
Inside the QUnit test page there is "noglobals" checkbox. When checked, this will fail any test that introduces a global variable.
```javascript
// this test will fail when noglobals is checked
test('test 1', function() {
  globalVar = 1;
}
```

## NoTryCatch
By default, QUnit wraps all tests inside a try/catch block. As a result, if the code being tested includes an uncaught exception, it will not make it through to the browser. Checking the notrycatch option on the QUnit test page will change this behavior.


## Expected asserts
You can tell QUnit how many assert calls are expected, and if the number of asserts called does not match the value, the test will fail. This is beneficial when doing asynchronous code.
There are two ways to do this:
1. expect()

  ```javascript
  // this test will fail because only includes one assert, but expects two
  test('test 1', function() {
    expect(2);
    ok(true);
  });
  ```

2. parameter in the test() function

  ```javascript
  // this test will pass
  test('test 1', 2, function() {
    ok(true);
    ok(true);
  }
  ```
