import {put, call, select, delay} from 'redux-saga/effects';
import STARTUPACTIONS from '../Stores/Startup/Actions';

//Saga for business logic handling

export function* startup(api, action) {


}

export function* signInGoogle(api, action) {
    const response = yield call(api.googleSignIn,action.token);

    console.log(response)
  
    try {
      if (response.ok) {
     
        yield put(STARTUPACTIONS.signInGoogleSuccess(''));
      } else {
        yield put(STARTUPACTIONS.signInGoogleFailure(response.error));
      }
    } catch (err) {
      yield put(STARTUPACTIONS.signInGoogleFailure(err.message));
    }
  }
  
 