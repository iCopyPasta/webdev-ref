# Section 4

# Composition/Wrapper Components
* must use ```props.children```
* for styling, must be fulled declared by you

# Listening to Events & Working w/ Event Handlers
Manipulating and transitioning between 'states'

* Who calls the defined function/```<Tag/> ```?
* We provide these as "HTML" to JSX elsewhere
* in those JSX, they're like function calls
* so we "call" them when JSX is evaluated by ReactJS up until there is no JSX markup to be evaluated
* started by index.js via ```<App/>```
* React goes through initial render, but doesn't go through the process again afterwards
* So how do we tell React something changed and certain part of the vDOM should be re-eval'd?

## State

* if you have data, which might change, and where changes to that data should be reflected on that user interface, you need state - regular variables will not do
* separated on a per-component instance: 
  * managed independently by React
  * registers for a component instance - every instance gets its own state

* A state can be updated other than user events
  * HTTP requests are also a good candidate for updating state
  * A timer via ``` setTimeout()```
ReactJS uses "hooks", denoted with the naming convention ```use```

```javascript
import React, { useState } from 'react';
```