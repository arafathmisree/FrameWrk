import {takeLatest, all} from 'redux-saga/effects';
import {STARTUP} from '../Stores/Startup/Actions';
import {startup} from './startupSaga';
import API from '../Services/Api';

const api = API.create();

export default function* root() {
  yield all([takeLatest(STARTUP.LOAD_DATA, startup, api)]);
}
