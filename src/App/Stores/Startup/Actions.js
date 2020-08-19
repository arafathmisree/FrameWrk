import {createActions} from 'reduxsauce';

//javascrip actions as object

const {Types, Creators} = createActions({
  loadData: null,
  setUserData : ['user'],
  setRole : ['role'],
  signInGoogle : ['token'],
  signInGoogleSuccess : ['data'],
  signInGoogleFailure : ['error'],
  signUpGoogle : ['token'],
  logOut : null,
  logOutSuccess :null,
  logOutFailure : ['error'],
  checkAuthenticated : null,
  loadDataSuccess: null
});

export const STARTUP = Types;
export default Creators;
