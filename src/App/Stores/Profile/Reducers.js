import { INITIAL_STATE_PROFILE } from "./InitialState";
import { createReducer } from "reduxsauce";
import { PROFILE } from "./Actions";

/**
 *
 * User Profile Reducer
 */

export const userProfile = (state) => ({
  ...state,
});

export const userProfileSuccess = (state, { data }) => ({
  ...state,
  userData: data,
});

export const userProfilFailure = (state, { error }) => ({
  ...state,
  error,
});

export const reducer = createReducer(INITIAL_STATE_PROFILE, {
  [PROFILE.USER_PROFILE]: userProfile,
  [PROFILE.USER_PROFILE_SUCCESS]: userProfileSuccess,
  [PROFILE.USER_PROFILE_FAILURE]: userProfilFailure,
});
