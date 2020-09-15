import { takeLatest, all } from "redux-saga/effects";
import { STARTUP } from "../Stores/Startup/Actions";
import { PROFILE } from "../Stores/Profile/Actions";
import {
  startup,
  signInGoogle,
  signUpGoogle,
  logOutUser,
  signInSuccess,
  loadData,
  signUpFacebook,
  signInFacebook,
} from "./startupSaga";
import API from "../Services/Api";
import { userProfile, userProfileUpdate } from "./profileSaga";

const api = API.create();

export default function* root() {
  yield all([takeLatest(STARTUP.LOAD_DATA, startup, api)]);
  yield all([takeLatest(STARTUP.SIGN_IN_GOOGLE, signInGoogle, api)]);
  yield all([takeLatest(STARTUP.SIGN_UP_GOOGLE, signUpGoogle, api)]);
  yield all([takeLatest(STARTUP.SIGN_IN_GOOGLE_SUCCESS, signInSuccess, api)]);
  yield all([takeLatest(STARTUP.LOG_OUT, logOutUser, api)]);

  yield all([takeLatest(PROFILE.USER_PROFILE, userProfile, api)]);
  yield all([takeLatest(PROFILE.USER_PROFILE_UPDATE, userProfileUpdate, api)]);
  yield all([takeLatest(STARTUP.LOAD_DATA, loadData, api)]);
  yield all([takeLatest(STARTUP.SIGN_UP_FACEBOOK, signUpFacebook, api)]);
  yield all([takeLatest(STARTUP.SIGN_IN_FACEBOOK, signInFacebook, api)]);
}
