import axios from "axios";
import { toast } from "react-toastify";


export const baseUrl = "https://www.thesportsdb.com/api/v1/json/3/";
const customFetch = axios.create({
  baseURL: baseUrl,
});

customFetch.interceptors.request.use(
  (request) => {
    request.headers["Content-Type"] = "application/json";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error.message.includes("Network Error")) {
      toast.error(
        "The server is currently unavailable. Please check your connection or try refreshing the page."
      );
    }

    const { status } = error?.response;

    if (status == 400 || status === 403 || status == 404 || status === 409) {
      toast.error(error.response.data.message);
    }

    if (status === 401) {
      toast.error(error.response.data.message);
    }

    if (status == 500) {
      toast.error("An internal server error occured, try again later");
    }
    return Promise.reject(error);
  }
);

export default customFetch;
