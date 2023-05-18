import React from "react";
import axios from "axios";

const AccessPublicApiButton = () => {
  return (
    <button onClick={() => {
      var options = {
            method: 'GET',
            url: 'INSERT PUBLIC ENDPOINT OF YOUR API'           // To fill
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
