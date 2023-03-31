# React + TypeScript

* Adding type safety to React APps

## Module Content
* What is TypeScript and why we'd want to use it
* TypeScript Basics
* Combining React & TypeScript

## TypeScript Explained
* A programming language that extends JavaScript syntax - 'superset'
* Base JavaScript still exist
* Not a library
* Adds static typing to JavaScript
  * JavaScript on its own is dynamically typed
* Typescript compiler
  * Typescsript does not run in the browser - compiles to JavaScript

## Installation
```bash
npm install typescript
```

Invoking Compiler
```bash
npx tsc
```

### React and TypeScript

In React Projects with the template of TypeScript, compliation happens automatically.
New Project:
```bash
npx create-react-app my-app --template typescript

```

Existing (JS-only) project:
```bash
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

"@types" packages act as a 'translation bridges' between vanilla JS and typescript projects - compiler for TypeScript

react/react-dom are made for *vanilla* JavaScript, whereas "@types/react" and "@types/react-dom" tell TypeScript/IDE what types those objects support.
```json
{
  "@types/jest": "^27.5.2",
  "@types/node": "^16.18.23",
  "@types/react": "^18.0.31",
  "@types/react-dom": "^18.0.11",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
}
```

### TypeScript Config
* Expects tsconfig.json in folder

