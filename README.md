# Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project showcases the frontend of a simple Single Page Application built using React and Typescript. It retrieves information from an external resource API. The authentication/authorization process is implemented using [Auth0's SDK for React SPAs](https://www.npmjs.com/package/@auth0/auth0-react).

You can use it together with a [sample API](https://github.com/lyuting47/auth0-express-sampleAPI).

# Setup

## Auth0 Dashboard Setup

Sign up for an account at Auth0 if you haven't done so.

## Local Setup

### Install dependencies

Navigate to the project directory and install dependencies using `npm install`.

### Fill in Auth0/API Parameters

Open the files `index.tsx`, `accessPublicAPI.tsx`, `accessPrivateScopedAPI.tsx`, `accessPrivateUncopedAPI.tsx`, and fill in the required fields with the relevant Auth0 and API parameters of your own.

# Trying the App

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
