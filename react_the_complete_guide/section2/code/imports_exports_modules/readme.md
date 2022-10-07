# Exports & Imports (Modules)

Can import content from another.

JavaScript files know their dependencies

## person.js
```javascript
// person.js
const person = {
    name: 'Pablo';
}

export default person; 
// if we import *something*, it will be person
```

## utility.js
```javascript
export const clean = () => {
    //body
}

export const baseData = 10;
```

## app.js
```javascript
import person from './person.js'
import prs from './person.js'
//auto picks the default, you choose the name

// "named" imports
import {baseData} from './utility.js'
import {clean} from './utility.js'
// you must give the *exact name* for pointer
// Can do alias via "as"
import {smith as Smith } from './utility.js'
import * as bundled from './utility.js'
// acts as properties
// bundled.<>
```

This pattern isn't always followed, need to have 'compilation' pattern

