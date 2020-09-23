import { put, call, select, delay } from "redux-saga/effects";
import STARTUPACTIONS from "../Stores/Startup/Actions";
import { push } from "connected-react-router";
import {history } from '../Stores/CreateStore'


//Saga for business logic handling

export function* startup(api, action) {}

export function* signInGoogle(api, action) {
  try {
    const response = yield call(api.googleSignIn, action.token);
    console.log("acc", response);
    if (response.ok) {
      localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token))
      var resp = response.data.data;
      api.setAuthToken(resp.accessToken);
      api.setUserIdHeader(resp.userId);
      yield put(STARTUPACTIONS.signInGoogleSuccess(resp));
    } else {
      yield put(STARTUPACTIONS.signInGoogleFailure(response.error));
    }
  } catch (err) {
    yield put(STARTUPACTIONS.signInGoogleFailure(err));
  }
}

export function* signInFacebook(api, action) {
    try {
      const response = yield call(api.faceBookSignIn, action.token);
      console.log("acc", response);
      if (response.ok) {
        var resp = response.data.data;
        api.setAuthToken(resp.accessToken);
        api.setUserIdHeader(resp.userId);
        yield put(STARTUPACTIONS.signInGoogleSuccess(resp));
      } else {
        yield put(STARTUPACTIONS.signInFacebookFailure(response.error));
      }
    } catch (err) {
      yield put(STARTUPACTIONS.signInFacebookFailure(err));
    }
  }

export function* signUpGoogle(api, action) {
  try {
    const response = yield call(api.googleSignUp, action.token);

    console.log("acc", response);
    if (response.ok) {
      var resp = response.data.data;
      api.setAuthToken(resp.accessToken);
      yield put(STARTUPACTIONS.signInGoogle(action.token));
    } else {
      yield put(STARTUPACTIONS.signInGoogleFailure(response.error));
    }
  } catch (err) {
    yield put(STARTUPACTIONS.signInGoogleFailure(err.message));
  }
}

export function* signUpFacebook(api, action) {
    try {
      const response = yield call(api.faceBookSignUp, action.token);
  
      console.log("acc", response);
      if (response.ok) {
        yield put(STARTUPACTIONS.signInFacebook(action.token));
      } else {
        yield put(STARTUPACTIONS.signInFacebookFailure(response.error));
      }
    } catch (err) {
      yield put(STARTUPACTIONS.signInFacebookFailure(err.message));
    }
  }


export function* signInSuccess(api, action) {
  try {
    yield put(STARTUPACTIONS.setRole());
    let state = yield select();
    yield put(push(`${state.startup.role}/dashboard`));
    // HistoryWrapper.history.push('/user');
  } catch (err) {}
}

export function* logOutUser(api, action) {
  try {
    let state = yield select();
    console.log("sr", state);
    api.setUserIdHeader(state.startup.user.userId);
    const response = yield call(api.logOutUser, action.token);

    console.log("acc", response);
    if (response.ok) {
      var resp = response.data.data;
      api.removeUserHeader();
      api.removeAuthToken();
      localStorage.clear();
      yield put(STARTUPACTIONS.logOutSuccess(resp));
      yield put(push("/login"));
    } else {
      yield put(STARTUPACTIONS.logOutFailure(response.error));
      api.removeUserHeader();
    }
  } catch (err) {
    yield put(STARTUPACTIONS.logOutFailure(err.message));
    api.removeUserHeader();
  }
}

export function* loadData(api, action) {
  try {
    var user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        api.setAuthToken(user.accessToken);
        api.setUserIdHeader(user.userId);

      const response = yield call(api.validateToken);
      console.log('response',response)
      if (response.ok) {
       
        yield put(STARTUPACTIONS.loadDataSuccess(user));
      }else {
        yield put(STARTUPACTIONS.logOut());
      }
     
    }
  } catch (err) {
    console.log(err);
  }
}
