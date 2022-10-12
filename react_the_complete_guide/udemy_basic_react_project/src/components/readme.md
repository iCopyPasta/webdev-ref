# Component Tree
Components can live underneath the root or other components

Example:  
```javascript
<App/> // <-- rendered into single HTML page via react render instruction
  <Header/>
  <Tasks/>
    <Task/>
    <Task/>
    <Task/>
```