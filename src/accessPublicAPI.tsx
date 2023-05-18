import React from "react";
import axios from "axios";

const AccessPublicApiButton = () => {
  return (
    <button onClick={() => {
      var options = {
            method: 'GET',
            url: 'http://localhost:3001/api/public'
          };
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }}>
      Access Public API
    </button>
  );
};

export default AccessPublicApiButton;