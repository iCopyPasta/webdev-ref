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
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src"
  ]
}
```

* target
  * controls the target javascript version to which output will conform
* lib
  * influences which types are known out of the box
* allowJs
  * can import from plain JavaScript without import errors
* strict
  * influences non-implicit "any" anywhere
* jsx
  * JSX is supported

**Note**: project settings might have multiple compilation steps (i.e. babel)
 