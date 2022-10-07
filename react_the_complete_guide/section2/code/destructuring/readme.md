# Destructuring

Easily extract array elements or object proprties and store them in variables
Spread takes out *all* properties, etc. 

## Array Destructuring

```javascript
[a,b] = ['Hello', 'Max']
console.log(a); //Hello
console.log(b); //Max
```

### Object Destructuring
```javascript
{name} = {name: "Max", "age": 28};
console.log(name); //Max
console.log(age);; //undefined
```