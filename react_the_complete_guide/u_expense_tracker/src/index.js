import ReactDOM from 'react-dom/client';

// wouldn't work in normal javascript
// in a *nodejs* project, it does work!

// ignore .js extension
// respect .css extensions
import './index.css';
import App from './App'; // <-- is a component

// the location where ReactJS injects our code
const root = ReactDOM.createRoot(document.getElementById('root'));
// looks like HTML inside JavaScript
// normally wouldn't work in plain JavaScript
// transformed before delivered to browser

// index.js is the first file to be executed
// <div> is the most comment root element
// JSX syntax
root.render(<App />);
