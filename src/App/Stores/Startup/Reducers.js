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


export const reducer = createReducer(INITIAL_STATE, {
  [STARTUP.LOAD_DATA]: loadData,
  [STARTUP.SET_USER_DATA]: setUserData,
});
