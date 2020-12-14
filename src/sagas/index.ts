import { put, takeEvery, all, call, delay } from 'redux-saga/effects';
import { fetchPosts, checkCredentials } from '../api';
import { userActions, postsActions } from '../redux';

function* userLogin(action: any) {
  const isLoginValid = checkCredentials(action.payload);
  yield delay(1000);

  if (isLoginValid) {
    yield put({ type: userActions.succesfulLogin });
  } else {
    yield put({ type: userActions.failedLogin });
  }
}

function* watchUserLogin() {
  yield takeEvery(userActions.initLogin, userLogin);
}

function* getAllPosts() {
  const posts = yield call(fetchPosts);
  yield put({ type: postsActions.successfulFetch, payload: posts });
}

function* watchGetAllPosts() {
  yield takeEvery(postsActions.startFetching, getAllPosts);
}

export default function* rootSaga() {
  yield all([watchUserLogin(), watchGetAllPosts()]);
}
