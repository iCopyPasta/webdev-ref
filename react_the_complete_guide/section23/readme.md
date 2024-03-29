# A (Pretty Deep Dive) Introduction to NextJS

* Preparing React Apps for Production
* A Framework building on React

## Module Content

* What is NextJS? Why? Why just ReactJS isn't enough (potentially)
* File-based Routing & Page Pre-rendering
* Full Stack
* Data Fetching & Adding an API
  * Sample Meetups


## What is NextJS?
* large scale production-ready made easier
* A fullstack framework for ReactJS
* Framework
  * interactive, complex user-interfaces (Component, state, props)
* Note: Framework has more features than library
  * clear rules and guidance on file structure
* NextJS solves common problems and makes building React apps easier
  * Routing
  * Authentication
  * Search Engine Optimization
  * File-Based Routing
  * FullStack
  * etc.
![NextJS](./NextJSFramework.png)
* 

### Key Feature: Built-In Server-Side Rendering (Improved SEO)
* problem with client-side
  * data fetching on the client-side and awaiting of out-going response
  * page doesn't contain data
* SEO - public facing
  * login prompts would not find
  * crawlers will only see initially empty content if CSR
* Pre-rendered React Pages and React Components
* Automatic page pre-rendering: Great for SEO and initial load
  * sub-sequent navigation are handled by React to have faster interactive experience
* Blending client-side and server-side: Fetch data on the server and render finished pages

## Key Feature: Simplified Routing with File-based Routing
* Traditional React, there is no Router
* With React Router, it is the illusion of multi-page, but still is single-page
* NextJS defines page and routes with files and folders instead of code
 * use "pages" folder
 * structure of folders shows what routes are possible
* less code, les work, highly understandable

## Key Feature: Build Fullstack Apps
* standalone back-end code
* system or database
* Easily add backend (server-side) code to Next/React apps
* Storing data, getting data, authentication, etc. can be added to your React projects
* NextJS allows us to *determine WHEN a page should be pre-rendered*

### Choices for File-Based Routing
* Define "pages"
* put page names directly as sibilings
* "index.js" is the root
* for folders, the name becomes the path
* the 'default'/landing is also "index.js" in that sub-folder

### creating new NextJS projects

```bash 
npx create-next-app
```

### Key Feature Deep Dive

#### SEO and Page Pre-Rendering

Problem explained:
* if dynamic content is expected to be *fetch*'d AFTER loading, this content will not appear in SEO crawlers
* the user experience might also NOT be the one we want to offer

![Pre-Render](./PagePreRender.png)

```javascript
const HomePage = () => {


  // behaving if we DID reach out to a backend
  // in ReactJS (traditional)
  //   useEffect() to control/fetch after hitting page
  //     empty dependencies
  //   useState() to manage GUI state
  //   upon result, re-render result
  
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // AFTER component function is executed
  // this is executed twice
  // re-rendering the 2nd cycle
  useEffect(() => {
    // send a http request and fetch data
    // some Promise finished here
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []); // this is emulating "hydration" once React is loaded

  // we'd STILL have a problem with SEO
  // content from SEO crawler is pre the empty unordered list (1st render cycle)

  return (
      <MeetupList meetups={loadedMeetups}></MeetupList>
  );
};

export default HomePage;
```

* we can tell nextJS to fetch ahead of time and pre-render

#### Static Site Generation (SSG)
* typically should use this
* page component is pre-rendered when you build application
``` npm run build ```

Can see output as follows:

![NextJS Tree](./NextJS_SSG_preview.png)

### Implication
* access to the database must be avaliable DURING BUILD TIME

##### Problems
* some websites could load *out-dated* content
* pages are made in the BUILD process
* pre-generated page would not know
* can re-build and re-deploy when data changes
  * some sites like blogs, shouldn't be a problem
* in frequent websites
  * "revalidate" - incremental static generation
  * number of seconds until it re-generates page
  * re-generated on the server - if there are requests for page

#### Server-Side Rendering (SSR)
* use ```getServerSideProps```
* have access to context object
  * incoming request
  * returning response


#### Which to choose? 
* getServerSide - guaranteed to run for every request
  * must wait for page to be generated
  * don't have data that chagnes all the time - multiple times every second
  * if you don't need access to request (like auth)
  * use ```getStaticProps```
    * can potentially store that on a CDN
* getServerSide
  * if you need concrete access to request
  * changes multiple times every second

### Deploying Next.js Projects

use 
```javascript
import <Head> from "next/head"
```
in order for SEO + nice user experience


* could use envvars for server creds
* vercel by the same team who made NextJS - optimized for NextJS

#### Deployment Steps:
##### Using Vercel
* import Git Repository
* push to remote
* Vercel will build, start, and deploy
  * no build commands required
* can put in unique Environment Variables
* in MongoDB Cloud Atlas, allow access from anywhere

##### Build Steps - manual
```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

```bash
npm run build
```
* minify + optimize
* ".next" which contains optimized files
  * cache
  * server/pages (SSG html)
* npm start will start production server
 * this .next is the build deployment

#### NextJS Features
* Next's ```javascript
<Image>
``` component

* Can add Authentication, 
* Login/Logout
* Sessions with NextJS


