import { put, takeEvery, all, call } from 'redux-saga/effects';
import actionTypes from "../actions/types";
import {landingPageDataStart,landingPageDataSuccess,landingPageDataError} from "../actions/index";


function* helloSaga() {
  console.log('Hello Sagas!')
}

function* watchLandingPageData() {
  yield takeEvery(actionTypes.LANDING_PAGE_DATA_START, fetchLandingPageDataAsync);
}

function* fetchLandingPageDataAsync() {
  try {
    const data = yield call(() => {
      return fetch('http://192.168.101.110/wordpress-uvation/all-apis/?method=home_page')
              .then(res => res.json())
      }
    );
    // console.log(data,"data");
    yield put(landingPageDataSuccess(data));
  } catch (error) {
    yield put(landingPageDataError());
  }
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchLandingPageData()
  ])
}