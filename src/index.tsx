import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Auth0Provider
    domain="https://luting47.us.auth0.com"
    clientId="9vKtIejAyzydrIKXsj9ScSUJXCm3tJ30"
    useRefreshTokens={true}
    useRefreshTokensFallback={true}
    cacheLocation='localstorage'
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://backend1.com",
      scope: "openid profile email offline_access read:messages"
    }}
  >
    <App />
  </Auth0Provider>
);
