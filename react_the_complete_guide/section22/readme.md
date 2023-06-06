# Deploying React Apps

## Module Content

* Deployment Steps & Pitfalls
* Server-Side Routing vs. Client-side Routing

## Deployment Steps
* Test Code
  * unit test + play-around
  * error handling
* Optimization Code
  * lazy-loading
  * useMemo
* Build App for Production-Ready bundle (minified)
 * ready for server
* Upload Production Code to Server
* Configure Server/Hosting Provider

## Lazy Loading
* Load code only when its needed

| Problem | Active | Passive |
|----------- | ----------- | ----------- |
|Import Statements | immediately resolved/evaluated before anything is shown on screen | on function load/reference (when needed) |

* 
```javascript
import { lazy, Suspense } from 'react';

const PostPage = lazy(()=> import("./pages/Post"));

{
element:      <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>, 
loader: ()=> import('./pages/Blog').then(module =>module.loader())
}
```

* A React SPA is a "Static Website"
* Only HTML, CSS & JavaScript
* No Code that must be executed on the server - all code is parsed by browser, executed on visitors
* A Static Site Host is needed
