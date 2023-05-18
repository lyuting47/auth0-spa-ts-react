import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import axios from "axios";

const AccessPrivateUncopedApiButton = () => {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();

  return (
    <button onClick={() => {
      if (isAuthenticated) {
        getAccessTokenSilently().then((token) => {
          var options = {
            method: 'GET',
            url: 'INSERT PRIVATE UNSCOPED ENDPOINT OF YOUR API',
            headers: {Authorization: 'Bearer ' + token}
          };
          axios.request(options)
               .then((response) => console.log(response.data))
               .catch((err) => console.error(err));
        }).catch((err) => {
          logout({ logoutParams: { returnTo: window.location.origin } });
          loginWithRedirect();
        })
      } else {
        return loginWithRedirect();
      }
    }}>
      Access Private Unscoped API
    </button>
  );
};

export default AccessPrivateUncopedApiButton;
