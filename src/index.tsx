import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Auth0Provider
    domain="INSERT YOUR AUTH0 DOMAIN"                             // To fill
    clientId="INSERT YOUR APPLICATION CLIENT ID FROM AUTH0"       // To fill
    useRefreshTokens={true}
    useRefreshTokensFallback={true}
    cacheLocation='localstorage'
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "INSERT YOUR API IDENTIFIER FROM AUTH0",          // To fill
      scope: "openid profile email offline_access read:messages"  // You may modify this to set the scope the logged in user will have
    }}
  >
    <App />
  </Auth0Provider>
);
