import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Auth0Provider
    domain="INSERT YOUR AUTH0 DOMAIN"
    clientId="INSERT YOUR APPLICATION CLIENT ID FROM AUTH0"
    useRefreshTokens={true}
    useRefreshTokensFallback={true}
    cacheLocation='localstorage'
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "INSERT YOUR API IDENTIFIER FROM AUTH0",
      scope: "openid profile email offline_access read:messages"
    }}
  >
    <App />
  </Auth0Provider>
);
