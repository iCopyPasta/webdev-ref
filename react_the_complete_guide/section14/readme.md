# Sending HTTP Requests

From inside App to backend

## Module Content
* How do React Apps Interact with Databases?
* Sending HTTP Requests & Using Responses
* Handling Errors & Loading State

## How to (NOT) Connect to a Database

* Browser-side Apps Don't Directly Talk to Databases
  * hogs the single thread of JavaScript engine
  * exposes database credentials - viewable from developer tools

## HTTP Requests to a backend

* ```fetch``` is a built-in library for making browser side requests
* returns Promises
  * can use .then()/.catch() chains
  * can use async/await and try/catch for various tasks
* ```fetch```
  * default is GET
  * can perform POST and modifiy body
  ```javascript
   async function addMovieHandler(movie) {
    const response = await fetch('https://swapi.dev/api/films/', {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();
    console.log(data);
  }
  ```

  * may wish to convert dynamically from .json objects to props or javascript objects
  ```javascript
  const data = await response.json();

  const loadedMovies = [];

  for (const key in data) {
    loadedMovies.push({
      id: key,
      title: data[key].title,
      openingText: data[key].openingText,
      releaseDate: data[key].releaseDate,
    });
  }
  ```

# Useful Links

* [Hide JavaScript Code](https://academind.com/tutorials/hide-javascript-code)
* [RestAPIS vs GraphQL APIs](https://academind.com/tutorials/rest-vs-graphql)
