# Client and Server Components

## Server Components
* React now gives you the flexibility to choose where to render your components based on their purpose
* give better leverage to use server infrastructure
* keep JavaScript bundle size small
* initial page is loaded fastaer
* base client-side runtime is cacheable and predictable
* SEO-friendly
* all components inside the App Router are Server Components by default

## Client Components
* add client-side interactivity to your application
* In NextJS, they are pre-rendered and hydrated on the client
* "use client" directive separates the boundary


## When to use each

| What do you need to do?                                                                              | Server Component | Client Component |
| ---------------------------------------------------------------------------------------------------- | ---------------- | ---------------- | 
| Fetch Data                                                                                           | &#9745;          |                  |
| Access backend resources (directly)                                                                  | &#9745;          |                  |
| Keep sensitive information on the server (access tokens, API keys, etc.)                             | &#9745;          |                  |      
| Keep large dependencies on the server/reduce client-side JavaScript                                  | &#9745;          |                  |
| Add interactivity and eventListeners ( ```onClick()```, ```useReducer()```, ```useEffect()```, etc.) |                  | &#9745;          |
| Use browser-only APIs                                                                                |                  | &#9745;          |
| Use custom hooks that depend on state, effects, or browser-only APIs                                 |                  | &#9745;          |
| React Class Components                                                                               |                  | &#9745;          |


# Patterns

## Moving Client Components to the Leaves
* recommend moving Client components to the leaves of your component tree where possible

```jsx
// SearchBar is a Client Component
import SearchBar from './searchbar';
// Logo is a Server Component
import Logo from './logo';
 
// Layout is a Server Component by default
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
      </nav>
      <main>{children}</main>
    </>
  );
}
```

## Composing Client and Server Components
* On the server, React renders *all* Server Components *before* sending the results to the client
  * Server Components nested inside Client Components
  * Client Components encountered during this stage are skipped
* on the client, React renders Client Components and *slots in* the rendered result of Server Components, merging the work done on the server and client
  * if any server components are nested inside a Client Component, their rendered content will be placed correctly within the Client Component

## Nesting Server Components inside Client Components
* this is unsupported.
* You cannot import a Server Component into a Client Component
### Recommended: Passing Server Components to Client Components as props