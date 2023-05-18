# Overview

This project showcases the frontend of a simple Single Page Application built using React and Typescript. It retrieves information from an external resource API. The authentication/authorization process is implemented using [Auth0's SDK for React SPAs](https://www.npmjs.com/package/@auth0/auth0-react).

You can use it together with a [sample API](https://github.com/lyuting47/auth0-express-sampleAPI).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Setup

## Auth0 Dashboard Setup

1.  Sign up for an account at [Auth0](https://auth0.com/signup?place=header&type=button&text=sign%20up) if you haven't done so.
2.  Under **Applications**, create a new application and select the type "Single Page Web Applications".
3.  Under the **Settings** tab of the application you just created, take note of the `Domain` and `Client ID` values.
4.  Under **Settings > Application URIs**, add `http://localhost:3000` to **Allowed Callback URLs**, **Allowed Logout URLs** and **Allowed Web Origins**.
5.  We will be using **Refresh Tokens** as well as **Refresh Token Rotation** as recommended by Auth0 for SPAs, so make sure to enable them in **Settings**.
6.  Register the API the application will be accessing by following the steps [here](https://github.com/facebook/create-react-app).
(Steps below are optional)

7a. For testing purposes, you may want to set a short lifetime for your refresh tokens (e.g. 90 seconds). Then, exit your application settings and navigate to **Tenant Settings > Advanced > Login Session Management**.
7b. Set **Session Cookie Mode** to **Non-Persistent Session** and set **Require login after** to the shortest possible time of 1 minute. This forces our app to rely on the refresh token to renew a session after 1 minute instead of Auth0's session cookies.

## Local Setup

### Install dependencies

Navigate to the project directory and install dependencies using `npm install`.

### Fill in Auth0/API Parameters

Open the files `index.tsx`, `accessPublicAPI.tsx`, `accessPrivateScopedAPI.tsx`, `accessPrivateUncopedAPI.tsx`, and fill in the required fields with the relevant Auth0 and API parameters from the Dashboard Setup step.

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
