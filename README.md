#Crypto Client

## How to run the project?
1. Prerequisites: node.js & npm.
2. Run `npm install` to install all dependencies (tested with npm v8.18.0)
3. Run `npm run dev` to start the server (tested with node.js v18.8.0)

## Libraries Used

Here are the libraries used in this project:

- React: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for the browser and Node.js.
- ESLint: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- Prettier: An opinionated code formatter that enforces a consistent code style.
- UUID: A library for generating unique identifiers.
- Vite: A fast build tool for modern web applications.

These libraries were chosen for their reliability, popularity, and compatibility with the project requirements.


## Future Improvements

Here are some potential future improvements for this project:

- Add testing.
- Enhance error handling and logging.
- Implement caching to improve performance.
- Enhance error handling and logging.
- Add React Query for efficient data fetching and caching.


## Handling Null Rates

To improve the handling of handle null rates in the project, we can follow these steps:

1. : Save the rates on a caching system together with a timestamp.
2. :Step 2: If the rate returns null search for it on cache.
3. :Step 3: Use the rate found on cache for all computations but display that it is not current adding a last updated and the timestamp.

By implementing these steps, we can ensure that the project gracefully handles null rates and provides a better user experience.

## State Management

Since the app is simple, there is currently no need for state management. However, we should plan to start handling  by adding the React Context API in the near future.

## Routing

Currently, there is no routing implemented in the project. However, it is recommended to add routing in the future to enable navigation between different pages or views. This can be achieved using libraries like React Router or Next.js.







