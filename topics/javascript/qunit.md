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
* Create a test runner HTML file (e.g. test-runner.html)
  * Must reference the qunit.js/.css framework files, the application JS file(s) and the JS files containing the actual tests.
  
## Basic test
```javascript
test('my first test', function() {
  ok(true);
});
```
* Consists of test name, and function containing the test assertions.
