# React Basics & Working with Components

ReactJS is all about "Components" - all user interfaces in the end are made up of components

Reusable building blocks in user interface.
*def:* A combination of HTML Code, SCSS/CSS, and JavaScript for logic if required.  

HTML and JavaScript are more important, CSS makes looks it pretty *after the fact*.  

A component is re-usable, but not required to be used multiple times.  
* Don't repeat yourself

Allows for a *separation of concerns*  
* Smaller codebase - not doing too many things in the same function

React uses a "Declarative Approach"
* You will not tell ReactJS 'How to place specifically here'
* Define the desired *end state(s)* and let React figure out the actual JavaScript DOM instructions
* "Build your own, Customer HTML Elements*

# JSX
* HTML inside JavaScript
  * JSX = **J**ava**S**cript**X**ML
  * Written by React Team and is taken as input to node/npm engine
  * Developer friendly syntax

# Best Practices
* One file per component
  * react project has dozens/hundreds of components (normal!)
* Common naming for files is CaptialCamelCase
  * filename should tells logic and html code should live here
  * To React Parser, lower case is built-in HTML, captial is custom/developer-made

# Pathway
* create a component (which is just a fucntion returning JSX)
* export it
* import in the file where you want to use it
* can use like an HTML element in another function

# Passing Data with "Props"
Can pass data to custom component by adding attribute(s).  

**Prop**ertie**s**