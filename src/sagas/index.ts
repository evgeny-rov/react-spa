import { put, takeEvery, all, call, delay } from 'redux-saga/effects';
import { fetchPosts, getUser } from '../api';
import { userActions, postsActions } from '../redux';

function* userLogin(action: any) {
  const user = yield call(getUser, action.payload);
  console.log(user)
  yield delay(1000);

  if (user) {
    yield put({ type: userActions.succesfulLogin, payload: user });
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
