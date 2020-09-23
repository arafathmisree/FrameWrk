import {createActions} from 'reduxsauce';

//javascrip actions as object

const {Types, Creators} = createActions({
  loadData: null,
  setUserData : ['user'],
  setRole : null,
  signInGoogle : ['token'],
  signInGoogleSuccess : ['data'],
  signInGoogleFailure : ['error'],
  signUpGoogle : ['token'],
  logOut : null,
  logOutSuccess :null,
  logOutFailure : ['error'],
  checkAuthenticated : null,
  loadDataSuccess: null,
  signInFacebook : ['token'],
  signInFacebookSuccess : ['data'],
  signInFacebookFailure : ['error'],
  signUpFacebook: ['token'],
  loadDataFailure: null,
  setNotificationCount: null,
  clearNotifications : null,
  retryRequest: ['data']
});

export const STARTUP = Types;
export default Creators;
