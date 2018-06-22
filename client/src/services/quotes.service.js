import axios from "axios";

let baseUrl = "http://localhost:3001";
baseUrl += "/api";

export const getAll = () => {
  const url = baseUrl + "/quotes";
  const config = {
    method: "GET",
    withCredentials: true
  };

  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
};

const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = error => {
  console.log(error);
  return Promise.reject(error);
};
