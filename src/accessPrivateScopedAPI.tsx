import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import axios from "axios";

const AccessPrivateScopedApiButton = () => {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently, logout } = useAuth0();

  return (
    <button onClick={() => {
      if (isAuthenticated) {
        getAccessTokenSilently().then((token) => {
          var options = {
            method: 'GET',
            url: 'INSERT PRIVATE SCOPED ENDPOINT OF YOUR API',         // To fill
            headers: {Authorization: 'Bearer ' + token}
          };
          axios.request(options)
               .then((response) => console.log(response.data))
               .catch((err) => console.error(err));
        }).catch((err) => {
          logout({ logoutParams: { returnTo: window.location.origin } });
          loginWithRedirect({authorizationParams:{
            prompt:'login'
          }});
        })
      } else {
        loginWithRedirect({authorizationParams:{
            prompt:'login'
        }});
      }
    }}>
      Access Private Scoped API
    </button>
  );
};

export default AccessPrivateScopedApiButton;
