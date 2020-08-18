import {INITIAL_STATE} from './InitialState';
import {createReducer} from 'reduxsauce';
import {STARTUP} from './Actions';


/**
 *
 * Reducers
 */

export const loadData = (state) => ({
  ...state,
});


export const setUserData = (state,{ user }) => ({
    ...state,
    user
  });

export const signInGoogle = (state,{ token }) => ({
  ...state,

});

export const signUpGoogle = (state,{ token }) => ({
  ...state,
});

export const signInGoogleSuccess = (state,{ data }) => ({
  ...state,
  user : data 
});

export const signInGoogleFailure = (state,{ error }) => ({
  ...state,
});

export const setRole = (state,{ role }) => {
  localStorage.setItem('user', state.user)
  localStorage.setItem('role', role)
    return ({
      ...state,
      role
    })
  };

export const logOut = (state) => ({
  ...state,
});
export const logOutSuccess = (state) => ({
  ...state,
  ...INITIAL_STATE
});
export const logOutFailure = (state,{ error }) => ({
  ...state,
});

export const checkAuthenticated = (state) => ({
  ...state,
  isAuthenticated: !!localStorage.getItem('user'),
  role: localStorage.getItem('role'),
  user: !!localStorage.getItem('user') ? localStorage.getItem('user') : {}
});

export const reducer = createReducer(INITIAL_STATE, {
  [STARTUP.LOAD_DATA]: loadData,
  [STARTUP.SET_USER_DATA]: setUserData,
  [STARTUP.SET_ROLE]: setRole,
  [STARTUP.SIGN_IN_GOOGLE]: signInGoogle,
  [STARTUP.SIGN_IN_GOOGLE_SUCCESS]: signInGoogleSuccess,
  [STARTUP.SIGN_IN_GOOGLE_FAILURE]: signInGoogleFailure,
  [STARTUP.SIGN_UP_GOOGLE]: signUpGoogle,
  [STARTUP.LOG_OUT]: logOut,
  [STARTUP.LOG_OUT_SUCCESS]: logOutSuccess,
  [STARTUP.LOG_OUT_FAILURE]: logOutFailure,
  [STARTUP.CHECK_AUTHENTICATED]: checkAuthenticated
});
