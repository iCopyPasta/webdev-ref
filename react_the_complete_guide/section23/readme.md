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