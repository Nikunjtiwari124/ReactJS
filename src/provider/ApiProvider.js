import axios from "axios";
import helper from "./helper";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const tokenValue = helper.SecureStorageFunc("userToken", "get", "");

export const HTTP_SERVICE_CALL = async (url, type, token, body, params) => {

  return new Promise(async function (resolve, reject) {

      const auth = `Bearer ${token}`;
      return axios({
        method: type,
        url: url,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": auth
        },
        data: body,
        params: params
      })
      .then(response => {
        if (response.status === 200) {
          return resolve(response);
        } else if (response.status === 201) {
          return resolve(response);
        }
        throw Error(response);
      })
      .catch(err => {
        if (err && err.response && err.response.status === 401) {
          helper.SecureStorageFunc(null, "clear", null);
          window.location.assign("/login")
        }
        return reject(err?.response);
      });
  });

};


export const HANDLE_SUCCESS = successRes => {
    if (successRes) {
      toast.success(successRes, {
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
      });
    }
};


export const HANDLE_ERROR = errorRes => {
    toast.error(errorRes ? errorRes: "Something went wrong", {
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
};


