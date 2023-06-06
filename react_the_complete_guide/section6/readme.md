# Styling React Components

* Conditional & Dynamic Styles
  * How to switch styles based on conditionals
* Scoping Stlying
  * only affect a Component
  * Styled Components
* CSS Modules

## In-line styles
* Take the highest priority in CSS3 and therefore must be respected if written in-line
* Remember to use objects for CSS style 
```javascript
<input style={{"key": "value"}}>
```
  * where the "key" can be quoted and use the CSS property OR
  * use the React key equivalent, normally camelCase

## Adding styles dynamically
* ``` `` ```template literal - constructs a string
* acts like Python's formatter
```python
variable="hello"
f'{variable}'
# hello
```

* Can use to declarative state the final state of rendered styling
```javascript
<div className={`form-control ${!isValid ? 'invalid': ''}`}>
```

where you can continually add new ```${}```

### Scoping Styling to Styled *Components*

* "Styled Components" Package
  * Styles are attached to the components only
  * ```bash
    npm install --save styled-components
    ``` 
* Should see an update in ```package.json```
* 
```json
"dependencies": {
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.5.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "4.0.1",
    "styled-components": "^5.3.6",
    "web-vitals": "^0.2.4"
  },
```
  * ensure unique class names:
  ```html
    <button type="submit" class="sc-AxjAm hHfnXX">
  ```

* Can write all the 'inputs' via the following manner:
```javacript
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);

  @media(min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }`;

```
* props are propagated with the appropriate calls
(auto-magic?)

## Using CSS Modules

* requires a few changes
  * react 2.0+
  * all CSS files are named via the syntax/convention:
    * ```ComponentName}.module.css```
    * ```Button.module.css
  * use the "styles" import 
    ```javascript
    import styles from "./Button.module.css";
    ```
  * use the prop object reference to utilize a 'signal'
  ```html
      <button type={props.type} className={styles.button} onClick={props.onClick}>
  ```
    * returns a unique hash
    * 
    ```html
    <button type="submit" class="Button_button_2lgkF"...> 
    ```

  * access those classes as properties on the imported 'styles' objects  
Citation: [https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)