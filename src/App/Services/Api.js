// a library to wrap and simplify api calls
import apisauce from "apisauce";
import NetworkConstants from "../Config/NetworkConstants";
import qs from 'query-string'
// our "constructor"
const create = (baseURL = NetworkConstants.BASE_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // 10 second timeout...
    timeout: 10000,
  });

  const googleSignIn = (obj) => {
    return api.post(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.API +
      NetworkConstants.ACTION_GOOGLE +
      NetworkConstants.CONTROLLER_SIGNIN,
      obj
    );
  };

  const googleSignUp = (obj) => {
    return api.post(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.API +
      NetworkConstants.ACTION_GOOGLE +
      NetworkConstants.CONTROLLER_SIGNUP,
      obj
    );
  };

  const faceBookSignIn = (obj) => {
    return api.post(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.API +
      NetworkConstants.FACEBOOK_CONTROLLER +
      NetworkConstants.CONTROLLER_SIGNIN,
      obj
    );
  };

  const validateToken = () => {
    return api.get(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.API +
      NetworkConstants.TOKEN +
      NetworkConstants.VALIDATE,
      {},
      { data: {} }
    );
  };

  const faceBookSignUp = (obj) => {
    return api.post(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.API +
      NetworkConstants.FACEBOOK_CONTROLLER +
      NetworkConstants.CONTROLLER_SIGNUP,
      obj
    );
  };

  const logOutUser = () => {
    return api.get(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.API +
      NetworkConstants.USERS +
      NetworkConstants.SIGN_OUT,
      {},
      { data: {} }
    );
  };

  const refreshToken = (obj) => {
    removeUserHeader()
    api.deleteHeader("Accept")
    api.deleteHeader("Cache-Control")
    removeAuthToken();
    api.setHeader("Authorization", "Basic  " + NetworkConstants.BASICTK);
    return api.post(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.OAUTH +
      NetworkConstants.REFRESH_TOKEN,
      {
        grant_type: "refresh_token",
        refresh_token: obj
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
  }

  api.axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      console.log("conn", config);
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  api.axiosInstance.interceptors.response.use(response => {
    return response;
  }, error => {
    const originalRequest = error.config;
    if (!error.response) {
      return Promise.reject('Network Error')
    }
    else if ((error.response.status === 401) && !originalRequest._retry) {
      originalRequest._retry = true;
      return refreshToken(localStorage.getItem('refresh_token'))
        .then(data => {
          //store new token
          localStorage.setItem('user', JSON.stringify(data.data))
          localStorage.setItem('refresh_token', JSON.stringify(data.refresh_token))

          api.deleteHeader("Content-Type");
          api.setHeader("Content-Type", "application/json");
          api.setHeader("Accept", "application/json");
          api.setHeader("Cache-Control", "no-cache");
          removeAuthToken()
          setUserIdHeader(data.userId)
          setAuthToken(data.access_token);
          originalRequest.headers['Authorization'] = `Bearer ${data.access_token}`;
          return api.axiosInstance(originalRequest);
        })
        .catch((err) => {
          Promise.reject(err);
        })
    } else {
      Promise.reject(error);
    }
  });

  const getUserProfile = () => {
    return api.get(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.API +
      NetworkConstants.CONTROLLER_USER_PROFILE,
      {},
      { data: {} }
    );
  };

  const updateUserProfile = (data) => {
    return api.put(
      NetworkConstants.AUTH_SERVICE +
      NetworkConstants.API +
      NetworkConstants.CONTROLLER_USER_PROFILE,
      data
    );
  };

  const setUserIdHeader = (userId) => api.setHeader("X-User-id", userId);

  const removeUserHeader = () => api.deleteHeader("X-User-id");

  const setAuthToken = (userAuth) =>
    api.setHeader("Authorization", "Bearer " + userAuth);
  const removeAuthToken = () => api.deleteHeader("Authorization");
  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    googleSignIn,
    googleSignUp,
    setAuthToken,
    removeAuthToken,
    setUserIdHeader,
    logOutUser,
    removeUserHeader,
    getUserProfile,
    updateUserProfile,
    faceBookSignIn,
    faceBookSignUp,
    validateToken,
    // a list of the API functions from step 2
  };
};

// let's return back our create method as the default.
export default {
  create,
};
