# Overview

This project is a simple react-redux project I refer back to when setting up a react and redux frontend. Note that this does not work for react native, or PWA's.

## Project Setup

1. Run `npx create-react-app <project name>` to create project. Note that if you are already in the project directory you wish to create the project,
   you can run `npx create-react-app .`

2. Cleanup project by following these steps:

- In the `public` folder, delete every file except `index.html`.
- In `index.html` remove all comments, and delete unnecessary meta tags. Note you can also change the project title while you are here.
- In the `src` folder, delete every file except `App.js` and `index.js`.
- In both `App.js` and `index.js`, remove all imports and references to any files you have deleted.
- In `App.js`, delete all the JSX between the `className=App` div tags. Note to leave the div tags present as a parent element in the component.

3. Install node packages:

- `npm install redux`
- `npm install react-redux`
