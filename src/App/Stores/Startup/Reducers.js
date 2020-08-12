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
});

export const signInGoogleFailure = (state,{ error }) => ({
  ...state,
});

export const reducer = createReducer(INITIAL_STATE, {
  [STARTUP.LOAD_DATA]: loadData,
  [STARTUP.SET_USER_DATA]: setUserData,
  [STARTUP.SIGN_IN_GOOGLE]: signInGoogle,
  [STARTUP.SIGN_IN_GOOGLE_SUCCESS]: signInGoogleSuccess,
  [STARTUP.SIGN_IN_GOOGLE_FAILURE]: signInGoogleFailure,
  [STARTUP.SIGN_UP_GOOGLE]: signUpGoogle,
});
