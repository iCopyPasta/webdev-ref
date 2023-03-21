# Testing React Apps
* Automated Testing

## Module Content
* What is "Testing"? And Why? 
* Understanding Unit Tests
* Testing React Components & Building Blocks

## What is "Testing" ? 
* Manual Testing - we write code to implement feature, and write code and preview/test in browser
  * error-prone: it's hard to test all possible combinations and scenarios
  * especially important as more and more layers/features exist
* Automated Testing - code that tests your code with expectations
  * can test everything
  * can test the individual building blocks of your app
  * allows you to test ALL building blocks at once


## Different Kinds of Automated Tests
* Unit Tests
  * writing tests for smallest possible unit (functions/components), in isolation
  * projects typically contain dozens/hundreds of unit tests
* Integration Tests
  * Test the **combination** of multiple building blocks
  * projects typically contain a couple of integration tests
* End-to-End (E2E) Tests
  * Testing entire workflows - complete scenarios in your app as the user would experience them

## What/How to Test

* What
  * test the different building blocks
  * *unit tests* - the smallest building blocks that make up your app
    * should fail for a clear reason
* How
  * Test success and errors cases
  * Test rare (but possible) results

## Required Tools and Setup
* We need a tool for running our tests and asserting the results
  * Popular libray: Jest
  * (especially for React)
* We ned a tool for "simulating" (rendering) our React app/components
  * React Testing Library (acts as browser)
* Both tools are already setup for you when using create-react-app

### Conventions
* use ```.test.js``` as an extensioni to your Module.js files

#### Writing Tests - The Three A's
* Arrange/ "Setup"
  * set up the test dta, test conditions and test environment
* Act
  * run logic that should be tested (e.g. execute function)
* Assert
  * have a look at the output and see if it matches expected results

## Misc References
[https://www.w3.org/TR/html-aria/#docconformance](https://www.w3.org/TR/html-aria/#docconformance)

General Javascript testing tool  
Link: [http://jestjs.io](http://jestjs.io)
* using matchers
* async code
* expectations
* promises
* mocking functions
* misc guides

Family of packages helps you test UI components in a user-centric way.  
Link: [https://testing-library.com/docs/](https://testing-library.com/docs/)
* ecosystem
  * user-event
  * eslint
  * react-hooks testing library (especially for testing Custom hooks!)