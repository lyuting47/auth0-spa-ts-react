import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';
import AccessPrivateScopedApiButton from './accessPrivateScopedAPI';
import AccessPrivateUncopedApiButton from './accessPrivateUnscopedAPI';
import './App.css';
import AccessPublicApiButton from './accessPublicAPI';
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <h1> SPA 1 with Full Scope </h1>
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && <LogoutButton />}
        <AccessPublicApiButton />
        {isAuthenticated && <AccessPrivateUncopedApiButton />}
        {isAuthenticated && <AccessPrivateScopedApiButton />}
        {isAuthenticated && <Profile />}
      </header>
    </div>
  );
}

export default App;
